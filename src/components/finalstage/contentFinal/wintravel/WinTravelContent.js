import React from "react";
import { travelDataTickets, travelRightData } from "../../../content/cash-game/data";
import { WinTravelHeader, WinTravelList, WinTravelWrapper } from "./WinTravelStyle";

export default function WinTravelContent() {
  return (
    <>
      <WinTravelHeader>
        <h3>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</h3>
      </WinTravelHeader>
      <WinTravelWrapper>
        <div>
        {travelDataTickets.map((item,id)=>(
              <WinTravelList key={id}>
              <div className="title">
                  <h3>{item.textTitle}</h3>
                  <p>{item.text}</p>
              </div>
              <div className="image">
                  <img src={item.image}alt=""/>
              </div>
          </WinTravelList>
        ))}
        </div>
        <div>
            {travelRightData.map((item,id)=>(
                 <WinTravelList key={id}>
                   <div className="title">
                  <h3>{item.textTitle}</h3>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
              </div>
              <div className="image">
                  <img src={item.image}alt=""/>
              </div>
                 </WinTravelList>
            ))}
        </div>
        
       
      </WinTravelWrapper>
    </>
  );
}
