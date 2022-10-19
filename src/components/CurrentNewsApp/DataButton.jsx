import React, { useState } from "react";

const ShowComment = () => {
  alert("Hi i am Comment");
};


export function DataButton() {
  const [count, setCount] = useState(0);
  const [countD, setCountD] = useState(0);
  const [saved, setSaved] = useState("unSaved");

  const CountLikes = () => {
    setCount(count + 1);
  };
  const CountDisLikes = () => {
    setCountD(countD - 1);
  };
  const SavedUnSaved = ()=>{
    alert("Saved News");
    setSaved("Saved")
  }
  return (
    <div className="post-button_area">
      <div className="Three-Btn">
        <i className="fa-regular fa-heart" onClick={CountLikes}></i>
        {/* <i className="fa-regular fa-comment" onClick={ShowComment}></i> */}
        <i className="fa fa-thumbs-down" onClick={CountDisLikes}></i>
        <i className="fa-solid fa-share"></i>
        <div className="BookMark-Btn">
          <i className="fa-regular fa-bookmark" onClick={SavedUnSaved}></i>
          
        </div>
      </div>
      <div className="LikeDislike_Count">
        <h5 className="Likes_Count">{count} Likes </h5>
        <h5 className="Dislike_Count"> {countD} DisLikes</h5>
        <h5 className="SavedUnSaved">{saved}</h5>
      </div>
    </div>
  );
}
