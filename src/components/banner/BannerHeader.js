import React from "react";
import styled from "styled-components";

export default function BannerHeader({ handleClose }) {
  return (
    
      <DesktopHeader>
        <div className="headerDate">
          <p>
            <span className="slots">სლოტები</span>10 იანვარი - 12 მარტი
          </p>
        </div>
        <div className="exit-sign" onClick={() => handleClose(true)}></div>
      </DesktopHeader>
    
  );
}

export const DesktopHeader = styled.div`
  position: unset;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 16px 16px 0;
  .headerDate {
    padding: 7px 16px 8px 5px;
    background-color: #25292b;
    border: solid 1px #25292b;
    border-radius: 35px;
    opacity: 90%;
  }
  p {
    color: white;
    font-size: 15px;
    font-weight: Bold;
  }
  .slots {
    margin-right: 12px;
    background-color: #2c3234;
    padding: 4px 10px 5px 10px;
    border-radius: 13px;
    font-size: 13px;
    color: #ffffff;
    font-weight: medium;
  }
  .exit-sign {
    display: none;
  }

  @media (min-width: 768px) {
    top: 30px;
    position: fixed;
    max-width: 940px;
    z-index: 2;
    .exit-sign {
      display: block;
      width: 34px;
      height: 34px;
      background-color: #25292b;
      border-radius: 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :before {
        position: absolute;
        content: " ";
        height: 15px;
        width: 2px;
        background-color: #ffffff;
        transform: rotate(45deg);
      }
      :after {
        position: absolute;
        content: " ";
        height: 15px;
        width: 2px;
        background-color: #ffffff;
        transform: rotate(-45deg);
      }
    }
  }
`;


