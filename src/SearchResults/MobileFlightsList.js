import React from "react";
import styled from "styled-components";

import arrivalIcon from "./img/arrival-icon_mobile.svg";
import departureIcon from "./img/departure-icon_mobile.svg";
import durationIcon from "./img/duration-icon_mobile.svg";

import Logotypes from "./Logotypes/logos";

const StyledFCard = styled.div`
  position: relative;
  margin-bottom: 8px;

  margin-left: -8px;
  margin-right: -8px;

  padding-bottom: 14px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 14px;
  font-color: #4a4a4a;

  background-color: #ffffff;
`;

const StyledPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  font-size: 22px;

  color: #ff9241;
`;

const FlightLine = styled.div`
  margin-bottom: 10px;
`;

const StyledBannerTitle = styled.div`
  box-sizing: border-box;
  width: 100%;

  padding-left: 8px;

  marginfont-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
  font-size: 14px;

  color: #ffffff;

  background: ${({ type }) => {
    switch (type) {
      case "chipest":
        return "#83D40B";
      case "fastest":
        return "#AF7542";
      case "best":
        return "#C279D1";
      default:
        return null;
    }
  }};
`;

const SmallCarrierLogo = styled.img`
  margin-left: 12px;
`;

const PlaneIcon = styled.img`
  margin-right: 8px;
`;

const PriceAndCarrierRow = styled.div`
  padding-top: 12px;
  padding-bottom: 10px;
`;

function SpecialMarkBanner({ specialMark }) {
  switch (specialMark) {
    case "Chipest":
      return (
        <StyledBannerTitle type="chipest">
          Самый дешевый
          {"  "}
          <span role="img" aria-label="money-mouth face">
            🤑
          </span>
        </StyledBannerTitle>
      );
    case "Fastest":
      return (
        <StyledBannerTitle type="fastest">
          Самый быстрый
          {"  "}
          <span role="img" aria-label="high voltage">
            ⚡️
          </span>
        </StyledBannerTitle>
      );
    case "TheBest":
      return (
        <StyledBannerTitle type="best">
          Лучший билет
          {"  "}
          <span role="img" aria-label="smiling face with heart-shaped eyes">
            😍
          </span>
        </StyledBannerTitle>
      );
    default:
      return null;
  }
}

function CarrierLogo({ carrier }) {
  if (Array.isArray(carrier)) {
    return carrier.map(c => (
      <SmallCarrierLogo key={c} src={Logotypes[c].small} alt={c} />
    ));
  }
  return <img src={Logotypes[carrier].fullSize} alt={carrier} />;
}

export default function MobileFlightsList({ flights }) {
  const fList = flights.map(f => (
    <StyledFCard key={f.id}>
      <SpecialMarkBanner
        className={!f.specialMark && "hidden-xs"}
        specialMark={f.specialMark}
      />
      <div className="container">
        <PriceAndCarrierRow>
          <div className="row between-xs middle-xs">
            <div className="col-xs-6 start-xs middle-xs">
              <StyledPrice>{f.offers.best.price}</StyledPrice>
            </div>
            <div className="col-xs-6 end-xs middle-xs">
              <CarrierLogo carrier={f.carrier} />
            </div>
          </div>
        </PriceAndCarrierRow>

        <div className="row between-xs">
          <div className="col-xs-5">
            <div className="container">
              <FlightLine className="row">
                <PlaneIcon src={arrivalIcon} alt="Arrival icon" />
                <div>
                  {f.directFlight.departure.time} —
                  {f.directFlight.arrival.time}
                </div>
              </FlightLine>
            </div>
          </div>
          <div className="col-xs-4">
            <FlightLine className="row">
              <PlaneIcon src={durationIcon} alt="Duration icon" />
              <div>{f.directFlight.flightDuration}</div>
            </FlightLine>
          </div>
          <div className="col-xs-3 end-xs">{f.direct && <div>Прямой</div>}</div>
        </div>
        <div className="row between-xs">
          <div className="col-xs-5">
            <div className="container">
              <div className="row">
                <PlaneIcon src={departureIcon} alt="Arrival icon" />
                <div>
                  {f.backFlight.departure.time} —
                  {f.backFlight.arrival.time}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="row">
              <PlaneIcon src={durationIcon} alt="Duration icon" />
              <div>{f.backFlight.flightDuration}</div>
            </div>
          </div>
          <div className="col-xs-3 end-xs">{f.direct && <div>Прямой</div>}</div>
        </div>
      </div>
    </StyledFCard>
  ));
  return fList;
}
