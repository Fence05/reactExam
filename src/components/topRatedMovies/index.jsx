import React, { useState, useEffect } from "react";
import { getTopRatedMovies } from "../../api/tmdb-api";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Spinner from '../spinner';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      setMovies(movies.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
      <Grid container>
        <MovieList movies={movies} />
      </Grid>
  );
};

export default TopRatedMovies;
