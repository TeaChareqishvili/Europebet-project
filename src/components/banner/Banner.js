import React from "react";

import bannerimage from "../../assets/banner.jpg";
import styled from "styled-components";
import BannerHeader from "./BannerHeader";

export default function Banner({ handleClose }) {
  return (
    <BannerWrapper>
      <img src={bannerimage} alt="header-logo" />
      <BannerHeader handleClose={handleClose} />
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
    border-radius: 13px 13px 0 0;
  }
`;
