import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=INFkzkbf2LTatUE7kRsOZdDznOXIrELXb4daYSNA&date=${date}`);
}
