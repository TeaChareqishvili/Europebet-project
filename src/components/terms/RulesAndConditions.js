import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { rulesData } from "../content/cash-game/data";
import AdditionalRules from "./Rules";

export default function RulesAndCondition() {
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState("");
  const [anim, setAnim] = useState(false);

  const clickHandler = (id) => {
    if (id === active) {
      setIsActive(false);
      setAnim(false);
      setActive("");
    } else {
      setIsActive(true);
      setAnim(true);
      setActive(id);
    }
  };

  return (
    <>
      <RulesWrapper>
        <h3>წესები და პირობები</h3>
        {rulesData.map((item, id) => (
          <div key={id}>
            <Rules
              onClick={() => clickHandler(id)}
              anim={anim && active === id}
            >
              <p>{item.text}</p>
              <img src={item.image} alt="vector" />
            </Rules>
            <AdditionalRules isActive={isActive && active === id} />
          </div>
        ))}
      </RulesWrapper>
    </>
  );
}

export const RulesWrapper = styled.div`
  width: 100%;
  max-width: 940px;
  margin: auto;
  padding: 25px 0;
  h3 {
    color: #ffffff;
    font-size: 16px;
    padding-bottom: 21px;
    font-weight: medium;
  }

  @media (min-width: 768px) {
    h3 {
      color: #ffffff;
      font-size: 18px;
      padding-bottom: 32px;
    }
  }
`;

export const Rules = styled.div`
  background-color: #25292b;
  padding: 7px 15px 9px 14px;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  p {
    color: #bbbbbb;
    font-size: 14px;
    line-height: 1.7;
  }
  img {
    transform: ${(p) => (p.anim ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.2s linear;
  }

  @media (min-width: 768px) {
    padding: 21px 24px 20px 26px;
    margin-bottom: 9px;

    p {
      color: #ffffff;
      font-size: 15px;
    }
  }
`;
