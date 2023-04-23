import styled from "styled-components";





export const TicketsWrapper = styled.div`
   background-color:#25292B;
   border-radius:14px;
   padding:20px 14px;
 position:relative;
 
   @media(min-width:768px){
     border-radius:16px;
     margin:24px 20px 0 20px;
   }
`

export const TicketTable =styled.div`
    background-color:#2C3234;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:14px 16px;
    margin-bottom:8px;
   

      :before {
    content: "";
    position: absolute;
     left:15px; 
    /* transform: translateY(50%); */
    /* right: 50%;  */
    height: 46px;
    width:4px;
   
    border-radius: 0 4px 4px 0;
    background-color: #ef5a21;
    box-shadow: 0 0 5px #ef5a21;
  }  

    img{
        width:37px;
        height:35px;
        margin-right:8px;
        margin-left:11px;
        
    }
    p{
        font-size:13px;
        color:#FFFFFF;
    }

    @media(min-width:768px){
        background-color:#202324;
        border-radius:12px;
        margin-bottom:10px;

        p{
            font-size:15px;
        }
        img{
        width:48px;
        height:48px;
        margin-right:16px;
        margin-left:22px;
    }
   
    }
`