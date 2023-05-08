import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data for testing purposes
users = [
    {"id": 1, "name": "Alice", "age": 25, "music": "Metallica", "movie": "The Matrix", "team": "Golden State Warriors"},
    {"id": 2, "name": "Bob", "age": 30, "music": "Pink Floyd", "movie": "Inception", "team": "Los Angeles Lakers"},
    # Add more users as needed
]

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('static', path)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    new_user = {
        "id": len(users) + 1,
        "name": data["name"],
        "age": data["age"],
        "music": data["music"],
        "movie": data["movie"],
        "team": data["team"]
    }
    users.append(new_user)
    return jsonify({"success": True}), 201

@app.route('/api/match', methods=['POST'])
def match():
    data = request.get_json()
    matches = [user for user in users if user["music"] == data["music"] and user["movie"] == data["movie"] and user["team"] == data["team"]]
    return jsonify(matches)

if __name__ == "__main__":
    app.run(debug=True)

