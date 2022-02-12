const { paginate } = require("@octokit/rest");

const fetchOrgMembers = async () => {
  
  const response = await paginate("GET /orgs/{org}/members", {
    headers: {
      authorization: "token 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",
    },
    org: "Tryber",
    type: "private",
    role: "member",
  });
  return response.data;
}

fetchOrgMembers().then(console.log);