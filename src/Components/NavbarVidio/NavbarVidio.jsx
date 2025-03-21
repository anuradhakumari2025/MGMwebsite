import React from "react";
import "./NavbarVidio.css";

function NavbarVidio() {
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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        {/* You can add content on top of the overlay if needed */}
        <div className="relative z-10 text-white text-center pt-40">
          <h1 className="text-4xl font-bold">Welcome to MGMCET!</h1>
          <p className="mt-2">Explore our offerings and services</p>
        </div>
      </div>
    </>
  );
}

export default NavbarVidio;
