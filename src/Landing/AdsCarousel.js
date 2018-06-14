import React from "react";
import styled from "styled-components";

import carouselButton from "./Assets/CarouselButton.svg";

import logo1 from "./Assets/Agencies/agenciesAgencyLogo-1.png";
import logo2 from "./Assets/Agencies/agenciesAgencyLogo-2.png";
import logo3 from "./Assets/Agencies/agenciesAgencyLogo-3.png";
import logo4 from "./Assets/Agencies/agenciesAgencyLogo-4.png";
import logo5 from "./Assets/Agencies/agenciesAgencyLogo-5.png";

const AdsCarouselBlock = styled.div`
  padding-top: 24px;
  padding-bottom: 32px;

  padding-left: 8px;
  padding-right: 8px;
`;

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;

  color: #5c5c5c;
`;

const AgencyLogo = styled.img`
  width: 149px;
  height: 50px;

  margin-top: 16px;
  margin-bottom: 16px;

  margin-left: 16px;
  margin-right: 16px;

  @media only screen and (min-width: 1260px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const CarouselNav = styled.div`
  width: 10px;
  height: 10px;

  margin-right: 8px;

  background: background: rgba(0, 0, 0, 0.0001);;
  border: 1px solid #818181;
  border-radius: 50px;
`;

const CarouselNavCurrent = styled.div`
  width: 10px;
  height: 10px;

  margin-right: 8px;

  background: #818181;
  border: 1px solid #818181;
  border-radius: 50px;
`;

export const AdsCarousel = () => {
  return (
    <AdsCarouselBlock>
      <div className="col-md-12 col-lg-10 col-lg-offset-1">
        <Header>
          Дешевые авиабилеты от крупнейших авиакомпаний и агентств
        </Header>
        <div className="row">
          <div className="col-md-1 start-md">
            <img
              src={carouselButton}
              alt="Prev"
              style={{ marginTop: "24px" }}
            />
          </div>
          <div className="col-md-10">
            <div className="row center-md">
              <AgencyLogo src={logo4} alt="" style={{ height: "37px" }} />
              <AgencyLogo src={logo3} alt="" />
              <AgencyLogo src={logo2} alt="" />
              <AgencyLogo src={logo1} alt="" />
              <AgencyLogo src={logo5} alt="" />
            </div>
            <div className="row center-md">
              <CarouselNavCurrent />
              <CarouselNav />
              <CarouselNav />
            </div>
          </div>
          <div className="col-md-1 end-md">
            <img
              src={carouselButton}
              alt="Next"
              style={{ transform: "rotate(-180deg)", marginTop: "24px" }}
            />
          </div>
        </div>
      </div>
    </AdsCarouselBlock>
  );
};
