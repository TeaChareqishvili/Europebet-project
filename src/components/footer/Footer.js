import React from "react";
import styled from "styled-components";

export default function Footer(){
    return(
       <FooterWrapper>
        <button>ითამაშე</button>
        </FooterWrapper>
    )
};


export const FooterWrapper =styled.div`
      background-color:#171718;
      position:sticky;
      bottom:0;
      z-index:1;
      width:100%;
      padding:16px 0 18px 0;
      display:flex;
       justify-content:center;
       align-items:center;
       border-top:solid 3px #F05A22;
       margin-top:50px;

    button{
        background-color:#F05A22;
        border-radius:3px;
        color:#FFFFFF;
        font-size:15px;
        text-align:center;
        padding:8px 40px 9px 40px;
        border:none;
        cursor:pointer;
      
    }

`