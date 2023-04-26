import React from "react";
import { useState } from "react";
import CashGame from "./cash-game/CashGame";
import SpringSeries from "./spring-series/SpringSeries";
import { TabsWrapper, Tab } from "./SideLeaderBoardStyled";
import FinalStage from "./finalstage/FinalStage";
function Content() {
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
        <CashGame />
      ) : active === 1 ? (
        <SpringSeries />
      ) : (
        <FinalStage/>
      )}
    </>
  );
}

export default Content;
