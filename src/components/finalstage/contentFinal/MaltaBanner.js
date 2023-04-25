import React from "react";
import styled from "styled-components";
import malta from "../../../assets/malta.jpg";
import Acategory from "./Acategory";

export default function MaltaBanner(){
       return (
        <MaltaWrapper>
           <img src={malta} alt="malta-img"/>
           <MaltaContent>
              <h3>ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!</h3>
              <p>The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.</p>
           </MaltaContent>
           <MaltaPocker>
              <p>15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
           </MaltaPocker>
           <Acategory/>
        </MaltaWrapper>
       )
}

export const MaltaContent = styled.div`
      

      h3{
        padding:16px 0 10px 0;
        color:#FFFFFF;
        font-size:13px;
        font-weight:bold;
        text-align:center;
      }

      p{
        color:#FFFFFF;
        font-size:14px;
        text-align:center;
        font-weight:bold;
        line-height:1.7;
      }


      @media(min-width:768px){
        p{
            font-size:14px;
        }
        h3{
            font-size:14px;
        }
      }
`

export const MaltaWrapper = styled.div`
     background-color:#171718;
     border:solid 4px #25292B;
     border-radius:16px;
     padding:24px;
     margin-bottom:20px;
    
     img{
        width:100%;
        border-radius:12px;
     }
`

export const MaltaPocker =styled.div`
    background-color:#2C3234;
    border-radius:8px;
    position:relative;
     padding:14px 8px 14px 14px; 
     width:100%;
    max-width:560px;
    margin: 20px auto;
  p{
   
    color:#FFFFFF;
    font-size:14px;
    line-height:1.7;
    text-align:center;
   
    :before{
        content: "";
    position: absolute;
    top:15%;
    left:0;
    height:70%;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
    }
  }
`