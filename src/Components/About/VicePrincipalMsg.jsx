import React from "react";

function VicePrincipalMsg() {
  return (
    <>
      <hr className="h-2" />
      <div className="max-w-4xl mx-auto w-full py-8 mb-5">
        <h1 className="font-bold text-5xl text-center text-slate-900">
          Vice Principal's Message
        </h1>
        <p className="font-normal text-normal text-justify text-gray-700 mt-10 lg:px-0 px-12">
          Mahatma Gandhi Mission has started College of Engineering &
          Technology, Kamothe, Navi Mumbai in 1986 with the aim to provide and
          promote quality higher education and research on par with
          international standers and to train young men and women able and eager
          to create and put into action ideas, methods, techniques and
          information. It persistently seek and adopts innovative methods to
          improve the quality of higher education. We have highly qualified
          faculty members and our faculty members are fully trained to ensure
          that the students are given every possible support in all their
          endeavours, academics or otherwise.
        </p>
        <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-between my-4">
          <div className="lg:w-[18%] w-[30%]">
            <img src="/vicePrincipal.png" />
            <p className="text-center py-4 font-medium text-lg">
              Dr. Vidyanand Gurulingappa Sayagavi{" "}
            </p>
          </div>
          <p className="font-normal text-normal text-justify text-gray-700 w-[75%]">
            Our College is presently offers four year degree courses in Eleven
            branches of Engineering viz., Civil(60), Computer Engineering(180),
            Electronics & Telecommunication(60), Chemical(60), Biomedical(30),
            Information Technology(60), Mechanical(60), Electrical(60),
            CSE(AI&ML)(60), CSE(DS)(60) and Automation and Robotics(60). The
            college is approved by All India Council for Technical Education,
            Ministry of Human Resource Development, and Government of India &
            affiliated to University of Mumbai. Mahatma Gandhi Mission’s College
            of Engineering & Technology has the unique distinction of being
            first Engineering College offering a postgraduate course in
            Biomedical Engineering, under the Mumbai University. The college has
            also started a postgraduate courses in Civil Engineering from 2002,
            leading to Master of Engineering in Civil with Structural
            Engineering Subjects, Biomedical Engineering, Chemical Engineering
            under the Mumbai University. Also started Research Centre in
            Biomedical Engineering from 2017.
          </p>
        </div>
        <p className="font-normal text-normal text-justify text-gray-700 lg:px-0 px-12">
          Extra curricular and other co-curricular activities are encouraged and
          the students are given every from of support to develop their talents
          in all fields. Our brand of education does not have narrow horizons,
          We believe in exposure. Our students are encouraged to widen their
          knowledge base and study beyond the confines of the syllabus. This is
          evidenced by the extensive library facilities in the college. In this
          age of technology. Knowledge is just a click away and we ensure that
          every student of the college has only the best of technology at his /
          her disposal. I look forward to welcome you to be a member of MGMCET.
          Kamothe, Navi Mumbai.
        </p>
      </div>
    </>
  );
}

export default VicePrincipalMsg;
