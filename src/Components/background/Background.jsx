import React from 'react'
import "./back.css"

function Background() {
  return (
    <div className='video_container'>
      <video playsinline autoplay muted loop poster="cake.jpg" >
          <source src="background.mp4" type="video/mp4" />
        </video> 
    </div>
  )
}

export default Background
