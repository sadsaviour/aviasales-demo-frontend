import React from "react";
import styled from "styled-components";

export const LowStockWarning = styled.div`
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 6px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #ff654e;
`;

export const PriceSource = styled.div`
  margin-left: auto;
  margin-right: auto;

  margin-top: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  text-align: center;

  color: #a0b0b9;
`;

export function Price(props) {
  const price = props.bestOffer;

  const StyledPrice = styled.div`
    box-sizing: border-box;
    width: 162px;
    height: 48px;

    margin-left: auto;
    margin-right: auto;

    margin-top: 10px;

    padding-top: 6px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 16px;
    text-align: center;

    color: #ffffff;

    background: #ff6d00;
    border-radius: 4px;

    span {
      font-weight: 500;
    }
  `;

  return (
    <StyledPrice>
      <span>Купить</span> <br /> за {price}
    </StyledPrice>
  );
}
