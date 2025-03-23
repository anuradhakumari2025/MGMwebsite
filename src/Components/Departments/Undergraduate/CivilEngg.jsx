import React from "react";
import EngineeringTemplate from "./EngineeringTemplate";

function CivilEngg() {
  return (
    <>
      <EngineeringTemplate
        title={"About Civil Engineering"}
        about={[
          "This branch of engineering encompasses every facet of civilization, including shelter and water, roads and railways, bridges and tunnels, dams and canals, harbors, airports, and similar construction activities directly related to the welfare of human beings. As long as civilization continues to expand, the civil engineering profession will persist. The Department of Civil Engineering was established right from the inception of the institute in the year 1984 with an initial intake of 30 students.",
          " The department has well-established laboratories equipped with modern tools in the fields of surveying, strength of materials, concrete technology, fluid mechanics, geology, and engineering mechanics, among others.   The Department of Civil Engineering has been primarily involved in providing quality civil engineering education to equip students as competent planners, designers, and constructors of the future physical built environment. The department is also eager to undertake research and development activities and industrial consultancy assignments.",
        ]}
        vision={
          "To be one of the leading Departments for Civil engineering education developing proficient Civil Engineers with global acceptance in the service of mankind."
        }
        mission={[
          "Providing quality civil engineering education to address infrastructural and environmental challenges, with a focus on sustainable development.",
          "Training individuals to become competent planners, designers, and constructors of the future built environment.",
          "Offering a learning environment that promotes lifelong learning, research, and innovation for civil engineering solutions benefiting society and industry.",
          "Cultivating professional and entrepreneurial skills, stakeholder collaborations, and independent thinking to address civil engineering challenges while protecting human values.",
        ]}
        peos={[
          "Involved in surveying, planning, analyzing, designing, and constructing infrastructure projects.",
          "Addressing societal needs through a sustainable approach in civil engineering.",
          "Shaping the built environment by delivering the responsibilities effectively within a diverse team.",
          "Engage in lifelong learning, participate in research and innovation and adapt to the demands of the civil engineering profession.",
        ]}
        pso={[
          "Conduct surveys and develop plans for infrastructure Projects.",
          "Analyze and Design Civil Engineering Structures.",
          "Test and evaluate civil engineering materials and products.",
        ]}
        img1={"/civil1.jpg"}
        img2={"/civil2.jpg"}
        img3={"/civil3.jpg"}
      />
    </>
  );
}

export default CivilEngg;
