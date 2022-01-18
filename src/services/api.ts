import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://discord.com/api'
});

export { instance }