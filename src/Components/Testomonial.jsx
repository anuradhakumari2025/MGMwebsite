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
                  className="bg-white relative border-2 border-gray-900 h-[400px] text-black rounded-xl"
                >
                  <div className="rounded-t-xl py-4 bg-gray-800 flex justify-center items-center">
                    <img
                      src={card.img}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{card.name}</p>
                    <p>{card.review} </p>
                    <button className="bg-indigo-500 absolute bottom-[5%] text-white text-md px-8 py-2  rounded-xl">
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
