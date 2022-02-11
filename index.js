const { request } = require("@octokit/request");


const fetchMembers = async () => {
  const trybeMembers = [];
  let pageCounter = 1;
  const response = await request("GET /orgs/{org}/members", {
    headers: {
      authorization: "token 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",
    },
    org: "Tryber",
    type: "private",
    role: "member",
    per_page: 30,
    page: pageCounter,
  });

  const {data} = response;

  while (data.length > 0) {
    data.forEach((member) => trybeMembers.push(member));
    pageCounter += 1;
  }

  return trybeMembers;
}


fetchMembers().then(console.log);
