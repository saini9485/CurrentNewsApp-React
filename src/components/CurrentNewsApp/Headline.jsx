import { useState, useEffect } from "react";
import axios from "axios";
import "./Headline.css";
import "./DataButton";
import { DataButton } from "./DataButton";
export function Headline() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const LoadNews = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://saurav.tech/NewsAPI/everything/cnn.json
        `
      );

      setNews(res.data.articles);
      setLoading(false);
    };
    LoadNews();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterFun = (data) => {
    if (search.trim().length <= 0) {
      return true;
    } else {
      if (data?.title?.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }
  };
  const handleRemove = (url) => {
    const FilterData = news.filter((items) => items.url !== url);
    setNews(FilterData);
  };

  return (
    <>
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
      <div className="Main_Container">
        {loading ? (
          <h1 className="fa-refresh">
            <i className="fa fa-refresh fa-spin"></i>
          </h1>
        ) : (
          news
            ?.filter((data) => filterFun(data))
            .map((items) => {
              return (
                <div className="News_Cart">
                  <div className="News_Data" key={items.url}>
                    <img className="Image" src={items.urlToImage} />
                    {/* <h2>Name:  {items.source.name}</h2> */}
                    {/* <h2>author:{items.author.length>40?`${items.author.substring(0,40)}.`:items.author}</h2> */}
                    <p className="Title">{items.title.substring(0, 50)} </p>
                    <p style={{fontSize:"small"}}>
                      {items.description.length > 120
                        ? `${items.description.substring(0, 120)}...`
                        : items.description}
                    </p>
                    <div className="Publice_Time">
                      <h5 style={{color:"red"}}>Publish Time:</h5>
                      <p >{items.publishedAt}</p>
                    </div>
                    <div className="Delete_Btn_Container">
                      <div style={{display:"flex", alignItems:"center", fontSize:"large"}}>
                      <h6 className="ReadMore_News_Btn">
                        <a href={items.url}>Read More</a>
                      </h6>
                      <button
                        className="News_Remove-Btn"
                        key={items.url}
                        onClick={() => handleRemove(items.url)}
                      >
                        Remove
                      </button>
                      </div>
                      {/* <i
                        style={{ marginLeft: "270px", cursor: "pointer" }}
                        className="fa-solid fa-share"
                      ></i> */}
                    </div>
                    <DataButton />
                  </div>
                </div>
              );
            })
        )}
      </div>
    </>
  );
}
