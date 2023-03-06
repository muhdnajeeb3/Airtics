import { styled } from 'frontity';
import React from 'react'
import MainSection from './coursecomponents/MainSection';

function CourseScreens() {
  return (
    <Div>
        <MainSection />
        
    </Div>
  )
}

export default CourseScreens;

const Div = styled.div`
background: #FBF9F8;
min-height:100vh;
`;