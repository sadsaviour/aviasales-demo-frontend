import React from 'react';
import styled from 'styled-components';

import arrivalIcon from './img/arrival-icon_mobile.svg';
import departureIcon from './img/departure-icon_mobile.svg';
import durationIcon from './img/duration-icon_mobile.svg';

import Logotypes from './Logotypes/logos';

const StyledFCard = styled.div`
  position: relative;
  margin-bottom: 8px;

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
  height: 32px;
  width: 100%;

  padding-left: 8px;

  marginfont-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
  font-size: 14px;

  color: #ffffff;
`;

function SpecialMarkBanner(props) {
  const type = props.specialMark;
  switch (type) {
    case 'Chipest':
      return (
        <StyledBannerTitle style={{ background: '#83D40B' }}>
          Самый дешевый
          {'  '}
          <span role="img" aria-label="money-mouth face">
            🤑
          </span>
        </StyledBannerTitle>
      );
    case 'Fastest':
      return (
        <StyledBannerTitle style={{ background: '#AF7542' }}>
          Самый быстрый
          {'  '}
          <span role="img" aria-label="high voltage">
            ⚡️
          </span>
        </StyledBannerTitle>
      );
    case 'TheBest':
      return (
        <StyledBannerTitle style={{ background: '#C279D1' }}>
          Лучший билет
          {'  '}
          <span role="img" aria-label="smiling face with heart-shaped eyes">
            😍
          </span>
        </StyledBannerTitle>
      );
    default:
      return null;
  }
}

function CarrierLogo(props) {
  const carrier = props.carrier;
  if (Array.isArray(carrier)) {
    return carrier.map(carrier => (
      <img
        key={carrier}
        src={Logotypes[carrier].small}
        alt={carrier}
        style={{ marginLeft: '12px' }}
      />
    ));
  }
  return <img src={Logotypes[carrier].fullSize} alt={carrier} />;
}

export default function MobileFlightsList(props) {
  const flights = props.flights;

  const fList = flights.map(f => (
    <StyledFCard key={f.id}>
      <SpecialMarkBanner className={!f.specialMark && 'hidden-xs'} specialMark={f.specialMark} />
      <div className="container">
        <div
          className="row between-xs middle-xs"
          style={{ paddingTop: '12px', paddingBottom: '10px' }}
        >
          <div className="col-xs-6 start-xs middle-xs">
            <StyledPrice>
              {f.offers.best.price}
            </StyledPrice>
          </div>
          <div className="col-xs-6 end-xs middle-xs">
            <CarrierLogo carrier={f.carrier} />
          </div>
        </div>

        <div className="row between-xs">
          <div className="col-xs-5">
            <div className="container">
              <FlightLine className="row">
                <img src={arrivalIcon} alt="Arrival icon" style={{ marginRight: '8px' }} />
                <div>
                  {f.directFlight.departure.time}
                  {' '}
—
                  {f.directFlight.arrival.time}
                </div>
              </FlightLine>
            </div>
          </div>
          <div className="col-xs-4">
            <FlightLine className="row">
              <img src={durationIcon} alt="Duration icon" style={{ marginRight: '8px' }} />
              <div>
                {f.directFlight.flightDuration}
              </div>
            </FlightLine>
          </div>
          <div className="col-xs-3 end-xs">
            {f.direct && (
            <div>
Прямой
            </div>
            )}
          </div>
        </div>
        <div className="row between-xs">
          <div className="col-xs-5">
            <div className="container">
              <div className="row">
                <img src={departureIcon} alt="Arrival icon" style={{ marginRight: '8px' }} />
                <div>
                  {f.backFlight.departure.time}
                  {' '}
—
                  {f.backFlight.arrival.time}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="row">
              <img src={durationIcon} alt="Duration icon" style={{ marginRight: '8px' }} />
              <div>
                {f.backFlight.flightDuration}
              </div>
            </div>
          </div>
          <div className="col-xs-3 end-xs">
            {f.direct && (
            <div>
Прямой
            </div>
            )}
          </div>
        </div>
      </div>
    </StyledFCard>
  ));
  return (
    <div>
      {fList}
    </div>
  );
}
