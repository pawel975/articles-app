import React, {useState,useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';

const MainWrapper = styled.div`
width:90%;
/* outline:2px solid green; */
justify-content:center;
margin:auto;
display:flex;
flex-wrap:wrap;

.article-basic-info {
  cursor:pointer;
  height:fit-content;
  width:clamp(200px,100%,700px);
  /* outline:2px solid black; */

  @media (min-width:768px) {
    width:clamp(160px,100%,300px);
    margin:1em;
    border-radius:5px;
    box-shadow:0px 0px 12px rgba(0,0,0,0.5)
  }

  @media (min-width:970px) {
    width:clamp(160px,100%,350px);
    margin:1em;
    border-radius:5px;
    box-shadow:0px 0px 12px rgba(0,0,0,0.5)
  }
  h1 {
    font-size:20px;

    @media (min-width:768px) {
    margin:1em;
  }
  }

  p {
    font-size:15px;

    @media (min-width:768px) {
    margin:1em;
  }
  }

  .overlay {
    position:relative;
    width:100%;

    img {
    margin:auto;
    position:relative;
    width:100%;
    }

    p{
      opacity:0;
      background-color:black;
      color:white;
      width:100%;
      margin:auto;
      position: absolute;
      transform:translate(-50%,0);
      left:50%;
      bottom:3px;
    }

    &:hover {
      p{
        transition:0.5s;
        opacity:0.8;
      }
    }
  }

.category {
  color: grey;
  font-size:12px;
}

hr {
  @media (min-width:768px) {
    display:none;
  }
}
}
`

const Main = () => {

    const [state,setState] = useState([]);

  useEffect(() => {
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`

    axios.get(URL).then(res => {
    setState(res.data.results)
    console.log(res.data.results)
    })
    
  }, [])


  const articlesMap = state.map(article => (
    <div className="article-basic-info">
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <div className="overlay">
        <img src={article.multimedia[0].url} alt="" />
        <p>{article.multimedia[0].caption}</p>
      </div>
      <p className="category">Category: <span>{article.section}</span></p>
      <hr/>
    </div>
  ))

    return(
      <MainWrapper>
        {articlesMap}
      </MainWrapper>
    )
}

export default Main;