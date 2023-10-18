import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "meta/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
  {
    input: {
      prompt:
        "Write a poem about open source machine learning in the style of Mary Oliver.",
    },
  }
);


export default output;