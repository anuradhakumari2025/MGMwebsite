import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full py-2">
        <h1 className="text-[#000f38] text-center text-3xl font-bold">What Student Says</h1>
        <div className="w-3/4 m-auto pb-6">
          <div className="mt-12">
            <Slider {...settings}>
              {cardData.map((card, id) => (
                <div
                  key={id}
                  className="bg-white relative border-[1px] border-gray-900 h-[350px] text-black rounded-xl"
                >
                  <div className="rounded-t-xl py-4 bg-gray-800 flex justify-center items-center">
                    <img
                      src={card.img}
                      alt=""
                      className="lg:h-32 lg:w-32  rounded-full w-24 h-24"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{card.name}</p>
                    <p className="text-sm overflow-y-scroll no-scrollbar lg:h-[15vh] h-[23vh] text-gray-700">{card.review} </p>
                    {/* <button className="bg-indigo-500 absolute bottom-[5%] text-white lg:text-md px-8 py-2 text-sm rounded-xl">
                      Read More
                    </button> */}
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
    review: "As a student of MGM's College of Engineering and Technology, I can confidently say that this institution has provided me with a well-rounded education. The faculty members are highly knowledgeable and approachable, always ready to guide us through academic and career challenges. The campus is equipped with modern labs and facilities that make learning practical and engaging. I particularly appreciate the emphasis on extracurricular activities and industry exposure, which have helped me develop both technical and soft skills. The placement opportunities here are excellent, with many reputed companies visiting the campus. Overall, my experience has been enriching, and I feel well-prepared for my future career.",
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
    img: "https://media.istockphoto.com/id/2148790198/photo/happy-young-college-students-with-books-on-yellow-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=QJHn5uc4eYzBAW4aUIkb6N7T0xOicb11PP7u-QZzEm4=",
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
    img: "https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.webp?a=1&b=1&s=612x612&w=0&k=20&c=lBocBzbPCNM6odnrAs4AwWomPRnuuJUhsnqJADxu2ms=",
    review: "I loved it! Definitely would recommend to my friends.",
  },
  {
    id: 7,
    name: "Chris Brown",
    img: "https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=XG6nU_rotIAu50DbEy-Go0UnpvhsghPpvShkBmV7Ux4=",
    review: "Not bad, but I expected better features for the price.",
  },
  {
    id: 8,
    name: "Megan Harris",
    img: "https://media.istockphoto.com/id/2012565290/photo/portrait-of-female-college-student-holding-books-and-looking-at-the-camera-with-a-smile.webp?a=1&b=1&s=612x612&w=0&k=20&c=xlzbzytPUGoNjWNvObYwDR58eqkngFx9WgUv9GF9aok=",
    review: "Great value for money. Would buy again.",
  },
  {
    id: 9,
    name: "Luke Miller",
    img: "https://media.istockphoto.com/id/578811112/photo/smiling-female-young-college-student-of-indian-ethnicity.webp?a=1&b=1&s=612x612&w=0&k=20&c=BTDgPol9yGArP6-8ix5r04Fsx79hfM2XF_XZegS28ak=",
    review: "Fantastic! Exceeded all my expectations.",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    img: "https://images.unsplash.com/photo-1710438595814-5e6811869347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGxlZ2UlMjBzdHVkZW50JTIwcGhvdG9zfGVufDB8fDB8fHww",
    review: "Good product, but not as described. Could use some improvements.",
  },
];

export default Testimonial;
