import React from "react";
import styled from "styled-components";

export default function AdditionalRules({ isActive }) {
  return (
    <>
      {isActive ? (
        <RulesContent>
          <p>
            აქცია დაიწყება 1 აპრილს 00:00 საათზე და დასრულდება 30 აპრილს 23:59
            საათზე
          </p>
          <p>
            კამპანიის ფარგლებში, თამაშდება სხადასხვა კატეგორიის The Festival in
            Malta-ს საგზურები
          </p>
        </RulesContent>
      ) : isActive ? (
        <AboutRules>
        
        </AboutRules>
      ) : isActive ? (
        <General>
        
        </General>
      ) : (
        <></>
      )}
    </>
  );
}

export const RulesContent = styled.div`
  padding: 20px 10px;

  p {
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    line-height: 1.6;
    font-weight: bold;
  }
`;
export const AboutRules = styled.div`
  padding: 20px 10px;

  p {
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    line-height: 1.6;
    font-weight: bold;
  }
`;

export const General = styled.div`
  padding: 20px 10px;

  p {
    color: #ffffff;
    font-size: 15px;
    text-align: left;
    line-height: 1.6;
    font-weight: bold;
  }
`;
