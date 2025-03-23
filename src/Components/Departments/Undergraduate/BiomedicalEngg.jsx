import React from "react";
import EngineeringTemplate from "./EngineeringTemplate";

function BiomedicalEngg() {
  return (
    <>
      <EngineeringTemplate
        title={"About Biomedical Engineering"}
        about={[
          "Right from the date of inception of Mahatma Gandhi Mission’s College of Engineering and Technology (MGMCET), Department of Biomedical Engineering started a four years full-time undergraduate degree program (BE) in Biomedical Engineering with an intake of 15 students in the year 1986. Novelty and attractiveness of the program saw the intake gradually growing to 60 by the year 1997. Encouraged by the response, the institution started two years full-time postgraduate degree program (ME) in Biomedical Engineering with intake of 18 students in 2001. It is the only recognized college in the University of Mumbai to impart postgraduate degree program (ME) in Biomedical Engineering.",
          " The department is facilitated with in-campus Medical College and Hospital. Our students visit various departments in the hospital like Radiology, Orthopaedics, Cardiology, Pathology, Physiotherapy, Endoscopy and Operation Theatres etc. for better understanding of the use of biomedical and imaging equipment.",
          " Our department was awarded accreditation by National Board of Accreditation (NBA) in 2006 for 3 years. In past thirty-five years, more than 1300 students have graduated in Bio-Medical Engineering and have often obtained rank in the University. Through campus interviews, many students have got placement in reputed companies like PHILIPS, IGATE, Tata Elexi, GE-Healthcare, Infosys, and Roche Diagno  with a package ranging from 3.0 to 6.0 Lakhs.",
        ]}
        vision={
          "To strive for academic excellence in developing responsible and competent professionals, equipped with advanced technical knowledge and high professional ethics to support healthcare sector"
        }
        mission={[
          "To provide high quality education through innovative teaching learning processes",
          "To provide a forum for industry institute interaction, with a view to groom budding engineers as employable Biomedical Engineering professionals",
          "To inculcate research interest in development of sustainable diagnostic and life supporting tools/systems that caters to the needs of medical profession ",
          "To empower the students with high morals and with a sense of belongingness and responsibility towards the society",
        ]}
        img1={"/biomedical1.jpg"}
        img2={"/biomedical2.webp"}
        img3={"/biomedical3.jpg"}
      />
    </>
  );
}

export default BiomedicalEngg;
