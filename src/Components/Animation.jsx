import { useGSAP } from '@gsap/react'
import React, { useRef,useEffect } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin';


function Animation() {


  // Register the TextPlugin
  gsap.registerPlugin(TextPlugin);
  
    const textRef = useRef(null);
  
    useEffect(() => {
      gsap.to(textRef.current, {
        duration: 3,
        text: "This is a typing animation.",
        ease: "none",
        repeat: -1,
        repeatDelay: 1,
      });
    }, []);

  const gsapRef = useRef()
  useGSAP(()=>{
    // gsap.to(".box")
    gsap.to(gsapRef.current,{
      x:1000,
      duration:2,
      delay:1,
    })
  })
  return (
    <>
    <div ref={gsapRef} className='text-white bg-red-600 rounded-xl h-80 w-80'>Animation</div>
    <div class="bg-blue-500 text-white p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
  Hover me!
</div>
<div ref={textRef}>Hello</div>
</>
  )
}

export default Animation