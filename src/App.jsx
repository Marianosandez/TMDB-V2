import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MainDisplay from "./MainDisplay";
import getTrending from "./utils/getTrending";
import DetailView from "./DetailView";
import getSearch from "./utils/getSearch";

function App() {
  const [movieData, setMovieData] = useState("");
  const [tvData, setTvData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [pageValue, setPageValue] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const mediatype = useLocation().pathname?.includes("tv") ? "tv" : "movie";

  const getSearchValue = (value) => {
    setSearchTerm(value);
  };

  const getPageValue = (value) => {
    setPageValue(value);
  };

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await getTrending("movie", "week");
      setMovieData(trendingMovies);
    };
    const getTrendingTV = async () => {
      const trendingTV = await getTrending("tv", "week");
      setTvData(trendingTV);
    };
    getTrendingMovies();
    getTrendingTV();
  }, []);

  useEffect(() => {
    const getSearchResults = async () => {
      const searchResults = await getSearch(mediatype, searchTerm, pageValue);
      setSearchData(await searchResults?.results);
      setTotalPages(await searchResults?.total_pages);
    };
    getSearchResults();
  }, [searchTerm, pageValue, mediatype]);

  console.log(tvData);
  console.log(movieData);

  return (
    <>
      <Header />
      <SearchBar
        getSearchValue={getSearchValue}
        getPageValue={getPageValue}
        mediatype={mediatype}
      />
      <Routes>
        <Route
          path="movie"
          element={<MainDisplay data={movieData} mediatype={mediatype} />}
        ></Route>
        <Route
          path="tv"
          element={<MainDisplay data={tvData} mediatype={mediatype} />}
        ></Route>
        <Route
          path="/"
          element={<MainDisplay data={movieData} mediatype={mediatype} />}
        ></Route>
        {/* <Route path="*" element={<MainDisplay data={movieData} />}></Route> */}
        <Route
          path="/:mediatype/:id"
          element={<DetailView mediatype={mediatype} />}
        ></Route>
        <Route
          path="/search/:mediatype/:searchTerm"
          element={
            <MainDisplay
              data={searchData}
              getPageValue={getPageValue}
              pageValue={pageValue}
              totalPages={totalPages}
              mediatype={mediatype}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
