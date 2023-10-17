from flask import Flask


# this file is not used ... it is simply a test to test the server

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()