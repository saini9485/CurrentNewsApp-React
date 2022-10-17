import React from 'react'

export  function DataButton() {
  return (
    <div className='post-button_area'>
            <div>
                <button><i className="fa-regular fa-heart"></i></button>
                <button><i className="fa-regular fa-comment"></i></button>
                <button><i className="fa-solid fa-share"></i></button>
           </div>
           <div>
                <button><i className="fa-regular fa-bookmark"></i></button>
          </div>
           
        </div>
  )
}
