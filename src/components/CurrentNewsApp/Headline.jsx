import { useState, useEffect } from "react";
import axios from "axios";
import "./Headline.css";
import "./DataButton";
import { DataButton } from "./DataButton";
export function Headline() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const LoadNews = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-09-20&sortBy=publishedAt&apiKey=846fd227de084ee2ae29d9474c3e1a43`
      );
      console.log(res.data.articles);
      // .then(({ data }) => {
      // console.log({ data });
      setNews(res.data.articles);
      setLoading(false);
      setFilter(res.data.articles);
      // console.log("newss",news)
      // });
    };
    LoadNews();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search);
    const filteredNews = news.filter((data) =>
      // console.log(data)
      data.source.name.toLowerCase().includes(search.toLowerCase())
    );
    //   // console.log("filter" ,filteredNews)
    setFilter(filteredNews);
  }, [search]);
  // console.log("news",news)

  const handleRemove = (url) => {
    // alert("Deleted News");
    console.log("remove");
    const FilterData = news.filter((items) => items.url !== url);
    console.log("deleteData",FilterData)
    setNews(FilterData);
  };

  const HandleComment = (e) => {
    if (comments == "") {
      alert("please Enter Comment");
    } else {
      setComment([...comment, comments]);
      setComments("");
    }

    // alert("hi")
    // setComment(e.target.value)
  };

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
      {loading ? (
        <h1>
          <i className="fa fa-refresh fa-spin"></i>
        </h1>
      ) : (
        filter.map((items) => {
          // console.log(items)
          return (
            <div className="News_Cart">
              <div className="News_Data" key={items.url}>
                <img className="Image" src={items.urlToImage} />
                {/* <div></div> */}
                <h2>name:{items.source.name}</h2>
                <h2>author:{items.author}</h2>
                <p className="Title"> title:{items.title} </p>
                {/* <h4>Publice Time:-{items.publishedAt}</h4> */}
                <p>body:{items.description}</p>
                <div className="ReadMore-Btn">
                  <a href={items.url}>Read More...</a>
                </div>
                <DataButton />

                <div className="like_icons">
                  <div className="Publice_Time">
                    <h5>Publice Time:</h5>
                    <p>{items.publishedAt}</p>
                  </div>
                  <div className="post_comment">
                    <h5>userName</h5>
                    <p className="NewsComment">{comment}</p>
                  </div>
                </div>
                <div className="add-comment">
                  <input
                    type="text"
                    value={comments}
                    className="Input_Comment"
                    placeholder={"😒Add Comments...."}
                    onChange={(e) => setComments(e.target.value)}
                  ></input>
                  <button className="Comment_Btn" onClick={HandleComment}>
                    Comment
                  </button>
                </div>
                <div className="News_Delete_Btn">
                  <i
                    class="fa fa-trash"
                    aria-hidden="true" key={items.url}
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
