import styled from "styled-components";

function Info() {
  return (
    <TittleWrapper>
      <h2>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</h2>
      <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
    </TittleWrapper>
  );
}

export default Info;

const TittleWrapper = styled.div`
  color: #ffffff;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1;
  }
  p {
    font-size: 14px;
    opacity: 90%;
  }

  @media (min-width:768px){
    h2{
        font-size:20px;
    }
    p{
        font-size:16px;
    }
  }
`;

