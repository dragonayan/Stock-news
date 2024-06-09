import axios from 'axios';

// const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://api.thenewsapi.com/v1/news/top?api_token=o1pXNt4ceezOuUOxtije2aLpmSXmBok0AXgY3VjO&locale=in&limit=6';

export const fetchStockMarketNews = () => {
  return axios.get(`${BASE_URL}`, {
   
  });
};
