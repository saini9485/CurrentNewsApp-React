import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact_Main_Container">
      <div className="Contact_Card">
        <h2>Contact</h2>
        <di>
          <h2>
            {" "}
            <span>Address:</span> Noida UP
          </h2>
          <h2>
            {" "}
            <span>Mobile No:</span> 8937800532{" "}
          </h2>
          <h2>
            {" "}
            <sapn>Email:</sapn>saini222302@gmail.com
          </h2>
        </di>
        <div className="Contact_Card_Btn">
          <a
            class="resume"
            href="https://drive.google.com/file/d/1po_RSXhSPw7EkpZcCWhHGaJwpJYHzYhQ/view?usp=sharing"
          >
            Download Card
          </a>
        </div>
        <div className="Contact_Social_Media_Icons_Container">
          <h2>Contact With Me</h2>
          <div className="Contact_Social_Media_Icons">
            <img src=""/>
          </div>
        </div>
      </div>
      <div className="Contact_Form">
        <div>
          <h2>Send A Massege </h2>
          <input
            type="text"
            placeholder="First Name"
            className="Contact_Input_Box"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="Contact_Input_Box"
          ></input>
          <input
            type="text"
            placeholder="Email Address"
            className="Contact_Input_Box"
          ></input>
          <input
            type="text"
            placeholder="Write Your Massage Here "
            className="Contact_Input_Massage_Box"
          ></input>
        </div>
        <div>
          <button className="Contact_Form_Send_Btn">Send</button>
        </div>
      </div>
    </div>
  );
}
