from flask import send_file
import flask
import getpass
from flask_cors import CORS
from PIL import ImageGrab
import io
from scripts.getwindows import get_window_list
from scripts.restorewin import restore_windows_to_original_state
from scripts.dumpconfig import dump_config, read_config
import glob
import base64


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

@app.route("/screenshot/<name>")
def screenshot_name(name):
    with open(name+".png", "rb") as image_file:
     base64_image = base64.b64encode(image_file.read()).decode("utf-8")
    
    return base64_image


@app.route("/getwindows")
def getwindows():
    x = get_window_list()
    print(x)
    return x


@app.route("/getlayouts")
def get_layouts():
    file_names = glob.glob("*.sex")
    return file_names


@app.route("/dumplayout/<name>/<lastActive>/<toKill>")
def dumpscreen(name, lastActive, toKill):
    screenshot = capture_screenshot()
    img_io = io.BytesIO()
    screenshot.save(f"{name}.png", "PNG")
    data = get_window_list(True if toKill > 0 else False)
    dump_config(data, name, lastActive)
    return "Dumped"


@app.route("/restore/<name>")
def restorewindows(name):
    data = read_config(name)
    print(data["details"])
    restore_windows_to_original_state(data["details"])
    return "Restored"


app.run(host="localhost", port=6969, debug=True)
