import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5dbcb271ca0f9ec9810dac199dd89951bd4259b4e34c1c29a829e6432c1b4451'
  }
});
