import React from "react";
import styled from "styled-components";

import { bestPricesLastMonth } from "./bestPrices";
import bestPricesCalendarIcon from "./Assets/bestPricesCalendarIcon.svg";

export const CalendarIcon = ({ className }) => (
  <img className={className} src={bestPricesCalendarIcon} alt="calendar" />
);

const LastMonthContainer = styled.div`
  padding-top: 32px;
`;

const CalendarHeader = styled.div`
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

const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 992px) {
    width: 33%;
  }

  margin-top: 16px;

  @media only screen and (min-width: 758px) {
    margin-top: 36px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 60px;
  }

  padding-top: 24px;
  padding-bottom: 24px;

  @media only screen and (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
  }

  font-family: Roboto;
  font-style: normal;

  border-bottom: 0.4px dashed #afbec6;

  :last-child {
    border-bottom: none;
  }

  @media only screen and (min-width: 992px) {
    border-bottom: none;
    :first-child {
      border-right: 0.4px dashed #afbec6;
    }
    :last-child {
      border-left: 0.4px dashed #afbec6;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const CityContainer = styled.div`
  flex-grow: 1;

  margin-bottom: 24px;
`;

const City = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: bold;
  line-height: 32px;
  font-size: 22px;

  color: #5b5b5c;
`;
const Country = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

const BestPriceContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media only screen and (min-width: 992px) {
    max-width: 300px;
  }

  margin-bottom: 16px;

  :last-child {
    margin-bottom: 0;
  }
`;

const Origin = styled.div`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #4a4a4a;
`;
const Price = styled.div`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #00bae8;
`;

const Flag = styled.img`
  margin-top: 8px;

  width: 30px;
  height: 30px;
`;

const Capture = styled.div`
  margin-top: 32px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  text-align: center;

  color: #4a4a4a;
`;

const Disclaimer = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;

  @media only screen and (min-width: 758px) {
    margin-bottom: 60px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;

  color: #a0b0b9;
`;

export const BestPricesLastMonth = () => (
  <LastMonthContainer>
    <div className="col-xs-12 col-md-10 col-md-offset-1">
      <div className="row center-xs">
        <CalendarIcon />
      </div>
      <CalendarHeader>
        Лучшие цены на авиабилеты за последний месяц
      </CalendarHeader>
      <div className="row between-lg">
        {bestPricesLastMonth.map(c => (
          <Container key={c.city}>
            <div className="col-lg-12">
              <Header>
                <Flag src={c.flag} alt={c.country} />
                <CityContainer>
                  <City>{c.city}</City>
                  <Country>{c.country}</Country>
                </CityContainer>
              </Header>

              {c.prices.map(p => (
                <BestPriceContainer key={p.origin}>
                  <Origin>{p.origin}</Origin>
                  <Price>{p.price}</Price>
                </BestPriceContainer>
              ))}
            </div>
          </Container>
        ))}
      </div>
      <div className="row center-xs">
        <Capture>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </Capture>
        <Disclaimer>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </Disclaimer>
      </div>
    </div>
  </LastMonthContainer>
);
