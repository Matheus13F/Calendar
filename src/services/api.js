import axios from "axios";

const apiService = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/'
});

export default apiService;