from flask import send_file
import flask
import getpass
from flask_cors import CORS
from PIL import ImageGrab
import io
from scripts import get_windows


app = flask.Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return "Hello, World!"


@app.route("/user")
def user():
    username = getpass.getuser()
    return username


def capture_screenshot():
    screenshot = ImageGrab.grab()
    return screenshot


@app.route("/screenshot")
def screenshot():
    screenshot = capture_screenshot()
    img_io = io.BytesIO()
    screenshot.save(img_io, "PNG")
    img_io.seek(0)
    return send_file(img_io, mimetype="image/png")


@app.route("/getwindows")
def getwindows():
    x = get_windows()
    print(x)
    return x


app.run(host="localhost", port=6969, debug=True)
