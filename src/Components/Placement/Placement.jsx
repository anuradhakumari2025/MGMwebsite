import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeInOut } from "framer-motion";
import toast from "react-hot-toast";

const Placement = () => {
  gsap.registerPlugin(ScrollTrigger);
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy"));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading", {
        y: -50,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });
      gsap.from(".tpo", {
        x: -200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  function page2Animation() {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        scroller: "body",
        // markers: true,
        start: "top 15%",
        end: "top -50%",
        scrub: 2,
      },
    });

    tl2.from(".line2.left", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: easeInOut,
    });
    tl2.from(".line2.right", {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: easeInOut,
    });
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      page2Animation();
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);
  return (
    <>
      <hr />
      <div className="max-w-6xl  mx-auto w-full  py-10 section">
        <h1 className="text-4xl font-semibold text-center heading">
          Training and Placement Cell
        </h1>
        <h2 className="text-3xl font-medium pt-8 px-8 tpo ">TPO </h2>
        {/* Sanjay Jadhav */}
        <div className="flex gap-16 px-12 pt-8 mb-10">
          <div className="w-[25%] line1 left">
            <img
              src="/sanjaySir.jpeg"
              alt="Sanjay Sir"
              className="h-44"
            />
            <h3 className="text-center pt-4 font-semibold">
              Prof. Sanjay Jadhav
            </h3>
            <p className="text-center pt-2 text-sm">
              Training and Placement Officer
            </p>
          </div>

          <div className="w-[75%] line1 right flex flex-col gap-4">
            <p className="text-sm lg:text-base">
              <span className="font-bold lg:text-xl text-lg">About:-</span> Secretary,
              Maharashtra Association of Training and Placement Officers (MaTPO)
            </p>
            <p className="text-justify text-sm lg:text-base">
              <span className="font-bold lg:text-xl text-lg">Message:- &nbsp;</span>
              Welcome to MGM's College of Engineering and Technology, Kamothe,
              Navi Mumbai! One of the most crucial aspects of an individual’s
              life is career planning and decision-making. The Training &
              Placement (T&P) Cell of MGM College of Engineering and Technology
              plays a crucial role in the career development of the students. It
              acts as a bridge between academic learning and industry
              expectations, nurturing students into competent professionals.
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-bold lg:text-xl text-lg">Phone:</span>
              <span className="cursor-pointer" onClick={(e) => handleCopy(e.target.innerText)}>
                +91-9702008500
              </span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-bold lg:text-xl text-lg">Email:-&nbsp;</span>
              <span className="cursor-pointer" onClick={(e) => handleCopy(e.target.innerText)}>
                placement.cet@mgmmumbai.ac.in ,
              </span>
              <span className="cursor-pointer" onClick={(e) => handleCopy(e.target.innerText)}>
                sanjayjadhavtpo@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* Yogesh Karpe */}
        <div className="flex gap-16 px-12 pt-6 w-full">
          <div className="w-[25%] line2 left">
            <img
              src="/yogeshKarpe.jpeg"
              alt="Sanjay Sir"
              className="h-44 w-full"
            />
            <h3 className="text-center pt-4 font-semibold">
              Prof. Yogesh A. Karpe
            </h3>
            <p className="text-center pt-2 text-sm">
              Deputy Training & <br />
              Placement Officer,
            </p>
          </div>

          <div className="flex gap-4 flex-col w-[75%] line2 right">
            <p className="">
              <span className="font-bold text-xl">About:-</span> Assistant TPO
              and A.P
            </p>
            <p className="text-justify">
              <span className="font-bold text-xl">Message:- &nbsp;</span>
              Our institute believes that every student who joins the
              institution deserves to get a potential earning opportunity. Our
              belief consolidates in our efforts to ensure that our students get
              proper training as well as the job. The T&P Cell operates
              throughout the year to facilitate contact between companies and
              graduates.
              <br /> The models of academic excellence promoted within the
              institutes have enabled the confidence in students and parents
              that if a child is admitted to the institute and performs well to
              get a first-class, his/her chances of getting a job opportunity
              are almost a guarantee. <br />
              The main objective of T & P cell is to motivate and guide students
              to explore the domains of various career opportunities,
              entrepreneurship and enhance functional skills by providing
              industrial training, industry associated projects & enhance
              employability skills by honing aptitude skills, communication
              skills, GD & PI skills. We also invite experts from industries to
              guide the students on the latest technology, expectations from
              industries and different career options. T & P cell also acts as
              an information source for opportunities in higher education and
              their qualifying examinations such as GATE, CAT, GRE, etc.
            </p>
            <p>
              <span className="font-bold text-xl">Phone:</span>
              <span className="cursor-pointer" onClick={(e) => handleCopy(e.target.innerText)}>
                +91-9960590188
              </span>
            </p>
            <p>
              <span className="font-bold text-xl">Email:-&nbsp;</span>
              <span className="cursor-pointer" onClick={(e) => handleCopy(e.target.innerText)}>
                yogeshkarpeTPO@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placement;
