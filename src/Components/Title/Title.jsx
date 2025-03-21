import React from "react";
import "./Title.css";
const Title = ({ subTitle, title }) => {
  return (
    <>
      <div className="title  bg-white">
        <p>{subTitle}</p>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Title;
