import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./banner/Banner";
import Info from "./title-info/Info";
import Content from "./content/Content";
import RulesAndCondition from "./terms/RulesAndConditions";
import Slide from "./slider/Slide";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Main() {
  const [close, setClose] = useState(false);

  const handleClose = (b) => setClose(b);

  return (
    <>
     
      {!close && (
        <MainWrapper>
          <Header />
          <Banner handleClose={handleClose} />
          <div className="content-wrapper">
            <Info />
            <Content />
            <RulesAndCondition />
          </div>
          <Slide />
          <Footer />
        </MainWrapper>
      )}
    </>
  );
}

export default Main;

const MainWrapper = styled.main`
  width: 100%;
  max-width: 940px;
  background-color: #1c1d1e;
  border-radius: 13px;
  margin-top: 30px;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    width: 2px;
  }

  .content-wrapper {
    padding: 24px 16px 40px;
  }
  @media (min-width: 768px) {
    .content-wrapper {
      padding: 24px 43px 40px;
    }
  }
`;
