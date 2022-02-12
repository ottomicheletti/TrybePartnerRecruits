const { request } = require("@octokit/request");


const fetchMembers = async (page = 1) => {
  
  const response = await request("GET /orgs/{org}/members", {
    headers: {
      authorization: "token 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",
    },
    org: "Tryber",
    type: "private",
    role: "member",
    per_page: 30,
    page: page,
  });

  return response.data;
}


fetchMembers().then(console.log);
