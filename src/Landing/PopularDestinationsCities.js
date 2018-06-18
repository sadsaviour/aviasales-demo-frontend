import React from "react";
import styled from "styled-components";

import { topDestinations } from "./bestPrices";

const PopularDestinationsContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 28px;

  @media only screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 36px;
  }
`;

const PopularDestinationCity = styled.div`
  margin-bottom: 16px;

  padding-bottom: 12px;

  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
`;

const PopularDestinationCityLabel = styled.div`
  margin-top: 16px;
  margin-left: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5b5b5c;
`;

const PopularDestinationCountryLabel = styled.div`
  margin-top: 4px;
  margin-left: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

const PopularDestinationPrice = styled.div`
  margin-top: 16px;
  margin-right: 16px;

  font-family: Roboto;
  font-style: normal;

  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;

  color: #00bae8;
`;

const PopularDestinationDate = styled.div`
  margin-top: 4px;
  margin-right: 16px;

  font-family: Roboto;
  font-style: normal;

  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
`;

const PopularDestinationImage = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const PopularDestinationsCities = () => {
  return (
    <PopularDestinationsContainer>
      <div className="col-xs-12 col-md-10 col-md-offset-1">
        <div className="row">
          {topDestinations.map(d => (
            <div className="col-lg-6" key={d.city}>
              <PopularDestinationCity>
                <PopularDestinationImage src={d.img} alt={d.city} />
                <div className="container">
                  <div className="row between-xs">
                    <PopularDestinationCityLabel>
                      {d.city}
                    </PopularDestinationCityLabel>
                    <PopularDestinationPrice>{d.price}</PopularDestinationPrice>
                  </div>
                  <div className="row between-xs">
                    <PopularDestinationCountryLabel>
                      {d.country}
                    </PopularDestinationCountryLabel>
                    <PopularDestinationDate>{d.date}</PopularDestinationDate>
                  </div>
                </div>
              </PopularDestinationCity>
            </div>
          ))}
        </div>
      </div>
    </PopularDestinationsContainer>
  );
};
