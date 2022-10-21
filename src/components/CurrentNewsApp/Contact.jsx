import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact_Main_Container">
      
      <div className="Contact_Card">
        <h2>Contact</h2>
        <h2>Mo:- 8937800532 </h2>
        <h2> Email:-saini222302@gmail.com</h2>
        <a
          class="resume"
          href="https://drive.google.com/file/d/1po_RSXhSPw7EkpZcCWhHGaJwpJYHzYhQ/view?usp=sharing"
        >
          Download Card
        </a>
      </div>
      <div className="Contact_Form">
        <div>
        <h2>Send A Massege </h2>
        <input type="text" placeholder="First Name" className="Contact_Input_Box"></input>
        <input type="text" placeholder="Last Name" className="Contact_Input_Box"></input>
        <input type="text" placeholder="Email Address" className="Contact_Input_Box"></input>
        <input type="text" placeholder="Write Your Massage Here " className="Contact_Input_Massage_Box"></input>
        </div>
        <div>
        <button>Send</button>
        </div>

      </div>
    </div>
  );
}
