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
  const SavedUnSaved = () => {
    alert("Saved News");
    setSaved("Saved");
  };
  return (
    <div className="News-button_area">
      <div className="Reaction-Btn_Container">
       <span> <i className="fas fa-heart fa-2x" onClick={CountLikes}></i>0</span>
        {/* <span className="like-counter">0</span> */}
       <span> <i className="fa fa-thumbs-down fa-2x" onClick={CountDisLikes}></i>0</span>
         <span> <i className="fas fa-comment fa-2x" onClick={ShowComment}></i>0</span>
         {/*<div className="Share_Btn">  <i className="fa-solid fa-share"></i></div>
        <div className="BookMark-Btn">
          <i className="fa-regular fa-bookmark" onClick={SavedUnSaved}></i>
        </div> */}
      </div>
      {/* <div className="LikeDislike_Count">
        <h5 className="Likes_Count">{count} Likes </h5>
        <h5 className="Dislike_Count"> {countD} DisLikes</h5>
        <h5 className="Dislike_Count"> Share</h5>
        <h5 className="SavedUnSaved">{saved}</h5>
      </div> */}
    </div>
  );
}
