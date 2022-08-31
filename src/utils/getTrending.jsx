import axios from "axios";

const getTrending = async (mediatype, time) => {
  try {
    const axiosRequest = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/${time}?api_key=5f4cf67aa6b81c56e16cff977537cf17`
    );
    return axiosRequest.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getTrending;
