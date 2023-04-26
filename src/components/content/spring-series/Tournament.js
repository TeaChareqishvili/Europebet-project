import React from "react";

import styled from "styled-components";
import timeIcon from "../../../assets/time.png";
import cardRight from "../../../assets/promo-right-img.png";
import cardRightsm from "../../../assets/promo-right-img-m.png";
import cardLeft from "../../../assets/promo-left-img.png";
import cardLeftsm from "../../../assets/promo-left-img-m.png";

export default function TournamentContent() {
  return (
    <Content>
      <h3>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h3>
      <div className="time-wrapper">
        <img src={cardLeftsm} alt="card" className="cardLeftsm" />
        <img src={timeIcon} alt="time" />
        <img src={cardRightsm} alt="card" className="cardRightsm" />
      </div>
      <div className="mobileBackground">
        <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
        <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
        <button>პოკერის ლობი</button>
      </div>
      <div className="leftCard">
        <img src={cardLeft} alt="card" />
      </div>
      <div className="rightCard">
        <img src={cardRight} alt="card" />
      </div>
    </Content>
  );
}

export const Tournament = styled.div`
  background-color: #171718;
  border-radius: 16px;
  border: solid 4px #2c3234;
  width: 100%;
  max-width: 940px;
  margin-bottom: 23px;
  margin-bottom: 23px;
`;
export const TournamentHeader = styled.div`
  background-color: #2c3234;
  padding: 24px 0 23px 0;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: -4px;
    transform: translateX(50%);
    right: 50%;
    height: 4px;
    width: 30%;
    border-radius: 0 0 4px 4px;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
  }
  h2 {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .time-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .cardRightsm {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .cardLeftsm {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .leftCard {
    display: none;
  }
  .rightCard {
    display: none;
  }
  h3 {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    line-height: 2;
    padding: 14px 15px 16px 15px;
    text-align: center;
  }

  .mobileBackground {
    background-color: #2c3234;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  }

  button {
    padding: 7px 18px 7px 18px;
    background-color: #f05a22;
    border-radius: 5px;
    color: #ffffff;
    font-size: 15px;
    border: none;
    margin: 21px 0 28px 0;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    color: #ffffff;
    font-weight: Medium;
    text-align: center;
    padding: 12px 10px 0 11px;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 18px;
      padding: 14px 0 0 0;
    }

    .mobileBackground {
      background-color: #171718;
    }
    .cardRightsm,
    .cardLeftsm {
      display: none;
    }
    .leftCard {
      display: block;
      position: absolute;
      bottom: -4px;
      left: 0;
    }
    .rightCard {
      display: block;
      position: absolute;
      bottom: -4px;
      right: 0;
    }
  }
`;
