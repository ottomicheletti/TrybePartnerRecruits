const { request } = require("@octokit/request");

const fetchTeams = async () => {
  const response = await request("GET /orgs/{org}/teams", {
    headers: {
      authorization: "token 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",
    },
    org: "Tryber",
    per_page: 100,
    });
  const {data} = response;
  const teams = data.map((team) => [team.slug, team.name]);
  return teams;
}

module.exports = { fetchTeams };

// fetchTeams().then(console.log);
