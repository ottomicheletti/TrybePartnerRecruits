const {
  request
} = require("@octokit/request");

const fetchOrgTeams = async () => {
  const response = await request("GET /orgs/{org}/teams", {
    headers: {
      authorization: "token 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",
    },
    org: "Tryber",
    per_page: 100,
  });
  const {
    data
  } = response;
  const regex = /students-sd-/g;
  const teams = data.map((team) => [team.slug, team.name.replace(regex, 'Turma ')]).filter((team) => team[0].match(regex));
  return teams;
}

module.exports = {
  fetchOrgTeams,
};

fetchOrgTeams().then(console.log);