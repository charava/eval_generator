import replicate
from dotenv import load_dotenv
import os


class EvalWriter:
    def __init__(self):
        load_dotenv()
        self.REPLICATE_API_TOKEN = os.getenv('REPLICATE_API_TOKEN')
        self.client = replicate.Client(api_token=self.REPLICATE_API_TOKEN)
    
    def prompt(self, prompt):
        output = self.client.run(
            "meta/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
            input={'prompt': prompt}
        )
        result = [item for item in output]

        print(prompt, '\n\n')
        return ''.join(result)
