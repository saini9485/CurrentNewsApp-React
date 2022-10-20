import React, { useState } from "react";
import "./Footer.css";
export function Footer() {
  // const [date,setDate]=useState(" ")

  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  // Current Time
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(UpdateTime, 1000);

  // CurrentDate
  let showdate = new Date();
  let dispalytodaydate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  let CurrentDate = showdate.toDateString();

  //Current Time and Date Both
  // setInterval(() => {
  //   setDate(new Date().toLocaleString())
  // }, 1000);

  return (
    <div className="Footer">
      <div className="Copy_Right">
        <h4>Developed by Rajesh Saini</h4>
        <h4>
          <i className="fa-solid fa-copyright"></i>Copyright 2022-23
        </h4>
      </div>
      <div className="Date_Time">
        <h1>{currentTime}</h1>
        <h1>{CurrentDate}</h1>
      </div>
      <div className="Footer_Social_Media_Icons">
        <a href="#">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          {" "}
          <i className="fa-brands fa-square-whatsapp"></i>
        </a>
       
      </div>
    </div>
  );
}
