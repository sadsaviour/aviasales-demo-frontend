import React from "react";
import styled from "styled-components";

export default function ExtraOffers(props) {
  const offers = props.offers;
  const showMore = props.showMore;

  const OffersBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;

    padding-left: 16px;
    padding-right: 16px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 12px;

    color: #59bce5;

    .extraOfferPrice {
      font-weight: 500;
    }
  `;

  const OffersRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    margin-bottom: 4px;
  `;

  const ShowMoreOffers = styled.div`
    margin-left: auto;
    margin-right: auto;

    margin-top: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    font-size: 12px;
    text-align: center;

    color: #59bce5;
  `;

  const OffersList = offers.map(o => (
    <OffersRow key={o.source}>
      <div>{o.source}</div> <div className="extraOfferPrice"> {o.price}</div>
    </OffersRow>
  ));
  return (
    <OffersBlock>
      {OffersList}
      <ShowMoreOffers>{showMore}</ShowMoreOffers>
    </OffersBlock>
  );
}
