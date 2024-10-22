import React from 'react'

function CampusVidio() {
  return (
    <>
     {/* Video Section */}
     <div className="relative h-screen border-2 border-blue-700 rounded-3xl shadow-gray-500 shadow-xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          src="campusVidio.mp4" // Update with your video path
        />
        </div>
    </>
  )
}

export default CampusVidio