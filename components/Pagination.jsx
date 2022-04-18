import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Pagination = ({ totalResults = 0,setPage }) => {
  const pages = [];
  const totalPages = Math.ceil(totalResults / 10) < 8 ? Math.ceil(totalResults / 10) : 8;
  for (let index = 1; index < totalPages; index++) {
    pages.push(index);
  }
  return (
    <ButtonGroup className="me-2">
      {pages.map((num) => {
        return <Button variant="dark" onClick={() => setPage(num)} key={num}>{num}</Button>;
      })}
    </ButtonGroup>
  );
};

export default Pagination;
