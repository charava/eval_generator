from llama_cpp import Llama
import sys

class EvalWriter:
    def __init__(self, path):
        self.PATH = path
        self.llama = Llama(model_path=self.path)

    def prompt(self, prompt, args):
        return self.llama(prompt, **args)
    
