import axios from "axios";

const BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api'

const instance = axios.create({ baseURL: BASE_URL });

export default instance;
