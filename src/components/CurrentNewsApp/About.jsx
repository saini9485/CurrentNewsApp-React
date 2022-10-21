import React from "react";
import "./About.css";
export function About() {
  return (
    <div className="About_Card">
      <h1 class="Top_heading">ABOUT ME</h1>
      <h1 className="About_Name">Rajesh Saini</h1>
      <div class="introduction_and_details">
        <div class="details">
          <h2 className="About_Detailes_Left">
            Name : <span className="About_Detailes_Right">Rajesh Saini</span>
          </h2>
          <h2 className="About_Detailes_Left">
            {" "}
            Work:{" "}
            <span className="About_Detailes_Right">Front End Developer</span>
          </h2>
          <h2 className="About_Detailes_Left">
            Email :{" "}
            <span className="About_Detailes_Right">saini222302@gmail.com</span>
          </h2>
          <h2 className="About_Detailes_Left">
            Experience :{" "}
            <span className="About_Detailes_Right">6 Months Aircampus BootCamp Font-End Development</span>
          </h2>
          <h2 className="About_Detailes_Left">
            Currently Working :{" "}
            <span className="About_Detailes_Right">Learing Full stack Development at Aircampus BootCamp </span>
          </h2>
          <h2 className="About_Detailes_Left">
            Skills :{" "}
            <span className="About_Detailes_Right">HTML5 || CSS3 || Javascript || React.JS ||Git & Github|| REST APIs ||DSA</span>
          </h2>
          <a
            class="resume"
            href="https://drive.google.com/file/d/1Gg5JgF5WgH1FeZ9kEJ6Er2pmwVDbqCHO/view?usp=sharing"
          >
            MY Resume
          </a>
        </div>
        <div class="image">
          <img class="image" src="photo.jpeg" alt="" />
        </div>
      </div>
      <div className="About_Career_Card">
      <h2 className="About_Me_Heading">Career Oriented</h2>
      <p className="About_Para">
        I am a young professional with a passion for tech and problem solving,
        hungry for impact, highly coachable, and self-motivated to drive
        initiatives to execution. I am looking for entry-level remote Full Stack
        Developer roles. my some skills are creativity, logical thinking
        ,problem solving and time management and I want to enhance knowledge in
        this field.
      </p>
      </div>
    </div>
  );
}
