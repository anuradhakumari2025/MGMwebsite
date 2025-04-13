import { useNavigate } from "react-router-dom";
import gallery_1 from "/gallery-1.png";
import gallery_2 from "/gallery-2.png";
import gallery_3 from "/gallery-3.png";
import gallery_4 from "/gallery-4.png";
import white_arrow from "/white-arrow.png";
import Title from "../Title/Title";

const Campus = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/campus"); // Redirect to the new page
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Title title={"Campus Photos"} subTitle={"GALLERY"} />
      <div className="campus text-center lg:max-w-6xl mx-auto w-full my-4 mb-8 lg:px-0 px-12">
        <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-4 rounded-md mb-6">
          <img src={gallery_1} alt="" className=" rounded-md" />
          <img src={gallery_2} alt="" className="rounded-md" />
          <img src={gallery_3} alt="" className=" rounded-md" />
          <img src={gallery_4} alt="" className=" rounded-md"/>
        </div>
        <button
          className="rounded-full cursor-pointer px-7 py-3 my-4 lg:text-lg text-sm inline-flex items-center justify-center border-none outline-none bg-[#212ea0] text-white hover:scale-105 hover:shadow-lg hover:shadow-gray-400"
          onClick={handleRedirect}
        >
          See more here
          <img src={white_arrow} alt="" className="w-[20px] ml-3" />
        </button>
      </div>
    </>
  );
};

export default Campus;
