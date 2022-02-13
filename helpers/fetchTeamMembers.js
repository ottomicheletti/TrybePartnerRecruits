const fetchTeamMembers = async (slug, index = 1) => {
  const response = await axiosInstance.get(`/orgs/Tryber/teams/${slug}/members?page=${index}`);
  const { data } = response;
  return data.map((member) => [ member.avatar_url, member.login ]);
};

// fetchTeamMembers('students-sd-019-c', 2).then(console.log);
