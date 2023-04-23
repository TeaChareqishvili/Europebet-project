import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import CashGame from "./cash-game/CashGame";
import SpringSeries from "./spring-series/SpringSeries";

function Tabs() {
  const tabContent = [
    { title: "Cash Games", subtitle: "1-29 აპრილი" },
    { title: "Spring Series", subtitle: "13-29 აპრილი" },
    { title: "Final Stage", subtitle: "30 აპრილი" },
  ];
  const [active, setActive] = useState(0);
  const clickHandler = (id) => {
    setActive(id);
  };
  return (
    <>
      <TabsWrapper>
        {tabContent.map((tab, id) => (
          <Tab key={id} act={active === id} onClick={() => clickHandler(id)}>
            <div />
            <span>{tab.subtitle}</span>
            <p>{tab.title}</p>
          </Tab>
        ))}
      </TabsWrapper>
      {active === 0 ? (
         <CashGame/>
      ) : active === 1 ? (
       <SpringSeries/>
      ) : (
        <div className="content"></div>
      )}
    </>
  );
}

export default Tabs;

const TabsWrapper = styled.div`
  background-color: #2c3234;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 39px 0 30px;
  .content {
    height: 300px;
    background: green;
  }
  @media (min-width: 768px) {
    border-radius: 12px;
  }
`;

const Tab = styled.div`
  position: relative;
  color: #ffffff;
  border-radius: 8px;
  padding: 22px 9px;
  width: 100%;
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  div {
    background-color: ${(p) => (p.act ? "#EF5A21" : "transparent")};
    transform: ${(p) => (p.act ? "scaleY(1.1)" : "scaleY(0.9)")};
    transition: transform 0.2s linear;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 8px;
    z-index: 0;
  }
  span {
    font-size: 10px;
    opacity: 80%;
    padding-bottom: 4px;
  }

  p {
    z-index: 1;
    font-weight: bold;
    white-space: nowrap;
    font-size: ${(p) => (p.act ? "14px" : "12px")};
  }

  @media (min-width: 768px) {
    border-radius: 12px;
    p {
      font-size: ${(p) => (p.act ? "18px" : "14px")};
    }
    span {
      font-size: ${(p) => (p.act ? "14px" : "10px")};
    }
  }
`;
