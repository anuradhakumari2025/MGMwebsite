import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const deptNumber = [
    {
      name: "Computer Engineering",
      number: "+91 99306 60501",
      teacher: "Prof. Rajesh Kadu",
    },
    {
      name: "Civil Engineering",
      number: "+91 98217 71767",
      teacher: "Prof. Padmakar Salunke",
    },
    {
      name: "Mechanical Engineering",
      number: "(022)-27433403",
      teacher: "Prof. Rajesh Kadu",
    },
    {
      name: "Electrical Engineering",
      number: "(022)-27433403",
      teacher: "Prof. Rajesh Kadu",
    },
    {
      name: "Biomedical Engineering",
      number: "(022)-27433403",
      teacher: "Prof. Rajesh Kadu",
    },
    {
      name: "Information Technology",
      number: "+91 93220 97594",
      teacher: "Prof. Swati Sinha",
    },
    {
      name: "Chemical Engineering",
      number: "+91 98211 04568",
      teacher: "Dr C.K Mistry",
    },
    {
      name: "Electronics and Telecommunication Engineering",
      number: "(022)-27433403",
      teacher: "Prof. Rajesh Kadu",
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy"));
  };
  return (
    <div className="border">
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-3xl font-semibold py-4 underline mb-4">
          Contact:-
        </h1>
        <div className="space-y-1 mb-6">
          <h2 className="font-semibold">
            Office Phone Number: <span className="">Ph:</span>
            <span
              className="font-normal cursor-pointer"
              onClick={(e) => handleCopy(e.target.innerText)}
            >
              (022)-27433403.
            </span>
          </h2>
          <h2 className="font-semibold">
            E-mail:
            <span
              className="font-normal cursor-pointer"
              onClick={(e) => handleCopy(e.target.innerText)}
            >
              director@mgmmumbai.ac.in
            </span>
          </h2>
        </div>

        <div className="space-y-1 mb-6">
          <h2 className="font-semibold">
            Admission Phone Number: <span className="">Ph:</span>
            <span
              className="font-normal cursor-pointer"
              onClick={(e) => handleCopy(e.target.innerText)}
            >
              (022)-65138119.
            </span>
          </h2>
          <h2 className="font-semibold">
            E-mail:
            <span
              className="font-normal cursor-pointer"
              onClick={(e) => handleCopy(e.target.innerText)}
            >
              director@mgmmumbai.ac.in
            </span>
          </h2>
        </div>

        <div className="mb-6">
          <h1 className="font-semibold mb-2">
            Placement Cell Contact Numbers:
          </h1>
          <h3 className="font-semibold">
            Prof. Sanjay Jadhav (TPO): <span>Ph:</span>
            <span
              className="font-normal cursor-pointer"
              onClick={(e) => handleCopy(e.target.innerText)}
            >
              +91 97020 08500
            </span>
          </h3>
          <h3 className="font-semibold">
            Yogesh Karpe (Assistant TPO): <span>Ph:</span>
            <span
              className="font-normal cursor-pointer"
              onClick={(e) => handleCopy(e.target.innerText)}
            >
              +91 99605 90188
            </span>
          </h3>
        </div>

        <div>
          <h1 className="font-semibold mb-4 ">HOD</h1>
          <ol className="list-[alphabetic] list-inside space-y-3">
            {deptNumber.map((dept, index) => (
              <li key={index} className="font-semibold">
                {dept.name}:
                <p className="pl-4">
                  Name: <span className="font-normal">{dept.teacher}</span>
                </p>
                <p className="pl-4">
                  <span>&nbsp;Ph:</span>
                  <span
                    className="font-normal cursor-pointer"
                    onClick={(e) => handleCopy(e.target.innerText)}
                  >
                    &nbsp;{dept.number}
                  </span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Contact;
