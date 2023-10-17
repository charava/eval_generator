import requests


# how to run the LLM API: 
# make sure to install Flask
# run app.py
# then run api_tester.py in a seperate terminal



url = 'http://127.0.0.1:5000/post'
params = {
    'prompt': 'please rephrase the following: it was an absolute pleasure teaching you. I was proud of you and your classmates for creating a close-knit, open, and safe environment to explore sleep science, drug education, sex education, and various perspectives of the Nueva experience.'
}

print('\n'*20)
r = requests.get(url=url, params=params)
print(r.content)