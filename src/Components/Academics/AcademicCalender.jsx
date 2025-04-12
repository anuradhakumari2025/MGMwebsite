import React from "react";

const AcademicCalender = () => {
  return (
    <>
    <div className="border"></div>
    <div className="max-w-4xl mx-auto py-4 mb-6">
      <h1 className="text-3xl font-semibold text-center py-2">Academic Calendar</h1>
      <div className="w-full border mb-8 mt-2 border-black"></div>
      <embed
        height="700px"
        src="https://mgmcen.ac.in/pdf/acedamic calender 24-25.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0"
        type="application/pdf"
        width="100%"
        className="px-8"
      ></embed>
    </div>
    </>
  );
};

export default AcademicCalender;
