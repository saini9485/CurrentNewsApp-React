import React from 'react'
import "./About.css"
export  function About() {
  
  let showdate = new Date()
  let dispalytodaydate = showdate.getDate()+"/"+(showdate.getMonth()+1)+"/"+showdate.getFullYear();
let dt = showdate.toDateString();
  // return (
  //   <div>
  //     {/* <img src="/photo.jpeg" alt ="image"/> */}
  //      <h1>This is About</h1> 
  //      {/* <h1>{dispalytodaydate}</h1> */}
  //      <h1>{dt}</h1>
  //       </div>
  // )


  return (
    <div>
      
         <h1 class="top_heading">ABOUT ME</h1>
    <header>
        <h1><span class="blue">Rajesh </span> Saini</h1>

    </header>

    <div class="introduction_and_details">
        <div class="image">
            <img class="image" src="photo.jpeg" alt=""/>
        </div>
        <div class="details">
            <h2 className='h2'>Name : <span>Rajesh Saini</span></h2>
            <h2 className='h2'> Work: <span>Front End Developer</span></h2>
            <h2 className='h2'>Email : <span>saini222302@gmail.com</span></h2>
            <a class="resume"
                href="#">Download
                MY Resume</a>
        </div>
    </div>
</div>
  )


}

