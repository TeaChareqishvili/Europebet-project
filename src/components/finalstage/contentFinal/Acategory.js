import React from "react";
import styled from "styled-components";
 import { travelData, travelData2 } from "../../content/cash-game/data";

export default function Acategory() {
  return (
    <CategoryWrapper>
      <Travel>
        <h3>A კატეგორიის საგზურში შედის</h3>
        <TravelIncludeWrapper>
           {travelData.map((item, id) => (
            <TravelIncludes key={id}>
              <img src={item.image} alt="icons" />
              <p>{item.text}</p>
            </TravelIncludes>
          ))} 
        </TravelIncludeWrapper>
      </Travel>
      <Travel>
        <h3>A კატეგორიის საგზურში შედის</h3>
        <TravelIncludeWrapper>
           {travelData.map((item, id) => (
            <TravelIncludes key={id}>
              <img src={item.image} alt="icons" />
              <p>{item.text}</p>
            </TravelIncludes>
          ))} 
        </TravelIncludeWrapper>
      </Travel>
      <Travel>
        <h3>A კატეგორიის საგზურში შედის</h3>
        <TravelIncludeWrapper>
           {travelData2.map((item, id) => (
            <TravelIncludes key={id}>
              <img src={item.image} alt="icons" />
              <p>{item.text}</p>
            </TravelIncludes>
          ))} 
        </TravelIncludeWrapper>
      </Travel>
      
    </CategoryWrapper>
  );
}

export const CategoryWrapper = styled.div`
    /* display:flex;
    justify-content:center;
    align-items:center; */

    @media(min-width:768px){
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:12px;
    }
`;

export const TravelIncludeWrapper = styled.div`
  background-color: #25292b;
  border: solid 1px #25292b;
  padding: 8px 12px 6px 12px;
  border-radius: 0 0 10px 10px;
`;

export const Travel = styled.div`
  width: 100%; 
  max-width: 301px;
  background-color: #2c3234;
  border-radius:10px;
  position: relative;


  :before {
    content: "";
    position: absolute;
    top: 0;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    right: 50%;
    height: 4px;
    width: 40%;
    border-radius: 0 0 4px 4px;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
     padding: 18px 0 17px 0; 
     line-height:1.8;
    color: #ffffff;
  }
`;

export const TravelIncludes = styled.div`
  background-color: #1c1d1e;
  border-radius:10px;
   padding: 20px 18px 19px 18px; 
  display: flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:6px;

  p {
    font-size: 13px;
    color: #ffffff;
  }

  img {
    width:100%;
    max-width:32px;
    margin-right:12px;
    
  }
   @media(min-width:768px){
    max-width:258px;
   }
  
`;
