import React from "react";
import styled from "styled-components";

import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import viber from "./img/viber.svg";
import vk from "./img/vk.svg";

import apple from "./img/apple-store.svg";
import google from "./img/google-store.svg";
import microsoft from "./img/windows-store.svg";

const States = [
  "Россия",
  "Таиланд",
  "Черногория",
  "Кипр",
  "Болгария",
  "Грузия"
];

const Cities = [
  "Москва",
  "Санкт-Петербург",
  "Симферополь",
  "Адлер",
  "Екатеринбург",
  "Лондон"
];

const Carriers = [
  "Air Berlin",
  "Air France",
  "Alitalia",
  "Air Baltic",
  "Emirates",
  "KLM"
];

const Airports = [
  "Шереметьево",
  "Курумоч",
  "Домодедово",
  "Толмачево",
  "Владивосток",
  "Гамбург"
];

const Destinations = [
  "MOW – SIP",
  "MOW – AER",
  "MOW – TIV",
  "MOW – MRV",
  "LED – MOW",
  "MOW – BKK"
];

const Services = [
  "Горящие авиабилеты",
  "Календарь низких цен",
  "Карта низких цен",
  "Спецпредложения",
  "Таблица цен",
  "Блог",
  "Помощь"
];

const StyledFooter = styled.div`
  padding-top: 32px;
  padding-bottom: 24px;
`;

const FooterBlockHeader = styled.h2`
  margin-bottom: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const FooterBlockItems = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
`;

const FooterBlockAll = styled.p`
  margin-top: 16px;
  margin-bottom: 31px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const StyledHr = styled.hr`
  box-sizing: border-box;
  size: 1px;
  color: #e0e6e8;
`;

const StyledInfoLink = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 12px;

  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
`;

const SocialIconBlock = styled.div`
  display: inline-block;
  margin-right: 18px;
  margin-top: 8px;
`;

const SocialIconCapture = styled.p`
  display: inline;

  margin-left: 6px;
  margin-top: 0;
  margin-bottom: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const HotelLookLink = styled.p`
  margin-top: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

const Copyright = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
`;

function List(props) {
  return props.list.map(i => <FooterBlockItems key={i}>{i}</FooterBlockItems>);
}

export default function Footer(props) {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <nav>
              <FooterBlockHeader>СТРАНЫ</FooterBlockHeader>
              <List list={States} />
              <FooterBlockAll>Все страны →</FooterBlockAll>
            </nav>
          </div>
          <div className="col-xs-6">
            <FooterBlockHeader>ГОРОДА</FooterBlockHeader>
            <List list={Cities} />
            <FooterBlockAll>Все аэропорты →</FooterBlockAll>
          </div>
          <div className="col-xs-6">
            <FooterBlockHeader>АВИАКОМПАНИИ</FooterBlockHeader>
            <List list={Carriers} />
            <FooterBlockAll>Все авиакомпании →</FooterBlockAll>
          </div>
          <div className="col-xs-6">
            <FooterBlockHeader>АЭРОПОРТЫ</FooterBlockHeader>
            <List list={Airports} />
            <FooterBlockAll>Все аэропорты →</FooterBlockAll>
          </div>
          <div className="col-xs-6">
            <FooterBlockHeader>НАПРАВЛЕНИЯ</FooterBlockHeader>
            <List list={Destinations} />
          </div>
          <div className="col-xs-6">
            <FooterBlockHeader>СЕРВИСЫ</FooterBlockHeader>
            <List list={Services} />
          </div>
        </div>
      </div>
      <StyledHr />
      <div className="container">
        <nav>
          <StyledInfoLink>О компании</StyledInfoLink>
          <StyledInfoLink>Партнёрская программа</StyledInfoLink>
          <StyledInfoLink>Реклама</StyledInfoLink>
          <StyledInfoLink>Вакансии</StyledInfoLink>
          <StyledInfoLink>Помощь</StyledInfoLink>
          <StyledInfoLink>Правила</StyledInfoLink>
          <StyledInfoLink>White Label авиабилеты</StyledInfoLink>
        </nav>
        <nav>
          <SocialIconBlock>
            <img src={vk} alt="VK" />
            <SocialIconCapture>Вконтакте</SocialIconCapture>
          </SocialIconBlock>
          <SocialIconBlock>
            <img src={facebook} alt="Facebook" />
            <SocialIconCapture>Фейсбук</SocialIconCapture>
          </SocialIconBlock>
          <SocialIconBlock>
            <img src={instagram} alt="Instagram" />
            <SocialIconCapture>Инстаграм</SocialIconCapture>
          </SocialIconBlock>
          <SocialIconBlock>
            <img src={twitter} alt="Twitter" />
            <SocialIconCapture>Твиттер</SocialIconCapture>
          </SocialIconBlock>
          <SocialIconBlock>
            <img src={viber} alt="Viber" />
            <SocialIconCapture>Вайбер</SocialIconCapture>
          </SocialIconBlock>
        </nav>

        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <HotelLookLink>Поиск и бронирование отелей</HotelLookLink>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-3 col-xs-6 center-xs">
            <img src={apple} alt="App Store" />
            <img src={google} alt="Google Play Store" />
            <img src={microsoft} alt="Windows Phone" />
          </div>
        </div>
        <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
      </div>
    </StyledFooter>
  );
}
