import evalwriter
from llama_cpp import Llama

model_name = 'llama-2-7b-chat.Q4_K_S.gguf'

prompt = '''
- actively participated in class and was invested in the topic
- helped create a close-knit, open, and safe environment to explore sleep science, drug education, sex education, and various perspectives of the Nueva experience.
- occasionally fell asleep in class
- often arrived late

Please turn the following bullet points into a evaluation directed at the student: 
'''

llama = Llama(model_path=f"models/{model_name}")
output = llama(prompt)
print(output)