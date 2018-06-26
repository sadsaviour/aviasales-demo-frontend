import React from "react";
import styled from "styled-components";

import clearIcon from "./img/clearIcon.svg";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;

  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-top: 16px;

  border-bottom: 1px solid #ddd;
`;

const Header = styled.div`
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;

  color: #00bde4;
`;

export default function ResetButton() {
  return (
    <Container>
      <Header>
        <Label>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</Label>
        <img src={clearIcon} alt="" />
      </Header>
    </Container>
  );
}
