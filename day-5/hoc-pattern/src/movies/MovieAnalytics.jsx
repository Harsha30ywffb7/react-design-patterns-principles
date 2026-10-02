import React from "react";

const MovieAnalytics = ({ data }) => {
  const totalMovies = data.length;
  const averageRating =
    data.reduce((acc, curr) => acc + curr.rating, 0) / totalMovies;
  return (
    <div className="p-4">
      <h2 className="mb-2 text-bold text-xl">Movie analytics</h2>
      <p>Total Movies : {totalMovies}</p>
      <p>Average Rating :{averageRating.toFixed(1)}</p>
    </div>
  );
};

export default MovieAnalytics;
