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
  position:relative;

  :before {
    content: "";
    position: absolute;
    top:0;
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
