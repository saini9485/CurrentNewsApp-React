import { useState, useEffect } from "react";
import axios from "axios";
import "./Headline.css"
import "./DataButton"
import { DataButton } from "./DataButton";
//import "./Post.css"
export function Headline() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
    .get(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=846fd227de084ee2ae29d9474c3e1a43`)
      .then(({data}) => {
        console.log({data});
        setNews(data?.articles); 
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const filteredNews = news.filter((posts) =>
  //   posts.name.toLowerCase().includes(search.toLowerCase())
  // );
 
console.log({news})
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
        {news?.map((items) => { 
          return (
           <div className="News-Data">
            <img className="Image" src={items.urlToImage}/>
           <h1>name:{items.name}</h1> 
           <h1>author:{items.author}</h1> 
           <p className="Title"> title:{items.title} </p>
           <h4>Publice Time:-{items.publishedAt}</h4>
           <p>body:{items.description}</p> 
           <button className="ReadMore-Btn">
            <  a href={items.url}>Read More</a>
           </button>
           <DataButton/>
          </div>
       );
       }) 
       } 
   </div>
   )
}
