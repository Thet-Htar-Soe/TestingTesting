import axios from "axios";

const API_KEY = process.env.REACT_APP_NEW_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (params) => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
          params: { ...params, apiKey: API_KEY },
        });
        return response.data.articles;
      } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
};

export const fetchTopHeadLines = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
          params: { country: 'us', apiKey: API_KEY },
        });
        return response.data.articles;
      } catch (error) {
        console.error('Error fetching top headlines:', error);
        throw error;
      }
}