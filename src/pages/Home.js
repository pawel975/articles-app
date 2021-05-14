import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HomeWrapper = styled.div`
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
    width:clamp(300px,100%,600px);
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

    .img-link{
        width:100%;
    }

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

.article-info-container {

    .article-info {
        color: grey;
        font-size:12px;
    }
}


.button-link {
    width:120px;
    line-height:30px;
    font-size:15px;
    font-weight:700;
    color:${props=>props.theme.textDark};
    background-color: ${props=>props.theme.background};
    border: 2px solid ${props=>props.theme.main};
    border-radius:20px;
    transition:0.3s;

  &:hover {
    transition:0.2s;
    color:${props=>props.theme.textLight};
    background-color: ${props=>props.theme.main};
    border: 2px solid ${props=>props.theme.background};
  }
}

hr {
  @media (min-width:768px) {
    display:none;
  }
}
}
`


const Home = () => {

    const [state,setState] = useState([]);
    const [category, setCategory] = useState("home")
  
      useEffect(() => {
      const URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`
  
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
            <a className="img-link" href={article.url}>
            <img src={article.multimedia[0].url} alt="" />
            </a>
          <p>{article.multimedia[0].caption}</p>
        </div>
        <div className="article-info-container">
          <p className="article-info"><span>{article.byline}</span></p>
          <p className="article-info">Category: <span>{article.section}</span></p>
          <p className="article-info">Photo: <span>{article.multimedia[0].copyright}</span></p>
        </div>
        <a href={article.url}>
            <button className="button-link">Read More</button>
        </a>
        <hr/>
      </div>
    ))
  
      return(
        <HomeWrapper>
          {articlesMap}
        </HomeWrapper>
      )
  }

export default Home;