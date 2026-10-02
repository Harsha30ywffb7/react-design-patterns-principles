import React from "react";
import WithDataFetching from "./WithDataFetching";
import MovieList from "../movies/MovieList";
import MovieAnalytics from "../movies/MovieAnalytics";

const MovieListWithData = WithDataFetching(MovieList);
const MovieAnalyticsWithData = WithDataFetching(MovieAnalytics);
const MoviesWithHoc = () => {
  return (
    <div className="w-full mx-auto mt-10 space-y-10">
      <MovieListWithData />
      <MovieAnalyticsWithData />
    </div>
  );
};

export default MoviesWithHoc;
