import llama_cpp
import sys

PATH = 'model'  # folder path

# MAKE SURE TO HAVE Replicate and dotenv installed

class EvalWriter:
    def __init__(self, model_name):
        self.MODEL_PATH = f'{PATH}/{model_name}'

    def prompt(self, prompt):
        pass