const fetchTeamMembers = async (slug, index) => {
  const response = await axiosInstance.get(`/orgs/Tryber/teams/${slug}/members?role=member&page=${index}`);
  const { data } = response;
  return data.map((member) => [member.avatar_url, member.login]);
};
