import { styled } from 'frontity';
import React from 'react'
import arrow from '../images/arrow.png'

function LeftArrow({onClick}) {
  return (
    <Div>

    <Div1 onClick={onClick}
     
     >
        <Image src={arrow} alt="" />
    </Div1>
    </Div>
  )
}

export default LeftArrow;

const Div1 =styled.div`
position:relative;
width:85px;
height:55px;
opacity: 1;
border: 1px solid #000000;

`;
const Div =styled.div`
position:absolute;
width:85px;
height:55px;
bottom:-21%;
right:11%;
z-index:1;
opacity: 1;
border: 1px solid #000000;
@media(max-width:1200px){
right:15%;


}
@media(max-width:775px){
    right:20%;
    
    
    }
    @media(max-width:485px){
        right:33%;
        
        
        }

`;

const Image =styled.img`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%)

`;