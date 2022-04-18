import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Form, FormControl } from "react-bootstrap";
import { setSearch } from "../slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.searchSlice);
  const [Criteria, setCriteria] = useState(search);
  useEffect(() => {
    dispatch(setSearch(Criteria));
  }, [Criteria]);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand>Movie Station</Navbar.Brand>
        <Link href={"/favorites"}>
          <Button variant="dark">Favorites ❤️</Button>
        </Link>
        <Form className="d-flex" style={{ alignItems: "center" }}>
          <Link href={"/movielist"}>
            <FormControl
              type="search"
              placeholder="search"
              className="me-2"
              onChange={(e) => setCriteria(e.target.value)}
              autoFocus
            ></FormControl>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navigation;
