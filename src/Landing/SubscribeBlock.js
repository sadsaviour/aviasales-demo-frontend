import React from "react";
import styled from "styled-components";

import vkIcon from "./Assets/vk.svg";
import facebookIcon from "./Assets/f.svg";
import twitterIcon from "./Assets/twi.svg";
import RSSIcon from "./Assets/rss.svg";

import postCardStrap from "./Assets/postStrap.png";

const SubscribeBlockContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 48px;

  padding-left: 16px;
  padding-right: 16px;

  background: url(${postCardStrap});
  background-repeat: no-repeat;
`;

const SubscribeBlockHeader = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5c5c5c;
`;

const SubscribeBlockSubHeader = styled.h3`
  margin-bottom: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;

  color: #5c5c5c;
`;

const SocialIconsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 12px;
`;

const LeaveEmailContainer = styled.div`
  width: 330px;

  margin-top: 12px;
  margin-bottom: 12px;

  margin-left: 16px;

  text-align: justify;

  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
`;

const LeaveEmailInput = styled.input`
  display: inline-block;

  width: 169px;

  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 9px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;

  color: #a0b0b9;

  border: 0;
`;
const LeaveEmailSubmit = styled.button`
  display: inline-block;

  padding-top: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 6px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;

  border: 0;
  background: #ff8e41;
  border-radius: 2px;
`;

export const SubscribeBlock = () => (
    <SubscribeBlockContainer>
      <div className="row ">
        <div className="col-md-6 col-md-offset-3 col-xl-4 col-xl-offset-1">
          <div className="row center-md start-xl">
            <SubscribeBlockHeader>
              Хотите знать всё о скидках на авиабилеты?
            </SubscribeBlockHeader>
          </div>
          <div className="row center-md start-xl">
            <SubscribeBlockSubHeader>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </SubscribeBlockSubHeader>
          </div>
        </div>
        <div className="col-md-6 col-md-offset-3 col-xl-5 col-xl-offset-1">
          <div className="row center-md">
            <SocialIconsContainer>
              <img src={vkIcon} alt="vk" style={{ marginRight: "6px" }} />
              <img
                src={facebookIcon}
                alt="facebook"
                style={{ marginRight: "6px" }}
              />
              <img
                src={twitterIcon}
                alt="twitter"
                style={{ marginRight: "6px" }}
              />
              <img src={RSSIcon} alt="RSS" />
            </SocialIconsContainer>
            <LeaveEmailContainer>
              <LeaveEmailInput type="email" placeholder="Ваш email" />
              <LeaveEmailSubmit>Подписаться</LeaveEmailSubmit>
            </LeaveEmailContainer>
          </div>
        </div>
      </div>
    </SubscribeBlockContainer>
  );
