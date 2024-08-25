import flask
import getpass
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return "Hello, World!"


@app.route("/user")
def user():
    username = getpass.getuser()
    return username


app.run(host="localhost", port=6969, debug=True)
