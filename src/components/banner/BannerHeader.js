import React from "react";
import styled from "styled-components";
//  import logobtn from "../../assets/logo.png";

export default function BannerHeader() {
  return (
    <>
    <DesktopHeader>
      <div className="headerDate">
        <p>
          <span className="slots">სლოტები</span>10 იანვარი - 12 მარტი
        </p>
      </div>
      <div className="exit-sign"></div>
    </DesktopHeader>
    {/* <MobileHeader>
      <div className="logo">
        <img src={logobtn} alt="logo"/>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </MobileHeader>  */}
    </>
  );
}

export const DesktopHeader = styled.div`
  display: none;
  .headerDate {
    position: absolute;
    top: 16px;
    left: 15px;
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
    position: absolute;
    top: 15px;
    right: 17px;
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

  @media (min-width: 768px) {
    display: block;
  }
`;


// export const MobileHeader =styled.div`
  
    
// `