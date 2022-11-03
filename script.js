import { Client } from "twitter-api-sdk";

async function main() {
  const client = new Client(process.env.BEARER_TOKEN);

  const response = await client.tweets.findTweetsById();
  
  console.log("response", JSON.stringify(response, null, 2));
}
  
main();