import React from "react";

import { AppAd } from "./AppAd";
import { Tips } from "./Tips";
import { SpecialOffersList } from "./SpecialOffersList";
import { BestPricesLastMonth } from "./BestPricesLastMonth";
import { PopularDestinationsCities } from "./PopularDestinationsCities";
import { DestinationTypesList } from "./DestinationTypesList";
import { AdsCarousel } from "./AdsCarousel";
import { SubscribeBlock } from "./SubscribeBlock";

export default function Main(props) {
  return (
    <div>
      <DestinationTypesList />

      <PopularDestinationsCities />

      <BestPricesLastMonth />
      <div className="hidden-xs">
        <AdsCarousel />
      </div>
      <SubscribeBlock />
      <SpecialOffersList />
      <Tips />
      <AppAd />
    </div>
  );
}
