import React from "react";
import EngineeringTemplate from "./EngineeringTemplate";

function Mechanical() {
  return (
    <>
      <EngineeringTemplate
        title={"About Mechanical Engineering"}
        about={[
          "In the recent times, Mechanical Engineering have seen an unprecedented growth, conventional practices are overtaken by CAD/CAM/CIM/ CAE/FEA/CFD/Nano-Technology/ Micromachining etc. All these technologies caters to the needs of today’s rapid changing Industrial scenario Mechanical Engineering forms the base of all engineering branches, its horizon of has no limits. Our Institute is providing excellent infrastructure and facilities of UG, PG and Research activities. Our Labs are upgraded with HAAS CNC’s and JANATICS Pneumatics equipment’s.",
        ]}
        vision={
          "To be one of the leading Institutions for Engineering education developing proficient Engineers with global acceptance in the service of mankind."
        }
        mission={[
          "Providing quality Engineering education to cater the needs of industry and society with multidisciplinary approach on sustainable basis.",
          "Developing globally competent Engineers having ability to solve real-life problems addressing environmental issues through technological advancements.",
          "Inculcating professionalism, teamwork, research, innovation and entrepreneurship, maintaining the spirit of continuous learning.Fostering the collaboration with industry, academia, research organizations, experts and alumni.",
          "Imparting employability skills nurturing leadership qualities, imbibing ethical and social values among students.",
        ]}
        img1={"/mechanical1.jpg"}
        img2={"/mechanical2.jpg"}
        img3={"/mechanical3.jpg"}
      />
    </>
  );
}

export default Mechanical;
