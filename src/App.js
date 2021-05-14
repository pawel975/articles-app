import React, {useState,useEffect} from 'react';
import axios from "axios";
import styled, { ThemeProvider } from 'styled-components';
import Main from './layouts/Main';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';


const AppWrapper = styled.div`

/* *{
  outline:1px solid red;
} */

width:100%;
height:auto;
`
const LightTheme = {
  background: '#FFFFFF',
  main: "#355070",
  detail: "#eaac8b",
  textLight:"#FFFFFF",
  textDark:"#355070",
}

const DarkTheme = {
  background: '#FFFFFF',
  main: "#355070",
  detail: "#f4a261",
  textLight:"#FFFFFF",
  textDark:"#355070",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppWrapper>
        <div className="app">
          <NavBar/>
          <Main/>
          <Footer/>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
