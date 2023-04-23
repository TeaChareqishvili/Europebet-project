import React from "react";
import { useState } from "react";
import { rulesData } from "../content/cash-game/data";
import AdditionalRules from "./Rules";
import { RulesWrapper, Rules } from "./RulesStyled";

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
