import axios from "axios";

const tmdbKey = "5f4cf67aa6b81c56e16cff977537cf17";
const basicURL = "https://api.themoviedb.org/3/search/";

const getSearch = async (mediaType, searchTerm, pageValue) => {
  try {
    const axiosRequest = await axios.get(
      `${basicURL}${mediaType}?api_key=${tmdbKey}&query=${searchTerm}&page=${pageValue}`
    );
    return axiosRequest.data;
  } catch (error) {
    console.log(error);
  }
};
// `${basicURL}${mediaType}?page=${pageValue}&query=${searchTerm}&api_key=${tmdbKey}`
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=batman&page=1&include_adult=false
export default getSearch;
