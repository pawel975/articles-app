import React, {useState,useEffect} from 'react';
import axios from "axios";
import styled, { ThemeProvider } from 'styled-components';
import Main from './layouts/Main';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';


const AppWrapper = styled.div`

width:100vw;
height:auto;
`
const LightTheme = {
  background: '#FFFFFF',
  main: "#355070",
  detail: "#eaac8b",
  text:"#FFFFFF",
}

const DarkTheme = {
  background: '#FFFFFF',
  main: "#355070",
  detail: "#f4a261",
  text:"#FFFFFF",
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
