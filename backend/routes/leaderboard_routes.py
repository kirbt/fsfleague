from flask import Blueprint, request, jsonify
import jwt
import os

auth_bp = Blueprint('auth', __name__)