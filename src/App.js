import { useEffect, useState } from "react";
import { fetchTopHeadLines, fetchArticles } from "./Api";
import AppNavBar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import FilterBar from "./components/FilterBar";
import {Container} from 'react-bootstrap';

const App = () => {
  const [articles, setArticles ] = useState([]);

  useEffect(()=>{
    const getTopHeadlines = async () => {
      const headlines = await fetchTopHeadLines();
      setArticles(headlines);
    }
    getTopHeadlines();
  },[]);

  const handleFilter = async (query) => {
    const filteredArticle = await fetchArticles({ q : query });
    setArticles(filteredArticle);
  };

  return(
    <div>
      <AppNavBar/>
      <Container className="mt-3">
        <FilterBar onFilter={handleFilter} />
        <ArticleList articles={articles}/>
      </Container>
    </div>
  )
}

export default App;
