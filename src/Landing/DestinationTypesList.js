import React from "react";
import styled from "styled-components";

import compassIcon from "./Assets/compasIcon.svg";
import editIcon from "./Assets/editIcon.svg";

import anywhereIcon from "./Assets/destination__anywhere.svg";
import cultureIcon from "./Assets/destination__culture.svg";
import kidsIcon from "./Assets/destination__kids.svg";
import nightlifeIcon from "./Assets/destination__nightlife.svg";
import shoppingIcon from "./Assets/destination__shopping.svg";
import sunIcon from "./Assets/destination__sun.svg";

const CompassIcon = ({ className }) => {
  return <img className={className} src={compassIcon} alt={"compass"} />;
};

const DestinationTypesListContiner = styled.div`
  padding-top: 40px;

  @media only screen and (min-width: 768px) {
    padding-top: 56px;
  }

  padding-bottom: 6px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 14px;
  }
`;

const PopularDestinationsHeader = styled.div`
  margin-top: 24px;

  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;

  color: #4a4a4a;
`;

const EditCityIcon = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
`;

const DestinationType = styled.div`
  width: 33%;

  @media only screen and (min-width: 768px) {
    width: 16.6%;
  }

  margin-bottom: 24px;

  text-align: center;
`;

const DestinationTypeLabel = styled.div`
  display: inline-block;

  width: 80px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;

  color: #00ace2;
`;

const DestinationIcon = styled.img`
  display: inline-block;
`;

const destinationsTypes = [
  { label: "КУДА УГОДНО", key: "anywhere", icon: anywhereIcon },
  { label: "CОЛНЦЕ И МОРЕ", key: "sun", icon: sunIcon },
  { label: "ШОПИНГ, ГОРОД", key: "shopping", icon: shoppingIcon },
  { label: "КУЛЬТУРА И ИСТОРИЯ", key: "culture", icon: cultureIcon },
  { label: "НОЧНАЯ ЖИЗНЬ", key: "nightlife", icon: nightlifeIcon },
  { label: "ОТДЫХ С ДЕТЬМИ", key: "kids", icon: kidsIcon }
];

const DestinationsTypesContainer = styled.div`
  margin-top: 32px;

  display: flex;

/*  display: grid;
  grid-template: auto auto / 92px 92px 92px;

  @media only screen and (min-width: 768px) {
    grid-template: auto / 92px 92px 92px 92px 92px 92px;*/
  }
`;

export const DestinationTypesList = () => {
  return (
    <DestinationTypesListContiner>
      <div className="col-xs-12 col-md-10 col-md-offset-1">
        <div className="row center-xs">
          <CompassIcon />
        </div>
        <PopularDestinationsHeader>
          Популярные направления <br /> перелетов из города
          <br />
          <span style={{ color: "#00ACE2" }}>Москва</span>
          <EditCityIcon src={editIcon} alt={"edit"} />
        </PopularDestinationsHeader>
        <DestinationsTypesContainer>
          <div className="row center-xs">
            {destinationsTypes.map(d => (
              <DestinationType key={d.key}>
                <DestinationIcon src={d.icon} alt={d.key} />
                <DestinationTypeLabel>{d.label}</DestinationTypeLabel>
              </DestinationType>
            ))}
          </div>
        </DestinationsTypesContainer>
      </div>
    </DestinationTypesListContiner>
  );
};
