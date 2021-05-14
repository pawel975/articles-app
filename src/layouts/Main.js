import React, {useState,useEffect} from 'react';
import axios from "axios";
import Home from '../pages/Home';
import styled from 'styled-components';


const MainWrapper = styled.div`
width:100%;
`

const Main = () => {
    return(
      <MainWrapper>
        <Home/>
      </MainWrapper>
    )
}

export default Main;