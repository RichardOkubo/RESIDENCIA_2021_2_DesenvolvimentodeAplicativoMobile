import axios from 'axios';


const serraApi = axios.create ({
  baseURL: 'https://ecommerce-residencia.herokuapp.com'
});

export default serraApi;