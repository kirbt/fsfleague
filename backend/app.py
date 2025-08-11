from flask import Flask, jsonify, request
from werkzeug.exceptions import HTTPException
from routes.auth_routes import auth_bp

# Load Environment Variables
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

# Health check route
@app.route('/')
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok"}), 200

# Module Routes
app.register_blueprint(auth_bp) # user authentication


# Global error handler
@app.errorhandler(Exception)
def handle_exception(e):
    if isinstance(e, HTTPException):
        return jsonify(error=e.description), e.code
    return jsonify(error=str(e)), 500

# Entry point
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
