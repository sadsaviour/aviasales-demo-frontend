import React from "react";
import styled from "styled-components";

import { AppAd } from "./AppAd";
import { Tips } from "./Tips";
import { SpecialOffersList } from "./SpecialOffersList";
import { BestPricesLastMonth } from "./BestPricesLastMonth";
import { PopularDestinationsCities } from "./PopularDestinationsCities";
import { DestinationTypesList } from "./DestinationTypesList";

export default function Main(props) {
  return (
    <div>
      <DestinationTypesList />

      <PopularDestinationsCities />

      <BestPricesLastMonth />
      <SpecialOffersList />
      <Tips />
      <AppAd />
    </div>
  );
}
