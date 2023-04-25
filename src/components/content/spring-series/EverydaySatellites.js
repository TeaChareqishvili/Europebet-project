import React from "react";
import styled from "styled-components";
import tourSatelliteimg from "../../../assets/tournament-bg.png";
import tourSatelliteimglg from "../../../assets/main-bg.png";
import tourSatelliteimgsm from "../../../assets/main-bg-sm.png";

export default function Satellite() {
  const data = [
    {
      text: {
        title: "Holdem Highrollers",
        description: "ბაი-ინი - 550₾",
      },
      description: {
        title: "50 000 ₾",
        description: "27 აპრილი",
      },
      img: tourSatelliteimg,
      isBig: false,
    },
    {
      text: {
        title: "Omaha Highrollers",
        description: "ბაი-ინი - 550₾",
      },
      description: {
        title: "50 000 ₾",
        description: "28 აპრილი",
      },
      img: tourSatelliteimg,
      isBig: false,
    },
  ];

  return (
    <SatelliteWrapper>
      <h3>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>
      <ImageWrapper>
        <div className="upper-images">
          {data.map((item, id) => (
            <Image key={id}>
              <img src={item.img} alt="" />
              <Content>
                <Text>
                  <p>{item.text.title}</p>
                  <span>{item.text.description}</span>
                </Text>
                <Description>
                  <p>{item.description.title}</p>
                  <span>{item.description.description}</span>
                </Description>
              </Content>
            </Image>
          ))}
        </div>
        <Image>
          <img src={tourSatelliteimgsm} alt="" className="img-sm" />
          <img src={tourSatelliteimglg} alt="" className="img-lg" />
          <Content className="content-img-lg">
            <Text>
              <p>Main Events</p>
              <span>ბაი-ინი - 550₾</span>
            </Text>
            <Description className="big-img">
              <p>150 000₾</p>
              <span>29 აპრილი</span>
            </Description>
          </Content>
        </Image>
        <p className="copy">
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </p>
      </ImageWrapper>
    </SatelliteWrapper>
  );
}

export const SatelliteWrapper = styled.div`
  width: 100%;
  max-width: 940px;
  background-color: #1c1d1e;
  margin-bottom: 24px;
  .copy {
    font-size: 14px;
    text-align: left;
    color: white;
    margin-top: 16px;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: 18px;
  }

  @media (min-width: 768px) {
    border: solid 4px #25292b;
    border-radius: 16px;
    padding: 26px 24px 20px 24px;
    .copy {
      text-align: center;
      margin-top: 20px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  .upper-images {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 16px;
      margin-bottom: 16px;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 85%;
  max-width: 315px;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    &&.content-img-lg {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Image = styled.div`
  position: relative;
  img {
    width: 100%;
    min-height: 89px;
    max-width: 315px;
  }
  .img-sm {
    display: block;
  }
  .img-lg {
    display: none;
  }
  @media (min-width: 768px) {
    img {
      max-width: unset;
    }
    .img-sm {
      display: none;
    }
    .img-lg {
      display: block;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  p {
    font-size: 14px;
    font-family: bold;
  }
  span {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  p {
    font-size: 24px;
    font-family: bold;
    color: #ffbe00;
  }
  span {
    background: #b78648;
    font-size: 14px;
    border-radius: 15px 15px 0 15px;
    padding: 4px 12px;
  }
  &&.big-img {
    span {
      background: #d7c860;
      color: #094b3d;
    }
  }
`;
