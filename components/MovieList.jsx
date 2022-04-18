import React, { useState, useEffect } from "react";
import { CardGroup, ButtonToolbar } from "react-bootstrap";
import { useGetMoviesQuery } from "../services/omdbapi";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Movie from "./Movie";
import Pagination from "./Pagination";

const ListMovies = styled(CardGroup)`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const MovieList = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const { search } = useSelector((state) => state.searchSlice);
  const { data: movieList, isFetching } = useGetMoviesQuery({
    title: search,
    page: CurrentPage,
  });

  const [MoviesData, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList?.Search);
  }, [movieList]);

  if (isFetching) {
    return "Loading...";
  }
  return (
    <>
      <ListMovies>
        {MoviesData?.map((movie) => {
          return (
            <Movie
              {...movie}
              key={movie.imdbID}
              faved={false}
              FavList={false}
            />
          );
        })}
      </ListMovies>
      <ButtonToolbar style={{ justifyContent: "center", marginTop: "3rem" }}>
        <Pagination
          totalResults={movieList?.totalResults}
          setPage={setCurrentPage}
        />
      </ButtonToolbar>
    </>
  );
};

export default MovieList;
