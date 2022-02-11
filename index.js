const { request } = require("@octokit/request");

const fetchMembers = async () => {
  const trybeMembers = [];
  
  for(let index = 1; index < 120; index += 1) {
  
    const response = await request("GET /orgs/{org}/members", {
      headers: {
        authorization: "token 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",
      },
      org: "Tryber",
      type: "private",
      role: "member",
      per_page: 30,
      page: index,
    });
  
    const {data} = response;

    if (data.length > 0) {
      data.forEach((member) => trybeMembers.push(member));
    }
  }
  return trybeMembers;
}

fetchMembers().then(console.log);
