import { useNavigate } from "react-router-dom";
import "./Campus.css";
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
  };
  return (
    <>
      <Title title={"Campus Photos"} subTitle={"GALLERY"} />
      <div className="campus">
        <div className="gallery">
          <img src={gallery_1} alt="" />
          <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
          <img src={gallery_4} alt="" />
        </div>
        <button className="btn dark-btn" onClick={handleRedirect}>
          See more here <img src={white_arrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default Campus;
