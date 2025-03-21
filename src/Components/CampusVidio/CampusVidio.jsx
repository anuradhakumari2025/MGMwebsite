import React from 'react'

function CampusVidio() {
  return (
    <>
     {/* Video Section */}
     <div className="relative hidden lg:block h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="video.mp4" // Update with your video path
        />
        </div>
    </>
  )
}

export default CampusVidio