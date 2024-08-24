import flask

app = flask.Flask(__name__)


@app.route("/")
def index():
    return "Hello, World!"


app.run(host="localhost", port=6969, debug=True)
