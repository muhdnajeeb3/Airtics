import { styled } from 'frontity';
import React from 'react'
import arrow from '../images/rightarrow.png'

function RightArrow({onClick}) {
  return (
    <Div>

    <Div1 onClick={onClick}>
        <Image src={arrow} alt="" />
    </Div1>
    </Div>
  )
}

export default RightArrow;

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
bottom:-14%;
right:2%;
opacity: 1;
border: 1px solid #000000;
@media(max-width:485px){
  right:7%;
  
  
  }

`;

const Image =styled.img`
position:absolute;
top:50%;
left:50%;
opacity:1;
transform:translate(-50%,-50%)

`;