import React, { useState } from "react";

const ShowComment = () => {
  alert("Hi i am Comment");
};

export function DataButton() {
  const [count, setCount] = useState(0);
  const [countD, setCountD] = useState(0);
  const [saved, setSaved] = useState("unSaved");
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState("");
  const [commentCounter, setCommentCounter] = useState(0);

  const HandleComment = (e) => {
    if (comments == "") {
      alert("please Enter Comment");
    } else {
      setComment([...comment, comments]);
      setComments("");
    }
    setCommentCounter(commentCounter + 1);
  };

  const CountLikes = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const CountDisLikes = () => {
    setCountD(countD - 1);
  };
  const SavedUnSaved = () => {
    alert("Saved News");
    setSaved("Saved");
  };
  return (
    <div className="News-button_area">
      <div className="Reaction-Btn_Container">
        <span>
          {" "}
          <i className="fas fa-heart fa-1.5x" onClick={CountLikes}>
            {" "}
          </i>
          {count}
        </span>
        {/* <span className="like-counter">0</span> */}
        <span>
          {" "}
          <i className="fa fa-thumbs-down fa-1.5x" onClick={CountDisLikes}></i>
          {countD}
        </span>
        <span>
          {" "}
          <i className="fas fa-comment fa-1.5x" onClick={ShowComment}></i>
          {commentCounter}
        </span>
         <i className="fa-solid fa-share " ></i>
      </div>
      {/*<div className="Share_Btn">  <i className="fa-solid fa-share"></i></div>
        // <div className="BookMark-Btn"> 
        //   <i className="fa-regular fa-bookmark" onClick={SavedUnSaved}></i>
        // </div> */}
      {/* <div className="LikeDislike_Count">
        <h5 className="Likes_Count">{count} Likes </h5>
        <h5 className="Dislike_Count"> {countD} DisLikes</h5>
        <h5 className="Dislike_Count"> Share</h5>
        <h5 className="SavedUnSaved">{saved}</h5>
      </div> */}

   
      <div className="post_comment">
          <h5>userName</h5>
          <p className="NewsComment">{comment}</p>
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
    </div>
  );
}
