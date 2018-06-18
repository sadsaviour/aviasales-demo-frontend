import React from "react";
import styled from "styled-components";

import { tipsText } from "./bestPrices";

const TipsHeader = styled.h2`
  margin-top: 22px;

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

export const Tips = () => {
  return (
    <div className="col-xs-12 col-lg-10 col-lg-offset-1">
      {tipsText.map(t => (
        <section key={t.heading}>
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
