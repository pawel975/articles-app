import React, {useState,useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';

const MainWrapper = styled.div`
* {
    margin:0;
    padding:0;
}
`

const Main = () => {

    const [state,setState] = useState([]);

  useEffect(() => {
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`

    axios.get(URL).then(res => (
      setState(res.data.results),

    console.log(res.data.results)
    )
    )
  }, [])


  const articlesMap = state.map(item => (
    <MainWrapper>
      <h1>{item.title}</h1>
      <hr/>
      <p className="XD">{item.abstract}</p>
      {item.multimedia[0].url? <img style={{width:"100vw"}} src={item.multimedia[0].url} alt="" /> : <p style={{color:'red'}}>There is no images</p> }
    </MainWrapper>
  ))

    return(
        <>
            <div>{articlesMap}</div>
        </>
    )
}

export default Main;