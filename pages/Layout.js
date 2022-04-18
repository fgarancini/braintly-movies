import React from "react";
import Header from "./Header";
import Navigation from "../components/Navigation";
import { Provider } from "react-redux";
import { store } from "./store";
import styled from "styled-components";

const StyledLayout = styled.div`
  width:80%;
  margin:5% 10%;
  background-attachment: scroll;
  
`;

const Layout = (props) => {
  return (
    <StyledLayout className="layout">
      <Header />
      <div className="Content">{props.children}</div>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </StyledLayout>
  );
};

export default Layout;
