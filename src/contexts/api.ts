import axios from "axios";

const apiCards = axios.create({
  baseURL: `https://motor-shop-aty2.onrender.com/`,
  timeout: 5000,
});

const apiKenzieCards = axios.create({
  baseURL: `https://kenzie-kars.herokuapp.com/`,
});

export { apiCards, apiKenzieCards };
