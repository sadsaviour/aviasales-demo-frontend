import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 24%;
  }

  height: 56px;
  width: 100%;

  @media only screen and (min-width: 992px) {
    height: 58px;
  }

  box-sizing: border-box;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  background: #ff9241;
  border: 0;
  border-radius: 4px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 5px;
  }

  cursor: pointer;
`;

const RouterLink = styled(Link)`
  text-decoration: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;

  @media only screen and (min-width: 992px) and (max-width: 1260px) {
    font-size: 18px;
  }

  text-align: center;

  color: #ffffff;

  cursor: pointer;
`;

export default function FindTicketsButton(props) {
  return (
    <Button name="Find Tickets" type="submit" className={props.className}>
      <RouterLink to="/search">Найти билеты</RouterLink>
    </Button>
  );
}
