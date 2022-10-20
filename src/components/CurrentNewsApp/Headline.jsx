import { useState, useEffect } from "react";
import axios from "axios";
import "./Headline.css";
import "./DataButton";
import { DataButton } from "./DataButton";
export function Headline() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");  
  const [loading, setLoading] = useState(false); 
  const [comment,setComment]=useState([])
  const[comments,setComments] =useState("") 
  const [filter, setFilter] = useState([])
  useEffect(() => {
    const LoadNews = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-09-19&sortBy=publishedAt&apiKey=846fd227de084ee2ae29d9474c3e1a43`
      );
      console.log(res.data.articles)
      // .then(({ data }) => {
      // console.log({ data });
      setNews(res.data.articles);
      setLoading(false);
      setFilter(res.data.articles)  
      // console.log("newss",news)
      // });
    };
    LoadNews();

  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

 useEffect(()=>{
  console.log(search)
  const filteredNews = news.filter((data) =>
  // console.log(data)
    data.source.name.toLowerCase().includes(search.toLowerCase())
  
   );
//   // console.log("filter" ,filteredNews)
 setFilter(filteredNews )
 },[search])
// console.log("news",news)


  const handleRemove = (url) => {
    // window.confirm(" Are You Sure Delete News")
    alert("Deleted News");
    const FilterData = news.filter((items) => items.url !== url);
    setNews(FilterData);
  };

const HandleComment = (e)=>{
  if(comments==""){
    alert("please Enter Comment")
  }else{
    setComment([...comment,comments])
  setComments("")
  }
  
  // alert("hi")
// setComment(e.target.value)
}


  return (
    <div className="Main_Container">
      <h1 className="News-text">Top Business HeadLine News</h1>
      <div className="News-search">
        <form className="Head_Input_Area">
          <input
            className="News-input"
            type="text"
            onChange={handleChange}
            placeholder="Search News"
          />
          <button className="Search_Btn">Search</button>
        </form>
      </div>
      {loading ? (<h1><i className="fa fa-refresh fa-spin"></i></h1> ): (
       

       filter.map((items) => {
        // console.log(items)
          return (
            <div className="News_Cart">
              <div className="News_Data" key={items.url}>
                <img className="Image" src={items.urlToImage} />
                <h1>name:{items.source.name}</h1>
                <h1>author:{items.author}</h1>
                <p className="Title"> title:{items.title} </p>
                <h4>Publice Time:-{items.publishedAt}</h4>
                <p>body:{items.description}</p>
                <a href={items.url} className="ReadMore-Btn">
                  Read More...
                </a>
                <DataButton />
                <div className="like_icons">
                  {/* <h5 className="Likes_Count"> 5 likes</h5> */}
                  <div className="post_comment">
                    <h5>userName</h5>
                    <p className="NewsComment">{comment}</p>

                  </div>
                  <p className="post_time">6 hours</p>
                </div>
                 {/* <div className="Add_Comment"> */}
                  {/* {comment.map((itemss)=>{ */}
                       {/* <p type="text">{comment}</p> */}
                      {/* <h1>hihi</h1> */}
                  {/* })} */}
                  {/* </div> */}
                <div className="add-comment">
                
                  <input
                    type="text"
                    value={comments}
                    className="Input_Comment"
                    placeholder={"😒Add Comments...."}
                    onChange={(e) => setComments(e.target.value)}
                  ></input>
                  <button className="Comment_Btn" onClick={HandleComment}>Comment</button>
                </div>
                <div className="News_Delete_Btn">
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => handleRemove(items.url)}
                  ></i>
                </div>
              </div>
            </div>
          );
        })
         )}
    </div>
  );
}




















