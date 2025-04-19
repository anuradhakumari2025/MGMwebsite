import React, { useEffect, useState } from "react";
import "./About.css";
import about_img from "/about.png";
import play_icon from "/play-icon.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle visibility

  const handleReadMore = () => {
    setShowMore(!showMore); // Toggle the state
  };
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      var tl2 = gsap.timeline({
            scrollTrigger:{
              trigger:'.section',
              scroller:'body',
              // markers:true,
              start:'top 75%',
              end:'top 10%',
              scrub:2
            }
          })
         
          tl2.from('.heading',{
            y:-100,
            opacity:0,
            duration:1,
            ease:"power3.out"
          })
          tl2.from('.subHeading',{
            x:-350,
            opacity:0,
            duration:1,
            ease:"power3.out"
          })
     
    });
  
    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);
  return (
    <div className="section">
      <h3 className="text-3xl font-bold py-4 pt-12 text-center text-[#212ea0] heading">
        ABOUT US
      </h3>
      <div className="max-w-7xl mx-auto w-full px-16 mb-8">
        <div className="lg:about-left hidden">
          <img src={about_img} className="about-img" alt="" />
          <img src={play_icon} className="play-icon" alt="" />
        </div>
        <div className="about-right">
          <div>
            <h2 className="text-[#000f38] lg:text-[35px] text-[25px] font-[700] subHeading">
              Nurturing Tomorrow's Leaders Today
            </h2>
          </div>
          <p className="text-jusitfy my-5 md:text-base lg:text-base text-sm ">
            MGM's College of Engineering and Technology(MGMCET) is governed by
            Mahatma Gandhi Mission, a Charitable Trust Act 1950 and Societies
            Regulation Act 1860. Since its inception in 1982, Mahatma Gandhi
            Mission has developed into an excellent educational group and is
            totally committed to human resource development. MGM is now a chain
            of Engineering, Medical, Nursing, Management, Dental, Physiotherapy,
            Science, Journalism and Fine Arts spread over four educational
            centres - Navi Mumbai , Nanded, Aurangabad and Noida. In
            continuation of its proud tradition of enriching the human resource
            needs of the country, the Mission has set up in 1986, our institute
            MGM’s College of Engineering & Technology, Kamothe, Navi Mumbai.The
            objective of the institution is to impart value based quality
            education by combining academics with exposure to industry. With
            this view in mind it provides state-of-the art infrastructure
            facilities & academic resources to its students.
          </p>
          {showMore && (
            <p className="hidden lg:block">
              College is affiliated to University of Mumbai and approved by
              AICTE, New Delhi. MGMCET is awarded with ISO-9001-2000
              Certification by RINA for providing technical education in
              engineering field as per the guidelines of University of Mumbai.
              The institute is one of the few engineering colleges to achieve
              this international standard for implementing and maintaining
              Quality Management System. The four courses viz. Computer,
              Electronics & Telecommunications, Biomedical & Civil are
              accredited by NBA of AICTE. MGMCET is housed in a spacious Campus
              near Panvel at the junction of NH-4 and Mumbai-Pune Expressway but
              in a modern style of Architecture, best suited to secure the
              requisite effect of simplicity & dignity, which should be
              associated with the technological institute. It maintains
              picturesque and lush green gardens around to provide a soothing
              atmosphere conducive to learning. Admission to the institute is as
              per the conditions laid down by Directorate of Technical
              Education, Maharashtra State.
            </p>
          )}
        </div>
        <a
          className="cursor-pointer hover:text-blue-800 font-normal text-lg text-blue-500 duration-200"
          onClick={handleReadMore} // Add click handler
        >
          {showMore ? "Read Less..." : "Read More..."}
        </a>
      </div>
    </div>
  );
};

export default About;
