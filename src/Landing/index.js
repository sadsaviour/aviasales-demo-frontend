import React from "react";
import styled from "styled-components";

import {
  topDestinations,
  bestPricesLastMonth,
  specialOffers,
  tipsText
} from "./bestPrices";

import { AppAd } from "./AppAd";

import compassIcon from "./Assets/compasIcon.svg";
import editIcon from "./Assets/editIcon.svg";
import anywhereIcon from "./Assets/destination__anywhere.svg";
import cultureIcon from "./Assets/destination__culture.svg";
import kidsIcon from "./Assets/destination__kids.svg";
import nightlifeIcon from "./Assets/destination__nightlife.svg";
import shoppingIcon from "./Assets/destination__shopping.svg";
import sunIcon from "./Assets/destination__sun.svg";

import bestPricesCalendarIcon from "./Assets/bestPricesCalendarIcon.svg";

const StyledMain = styled.main`
  padding-top: 40px;
`;

const CompassIcon = ({ className }) => {
  return <img className={className} src={compassIcon} alt={"compass"} />;
};

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
  margin-bottom: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;

  color: #00ace2;
`;

const DestinationIcon = styled.img``;

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
  display: grid;
  grid-template: auto auto / 92px 92px 92px;
`;

const DestinationsList = () => {
  return (
    <DestinationsTypesContainer>
      {destinationsTypes.map(d => (
        <DestinationType key={d.key}>
          <DestinationIcon src={d.icon} alt={d.key} />
          <div>{d.label}</div>
        </DestinationType>
      ))}
    </DestinationsTypesContainer>
  );
};

const PopularDestinationsCitiesList = styled.div`
  font-family: Roboto;
  font-style: normal;
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

  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5b5b5c;
`;

const PopularDestinationCountryLabel = styled.div`
  margin-top: 4px;
  margin-left: 16px;

  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

const PopularDestinationPrice = styled.div`
  margin-top: 16px;
  margin-right: 16px;

  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;

  color: #00bae8;
`;

const PopularDestinationDate = styled.div`
  margin-top: 4px;
  margin-right: 16px;

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

const PopularDestinationsCities = () => {
  return (
    <PopularDestinationsCitiesList>
      {topDestinations.map(d => (
        <PopularDestinationCity key={d.city}>
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
      ))}
    </PopularDestinationsCitiesList>
  );
};

const BestPricesCalendarIcon = ({ className }) => {
  return (
    <img className={className} src={bestPricesCalendarIcon} alt={"calendar"} />
  );
};

const BestPricesCalendarHeader = styled.div`
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

const BestPricesContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 8px;

  font-family: Roboto;
  font-style: normal;

  border-bottom: 0.4px dashed #afbec6;
`;

const BestPricesCity = styled.div`
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;

  color: #5b5b5c;
`;
const BestPricesCountry = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;
const BestPricesOrigin = styled.div`
  margin-bottom: 16px;

  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
`;
const BestPricesPrice = styled.div`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #00bae8;
`;

const BestPricesCityContainer = styled.div`
  display: inline-block;
  margin-bottom: 24px;
`;

const BestPricesFlag = styled.img`
  display: inline-block;
`;

const BestPricesCapture = styled.div`
  margin-top: 32px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  text-align: center;

  color: #4a4a4a;
`;

const BestPricesDisclaimer = styled.div`
  margin-top: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;

  color: #a0b0b9;
`;

const SpecialOffersListContainer = styled.div`
  padding-top: 16px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 24px;

  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const SpecialOffersListHeader = styled.h2`
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

  background: #cd2027;

  padding-top: 22px;
  padding-left: 16px;
  padding-bottom: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #ffffff;
`;

const SpecialOfferHeaderAllianceLogo = styled.img`
  position: absolute;

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
`;

const SpecialOffersListFooter = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;

const TipsHeader = styled.h2`
  margin-top: 22px;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;

  color: #4a4a4a;
`;
const TipsIcon = styled.img`
  margin-right: 10px;
`;
const TipsText = styled.div`
  margin-left: 6px;
  margin-right: 6px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #4a4a4a;
`;
const TipsShowMore = styled.span`
  margin-left: 10px;
  color: #00ace2;
`;

const Tips = () => {
  return (
    <div>
      {tipsText.map(t => (
        <section>
          <TipsHeader>
            <TipsIcon src={t.icon} alt={"icon"} />
            {t.heading}
          </TipsHeader>
          <TipsText>
            {t.text}
            <TipsShowMore>Подробнее</TipsShowMore>
          </TipsText>
        </section>
      ))}
    </div>
  );
};

const SpecialOffersList = () => {
  return (
    <SpecialOffersListContainer>
      <SpecialOffersListHeader>
        Спецпредложения на авиабилеты
      </SpecialOffersListHeader>
      {specialOffers.map(o => (
        <SpecialOfferContainer key={o.offerHighlight}>
          <SpecialOfferHeader>
            {o.offerHighlight}
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
      ))}
      <SpecialOffersListFooter>
        <div style={{ "text-decoration": "underline" }}>
          {" "}
          Смотреть все спецпредложения
        </div>
        <div>* средняя цена по направлению</div>
      </SpecialOffersListFooter>
    </SpecialOffersListContainer>
  );
};

const BestPricesLastMonth = () => {
  return (
    <div className="container">
      {bestPricesLastMonth.map(c => (
        <BestPricesContainer key={c.city}>
          <BestPricesFlag src={c.flag} alt={c.country} />
          <BestPricesCityContainer>
            <BestPricesCity>{c.city}</BestPricesCity>
            <BestPricesCountry>{c.country}</BestPricesCountry>
          </BestPricesCityContainer>
          <div className="col-xs-12">
            {c.prices.map(p => (
              <div key={p.origin} className="row between-xs">
                <BestPricesOrigin>{p.origin}</BestPricesOrigin>
                <BestPricesPrice>{p.price}</BestPricesPrice>
              </div>
            ))}
          </div>
        </BestPricesContainer>
      ))}
      <div className="row center-xs">
        <BestPricesCapture>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </BestPricesCapture>
        <BestPricesDisclaimer>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </BestPricesDisclaimer>
      </div>
    </div>
  );
};

export default function Main(props) {
  return (
    <StyledMain>
      <div className="container">
        <div className="row center-xs">
          <CompassIcon />
        </div>
        <PopularDestinationsHeader>
          Популярные направления <br /> перелетов из города
          <br />
          <span style={{ color: "#00ACE2" }}>Москва</span>
          <EditCityIcon src={editIcon} alt={"edit"} />
        </PopularDestinationsHeader>
        <div className="row center-xs">
          <DestinationsList />
        </div>
        <PopularDestinationsCities />
        <div className="row center-xs">
          <BestPricesCalendarIcon />
        </div>
        <BestPricesCalendarHeader>
          Лучшие цены на авиабилеты за последний месяц
        </BestPricesCalendarHeader>
        <BestPricesLastMonth />
        <SpecialOffersList />
        <Tips />
        <AppAd />
      </div>
    </StyledMain>
  );
}
