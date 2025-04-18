import React from "react";
const Title = ({ subTitle, title }) => {
  return (
    <>
      <div className="bg-white">
        <p className="text-3xl font-bold pt-8 text-center text-[#212ea0]">
          {subTitle}
        </p>
        <h2 className="text-[#000f38] lg:text-[35px] text-[25px] font-[700] text-center">
          {title}
        </h2>
      </div>
    </>
  );
};

export default Title;
