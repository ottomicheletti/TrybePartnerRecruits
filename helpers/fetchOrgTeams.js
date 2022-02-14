const fetchOrgTeams = async () => {
  const response = await axiosInstance.get('/orgs/Tryber/teams');
  const { data } = response;
  const regex = /students-sd-/g;
  const teams = data.map((team) => [team.slug, team.name.replace(regex, 'Turma ')]).filter((team) => team[0].match(regex));
  return teams;
}
