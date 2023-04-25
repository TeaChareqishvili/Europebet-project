import React from "react";
import styled from "styled-components";
import tourSatelliteimg from "../../../assets/tournament-bg.png";
import Text from "./satelliteDescription";
// import tourLargeImg from "../../../assets/main-bg.png";

export default function Satellite() {
  return (
    <SatelliteWrapper>
      <h3>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>
      <ImageWrapper>
        <Image>
          <img src={tourSatelliteimg} alt="satelliteimg" />
          {/* <img src={tourSatelliteimg} alt="satelliteimg"/>
            <img src={tourLargeImg} alt="satelliteimg"/> */}
          <PriceOver>
            <Text />
          </PriceOver>
        </Image>
      </ImageWrapper>
    </SatelliteWrapper>
  );
}



export const SatelliteWrapper = styled.div`
  width: 100%;
  max-width: 940px;
  background-color: #171718;
  margin-bottom:24px;

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
  }

  @media (min-width: 768px) {
    border: solid 4px #25292b;
    border-radius: 16px;
    padding: 26px 24px 20px 24px;

    h3 {
      font-size: 18px;
    }
  }
`;

export const ImageWrapper = styled.div``;

export const PriceOver = styled.div`
  position: absolute;
  
`;


export const Image = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 24px 0 17px 0;
  align-items: center;
`;
