import React, { useState } from "react";
 
export function Footer() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  
  
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(UpdateTime, 1000);

  let showdate = new Date()
  let dispalytodaydate = showdate.getDate()+"/"+(showdate.getMonth()+1)+"/"+showdate.getFullYear();
let dt = showdate.toDateString();
 
//       const [date]=useState(
//     {
//         currentDateTime: Date().toLocaleString()
//     }
// )

  

  return (
    <div>
      <div className="Footer">
      <h4>Developed by Rajesh Saini</h4>
        <h1>{currentTime}</h1>
        <h1>{dt}</h1>
        {/* <h1>{date.currentDateTime}</h1> */}
      </div>
    </div>
  );
}
