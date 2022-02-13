const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'Bearer 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',
  }
});

// const axios = require('axios').default;
// axios.get('https://api.github.com/users/ottomicheletti').then( resp => console.log(resp.data));
