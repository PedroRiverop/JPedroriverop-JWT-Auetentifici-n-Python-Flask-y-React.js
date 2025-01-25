"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, get_jwt

api = Blueprint('api', __name__)


app = Flask(__name__)
bcrypt = Bcrypt(app)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/signup", methods=["POST"])
def user_signup():
    data = request.get_json()

    if not data.get("email") or not data.get("password"):
        return jsonify({"msg": "Email y contraseña son requeridos"}), 400

    user_exists = User.query.filter_by(email=data["email"]).first()
    if user_exists:
        return jsonify({"msg": "El usuario ya existe"}), 400

    hashed_password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    new_user = User(email=data["email"], password=hashed_password, is_active=True)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "Usuario registrado con éxito"}), 201

@api.route("/login", methods=["POST"])
def user_login():
    data = request.get_json()

    if not data.get("email") or not data.get("password"):
        return jsonify({"msg": "Email y contraseña son requeridos"}), 400

    user = User.query.filter_by(email=data["email"]).first()
    if not user or not bcrypt.check_password_hash(user.password, data["password"]):
        return jsonify({"msg": "Credenciales inválidas"}), 401

    token = create_access_token(identity=user.id)
    return jsonify({"token": token}), 200

@api.route("/private", methods=["GET"])
@jwt_required()
def private_route():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    return jsonify({"msg": f"Bienvenido, {user.email}"}), 200

@api.route("/logout", methods=["POST"])
@jwt_required()
def user_logout():
    token = get_jwt()
    blocked_token = TokenBlockedList(jti=token["jti"])

    db.session.add(blocked_token)
    db.session.commit()

    return jsonify({"msg": "Sesión cerrada con éxito"}), 200