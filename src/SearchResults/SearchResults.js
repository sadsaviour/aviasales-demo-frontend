import React, { Component } from "react";
import styled from "styled-components";
import { filters } from "./data";

import MobileFlightsList from "./MobileFlightsList";
import Filters from "./Filters";
import TabletFlightsList from "./TabletFlightsList";
import filtersIcon from "./img/filtersIcon.svg";

const StyledMain = styled.main`
  padding-top: 56px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-top: 16px;
  }

  padding-bottom: 0px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 40px;
  }

  box-sizing: border-box;

  margin-left: auto;

  margin-right: auto;

  background: #eaeaea;
`;

const ShowMoreButton = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 55px;

  padding-top: 18px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;

  color: #ffffff;

  background: #00acde;
  border-radius: 4px;
`;

const TabletFiltersButton = styled.div`
  box-sizing: border-box;

  width: 66px;
  height: 48px;

  padding-top: 17px;

  margin-bottom: 16px;

  background: #23a9f6;
  border-radius: 10px;
`;

const MobileFiltersButton = styled.div`
  box-sizing: border-box;

  width: 150px;
  height: 40px;

  padding-top: 10px;

  margin-top: 4px;
  margin-bottom: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 16px;
  text-align: center;

  color: #ffffff;

  background: #00ace2;
  border-radius: 100px;
`;

const TabletFiltersIcon = styled.img`
  width: 18px;
  height: 14px;
`;

export default function Main({
  flightsData,
  multyCarriersFilter,
  handleCarriersFilterChange
}) {
  return (
    <StyledMain>
      <div className="container hidden-md hidden-lg hidden-xl">
        <MobileFlightsList flights={flightsData} />
        <div className="row center-xs ">
          <MobileFiltersButton>Фильтровать</MobileFiltersButton>
        </div>
      </div>

      <div className="container hidden-xs">
        <div className="row">
          <div className="col-md-12 col-lg-3 col-xl-3 hidden-md ">
            <Filters
              filters={filters}
              multyCarriersFilter={multyCarriersFilter}
              handleCarriersFilterChange={handleCarriersFilterChange}
            />
          </div>
          <div className="col-md-12 col-lg-9 col-xl-7">
            <div className="row center-md hidden-xs hidden-lg hidden-xl">
              <TabletFiltersButton>
                <TabletFiltersIcon src={filtersIcon} alt="filters" />
              </TabletFiltersButton>
            </div>
            <TabletFlightsList flights={flightsData} />
            <ShowMoreButton>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</ShowMoreButton>
          </div>
          <div className="col-lg-offset-2" />
        </div>
      </div>
    </StyledMain>
  );
}
