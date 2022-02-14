const fetchMembers = async () => {
  const trybeMembers = [];
  // Loop para percorrer todas as páginas de membros da organização Trybers que tenham member como role.
  for (let index = 1; index < 120; index += 1) {
    const response = await request("GET /orgs/{org}/members", {
      headers: {
        authorization: "token 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",
      },
      org: "Tryber",
      type: "private",
      role: "member",
      per_page: 100,
      page: index,
    });
    // Destructuring da response para receber apenas o objeto data. 
    const {
      data
    } = response;
    // Para cada iteração do loop, verifica se data possui alguma informação. Se verdadeiro, empurra os membros para a array trybeMembers.
    if (data.length > 0) {
      data.forEach((member) => {
        trybeMembers.push({
          identifier: member.id,
          user: member.login,
          avatar: member.avatar_url,
          profile: member.html_url
        });
      });
    }
  }
  return trybeMembers;
};

// fetchMembers().then(console.log);
