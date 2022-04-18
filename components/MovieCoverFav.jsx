import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import FavBox from "./FavBox";

const MovieInfo = styled(Card.ImgOverlay)`
  background-blend-mode: screen;
  background-color: rgba(45, 45, 45, 0.6);
  height: 93%;
  backface-visibility: hidden;
  overflow: hidden;
  left: 1rem;
  width: 100%;
  opacity: 0;
  &:hover {
    opacity: 1;
    color: white;
    margin: auto;
    text-align: center;
  }
`;

const MovieCoverFav = ({ Title, Year, imdbID, faved }) => {
  return (
    <MovieInfo>
      <h5>{Title}</h5>
      <h6>{Year}</h6>
      <FavBox imdbID={imdbID} faved={faved} />
    </MovieInfo>
  );
};

export default MovieCoverFav;
