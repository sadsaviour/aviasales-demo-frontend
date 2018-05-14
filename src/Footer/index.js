import React, { Component } from "react";
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

const Carriers = ["Air Berlin", "Air France", "Air Baltic", "Emirates,", "KLM"];

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

function List(props) {
  return props.list.map(i => <p>{i}</p>);
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <h2>СТРАНЫ</h2>
              <List list={States} />
              <p>Все страны →</p>
            </div>
            <div className="col-xs-6">
              <h2>ГОРОДА</h2>
              <List list={Cities} />
              <p>Все аэропорты →</p>
            </div>
            <div className="col-xs-6">
              <h2>АВИАКОМПАНИИ</h2>
              <List list={Carriers} />
              <p>Все авиакомпании →</p>
            </div>
            <div className="col-xs-6">
              <h2>АЭРОПОРТЫ</h2>
              <List list={Airports} />
              <p>Все аэропорты →</p>
            </div>
            <div className="col-xs-6">
              <h2>НАПРАВЛЕНИЯ</h2>
              <List list={Destinations} />
            </div>
            <div className="col-xs-6">
              <h2>СЕРВИСЫ</h2>
              <p>Горящие авиабилеты</p>
              <p>Календарь низких цен</p>
              <p>Карта низких цен</p>
              <p>Спецпредложения</p>
              <p>Таблица цен</p>
              <p>Блог</p>
              <p>Помощь</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <p>О компании</p>
            <p>Партнёрская программа</p>
            <p>Реклама</p>
            <p>Вакансии</p>
            <p>Помощь</p>
            <p>Правила</p>
            <p>White Label авиабилеты</p>
          </div>
          <div className="row">
            <img src={vk} alt="VK" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={viber} alt="Viber" />
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <h3>Поиск и бронирование отелей</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <img src={apple} alt="App Store" />
              <img src={google} alt="Google Play Store" />
              <img src={microsoft} alt="Windows Phone" />
            </div>
          </div>
          <div className="row">
            <p>© 2007–2018, Aviasales — дешевые авиабилеты</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
