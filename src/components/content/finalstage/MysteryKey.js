import React from "react";
import { TableWrapper } from "../cash-game/CashGameStyle";
import { TableContent } from "../cash-game/CashGameStyle";
import { keyData } from "../cash-game/data";
import styled from "styled-components";
import keyIcon from "../../../assets/key.png";

export default function MysticalKey() {
  return (
    <>
      <KeyHeader>
        <img src={keyIcon} alt="key" />
      </KeyHeader>
      <KeyWrapper>
        <h3>
          მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
          საიდუმლო გასაღებს
        </h3>
        <TableWrapper>
          <div className="tableContainer">
            <TableContent>
              <div className="tableBox">
                {keyData.map((item, id) => (
                  <KeyRowTable key={id}>
                    <span>{id + 1}</span>
                    <p>{item.text}</p>
                  </KeyRowTable>
                ))}
              </div>
            </TableContent>
          </div>
        </TableWrapper>
      </KeyWrapper>
    </>
  );
}

export const KeyRowTable = styled.div`
  border: solid 2px #2c3234;
  background-color: #1e2122;
  padding: 12px;
  border-radius: 76px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  margin-bottom: 6px;

  p {
    font-size: 12px;
    color: #ffffff;
    line-height: 1.8;
    font-family: Medium;
    font-weight: medium;
    padding-left: 13px;
  }

  span {
    background-color: #2c3234;
    border-radius: 50%;
    box-shadow: #2c3234 0px 0px 5px;
    font-size: 10px;
    font-weight: medium;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    padding: 14px 20px;
    span {
      font-size: 13px;
      font-weight: medium;
      width: 28px;
      height: 28px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const KeyWrapper = styled.div`
  background-color:#25292B;
  border: solid 4px #25292b;
  border-radius:16px;
  border-top:none;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px 24px;

  h3 {
    display: none;
  }

  @media (min-width: 768px) {
    background-color: #171718;
    border-radius: 0 0 16px 16px;

    h3 {
      display:block;
      color: #ffffff;
      font-size: 14px;
      font-family: Medium;
      font-weight: medium;
      padding-bottom: 20px;
      text-align:center;
    }
  }
`;

export const KeyHeader = styled.div`
  padding:21px 30px;
  background-color: #2c3234;
  border-radius:16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    transform: translateX(50%);
    right: 50%;
    height: 4px;
    width: 30%;
    border-radius: 0 0 4px 4px;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
  }

  @media(min-width:768px){
    padding: 26px 0 22px 0;
    border-radius: 16px 16px 0 0;
  }
`;
