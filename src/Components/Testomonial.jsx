import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Title from "./Title/Title";
import testimonials from "../Constants/TestimonialsItems";

function Testimonial() {
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
      <div className="flex flex-col lg:flex-row gap-10 p-6">
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

export default Testimonial;

