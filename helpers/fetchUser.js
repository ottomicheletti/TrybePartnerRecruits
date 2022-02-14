const fetchUser = async (user) => {
  const response = await axiosInstance(`/users/${user}`);
  const { login, name, avatar_url, html_url, location, email, hireable, created_at } = response.data;
  return { user: login, name, avatar: avatar_url, profile: html_url, location, email, hireable, created_at };
}

// fetchUser('ottomicheletti').then(console.log);
