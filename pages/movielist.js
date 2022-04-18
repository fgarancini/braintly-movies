import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import MovieList from "../components/MovieList";
import Layout from "./Layout";

const Movies = () => {
  return (
    <Provider store={store}>
      <Layout>
        <MovieList />
      </Layout>
    </Provider>
  );
};

export default Movies;
