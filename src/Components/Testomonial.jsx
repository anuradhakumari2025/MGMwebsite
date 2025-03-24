// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Title from "./Title/Title";
// import testimonials from "../Constants/TestimonialsItems";

// function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next testimonials
//   const nextTestimonials = () => {
//     if (currentIndex < testimonials.length - 3) {
//       setCurrentIndex(currentIndex + 3);
//     }
//   };

//   // Function to go to the previous testimonials
//   const prevTestimonials = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 3);
//     }
//   };

//   return (
//     <>
//     <Title title={"What Student Says"} subTitle={"TESTIMONIALS"}/>
//     <div className="testimonial-slider flex items-center justify-center">
//       <button onClick={prevTestimonials} disabled={currentIndex === 0} >
//         <div className="border-2 border-blue-900 rounded-full h-10 w-10 mr-12 bg-blue-900">
//         <FaArrowLeft className="w-full h-full p-2 text-white " />
//         </div>
//       </button>
//       <div className="flex flex-col lg:flex-row gap-10 p-6">
//         {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
//           <div key={testimonial.id} className="testimonial-card border p-4 rounded-lg shadow-lg max-w-xs">
//             <h3 className="font-semibold text-blue-800 text-xl">{testimonial.name}</h3>
//             <p className="text-lg text-gray-500">{testimonial.location}</p>
//             <p className="mt-2 ">{testimonial.text}</p>
//           </div>
//         ))}
//       </div>
//       <button onClick={nextTestimonials} disabled={currentIndex >= testimonials.length - 2}>
//         <div className="border-2 border-blue-900 rounded-full h-10 w-10 ml-12 bg-blue-900">
//         <FaArrowRight className="p-2 h-full w-full text-white" />
//         </div>
//       </button>
//     </div>
//     </>
//   );
// }

// export default Testimonial;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full py-4">
        <div className="w-3/4 m-auto py-16">
          <div className="mt-20">
            <Slider {...settings}>
              {cardData.map((card, id) => (
                <div
                  key={id}
                  className="bg-white border-2 border-slate-950 h-[400px] text-black rounded-xl"
                >
                  <div className="rounded-t-xl py-4 bg-slate-950 flex justify-center items-center">
                    <img
                      src={card.img}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{card.name}</p>
                    <p>{card.review} </p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1  rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

const cardData = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "This is an amazing product! Highly recommended to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZQ4s-_ltnxOs8_hU_ZnPxTnaCNv-gKOImKZok15wekk=",
    review: "A fantastic experience! Will buy again.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    img: "https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Good quality, but a bit expensive.",
  },
  {
    id: 4,
    name: "Sara Lee",
    img: "https://via.placeholder.com/150",
    review: "It met all my expectations. Worth the price!",
  },
  {
    id: 5,
    name: "David Wilson",
    img: "https://images.unsplash.com/photo-1619425192860-bd4d99186366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGluJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    review: "Satisfactory performance. Could use a little improvement.",
  },
  {
    id: 6,
    name: "Emily Davis",
    img: "https://via.placeholder.com/150",
    review: "I loved it! Definitely would recommend to my friends.",
  },
  {
    id: 7,
    name: "Chris Brown",
    img: "https://via.placeholder.com/150",
    review: "Not bad, but I expected better features for the price.",
  },
  {
    id: 8,
    name: "Megan Harris",
    img: "https://via.placeholder.com/150",
    review: "Great value for money. Would buy again.",
  },
  {
    id: 9,
    name: "Luke Miller",
    img: "https://via.placeholder.com/150",
    review: "Fantastic! Exceeded all my expectations.",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    img: "https://via.placeholder.com/150",
    review: "Good product, but not as described. Could use some improvements.",
  },
];

export default Testimonial;
