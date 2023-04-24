import React from "react";

import bannerimage from "../../assets/banner.jpg";
import styled from "styled-components";


export default function Banner() {
  return (
    <BannerWrapper>
      <img src={bannerimage} alt="header-logo" />  
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 13px 13px 0 0;
  }
`;
