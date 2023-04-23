import styled from "styled-components";

export const SideLeaderBoard = styled.div`
  background-color: #2c3234;
  border-radius: 16px;
  margin: 24px 16px;
  padding: 24px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 854px;
  margin: 0 auto 25px;
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

  h2 {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 12px;
    line-height: 1.6;
    color: #ffffff;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 24px 30px;

    h2 {
      font-size: 18px;
      text-align: center;
      padding-bottom: 10px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const TabsWrapper = styled.div`
  background-color: #2c3234;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 39px 0 30px;
  .content {
    height: 300px;
    background: green;
  }
  @media (min-width: 768px) {
    border-radius: 12px;
  }
`;

export const Tab = styled.div`
  position: relative;
  color: #ffffff;
  border-radius: 8px;
  padding: 22px 9px;
  width: 100%;
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  div {
    background-color: ${(p) => (p.act ? "#EF5A21" : "transparent")};
    transform: ${(p) => (p.act ? "scaleY(1.1)" : "scaleY(0.9)")};
    transition: transform 0.2s linear;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 8px;
    z-index: 0;
  }
  span {
    font-size: 10px;
    opacity: 80%;
    padding-bottom: 4px;
  }

  p {
    z-index: 1;
    font-weight: bold;
    white-space: nowrap;
    font-size: ${(p) => (p.act ? "14px" : "12px")};
  }

  @media (min-width: 768px) {
    border-radius: 12px;
    p {
      font-size: ${(p) => (p.act ? "18px" : "14px")};
    }
    span {
      font-size: ${(p) => (p.act ? "14px" : "10px")};
    }
  }
`;
