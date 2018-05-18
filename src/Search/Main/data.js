export const filters = {
  changes: [
    {
      option: "Без пересадок",
      price: "7 712 ₽"
    },
    {
      option: "1 пересадка",
      price: "11 150 ₽"
    },
    {
      option: "2 пересадки",
      price: "16 821 ₽"
    },
    {
      option: "3 пересадки",
      price: "23 986 ₽"
    }
  ],
  departureTime: {
    direct: {
      departureTimeFrom: "c 00:05, 24 фев",
      departureTimeTo: "до 23:45, 24 фев",
      arrivalTimeFrom: "c 03:05, 24 фев",
      arrivalTimeTo: "до 13:50, 26 фев"
    },
    back: {
      departureTimeFrom: "c 06:00, 3 мар",
      departureTimeTo: "до 23:45, 3 мар",
      arrivalTimeFrom: "c 15:00, 3 мар",
      arrivalTimeTo: "до 09:55, 5 мар"
    }
  },
  duration: [],
  carriers: {
    carriersNumber: 43,
    alliances: [
      {
        name: "Star Alliance",
        price: "11 150 ₽"
      },
      {
        name: "OneWorld",
        price: "12 370 ₽"
      },
      {
        name: "SkyTeam",
        price: "16 290 ₽"
      }
    ],
    carriers: [
      {
        name: "Aegean Airlines",
        price: "20 357 ₽"
      },
      {
        name: "Air Algerie",
        price: "29 105 ₽"
      },
      {
        name: "Air Europa",
        price: "22 202 ₽"
      },
      {
        name: "Air France",
        price: "17 050 ₽"
      },
      {
        name: "Air Moldova",
        price: "22 613 ₽"
      },
      {
        name: "Alitalia",
        price: "22 717 ₽"
      },
      {
        name: "Alitalia CityLiner",
        price: "20 271 ₽"
      },
      {
        name: "Belle Air",
        price: "18 371 ₽"
      },
      {
        name: "British Airways",
        price: "23 839 ₽"
      },
      {
        name: "Brussels Airlines",
        price: "11 150 ₽"
      },
      {
        name: "Bulgaria Air",
        price: "20 114 ₽"
      }
    ]
  },
  airportsOfChangeNumber: 71,
  agenciesNumber: 26
};

const flightsData = [
  {
    id: "1",
    carrier: "Rossya",
    charter: true,
    direct: true,
    offers: {
      best: {
        price: "7 712 ₽",
        source: "Clickavia"
      }
    },
    luggage: {
      basic: {
        includeLuggage: true,
        includeCarryOn: true,
        carryOnLimit: 5,
        luggageLimit: 15
      }
    },
    directFlight: {
      departure: {
        time: "00:05",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "03:05",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "5ч"
    },
    backFlight: {
      departure: {
        time: "10:35",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:10",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "SVO"
      },
      flightDuration: "4ч 35 м"
    }
  },
  {
    id: "2",
    carrier: "Nordwind",
    charter: false,
    direct: true,
    offers: {
      best: {
        price: "8 029 ₽",
        source: "на Билетик Аэро"
      }
    },
    luggage: {
      basic: {
        includeLuggage: false,
        includeCarryOn: true,
        carryOnLimit: 5
      }
    },
    directFlight: {
      departure: {
        time: "00:15",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "03:10",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "4ч 55м"
    },
    backFlight: {
      departure: {
        time: "10:45",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:15",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      flightDuration: "4ч 30 м"
    }
  },
  {
    id: "3",
    carrier: "Nordwind",
    charter: true,
    direct: true,
    offers: {
      best: {
        price: "8 164 ₽",
        source: "на Aviakassa"
      }
    },
    luggage: {
      basic: {
        includeLuggage: false,
        includeCarryOn: true,
        carryOnLimit: 5
      },
      extra: {
        extraLuggageOffer: true,
        carryOnLimit: 5,
        luggageLimit: 12,
        fee: "- 136 ₽"
      }
    },
    directFlight: {
      departure: {
        time: "00:15",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "03:10",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "4ч 55м"
    },
    backFlight: {
      departure: {
        time: "10:45",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:15",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      flightDuration: "4ч 30 м"
    }
  },
  {
    id: "4",
    carrier: "Red Wings",
    charter: true,
    direct: true,
    offers: {
      best: {
        price: "9 108 ₽",
        source: "на Clickavia"
      },
      extra: {
        toShow: [
          {
            price: "8 302 ₽",
            source: "Clickavia"
          },
          {
            price: "8 376 ₽",
            source: "Aviakassa"
          }
        ],
        toHide: "+ Еще 3 предложения"
      },
      lowStockWarning: ""
    },
    luggage: {
      basic: {
        includeLuggage: false,
        includeCarryOn: true,
        carryOnLimit: 10
      },
      extra: {
        extraLuggageOffer: true,
        carryOnLimit: 10,
        luggageLimit: 20,
        fee: "- 267 ₽"
      }
    },
    directFlight: {
      departure: {
        time: "07:00",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "09:30",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "4ч 30м"
    },
    backFlight: {
      departure: {
        time: "11:00",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:10",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      flightDuration: "4ч 10 м"
    }
  },
  {
    id: "5",
    carrier: ["Red Wings", "Rossya"],
    charter: true,
    direct: true,
    offers: {
      best: {
        price: "9 108 ₽",
        source: "на Clickavia"
      }
    },
    luggage: {
      basic: {
        includeLuggage: true,
        includeCarryOn: true,
        carryOnLimit: 10,
        luggageLimit: 15
      }
    },
    directFlight: {
      departure: {
        time: "00:05",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "03:05",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "5ч"
    },
    backFlight: {
      departure: {
        time: "11:00",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:10",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      flightDuration: "4ч 10 м"
    }
  },
  {
    id: "6",
    carrier: "iFly",
    charter: true,
    direct: true,
    offers: {
      best: {
        price: "9 269 ₽",
        source: "на Biletix"
      },
      extra: {
        toShow: [
          {
            price: "9 275 ₽",
            source: "Svyaznoy Travel"
          },
          {
            price: "9 587 ₽",
            source: "Билетик Аэро"
          }
        ],
        toHide: "+ Еще 4 предложения"
      },
      lowStockWarning: "Осталось 4 билета"
    },
    luggage: {
      basic: {
        includeLuggage: true,
        includeCarryOn: false,
        luggageLimit: 20
      }
    },
    directFlight: {
      departure: {
        time: "07:30",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "09:50",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "4ч 20м"
    },
    backFlight: {
      departure: {
        time: "11:20",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:35",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      flightDuration: "4ч 15 м"
    }
  },
  {
    id: "7",
    carrier: ["Rossya", "Unknown"],
    charter: true,
    direct: true,
    offers: {
      best: {
        price: "9 485 ₽",
        source: "на Clickavia"
      }
    },
    luggage: {
      basic: {
        includeLuggage: true,
        includeCarryOn: false,
        luggageLimit: 15
      }
    },
    directFlight: {
      departure: {
        time: "00:05",
        date: "24 фев 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      arrival: {
        time: "03:05",
        date: "24 фев 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      flightDuration: "5ч"
    },
    backFlight: {
      departure: {
        time: "11:20",
        date: "3 мар 2018, Сб",
        city: "Барселона",
        airportCode: "BCN"
      },
      arrival: {
        time: "17:35",
        date: "3 мар 2018, Сб",
        city: "Москва",
        airportCode: "VKO"
      },
      flightDuration: "4ч 15 м"
    }
  }
];

export default flightsData;
