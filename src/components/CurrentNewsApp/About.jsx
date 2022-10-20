import React from 'react'

export  function About() {
  
  let showdate = new Date()
  let dispalytodaydate = showdate.getDate()+"/"+(showdate.getMonth()+1)+"/"+showdate.getFullYear();
let dt = showdate.toDateString();
  return (
    <div>
      {/* <img src="/photo.jpeg" alt ="image"/> */}
       <h1>This is About</h1> 
       {/* <h1>{dispalytodaydate}</h1> */}
       <h1>{dt}</h1>
        </div>
  )
}

