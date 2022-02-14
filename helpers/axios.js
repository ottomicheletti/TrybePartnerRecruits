const token = 'coloque_seu_token_aqui';
const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
