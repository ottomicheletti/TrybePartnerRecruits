const { request } = require("@octokit/request");

const fetchTeamMembers = async (slug, index = 1) => {
  const response = await request(`GET /orgs/Tryber/teams/${slug}/members`, {
    headers: {
      authorization: "token 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",
    },
    // team_slug: slug,
    role: "member",
    page: index,
  });

  // Destructuring da response para receber apenas o objeto data. 
  const { data } = response;
  return data.map((member) => [ member.avatar_url, member.login ]);
};

module.exports = { fetchTeamMembers };

// fetchTeamMembers('students-sd-019-c',2).then(console.log);
