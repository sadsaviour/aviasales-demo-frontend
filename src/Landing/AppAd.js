import React from "react";
import styled from "styled-components";

import appDemo from "./Assets/ios-app-demo.png";
import rating from "./Assets/rating.svg";
import apple from "./Assets/apple.svg";
import android from "./Assets/android.svg";
import wf from "./Assets/wf.svg";

const AppAdContainer = styled.div`
  position: relative;

  margin-top: 24px;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
  }

  width: 100%;
  height: 348px;

  @media only screen and (min-width: 768px) {
    height: 281px;
  }

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;

  color: #ffffff;

  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const AppAdHeader = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;

  line-height: normal;
  font-size: 24px;

  @media only screen and (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
  }

  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }

  color: #ffffff;
`;

const AppAdRatingContainer = styled.div`
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const AppAdLinksContainer = styled.div`
  position: absolute;
  bottom: 20px;
  vertical-align: top;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }

  @media only screen and (min-width: 768px) {
    .firstInLine {
      margin-left: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .middleInLine {
      margin-left: 0;
      margin-right: 0;

      padding-left: 20px;
      padding-right: 20px;

      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
`;

const AppAdLink = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;

  text-align: left;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    .firstInLine {
      margin-left: 0;
    }
  }
`;

const AppAdImage = styled.img`
  position: absolute;

  width: 162px;
  height: 213px;

  @media only screen and (min-width: 768px) {
    width: 237px;
    height: 312px;
  }

  bottom: 0;
  left: 0;

  @media only screen and (min-width: 992px) {
    left: auto;
  }
`;

const AppAdStoreIcon = styled.img`
  display: inline-block;

  margin-right: 8px;

  vertical-align: top;
`;

export const AppAd = () => (
  <div className="row">
    <AppAdContainer>
      <div className="col-xs-0 col-md-4">
        <AppAdImage src={appDemo} alt="app screenshot" />
      </div>
      <div className="col-xs-12 col-md-8 col-md-offset-4">
        <AppAdHeader>
          Скачай мобильное <br className="hidden-xs hidden-xl" /> приложение
          Aviasales.ru
        </AppAdHeader>
        <AppAdRatingContainer>
          <img
            src={rating}
            alt="rating"
            style={{ display: "inline-block", marginRight: "12px" }}
          />
          <span>Более 103 000 оценок</span>
        </AppAdRatingContainer>
        <div className="row">
          <div className="col-xs-offset-6 col-xs-6 col-md-12 col-md-offset-0">
            <AppAdLinksContainer>
              <AppAdLink className="firstInLine">
                <AppAdStoreIcon src={apple} alt="App Store" />
                iPhone или iPad
              </AppAdLink>
              <AppAdLink className="middleInLine">
                <AppAdStoreIcon src={android} alt="Google Play Store" />Android
              </AppAdLink>
              <AppAdLink>
                <AppAdStoreIcon src={wf} alt="Windows Phone" />Windows Phone
              </AppAdLink>
            </AppAdLinksContainer>
          </div>
        </div>
      </div>
    </AppAdContainer>
  </div>
);
