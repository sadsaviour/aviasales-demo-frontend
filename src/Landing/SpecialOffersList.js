import React from "react";
import styled from "styled-components";

import { specialOffers } from "./bestPrices";

const SpecialOffersListContainer = styled.div`
  padding-top: 16px;

  padding-bottom: 24px;

  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const SpecialOffersListHeader = styled.h2`
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

const SpecialOfferContainer = styled.div`
  box-sizing: border-box;
  height: 270px;

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

const SpecialOfferHeader = styled.div`
  position: relative;

  display: flex;

  background: #cd2027;

  padding-top: 22px;
  padding-left: 16px;
  padding-right: 10px;
  padding-bottom: 22px;
`;

const SpecialOfferHeaderText = styled.span`
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

const SpecialOfferHeaderAllianceLogo = styled.img`
  position: absolute

  top: 12px;
  right: 16px;
`;

const SpeciaOfferContent = styled.div`
  height: 191px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const SpecialOfferPrice = styled.div`
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

const SpecialOfferLogoAndPriceRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const SpecialOfferShowMoreButton = styled.div`
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

const SpecialOfferLogo = styled.img`
  margin-top: 22px;
  margin-left: 8px;

  width: 122px;
  height: 30px;

  @media only screen and (min-width: 752px) {
    width: 100px;
    height: 25px;
  }
`;

const SpecialOffersListFooter = styled.div`
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

const SpecialOffersListFooterDisclaimer = styled.div`
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: right;
  }
`;

export const SpecialOffersList = () => {
  return (
    <SpecialOffersListContainer>
      <div className="col-xs-12 col-lg-10 col-lg-offset-1">
        <SpecialOffersListHeader>
          Спецпредложения на авиабилеты
        </SpecialOffersListHeader>
        <div className="row">
          {specialOffers.map(o => (
            <div className="col-xs-12 col-md-4">
              <SpecialOfferContainer key={o.offerHighlight}>
                <SpecialOfferHeader>
                  <SpecialOfferHeaderText>
                    {o.offerHighlight}
                  </SpecialOfferHeaderText>
                  {o.allianceLogo && (
                    <SpecialOfferHeaderAllianceLogo
                      src={o.allianceLogo}
                      alt={"alliance"}
                    />
                  )}
                </SpecialOfferHeader>
                <SpeciaOfferContent>
                  <SpecialOfferLogoAndPriceRow>
                    <SpecialOfferLogo src={o.logo} alt={o.carrier} />
                    <SpecialOfferPrice>
                      от <strong>{o.price}</strong>
                      <div style={{ color: "#D93633" }}>{o.expirationTime}</div>
                    </SpecialOfferPrice>
                  </SpecialOfferLogoAndPriceRow>
                  <div style={{ marginLeft: "8px" }}>{o.offerText}</div>
                  <SpecialOfferShowMoreButton>
                    Узнать подробности
                  </SpecialOfferShowMoreButton>
                </SpeciaOfferContent>
              </SpecialOfferContainer>
            </div>
          ))}
        </div>
        <SpecialOffersListFooter>
          <div className="row between-xs">
            <div className="col-xs-12 col-md-6">
              <div style={{ "text-decoration": "underline" }}>
                {" "}
                Смотреть все спецпредложения
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <SpecialOffersListFooterDisclaimer>
                * средняя цена по направлению
              </SpecialOffersListFooterDisclaimer>
            </div>
          </div>
        </SpecialOffersListFooter>
      </div>
    </SpecialOffersListContainer>
  );
};
