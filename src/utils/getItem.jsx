import axios from "axios";

const tmdbKey = "5f4cf67aa6b81c56e16cff977537cf17";
const basicURL = "https://api.themoviedb.org/3/";

const getItem = async (mediatype, id) => {
  try {
    const axiosRequest = await axios.get(
      `${basicURL}${mediatype}/${id}?api_key=${tmdbKey}&append_to_response=videos,images`
    );

    return axiosRequest.data;
  } catch (error) {
    console.log(error);
  }
};

export default getItem;
