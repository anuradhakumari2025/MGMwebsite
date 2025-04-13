// import React from "react";
// import "./NavbarVidio.css";

// function NavbarVidio() {
//   return (
//     <>
//       {/* Video Section */}
//       <div className="relative hidden lg:block h-screen">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           src="video.mp4" // Update with your video path
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
//         {/* You can add content on top of the overlay if needed */}
//         <div className="relative z-10 text-white text-center pt-40">
//           <h1 className="text-4xl font-bold">Welcome to MGMCET!</h1>
//           <p className="mt-2">Explore our offerings and services</p>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";


export default class NavbarVidio extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    config: config.gentle
  };

  slides = [
    { key: uuidv4(), content: <img src="/clg6.jpeg" alt="1" /> },
    { key: uuidv4(), content: <img src="/clg1.jpeg" alt="2" /> },
    { key: uuidv4(), content: <img src="/clg4.jpeg" alt="3" /> },
    { key: uuidv4(), content: <img src="/clg7.jpeg" alt="4" /> },
    { key: uuidv4(), content: <img src="/clg3.jpeg" alt="5" /> },
    { key: uuidv4(), content: <img src="/clg2.jpeg" alt="6" /> },
    { key: uuidv4(), content: <img src="/clg5.jpeg" alt="7" /> },
    { key: uuidv4(), content: <img src="/clg8.jpeg" alt="8" /> }
  ].map((slide, index) => {
    return { ...slide };
  });

  componentDidMount() {
    this.autoPlay = setInterval(() => {
      this.setState(prevState => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.autoPlay);
  }

  render() {
    return (
    <>
    <hr/>
      <div className="max-w-5xl h-[500px] mx-auto px-8 py-8 transition-all duration-300">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
      <hr/>
    </>
    );
  }
}
