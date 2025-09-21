from flask import Blueprint, request, jsonify
from models import Admin, db
from flask_jwt_extended import create_access_token
import os

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({"msg": "username and password required"}), 400

    admin = Admin.query.filter_by(username=username).first()
    if not admin or not admin.check_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity={"id": admin.id, "username": admin.username})
    return jsonify(access_token=access_token)
