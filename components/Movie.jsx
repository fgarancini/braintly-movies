import Link from "next/link";
import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import styled from "styled-components";
import MovieCoverFav from "./MovieCoverFav";

const PosterImg = styled(Card.Img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 1rem;
  border-radius: 3px;
  background-image: url(${(props) => props.src});
`;

const StyledCard = styled(Card)`
  width: 18rem;
  background-color: rgba(0,0,0,0);
  border:0px;
`;

const CoverInfo = styled.div``;
const Movie = ({ imdbID, Title, Poster, Year, faved , FavList}) => {
  return (
    <Col>
      <StyledCard id={imdbID} >
        <Link href={`/movie/${imdbID}`} key={imdbID}>
          <PosterImg src={Poster} />
        </Link>
        {FavList ? null : (
          <MovieCoverFav
            Title={Title}
            Year={Year}
            imdbID={imdbID}
            faved={faved}
          />
        )}
      </StyledCard>
    </Col>
  );
};

export default Movie;
