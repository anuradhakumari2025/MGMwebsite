// import React from "react";

// function Testomonial() {
//   return (
//     <>
//       <div className="border-2 border-yellow-400 text-center">
//         <p className="text-blue-800 font-bold text-xl">TESTIMONIALS</p>
//         <p className="text-blue-950 font-bold text-3xl">What Student Says</p>
//       </div>
//       <div className="border-2 border-pink-700 h-auto p-6">

//         <div className="border-2 border-green-600 w-2/5 h-auto shadow-2xl">
//           <div className="flex p-2 items-center">
//             <div className="rounded-full border-2 border-blue-950 h-10 w-10 flex items-center justify-center">
//               <img src="/mgm-logo.jpeg" className="w-11/12 h-11/12" />
//             </div>
//             <div className="ml-4">
//               <p className="font-semibold text-blue-950 text-lg">Emily Williams</p>
//               <p>Edusity,USA</p>
//             </div>
//             </div>

//             <div className="p-2 text-gray-800 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laudantium! Illo a quos voluptatem dolores facilis, eligendi minus reiciendis nulla quisquam debitis error rerum molestiae, quo, eos ullam aliquam? At.</div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Testomonial;


import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "./Title/Title";
import testimonials from "../Constants/TestimonialsItems";

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonials
  const nextTestimonials = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Function to go to the previous testimonials
  const prevTestimonials = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <>
    <Title title={"What Student Says"} subTitle={"TESTIMONIALS"}/>
    <div className="testimonial-slider flex items-center justify-center">
      <button onClick={prevTestimonials} disabled={currentIndex === 0} >
        <div className="border-2 border-blue-900 rounded-full h-10 w-10 mr-12 bg-blue-900">
        <FaArrowLeft className="w-full h-full p-2 text-white " />
        </div>
      </button>
      <div className="flex gap-10 p-6">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card border p-4 rounded-lg shadow-lg max-w-xs">
            <h3 className="font-semibold text-blue-800 text-xl">{testimonial.name}</h3>
            <p className="text-lg text-gray-500">{testimonial.location}</p>
            <p className="mt-2 ">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <button onClick={nextTestimonials} disabled={currentIndex >= testimonials.length - 2}>
        <div className="border-2 border-blue-900 rounded-full h-10 w-10 ml-12 bg-blue-900">
        <FaArrowRight className="p-2 h-full w-full text-white" />
        </div>
      </button>
    </div>
    </>
  );
}

export default TestimonialSlider;

