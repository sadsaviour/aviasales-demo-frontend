import React from "react";
import styled from "styled-components";

import { specialOffers } from "./bestPrices";

const Container = styled.div`
  padding-top: 16px;

  padding-bottom: 24px;

  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const ListHeader = styled.h2`
  margin-top: 0;

  @media only screen and (min-width: 768px) {
    margin-top: 8px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;
`;

const OfferContainer = styled.div`
  box-sizing: border-box;

  margin-bottom: 12px;

  padding-bottom: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #242424;

  background: #ffffff;
`;

const OfferHeader = styled.div`
  position: relative;

  display: flex;

  background: #cd2027;

  padding-top: 22px;
  padding-left: 16px;
  padding-right: 10px;
  padding-bottom: 22px;
`;

const OfferHeaderText = styled.span`
  width: 80%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #ffffff;
`;

const OfferHeaderAllianceLogo = styled.img`
  position: absolute

  top: 12px;
  right: 16px;
`;

const OfferContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const OfferPrice = styled.div`
  margin-top: 18px;
  margin-right: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: right;

  color: #5c5c5c;

  .strong {
    font-size: 20px;
  }
`;

const OfferLogoAndPriceRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const OfferText = styled.div`
  min-height: 48px;

  margin-top: 16px;
  margin-bottom: 28px;
  margin-left: 8px;
  margin-right: 8px;
`;

const OfferShowMoreButton = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  margin-left: 8px;
  margin-right: 8px;

  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #d93533;
`;

const OfferLogo = styled.img`
  margin-top: 22px;
  margin-left: 8px;

  width: 122px;
  height: 30px;

  @media only screen and (min-width: 752px) {
    width: 100px;
    height: 25px;
  }
`;

const ListFooter = styled.div`
  margin-top: 24px;

  @media only screen and (min-width: 768px) {
    margin-top: 12px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }

  color: #ffffff;
`;

const Disclaimer = styled.div`
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: right;
  }
`;

export const SpecialOffersList = () => (
  <Container>
    <div className="col-xs-12 col-lg-10 col-lg-offset-1">
      <ListHeader>Спецпредложения на авиабилеты</ListHeader>
      <div className="row">
        {specialOffers.map(o => (
          <div className="col-xs-12 col-md-4" key={o.offerHighlight}>
            <OfferContainer>
              <OfferHeader>
                <OfferHeaderText>{o.offerHighlight}</OfferHeaderText>
                {o.allianceLogo && (
                  <OfferHeaderAllianceLogo
                    src={o.allianceLogo}
                    alt="alliance"
                  />
                )}
              </OfferHeader>
              <OfferContent>
                <OfferLogoAndPriceRow>
                  <OfferLogo src={o.logo} alt={o.carrier} />
                  <OfferPrice>
                    от <strong>{o.price}</strong>
                    <div style={{ color: "#D93633" }}>{o.expirationTime}</div>
                  </OfferPrice>
                </OfferLogoAndPriceRow>
                <OfferText>{o.offerText}</OfferText>
                <OfferShowMoreButton>Узнать подробности</OfferShowMoreButton>
              </OfferContent>
            </OfferContainer>
          </div>
        ))}
      </div>
      <ListFooter>
        <div className="row between-xs">
          <div className="col-xs-12 col-md-6">
            <div style={{ textDecoration: "underline" }}>
              {" "}
              Смотреть все спецпредложения
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <Disclaimer>* средняя цена по направлению</Disclaimer>
          </div>
        </div>
      </ListFooter>
    </div>
  </Container>
);
