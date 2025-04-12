import React from "react";

function StudentActivity() {
  const volleyball = [
    {
      name: "Aadesh Mokal",
      class: "BE",
    },
    {
      name: "Tanmay Pandit",
      class: "SE",
    },
    {
      name: "Rajveer Shinde",
      class: "BE",
    },
    {
      name: "Vishal Parmar",
      class: "SE",
    },
    {
      name: "Aditya Jadhav",
      class: "SE",
    },
    {
      name: "Raviraj Patil",
      class: "BE",
    },
    {
      name: "Sarthak Patil",
      class: "BE",
    },
    {
      name: "Kshitij Madaye",
      class: "BE",
    },
    {
      name: "Vignesh Temkar",
      class: "SE",
    },
    {
      name: "Tushar Jale",
      class: "TE",
    },
  ];

  const throwball = [
    {
      name: "Asmita Pawade",
      class: "BE",
    },
    {
      name: "Laxmi Gadam",
      class: "BE",
    },
    {
      name: "Tanaya Ige",
      class: "BE",
    },
    {
      name: "Vaishnavi Wagahe",
      class: "BE",
    },
    {
      name: "Divya Dhotare",
      class: "SE",
    },
    {
      name: "Purva Shelar",
      class: "TE",
    },
    {
      name: "Aishwarya Kamble",
      class: "BE",
    },
    {
      name: "Tanvi Dautpure",
      class: "TE",
    },
  ];

  const badminton = [
    {name:"Krishna Take(1st)",class:"BE"},
    {name:"Sahil Yadav(2nd)",class:"SE"},
    {name:"Shruti Gaikwad",class:"BE"},
    {name:"Hemangi",class:"BE"},
  ]

  const badminton2 = [
    {name:"Abhishekh Reddy(1st)",class:"BE"},
    {name:"Krishna Take(2nd)",class:"FE"},
    {name:"Tanmay(2nd)",class:"FE"},
  ]

  const badmintonMix = [
    {name:"Sahil Yadav(1st)",class:"BE"},
    {name:"Hemangi(1st)",class:"BE"},
    {name:"Nihal(2nd)",class:"BE"},
    {name:"Shruti(2nd)",class:"FE"},
  ]
  
  return (
    <div className="border">
      <div className="max-w-5xl mx-auto py-6 mb-4 px-6">
        <h1 className="font-semibold text-3xl py-2">Student's Achievements</h1>
        <table className="min-w-full table-auto border border-gray-300 my-4 mb-10 bg-cover bg-center" >
          <thead className="bg-gray-100">
            <tr className="text-black">
              <th className="border py-2 text-black">Sr No.</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
            {volleyball.map((player, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">
                  Volleyball -- Silver
                </td>
                <td className="border px-4 py-2 text-center">{player.name}</td>
                <td className="border px-4 py-2 text-center">{player.class}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="min-w-full table-auto border border-gray-300 my-4 mb-10">
          <thead className="bg-gray-100">
            <tr>
              <th className="border py-2">Sr No.</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
            {throwball.map((player, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">
                  Throwball -- Silver
                </td>
                <td className="border px-4 py-2 text-center">{player.name}</td>
                <td className="border px-4 py-2 text-center">{player.class}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="min-w-full table-auto border border-gray-300 my-4 mb-10">
          <thead className="bg-gray-100">
            <tr>
              <th className="border py-2">Sr No.</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
          {badminton.map((player, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">
                Badminton -- Sinlges
              </td>
              <td className="border px-4 py-2 text-center">{player.name}</td>
              <td className="border px-4 py-2 text-center">{player.class}</td>
            </tr>
          ))}
         
          </tbody>
        </table>

        <table className="min-w-full table-auto border border-gray-300 my-4 mb-10">
          <thead className="bg-gray-100">
            <tr>
              <th className="border py-2">Sr No.</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
          {badminton2.map((player, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">
                Badminton -- Doules
              </td>
              <td className="border px-4 py-2 text-center">{player.name}</td>
              <td className="border px-4 py-2 text-center">{player.class}</td>
            </tr>
          ))}
         
          </tbody>
        </table>

        <table className="min-w-full table-auto border border-gray-300 my-4 mb-10 bg-cover bg-center"  >
          <thead className="bg-gray-100">
            <tr>
              <th className="border py-2">Sr No.</th>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
          {badmintonMix.map((player, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">
                Badminton -- Mix
              </td>
              <td className="border px-4 py-2 text-center">{player.name}</td>
              <td className="border px-4 py-2 text-center">{player.class}</td>
            </tr>
          ))}
         
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentActivity;
