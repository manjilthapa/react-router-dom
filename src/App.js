import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

const HomePage = (props) => {
  console.log(props)
  return(
    <div>
      <Link to='/articles'>Go To Articles</Link>
      <button onClick={()=>props.history.push('/articles')}>Articles</button>
      <h1>HOME PAGE</h1>
    </div>
  )
}
const ArticlePage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>ARTICLES LIST PAGE</h1>
      <p>Dynamic routing using match properties</p>
      <p><Link to={`${props.match.url}/1`}>To article 1</Link></p>
      <p><Link to={`${props.match.url}/2`}>To article 2</Link></p>
      <p><Link to={`${props.match.url}/3`}>To article 3</Link></p>
    </div>
  )
  }

const ArticleDetailPage = (props) => {
  console.log(props)
  return(
    <div>
      <h2> ARTICLE DETAIL PAGE: {props.match.params.articleId}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/articles" component={ArticlePage}/>
      <Route exact path="/articles/:articleId" component={ArticleDetailPage}/>
    </div>
  );
}

export default App;
