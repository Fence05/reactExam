import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";


const TopRatedMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["toprated"],
    queryFn: getTopRatedMovies,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results.map((m) => {
    m.genre_ids = m.genres ? m.genres.map((g) => g.id) : [];
    return m;
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );

};

export default TopRatedMoviesPage;




