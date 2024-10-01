import { useEffect, useState } from 'react';
import './App.css';
import NavInshort from './components/NavInshort';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apiKey from "./data/Confiq";


function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [totalResult, setTotalResult] = useState("");
  const [loadMore,setLoadMore]= useState(10)

  
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`);
      setNewsArray(response.data.articles); 
      setTotalResult(response.data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  console.log(newsArray)
  useEffect(() => {
    fetchData();
  
  }, [category,loadMore,totalResult]); 
  useEffect(()=>{
    setLoadMore(10)
  },[category])

  return (
    <>
      <NavInshort setCategory={setCategory} />
      <NewsContent newsArray={newsArray} totalResult={totalResult} loadMore={loadMore} setLoadMore={setLoadMore} />
    </>
  );
}

export default App;
