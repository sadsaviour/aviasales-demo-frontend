import kr from "./Assets/krasnodar.jpg";
import bar from "./Assets/barcelona.jpg";
import minv from "./Assets/minvody.jpg";
import saintP from "./Assets/saint-p.jpg";
import simph from "./Assets/simpheropol.jpg";
import sochy from "./Assets/sochy.jpg";

import ruFlag from "./Assets/ruFlag.svg";
import mdFlag from "./Assets/mdFlag.png";
import amFlag from "./Assets/amFlag.svg";

import pobeda from "./Assets/pobeda.png";
import lufthansa from "./Assets/lufthansa.png";
import star from "./Assets/starAlliance.png";

import eTicketIcon from "./Assets/tips__eticket.svg";
import cheapIcon from "./Assets/tips__cheap-flights.svg";
import adviceIcon from "./Assets/tips__advice.svg";

export const topDestinations = [
  {
    city: "Краснодар",
    country: "РОССИЯ",
    price: "Найти от 1 212 ₽",
    date: "18 марта",
    img: kr
  },
  {
    city: "Сочи (Адлер)",
    country: "РОССИЯ",
    price: "Найти от 1 334 ₽",
    date: "27 марта",
    img: sochy
  },
  {
    city: "Санкт-Петербург",
    country: "РОССИЯ",
    price: "Найти от 1 508 ₽",
    date: "19 февраля",
    img: saintP
  },
  {
    city: "Минеральные Воды",
    country: "РОССИЯ",
    price: "Найти от 2 074 ₽",
    date: "13 марта",
    img: minv
  },
  {
    city: "Симферополь (Кр…",
    country: "РОССИЯ",
    price: "Найти от 2 407 ₽",
    date: "13 марта",
    img: simph
  },
  {
    city: "Барселона",
    country: "ИСПАНИЯ",
    price: "Найти от 4 247 ₽",
    date: "24 марта",
    img: bar
  }
];

export const bestPricesLastMonth = [
  {
    flag: ruFlag,
    city: "Симферополь (Крым)",
    country: "КРЫМ",
    prices: [
      {
        origin: "Из Москвы",
        price: "от 4 813 ₽"
      },
      {
        origin: "Из Санкт-Петербурга",
        price: "от 7 857 ₽"
      },
      {
        origin: "Из Новосибирска",
        price: "от 15 127 ₽"
      },
      {
        origin: "Из Екатеринбурга",
        price: "от 9 275 ₽"
      },
      {
        origin: "Из Челябинска",
        price: "от 9 148 ₽"
      }
    ]
  },
  {
    flag: amFlag,
    city: "Ереван",
    country: "АРМЕНИЯ",
    prices: [
      {
        origin: "Из Москвы",
        price: "от 6 758 ₽"
      },
      {
        origin: "Из Санкт-Петербурга",
        price: "от 9 932 ₽"
      },
      {
        origin: "Из Сочи",
        price: "от 11 951 ₽"
      },
      {
        origin: "Из Краснодара",
        price: "от 11 741 ₽"
      },
      {
        origin: "Из Ростова-на-Дону",
        price: "от 11 956 ₽"
      }
    ]
  },
  {
    flag: mdFlag,
    city: "Кишинёв",
    country: "МОЛДАВИЯ",
    prices: [
      {
        origin: "Из Москвы",
        price: "от 8 319 ₽"
      },
      {
        origin: "Из Санкт-Петербурга",
        price: "от 10 800 ₽"
      },
      {
        origin: "Из Краснодара",
        price: "от 12 098 ₽"
      },
      {
        origin: "Из Сургута",
        price: "от 16 277 ₽"
      },
      {
        origin: "Из Нового Уренгоя",
        price: "от 15 987 ₽"
      }
    ]
  }
];

export const specialOffers = [
  {
    offerHighlight: "Билеты от 499 рублей!",
    allianceLogo: false,
    carrier: "Pobeda",
    logo: pobeda,
    price: "499 ₽",
    expirationTime: "Осталось 45 дней",
    offerText:
      "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    offerHighlight: "В Нью-Йорк от 20 680 ₽",
    allianceLogo: star,
    carrier: "Lufthansa",
    logo: lufthansa,
    price: "20 680 ₽",
    expirationTime: "Осталось 19 дней",
    offerText:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    offerHighlight: "В Лос-Анджелес от…",
    allianceLogo: star,
    carrier: "Lufthansa",
    logo: lufthansa,
    price: "20 360 ₽",
    expirationTime: "Осталось 19 дней",
    offerText:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

export const tipsText = [
  {
    icon: cheapIcon,
    heading: "КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?",
    text:
      "Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском, который совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год.",
    link: "Подробнее"
  },
  {
    icon: eTicketIcon,
    heading: "ЭЛЕКТРОННЫЙ АВИАБИЛЕТ",
    text:
      "Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4, на котором распечатана вся информация о предстоящем перелете. Однако это действительно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет. Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего бумажного аналога.",
    link: "Подробнее"
  },
  {
    icon: adviceIcon,
    heading: "20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ",
    text:
      "Есть масса путеводителей по странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путешествию. Ведь настоящее путешествие начинается со слов «Добро пожаловать на борт нашего самолета»!",
    link: "Подробнее"
  }
];
