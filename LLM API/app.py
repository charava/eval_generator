from flask import Flask, request, jsonify
from evalwriter import EvalWriter

eval_writer = EvalWriter()

app = Flask(__name__)

@app.route('/post', methods=["GET"])
def testpost():
    prompt = request.args.get('prompt')
    response = eval_writer.prompt(prompt)
    return response