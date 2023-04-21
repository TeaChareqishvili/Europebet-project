import styled from "styled-components";
import Banner from "./banner/Banner";
import Info from "./title-info/Info";
import Tabs from "./content/Tabs";

function Main() {
    return (
        <MainWrapper>
           <Banner/>
           <div className="content-wrapper">
           <Info/>
           <Tabs/>
           </div>
          
        </MainWrapper>
    );
  }
  
  export default Main;

  const MainWrapper = styled.main`
     width: 100%;
     max-width:940px;
     background-color:#1C1D1E;
     border-radius:13px;
     margin-top:30px;

     .content-wrapper{
         padding:24px 16px 55px;
     }
     @media(min-width:768px){
        .content-wrapper{
         padding:24px 43px 55px;
     }
     }
  `

