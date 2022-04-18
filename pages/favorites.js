import React from "react";
import { Provider } from "react-redux";
import FavoriteList from "../components/FavoriteList";
import Navigation from "../components/Navigation";
import Layout from "./Layout";
import { store } from "./store";
const favorites = () => {
  return (
    <Provider store={store}>
      <Layout>
        <FavoriteList />
      </Layout>
    </Provider>
  );
};

export default favorites;
