import styled from "styled-components";

export const CashGameContainer = styled.div``;

export const CashGameWrapper = styled.div`
  border: solid 4px #2c3234;
  border-radius: 16px;
  background-color: #25292b;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  .tablecontainer {
    padding: 12px;
  }
  @media (min-width: 768px) {
    background-color: #171718;
  }
`;

export const CashGameHeader = styled.div`
  background-color: #2c3234;
  position: relative;
  width: 100%;
  :before {
    content: "";
    position: absolute;
    top: -4px;
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
    padding: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  padding: 15px 0;
  color: #ffffff;
  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: 16px;

    img {
      width: 24px;
      height: 24px;
      margin-left: 12px;
    }
  }
`;

export const TableWrapper = styled.div`
  background-color: #25292b;
  padding: 20px 7px 20px;
  width: 100%;

  @media (min-width: 768px) {
    border-radius: 12px;
    padding: 32px 16px 20px;
    width: calc(100% - 48px);
    margin: auto;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 15% 55% 20%;
  width: 100%;
   margin-left:14px; 

    .giftIcon{
      display:flex;
      justify-content:center;
      align-items:center;
    }
  p {
    font-size:12px;
    color:#7D7D7D;
   
  }
  span{
    font-size:12px;
    color:#7D7D7D;
   
  }



  img {
    width: 10px;
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    margin-left:42px;
    padding: 0px 0 20px 0;
    img {
      width: 19px;
      margin-right: 7px;
    }
    p,span{
      font-size:13px;
      opacity:90%;
     
    }
  }
`;

export const TableContent = styled.div`
  height: 455px;
  overflow-y: scroll;
  .tableBox {
    padding: 16px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #2c3234;
    opacity: 50%;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f05a22;
    border-radius: 2px;
    outline: none;
  }
`;

export const RowTable = styled.div`
  border: solid 2px #2c3234;
  background-color: #1e2122;
  padding: 12px;
  border-radius: 76px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  color: #ffffff;
  margin-bottom: 6px;
  p {
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    background-color: #2c3234;
    border-radius: 50%;
    box-shadow: #2c3234 0px 0px 5px;
    font-size: 10px;
    font-weight: medium;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    margin-right: 7px;
    width: 14px;
  }

  @media (min-width: 768px) {
    padding: 14px 20px;
    span {
      font-size: 13px;
      font-weight: medium;
      width: 28px;
      height: 28px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const LeaderResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:14px 20px 14px 20px;
   
  p{
    font-size:13px;
    color:#FFFFFF;
    padding-bottom:10px;
    text-align:center;
  }
  span{
    color:#EF5A21;
    text-decoration:underline;
    font-size:13px;
    line-height:1.6;
    text-align:center;
    cursor:pointer;
  }

  @media(min-width:768px){
  padding: 16px 0 20px 0;
  }
  p{
    font-size:14px;
  }
  span{
    font-size:14px;
   
  }
`;
