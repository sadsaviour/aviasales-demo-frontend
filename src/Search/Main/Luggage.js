import React from "react";
import styled from "styled-components";

import carryOnIcon from "./img/carryon-icon.svg";
import luggageIcon from "./img/luggage-icon.svg";

function CarryOnIcon(props) {
  const limit = props.limit;
  const include = props.include;

  const Block = styled.div`
    position: relative;
    width: 19px;
    height: 20px;
    text-align: center;
  `;

  const LimitText = styled.div`
    position: absolute;
    top: 7px;
    left: 3px;

    width: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 10px;
    text-align: center;
    letter-spacing: -0.4px;

    color: #9ab0b9;
  `;

  return (
    <Block>
      <img src={carryOnIcon} alt="CarryOn limit" />
      {include ? <LimitText>{limit}</LimitText> : <LimitText>?</LimitText>}
    </Block>
  );
}

function LuggageIcon(props) {
  const limit = props.limit;
  const include = props.include;

  const Block = styled.div`
    position: relative;
    width: 19px;
    height: 20px;
    text-align: center;
  `;

  const LimitText = styled.div`
    position: absolute;
    top: 7px;
    left: 3px;

    width: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 10px;
    text-align: center;
    letter-spacing: -0.4px;

    color: #9ab0b9;
  `;

  return (
    <Block>
      <img src={luggageIcon} alt="Luggage limit" />
      {include ? <LimitText>{limit}</LimitText> : <LimitText>×</LimitText>}
    </Block>
  );
}

export default function Luggage(props) {
  const luggage = props.luggage;
  const extraOption = luggage.extra ? true : false;

  const BasicBlock = styled.div`
    box-sizing: border-box;
    height: 56px;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    flex-basis: 50%;

    padding-top: 10px;
    padding-bottom: 15px;

    margin-bottom: 10px;

    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;

    background: #f8fbfb;
  `;

  const BasicBlockSingle = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    flex-basis: 100%;

    padding-top: 10px;
    margin-bottom: 10px;

    border-bottom: 0;
    border-right: 0;

    background: #fff;
  `;

  const ExtraBlock = BasicBlock.extend`
    padding-top: 10px;
    padding-bottom: 15px;

    flex-basis: 50%;

    border-bottom: 0;
    border-right: 0;

    background: #fff;
  `;

  const NoLuggageWarning = styled.div`
    width: 100%;

    margin-top: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 15px;
    font-size: 10px;
    text-align: center;

    color: #9ab0b9;
  `;

  const ExtraFee = styled.div`
    width: 100%;

    margin-top: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    font-size: 10px;
    text-align: center;

    color: #66d295;
  `;

  const basicLuggage = !extraOption ? (
    <BasicBlockSingle>
      <CarryOnIcon
        limit={luggage.basic.carryOnLimit}
        include={luggage.basic.includeCarryOn}
      />
      <LuggageIcon
        limit={luggage.basic.luggageLimit}
        include={luggage.basic.includeLuggage}
      />
    </BasicBlockSingle>
  ) : (
    <BasicBlock>
      <CarryOnIcon
        limit={luggage.basic.carryOnLimit}
        include={luggage.basic.includeCarryOn}
      />
      <LuggageIcon
        limit={luggage.basic.luggageLimit}
        include={luggage.basic.includeLuggage}
      />
      <NoLuggageWarning>Нет багажа</NoLuggageWarning>
    </BasicBlock>
  );
  const extraLuggage = extraOption && (
    <ExtraBlock>
      <CarryOnIcon
        limit={luggage.extra.carryOnLimit}
        include={luggage.extra.includeCarryOn}
      />
      <LuggageIcon
        limit={luggage.extra.luggageLimit}
        include={luggage.extra.includeLuggage}
      />
      <ExtraFee>{luggage.extra.fee}</ExtraFee>
    </ExtraBlock>
  );
  return (
    <div className="row">
      {basicLuggage} {extraLuggage}
    </div>
  );
}
