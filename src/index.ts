require("dotenv").config();
const axios = require("axios");

async function getGitHubAPI() {
  const githubResponse = await axios.get(
    "https://api.github.com/users/zfchung"
  );

  console.log(githubResponse);
}

getGitHubAPI();
