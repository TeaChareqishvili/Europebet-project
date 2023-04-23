import React from 'react'
import styled from "styled-components";

export default function Slide(){
    return(
        <SlideWrapper>
           <h2>მსგავსი აქციები</h2>
           
        </SlideWrapper>
    )
}


export const SlideWrapper = styled.div`
     padding:24px 0 30px 0; 
     width:100%;
     max-width:940px;
     margin:auto;

     h2{
        font-size:16px;
        color:#FFFFFF;
        font-weight:Medium;
        margin-bottom:24px;
       
       
     }
`

