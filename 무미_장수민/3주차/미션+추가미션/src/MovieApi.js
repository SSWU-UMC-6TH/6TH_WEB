import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/popular`, {
      params: {
        api_key: apiKey
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};
