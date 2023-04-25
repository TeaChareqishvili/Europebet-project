import React from "react";
import styled from "styled-components";
import logoIcon from "../../assets/logo.png";

export default function Header() {
  return (
    <HeaderWrapper>
      <img src={logoIcon} alt="" />
      <div className="btn-wrapper">
        <div className="sign-up">Sign up</div>
        <div className="sign-in">Sign in</div>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 940px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  text-align: center;
  padding: 16px;
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      cursor: pointer;
    }
  }
  .sign-in {
    background: #ef602a;
    border-radius: 5px;
    padding: 7px 12px 5px;
    margin-left: 29px;
  }
  img {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
