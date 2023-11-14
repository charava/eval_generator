### Setting up a Llama model (I started this but never finished)

#### llama-cpp-python

Follow the directions here: `https://abetlen.github.io/llama-cpp-python/macos_install/`

make sure to set up miniforge for speed!!!

#### Llama model

To get a model, go to
`https://huggingface.co/TheBloke/Llama-2-{MODEL_NAME}-GGUF`
(e.g.: `https://huggingface.co/TheBloke/Llama-2-13B-Chat-GGUF`)

and download a model. Create a "models" folder in the outermost directory and put your downloaded model there. Go into evalwriter_test.py and enter your gguf file name. Run evalwriter.py; if it works, you are good, and you can follow `https://abetlen.github.io/llama-cpp-python/` to get started. 

(It should work if you free up enough ram (e.g. closing all windows); I used llama 7b chat and it did function, albeit really slow but that was because I didn't install the Metal GPU optimised llama-cpp-python.)

### Download eval to text file
See `Test_Page.js` for implementation

#### 
