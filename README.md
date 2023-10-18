# EvalGen
### A seamless "fill-in-the-blank" interface to make writing student evals faster. 


Built by Charlotte, Aryan, Diego - Software Engineering Class @ Nueva 2023 - for Sean's SOM Class evals. 

## Table of Contents

- [Installation](#description)
- [Description](#description)
- [Paraphrasing AI](#paraphrasing-AI)
- [Usage](#usage)
- [Note for Developers](#for-all-you-developers-out-there...)
- [Contact](#contact)
- [Ideas for Future Exploration](#ideas-for-future-exploration)
- [License](#license)

## Installation

1) [Install Node](https://nodejs.org/en/download)

```bash
git clone https://github.com/charava/eval_generator.git
```

## Description

Writing evals can be a major time-suck. We wanted to create a super simple interface for writing evals...that actually minimizes the time one will have to spend _writing_. After interviewing Sean, it was apparent that he had a very particular way he liked to write his evals and already had specific content he tended to recycle. Rather than have him manually copy-and-paste to reuse parts of other evals when crafting evals, we want him to be able to just _fill in the blank_. 

There are four Eval templates that Sean can toggle between: Fall 9th, Spring 9th, Fall 11th, and Spring 11th. Each Eval is specific to that grade and time of year, and has unique "fill-in-the-blank" inputs. After writing his eval, he can simply click "Copy to Clipboard" to retrieve his crafted eval. 

## Paraphrasing AI 

(Currently in development)
Along with a simpler interface for evals, we also wanted to create a tool for paraphrasing the eval in order to make each eval unique. On the website, the button on the bottom of the template runs the eval through LLama LLM to produce a paraphrased, unique eval. 

We used Replicate API [https://replicate.com/] to connect the Llama LLM to our program. The LLM API folder connects Python to our website using Flask and generates the new eval using our prompt to Llama in LLM API/api_tester.py.

## Usage 

Go check out the prototype: [https://www.eval-gen.vercel.app/](https://eval-gen.vercel.app/)


## For all you developers out there...
Poke your head into the code. We've left quite a few comments throughout to explain what the code is doing and what you should have installed to ensure the code runs. [Contact](#contact) us if you have questions and be sure to look through [Ideas for Future Exploration](#ideas-for-future-exploration).

This React app was created using Create React App.

## Contact

charosa@nuevaschool.org
arymehr@nuevaschool.org
dieagus@nuevaschool.org

## Ideas for Future Exploration

- Connect a database so that Sean can save his Evals
- Rather than input direct sentences, input bullet points
- Use generative AI to pass each eval through for paraphrasing
- Add a note-taking UI as well that syncs to a databse


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

