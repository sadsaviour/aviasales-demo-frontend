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

  margin-top: 12px;
  margin-bottom: 12px;

  size: 1px;
  color: #e0e6e8;
`;

const StyledInfoLink = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
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

  color: #5b5b5c;
`;

const AppLink = styled.img`
  margin-right: 10px;
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
          <div className="col-xs-6 col-md-3 col-lg-2">
            <nav>
              <FooterBlockHeader>СТРАНЫ</FooterBlockHeader>
              <List list={States} />
              <FooterBlockAll>Все страны →</FooterBlockAll>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <FooterBlockHeader>ГОРОДА</FooterBlockHeader>
            <List list={Cities} />
            <FooterBlockAll>Все аэропорты →</FooterBlockAll>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <FooterBlockHeader>АВИАКОМПАНИИ</FooterBlockHeader>
            <List list={Carriers} />
            <FooterBlockAll>Все авиакомпании →</FooterBlockAll>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <FooterBlockHeader>АЭРОПОРТЫ</FooterBlockHeader>
            <List list={Airports} />
            <FooterBlockAll>Все аэропорты →</FooterBlockAll>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <FooterBlockHeader>НАПРАВЛЕНИЯ</FooterBlockHeader>
            <List list={Destinations} />
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <FooterBlockHeader>СЕРВИСЫ</FooterBlockHeader>
            <List list={Services} />
          </div>
        </div>
      </div>
      <StyledHr />
      {window.innerWidth <= 992 ? (
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

          <div className="row center-xs start-md ">
            <div className="col-xs-8 col-md-3">
              <HotelLookLink>Поиск и бронирование отелей</HotelLookLink>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-offset-3 col-xs-6 center-xs col-md-offset-0 col-md-12 start-md">
              <AppLink src={apple} alt="App Store" />
              <AppLink src={google} alt="Google Play Store" />
              <AppLink src={microsoft} alt="Windows Phone" />
            </div>
          </div>
          <Copyright className="center-xs">
            © 2007–2018, Aviasales — дешевые авиабилеты
          </Copyright>
        </div>
      ) : (
        <div className="container" style={{ marginTop: "26px" }}>
          <div className="row">
            <div className="col-lg-8">
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
              <HotelLookLink>Поиск и бронирование отелей</HotelLookLink>
            </div>
            <div className="col-lg-4">
              <div className="row end-lg">
                <AppLink src={apple} alt="App Store" />
                <AppLink src={google} alt="Google Play Store" />
                <AppLink
                  src={microsoft}
                  alt="Windows Phone"
                  style={{ marginRight: "8px" }}
                />
              </div>
              <Copyright className="end-lg" style={{ marginTop: "32px" }}>
                © 2007–2018, Aviasales — дешевые авиабилеты
              </Copyright>
            </div>
          </div>
        </div>
      )}
    </StyledFooter>
  );
}
