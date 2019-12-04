import axios from 'axios';

const KEY = 'AIzaSyBWSNra7z-xWE4VYY3heW4w_aZYGI3xi38';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
