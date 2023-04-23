import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { slides } from "./SlideData";

export default function Slide() {
  return (
    <SlideWrapper>
      <h2>მსგავსი აქციები</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        className="slide-wrapper"
      >
        {slides.map((sl, id) => (
          <SwiperSlide className="slide" key={id}>
            <img src={sl.slide} alt="promo-1" />
            <Content background={sl.background}>
              <p>{sl.title}</p>
              <span>{sl.description}</span>
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideWrapper>
  );
}

export const SlideWrapper = styled.div`
  padding: 24px 0 0 16px;
  width: 100%;
  max-width: 940px;
  margin: auto;

  h2 {
    font-size: 16px;
    color: #ffffff;
    font-weight: Medium;
    margin-bottom: 24px;
  }

  .slide {
    width: 233px;
    height: 272px;
    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 0px 0px 30px 44px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 33%;
  background: red;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  padding: 20px;
  background: ${(p) => p.background};
  p {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
  }
`;
