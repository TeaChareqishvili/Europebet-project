import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <button>ითამაშე</button>
    </FooterWrapper>
  );
}

export const FooterWrapper = styled.div`
  position: sticky;
  bottom:-3px;
  left:0;;
  z-index: 1;
  width: 100%;
  background-color: #171718;
  padding: 17px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 3px #f05a22;
  margin-top: 50px;
  

  button {
    font-size: 15px;
    font-weight: medium;
    text-align: center;
    padding: 7px 35px 6px 35px;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    background-color: #f05a22;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 16px 0 18px 0;
    button {
     
      border-radius: 3px;
      padding: 8px 40px 9px 40px;
    }
  }
`;
