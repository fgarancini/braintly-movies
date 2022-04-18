import React from "react";
import { store } from "../store";
import MovieFullSpec from "../../components/MovieFullSpec";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Layout from "../Layout";

const FullMovie = () => {
  const router = useRouter();
  const { imdbID } = router.query;

  return (
    <Layout>
      <Provider store={store}>
        <MovieFullSpec imdbID={imdbID} />
      </Provider>
    </Layout>
  );
};

export default FullMovie;
