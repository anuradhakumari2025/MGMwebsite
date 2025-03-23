import EngineeringTemplate from "./EngineeringTemplate";

function ItEngg() {
  return (
    <>
      <EngineeringTemplate
        title={"About IT Engineering"}
        about={[
          "Information Technology(IT) at MGMCET, Kamothe , is one of the Best IT Department in Engineering Institute in Navi Mumbai undertakes various unique approaches to educate the students for the emerging and highly challenging Industry requirements. The Department has various laboratories equipped with state-of-the-art computing facilities to support the research and teaching activities. The department has a Robotics Lab in collaboration with Indian Institute of Technology, Mumbai .",
          "Pathway after Information Technology.IT Specialists are recruited in almost all ranges of employment such as finance, arts, medicine, defence, teaching and more. Apart from various opportunities available in IT firms, these professionals can get jobs in public sector and Government firms also. Moreover, a career in IT is considered as one of the most high-paying jobs and is full of opportunities as it is a never ending industry.",
        ]}
        vision={
          "To produce globally proficient IT Engineers nurturing Creativity and Innovation, Research and Entrepreneurial attitude with Human Values."
        }
        mission={[
          "Develop students with strong practical and theoretical knowledge for Innovation and Research in the field of Information Technology and allied disciplines.","Groom the graduates as efficient problem solvers, with global outlook, professional ethics and social responsibilities.","Produce engineers with entrepreneurial skill, leadership qualities and employability skills.","Inculcate a commitment for lifelong learning to explore, apply and transfer knowledge."
        ]}
        pso={[
          "Ability to apply standard Software Engineering practices in system development using different hardware and programming platforms.",
          "Analyze, design and develop efficient software applications in the areas related to database and web technologies, cloud computing, data analytics, embedded systems and IoT.",
          "Acquaint with the contemporary trends and tools in Information Technology and develop innovative solutions using them.",
        ]}
        peos={[
          "Demonstrate good breadth of knowledge in engineering and programming for solving complex IT problems.",
          "Exhibit strong analytical skills to solve real life problems using modern IT tools and techniques.",
          "Pursue higher education and research in various domains of Information Technology and allied disciplines for professional development.PEO4. Exhibit leadership qualities and entrepreneurial skills with effective communication skills, teamwork, human values and passion for lifelong learning.",
        ]}
        img1={"/IT1.jpg"}
        img2={"/IT2.jpg"}
        img3={"/comp4.jpg"}
      />
    </>
  );
}

export default ItEngg;
