import axios from "axios";

const apiCards = axios.create({
  baseURL: `http://localhost:3001/`,
  timeout: 5000,
});

const kenzieCars = axios.create({
  baseURL: `https://kenzie-kars.herokuapp.com`,
  timeout: 5000,
});

export { apiCards, kenzieCars };
