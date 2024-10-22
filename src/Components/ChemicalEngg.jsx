import EngineeringTemplate from "./EngineeringTemplate";

function ChemicalEngg() {
  return (
    <>
      <EngineeringTemplate
        title={"About Chemical Engineering"}
        about={
          "Chemical Engineering is a branch of engineering that deals with the application of physical sciences (such as chemistry and physics), life sciences (such as biology, microbiology, and biochemistry), together with mathematics and economics, to produce, transform, transport, and properly use chemicals, materials, and energy. Chemical engineers work in a wide range of industries, including pharmaceuticals, energy, materials, food processing, and environmental protection."
        }
        vision={
          "To be a globally recognized center of excellence in chemical engineering education, research, and innovation, dedicated to developing environmentally responsible solutions to societal challenges and advancing sustainable industrial practices."
        }
        mission={
          "To provide high-quality education that prepares students for careers in industry, research, and academia by equipping them with the necessary technical knowledge and problem-solving skills. To foster innovation and entrepreneurship in chemical engineering through cutting-edge research and interdisciplinary collaboration. To promote environmental sustainability, ethical responsibility, and social commitment in engineering practice.To continuously engage with industry and society to align the program with current and future technological and societal needs."
        }
        pso={
          "1. To provide high-quality education that prepares students for careers in industry, research, and academia by equipping them with the necessary technical knowledge and problem-solving skills.2.To foster innovation and entrepreneurship in chemical engineering through cutting-edge research and interdisciplinary collaboration.3. To promote environmental sustainability, ethical responsibility, and social commitment in engineering practice.4. To continuously engage with industry and society to align the program with current and future technological and societal needs."
        }
        peos={
          `PEO 1: Demonstrate proficiency in applying the principles of chemical engineering to solve real-world problems in industries such as energy, pharmaceuticals, materials, food, and environmental sectors.
          PEO 2: Pursue advanced studies, research, and lifelong learning in chemical engineering and related fields. 
          PEO 3: Exhibit strong leadership, communication, and teamwork skills in multidisciplinary engineering environments. PEO 4: Promote ethical and sustainable engineering practices in their professional careers, contributing to societal welfare and environmental protectio`
        }
        img1={"/chemical1.jpg"}
        img2={"/chemical2.jpg"}
        img3={"/chemical3.jpg"}
      />
    </>
  );
}

export default ChemicalEngg;
