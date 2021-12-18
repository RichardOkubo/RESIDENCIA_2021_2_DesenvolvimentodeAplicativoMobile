import axios from "axios";

import { API_KEY } from "./config";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR`,
});
