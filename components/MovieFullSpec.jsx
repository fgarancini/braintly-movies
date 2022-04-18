import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useGetFullPlotQuery } from "../services/omdbapi";
import FavBox from "./FavBox";
import Movie from "./Movie";

const MoviePosterFavorites = styled.div`
  text-align: -webkit-center;
`;
const MovieSpecs = styled(Col)`
  color:white;
`
const MovieFullSpec = ({ imdbID }) => {
  const { data: movieFull, isFetching } = useGetFullPlotQuery({
    imdbID: imdbID,
  });
  const [MovieData, setMovieData] = useState({});

  useEffect(() => {
    setMovieData(movieFull);
  }, [movieFull]);

  console.log(MovieData?.faved);
  return (
    <>
      {isFetching ? (
        "Loading"
      ) : (
        <Container fluid style={{ marginTop: "10rem" }}>
          <Row md={2}>
            <MoviePosterFavorites>
              <Movie
                imdbID={MovieData?.imdbID}
                Title={MovieData?.Title}
                Poster={MovieData?.Poster}
                Year={MovieData?.Year}
                FavList={true}
              ></Movie>
            </MoviePosterFavorites>
            <MovieSpecs>
              <h1 className="title">
                {MovieData?.Title} ({MovieData?.Year})
              </h1>
              <p className="plot">{MovieData?.Plot}</p>
              <div className="misc">
                <Col>
                  <strong>Director: </strong>
                  {MovieData?.Director} &nbsp;
                  <strong>Released: </strong>
                  {MovieData?.Released} &nbsp;
                </Col>
                <Col>
                  <strong>Runtime: </strong>
                  {MovieData?.Runtime} &nbsp;
                  <strong>Genre: </strong>
                  {MovieData?.Genre} &nbsp;
                </Col>
                <strong>Actors: </strong>
                {MovieData?.Actors}
              </div>
              <FavBox imdbID={imdbID} faved={true}/>
            </MovieSpecs>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MovieFullSpec;
