// import React from "react";

// export function Headline() {
//   return (
//     <div>
//       <h1>Current News Headline</h1>
//       <div className="Head_Input_Area">
//         <input type="text" placeholder="news" />
//         <button className="btn">Search</button>
//       </div>


//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
//import "./Post.css"
export function Headline() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
    //   .get(`https://jsonplaceholder.typicode.com/comments`) 
    .get(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-16&sortBy=publishedAt&apiKey=846fd227de084ee2ae29d9474c3e1a43`)
      .then((response) => {
        console.log(response.data);
        setPost([...response.data]); 
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPost = post.filter((posts) =>
    posts.name.toLowerCase().includes(search.toLowerCase())
  );

   return (
    <div className="Post-app">
      <div className="Post-search">
        <h1 className="Post-text">Search </h1>
        <form className="Head_Input_Area">
          <input
            className="Post-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
          <button className="Search_Btn" >Search Post</button>
       </form>
       </div>
        {filteredPost.map((post) => {
          return (
           <div>
           <h1>name={post.name}</h1> 
           <h1>author={post.articles.author}</h1> 
           <p> title={post.title} </p>
           <p>body={post.description}</p> 
          </div>
       );
      })}
   </div>
   )
}
