import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    flex-grow: 2;
    flex-basis: 25%;
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

const StyledButtonText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
`;

export default function FindTicketsButton(props) {
  return (
    <Link style={{ "text-decoration": "none" }} to="/search">
      <Button name="Find Tickets" type="submit" className={props.className}>
        Найти билеты
      </Button>
    </Link>
  );
}
