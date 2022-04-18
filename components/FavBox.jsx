import React, { useState } from "react";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { newFavorite, deleteFavorite } from "../slices/favoriteSlice";
import Link from "next/link";
const Fav = styled.div`
  text-align: center;
  margin: 4rem;
`;
const Heart = styled(BsHeart)`
  color: white;
  &:hover {
    color: orangered;
  }
`;
const HeartFill = styled(BsHeartFill)`
  color: orangered;
  &:hover {
    color: white;
  }
`;

const FavBox = ({ imdbID, faved }) => {
  const dispatch = useDispatch();
  const [Faved, setFaved] = useState(faved);
  console.log(faved);

  return (
    <Fav key={imdbID}>
      <div>
        {" "}
        {Faved ? (
          <span>
            <HeartFill
              size={"2em"}
              onClick={() => {
                setFaved(false);
                dispatch(deleteFavorite({ imdbID: imdbID }));
              }}
            />
          </span>
        ) : (
          <span>
            <Heart
              size={"2em"}
              onClick={() => {
                setFaved(true);
                dispatch(newFavorite({ imdbID: imdbID, faved: true }));
              }}
            ></Heart>
          </span>
        )}
      </div>
    </Fav>
  );
};

export default FavBox;
