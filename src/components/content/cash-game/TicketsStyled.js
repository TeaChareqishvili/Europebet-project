import styled from "styled-components";

export const TicketsWrapper = styled.div`
  background-color: #25292b;
  border-radius: 14px;
  padding: 20px 14px;
  position: relative;

  @media (min-width: 768px) {
    border-radius: 16px;
    margin: 24px 20px 0 20px;
  }
`;

export const TicketTable = styled.div`
  background-color: #2c3234;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 8px;
  .img-wrapper {
    /* width: 50px;
    background: "#202324";
    border-radius: 6px; */
    margin-right: 14px;
  }
  :before {
    content: "";
    position: absolute;
    left: 15px;
    /* transform: translateY(50%); */
    /* right: 50%;  */
    height: 46px;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
  }

  img {
    width: ${(p) => p.widthMobile};
  }
  p {
    font-size: 13px;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    background-color: #202324;
    border-radius: 12px;
    margin-bottom: 10px;
    .img-wrapper {
      margin-right: 18px;
    }
    p {
      font-size: 15px;
    }
    img {
      width: ${(p) => p.widthDesktop};
    }
  }
`;
