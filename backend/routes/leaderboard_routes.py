from flask import Blueprint, request, jsonify
from modules.leaderboard_service import get_position_leaderboard, get_category_leaderboard
import jwt
import os

auth_bp = Blueprint('auth', __name__)

from werkzeug.exceptions import BadRequest, InternalServerError

@auth_bp.route('/api/leaderboards/position', methods=['GET'])
def get_leaderboard():
    # Extract query parameters
    category = request.args.get('category')
    position = request.args.get('position')
    season = request.args.get('season')
    league = request.args.get('league')

    # validate required parameters
    if not season or not league:
        return jsonify({'error': 'Missing required parameters: season and league are required.'}), 400

    # validate parameters arent conflicting
    if category and position:
        return jsonify({'error': 'Conflicting parameters: provide either category or position, not both.'}), 400

    try:
        result = None

        if category:
            result = get_category_leaderboard(category, season, league)
        elif position:
            result = get_position_leaderboard(position, season, league)
        else:
            return jsonify({'error': 'Missing parameter: either category or position must be provided.'}), 400

        return jsonify({'data': result}), 200

    except Exception as e:
        # Log the error if needed
        print(f"Error occurred: {e}")
        return jsonify({'error': 'Internal server error'}), 500
