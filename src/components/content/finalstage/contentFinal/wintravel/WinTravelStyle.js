import styled from "styled-components";

export const WinTravelWrapper = styled.div`
   background-color:#25292B;
  border: solid 4px #25292b;
  border-top: none;
  border-radius: 0 0 16px 16px;
  width: 100%;
  max-width: 940px;
  padding: 20px;
  margin-bottom:24px;

  @media (min-width: 768px) {
    background-color: #171718;
  } 
   
`;

export const WinTravelListWrapper =styled.div`
    background-color:#25292B;
  width: 100%;
  max-width: 940px;
  padding: 20px;
  display: grid;
  grid-template-columns: 100%;
  margin: auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 15px;
     background-color: #171718;
  }
`

export const WinTravelHeader = styled.div`
  background-color: #2c3234;
  border: solid 4px #2c3234;
  border-radius: 14px 14px 0 0;
  padding: 24px 0 24px 0;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: -4px;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    right: 50%;
    height: 4px;
    width: 40%;
    border-radius: 0 0 4px 4px;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 18px;
    }
  }
`;
export const WinTravelList = styled.div`
   background-color: #1e2122; 

  border-radius: 12px;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;

  

  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .image {
    position: absolute;
    top: 0;
    right: 14px;
  }

  h3 {
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    line-height: 1.8;
  }
  p {
    font-size: 13px;
    color: #ffffff;
    font-weight: medium;
    line-height:1.8;
  }

  @media (min-width: 768px) {
    max-width: 395px;
    padding: 28px;
    margin-bottom: 20px;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 13px;
    }
  }
`;

export const TravelListRules = styled.div`
      
         
     p{
        text-align:center;
        color:#FFFFFF;
        font-size:13px;
        line-height:1.6;
        margin-bottom:10px; 
     }

     @media(min-width:768px){
        p{
          font-size:14px;
          line-height:1.8;
          margin-bottom:12px; 
        }
     }
`