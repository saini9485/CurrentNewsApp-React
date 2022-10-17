import { useState, useEffect } from "react";
import axios from "axios";
import "./Headline.css"
//import "./Post.css"
export function Headline() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  useEffect((data) => {
    axios
    .get(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=846fd227de084ee2ae29d9474c3e1a43`)
      .then((response) => {
        console.log(response.data);
        setNews([...response.data]); 
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredNews = news.filter((posts) =>
    posts.name.toLowerCase().includes(search.toLowerCase())
  );

   return (
    
    <div className="Main_Container">
      <div className="News-search">
        <h1 className="News-text">Search News</h1>
        <form className="Head_Input_Area">
          <input
            className="News-input"
            type="text"
            onChange={handleChange}
            placeholder="Search News"
          />
          <button className="Search_Btn" >Search </button>
       </form>
       </div>
        {filteredNews.map((news) => {
          return (
           <div className="News-Data">
           <h1>name={news.articles.name}</h1> 
           <h1>author={news.articles.author}</h1> 
           <p> title={news.articles.title} </p>
           <p>body={news.articles.description}</p> 
          </div>
       );
       }) 
       } 
   </div>
   )
}
