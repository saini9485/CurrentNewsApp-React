import React, { useState } from "react";
 
export function Footer() {
  let time = new Date().toLocalTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocalTimeString();
    setCurrentTime(time);
  };
  setInterval(UpdateTime, 1000);
 
//       const [date]=useState(
//     {
//         currentDateTime: Date().toLocaleString()
//     }
// )

  

  return (
    <div>
      <div className="Footer">
        <h1>Footer</h1>
        {/* <h1>{currentTime}</h1>
        <h1>{time}</h1> */}
        {/* <h1>{date.currentDateTime}</h1> */}
      </div>
    </div>
  );
}
