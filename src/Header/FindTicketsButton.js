import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  height: 56px;
  @media only screen and (min-width: 992px) {
    height: 58px;
  }

  width: 100%;

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

const RouterLink = styled(Link)`
  display: block;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 24%;
  }

  width: 100%;

  box-sizing: border-box;

  text-decoration: none;
  cursor: pointer;
`;

export default function FindTicketsButton(props) {
  return (
    <RouterLink to="/search">
      <Button name="Find Tickets" type="submit" className={props.className}>
        Найти билеты
      </Button>
    </RouterLink>
  );
}
