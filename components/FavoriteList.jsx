import React, { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useGetFullPlotQuery } from "../services/omdbapi";
import Movie from "./Movie";

const FavoriteList = ({}) => {
  const { favorites } = useSelector((state) => state.favoriteSlice);
  const FavoriteList = [];
  //lamar al reducer para el array de los ID

  favorites.forEach((favorite) => {
    const { data: Pelis } = useGetFullPlotQuery({ imdbID: favorite.imdbID });
    FavoriteList.push({ ...Pelis, faved: favorite.faved });
  });

  const title = FavoriteList.length > 1 ? "Your Favorites!" : "Start searching!";

  return (
    <>
      <h1 style={{ color: "white" }}>{title}</h1>
      <CardGroup style={{ marginTop: "3rem" }}>
        {FavoriteList?.map((movie) => {
          return (
            <Movie
              {...movie}
              key={movie.imdbID}
              FavList={true}
              faved={movie.faved}
            />
          );
        })}
      </CardGroup>
    </>
  );
};

export default FavoriteList;
