const { request } = require("@octokit/request");

const fetchUser = async (user) => {
  const response = await request(`GET /users/${user}`);
  const { login, name, avatar_url, html_url, location, email, hireable, created_at } = response.data;
  return { user: login, name, avatar: avatar_url, profile: html_url, location, email, hireable, created_at };
}

module.exports = { fetchUser };

// fetchUser('ottomicheletti').then(console.log);
