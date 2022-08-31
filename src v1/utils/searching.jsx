import axios from "axios";
import { SearchContext } from "../context/searchContext";

const tmdbKey = "5f4cf67aa6b81c56e16cff977537cf17";
const basicURL = "https://api.themoviedb.org/3/search/";

const searching = (value) => {
  const { searchType, setActiveSearch, searchTerm, saveSearch } =
    useContext(SearchContext);

  axios
    .get(
      `${basicURL}${searchType}?page=${value}&query=${searchTerm}&api_key=${tmdbKey}`
    )
    .then((res) => res.data)
    .then((result) => {
      saveSearch(result);
      setActiveSearch(true);
    });
};

export default searching();
