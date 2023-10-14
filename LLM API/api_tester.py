import requests

url = 'http://127.0.0.1:5000/post'
params = {
    'prompt': 'hi my name is aryan'
}

print('\n'*20)
r = requests.get(url=url, params=params)
print(r.content)