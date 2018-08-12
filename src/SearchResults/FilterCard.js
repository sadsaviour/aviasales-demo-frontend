import React from "react";
import styled from "styled-components";

import dropdownIcon from "./img/dropdown-icon.svg";

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
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;

  color: #5b5b5c;
`;

const OptionCount = styled.span`
  margin-left: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;

  color: #a0b0b9;
`;

const BodyBlock = styled.div`
  margin-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
`;

const DropdownIcon = styled.img`
  margin-right: 6px;
  transform: ${({ expanded }) => (expanded ? "none" : "rotate(-90deg)")};
`;

export default function FilterCard({ title, body, optionsCount, expanded }) {
  return (
    <Container>
      <Header>
        <Title>
          <DropdownIcon expanded={expanded} src={dropdownIcon} alt="" />
          {title}
          <OptionCount>{optionsCount}</OptionCount>
        </Title>
      </Header>
      {body && <BodyBlock>{body}</BodyBlock>}
    </Container>
  );
}
