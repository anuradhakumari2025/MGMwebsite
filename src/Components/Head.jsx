import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

function Head() {


  const animationRef = useRef(false);
  
  useEffect(() => {
    if (!animationRef.current) {
      animationRef.current = true;
  
      gsap.from(".mainHeading", {
        y: -160,
        opacity: 0,
        duration: 1,
        ease: "slow(0.5, 0.8)",
      });
      gsap.from(".subHeading", {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".bottomHeading", {
        x: 400,
        opacity: 0,
        duration: 1,
        ease: "slow(0.5, 0.8)",
      });
      gsap.from(".logo", {
        x: -400,
        opacity: 0,
        duration: 1,
        ease: "slow(0.5, 0.8)",
      });
    }
  }, []);
  return (
    <header className="pt-6 py-2 px-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12 gap-5 ">
        <img src="/mgm-logo.jpeg" className="h-[90px] w-[90px] logo" />
        <div className="text-center">
          <h1 className="font-bold text-3xl mainHeading">
            MGM's College of Engineering and Technology
          </h1>
          <h2 className="text-xl font-semibold mt-2 subHeading">Kamothe,Navi Mumbai</h2>
          <h4 className="text-lg font-normal mt-1 bottomHeading">
            Approved by AICTE, Recognized by Govt. Of Maharashtra & Affiliated to
            University of Mumbai
          </h4>
        </div>
      </div>
    </header>
  );
}

export default Head;
