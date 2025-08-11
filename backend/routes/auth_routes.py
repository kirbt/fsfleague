from flask import Blueprint, request, jsonify
from modules.auth_service import signup_user, login_user
import jwt
import os

auth_bp = Blueprint('auth', __name__)
SUPABASE_JWT_SECRET = os.getenv('SUPABASE_JWT_SECRET')

def verify_token(token):
    try:
        return jwt.decode(token, SUPABASE_JWT_SECRET, algorithms=["HS256"])
    except jwt.InvalidTokenError:
        return None

@auth_bp.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    result = signup_user(email, password)
    if "error" in result:
        return jsonify(result), 400

    return jsonify(result), 200

@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    result = login_user(email, password)
    if "error" in result:
        return jsonify(result), 401

    return jsonify(result), 200
