import React from "react";
import styled from "styled-components";

import Luggage from "./Luggage";
import { Price, LowStockWarning, PriceSource } from "./Price";
import ExtraOffers from "./ExtraOffers";
import FlightRow from "./FlightRow";

import shareIcon from "./img/share-icon.svg";
import dropdownIcon from "./img/dropdown-icon.svg";

import Logotypes from "./Logotypes/logos";

const StyledFCard = styled.div`
  position: relative;
  margin-bottom: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  font-color: #4a4a4a;

  background-color: #ffffff;
`;

const LeftPanel = styled.div`
  box-sizing: border-box;

  padding-bottom: 24px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  border-right: 1px solid #dddddd;
`;

const RightPanel = styled.div`
  box-sizing: border-box;

  padding-bottom: 24px;
  padding-left: 16px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

function CarrierLogo(props) {
  const carrier = props.carrier;
  if (Array.isArray(carrier)) {
    return carrier.map(carrier => (
      <img
        key={carrier}
        src={Logotypes[carrier].small}
        alt={carrier}
        style={{ marginRight: "12px" }}
      />
    ));
  } else {
    return <img src={Logotypes[carrier].fullSize} alt={carrier} />;
  }
}

const StyledCharter = styled.div`
  width: 60px;
  height: 26px;

  margin-right: 14px;

  border-radius: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 10px;
  color: #23a9f6;

  text-align: center;

  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #2196f3;
`;

const DotedDelimener = styled.div`
  margin-top: 10px;
  margin-bottom: 14px;

  width: 90%;
  height: 0px;

  border-bottom: 1px dashed #dddddd;
  box-sizing: border-box;
`;

function ShowToggler() {
  const StyledDiv = styled.div`
    position: relative;
    width: 20px;
    background: #edf5f7;
  `;

  const Icon = styled.img`
    position: absolute;
    top: 132px;
    left: 5px;
  `;
  return (
    <StyledDiv>
      <Icon src={dropdownIcon} alt="Visibility toggle" />{" "}
    </StyledDiv>
  );
}

export default function TabletFlightsList(props) {
  const flights = props.flights;

  const fList = flights.map(f => (
    <StyledFCard key={f.id}>
      <div className="container">
        <div className="row between-md">
          <LeftPanel className="col-md-4">
            <Luggage luggage={f.luggage} />
            {f.offers.lowStockWarning && (
              <LowStockWarning>{f.offers.lowStockWarning}</LowStockWarning>
            )}
            <Price bestOffer={f.offers.best.price} />
            <PriceSource>{f.offers.best.source}</PriceSource>
            {f.offers.extra && (
              <ExtraOffers
                offers={f.offers.extra.toShow}
                showMore={f.offers.extra.toHide}
              />
            )}
          </LeftPanel>
          <RightPanel className="col-md-7">
            <div
              className="row end-md middle-md"
              style={{
                "padding-top": "12px",
                "padding-bottom": "10px",
                "padding-right": "10px"
              }}
            >
              <CarrierLogo carrier={f.carrier} />
              <div style={{ "flex-grow": "2" }} />
              {f.charter && <StyledCharter>ЧАРТЕР</StyledCharter>}
              <img src={shareIcon} alt="share" />
            </div>

            <FlightRow flight={f.directFlight} />
            <DotedDelimener />
            <FlightRow flight={f.backFlight} />
          </RightPanel>
          <ShowToggler />
        </div>
      </div>
    </StyledFCard>
  ));
  return <div>{fList}</div>;
}
