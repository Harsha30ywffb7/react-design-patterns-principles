import React from "react";

const MovieList = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="mb-2 text-bold text-xl">Movie List</h1>

      <ul className="space-y-1">
        {data.map((movie) => (
          <li key={movie.id} className="border-b pb-1">
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
