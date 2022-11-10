# Twitter Portal

During my job hunt, I decided to take a break from social media. However, I still wanted to be able to share updates with my network on Twitter. This web application allows me to post tweets to my account without the distraction of scrolling on Twitter.

# Features

- Clean UI styled with Bootstrap and CSS
- Post tweets to my personal Twitter account
- Alert upon successful sharing of a tweet
- Error handling when tweet sharing was unsuccessful

## Installation

Fork and clone this repository, cd into the repo, then install dependencies with "npm i".

```bash
  cd twitter-portal
  npm i

```

You will need to sign up for a Twitter Developer Account on https://developer.twitter.com/en
and follow instructions to generate your own Consumer Key, Consumer Secret, Access Token Key, and Access Token Secret.

I recommend saving them in a document somewhere on your computer. Once you generate them, create a new file in the root of the repository called ".env" and copy and paste your keys in the following format:

```bash
API_KEY=(your API key here)
API_SECRET=(your api secret here)
ACCESS_TOKEN=(your access token here)
ACCESS_TOKEN_SECRET=(your access token secret here)

```

After adding your environment variables, go to the terminal and type

```bash
  node server.js

```

And that's it! The twitter portal will now be linked to whatever Twitter account you used to sign for Twitter Developer with and will run locally on your computer.

## Demo

https://www.youtube.com/shorts/Sip7RbVUMAU

## Authors

- [@hanswatkins](https://www.github.com/hanswatkins)
