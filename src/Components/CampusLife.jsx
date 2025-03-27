import React, { useState } from "react";
import CampusVidio from "./CampusVidio/CampusVidio";

function CampusLife() {
  const [showMore, setShowMore] = useState(false); // State to toggle visibility

  const handleReadMore = () => {
    setShowMore(!showMore); // Toggle the state
  };
  return (
    <>
      <hr className="lg:h-2" />
      <main className="lg:max-w-6xl max-w-3xl mx-auto">
        <p className="text-center text-3xl font-bold px-4 lg:py-6 pt-6 text-slate-950">
          College Facilities
        </p>
        {/* <CampusVidio /> */}
        <div className="w-full max-w-6xl mx-auto mb-20 mt-8">
          <div className="grid lg:grid-cols-2 lg:gap-[80px] gap-[40px] text-blue-900 px-16">
            <div className="border-2 border-violet-400 flex items-center flex-col rounded-3xl shadow-gray-500 shadow-xl">
              <p className="text-center lg:font-bold text-2xl font-semibold lg:mb-4 lg:mt-8 my-4">
                Bus Service
              </p>
              <div className="lg:mt-12 lg:h-full">
                <img src="/busService.jpg" className="h-full rounded-b-3xl" />
              </div>
            </div>

            <div className="lg:p-4 text-justify lg:text-lg text-sm font-semibold">
              <p className="lg:mt-20 px-4">
                MGMCET is housed in a spacious Campus near Panvel at the
                junction of NH-4 and Bombay-Pune Expressway. For the convenience
                of our students, MGMCET provides bus services to college
                students in the morning. All the buses used for this services
                are highly comfortable and secure. Bus services are for boys and
                girls. And above all, these bus services are provided free for
                the students of MGMCET
              </p>
              <div className="flex justify-center items-center lg:mt-20">
                <table className="border-2 border-blue-700 mt-4 w-80 h-40 text-center shadow-gray-500 shadow-xl">
                  <thead>
                    <tr>
                      <th className="border-2 border-blue-700">Bus During</th>
                      <th className="border-2 border-blue-700">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-blue-700">Morning</td>
                      <td className="border-2 border-blue-700">
                        08:00 - 10:00
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 border-blue-700">Afternoon</td>
                      <td className="border-2 border-blue-700">
                        03:30 - 06:00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-2 lg:hidden border-blue-700 flex flex-col items-center rounded-3xl shadow-gray-500 shadow-xl">
              <p className="text-center font-bold text-2xl lg:mt-8 my-4">
                Hostel
              </p>
              <div className="lg:mt-56 lg:h-[80vh] h-[40vh]">
                <img
                  src="/hostel.jpg"
                  className="h-full w-full rounded-b-3xl"
                />
              </div>
            </div>
            <div className=" lg:px-6 ">
              <ol className="border-2 border-blue-700 list-decimal lg:pl-[40px] pl-[6vw] p-4 lg:text-lg text-sm font-semibold shadow-gray-500 shadow-md rounded-lg">
                <li> MGMCET provides hostel facility for girls and boys.</li>
                <li>
                  The hostel facility is granted to the students of the
                  University strictly on the basis of merit.
                </li>
                <li>
                  The number of seats for each department depends on the
                  department size.
                </li>
              </ol>
              <div className="border-2 border-blue-700  font-semibold rounded-xl shadow-gray-500 shadow-xl mt-2">
                <p className="text-center p-4 text-lg lg:text-2xl font-bold">
                  Hostel Rules
                </p>
                <ol className="list-decimal lg:pl-[40px] pb-4 pl-[6vw] space-y-2 lg:text-lg text-sm">
                  <li>
                    During my stay in the Hostel, I will not disturb my
                    neighbours or others by talking loudly or creating nuisance.
                  </li>
                  <li>
                    I shall not indulge in wasteful or improper use of water,
                    electricity, etc.
                  </li>
                  <li>
                    I shall also be responsible for the safety of electrical
                    installations, furniture, fixtures etc. in the room. I shall
                    not use electrical appliances for any purpose, including
                    cooking in the room.
                  </li>
                  <a
                    className="cursor-pointer hover:text-blue-800 font-normal lg:text-lg text-blue-500 text-sm duration-500"
                    onClick={handleReadMore} // Add click handler
                  >
                    {showMore ? "" : "Read More..."}
                  </a>
                  {showMore && (
                    <>
                      <li>
                        In case I am required to remain away from the Hostel
                        after 12 midnight on any day, I shall obtain prior
                        permission from the Warden in writing.
                      </li>
                      <li>
                        I shall take permission to take a visitor to my room by
                        writing in the visitor register maintained by the
                        Warden.
                      </li>
                      <li>
                        I shall not keep any guest in my room for overnight stay
                        without prior permission in writing from the Warden.
                      </li>
                      <li>
                        I shall not consume any alcoholic drinks/drugs in the
                        hostel premises.
                      </li>
                      <li>
                        I shall take the permission to leave the Hostel
                        temporarily or permanently or at the end of the term
                        from the Warden and a clearance certificate for all dues
                        from the Hostel Office.
                      </li>
                      <li>
                        I have also read carefully all the rules pertaining to
                        my stay in Hostel, especially with regard to
                        eligibility, duration of stay, procedure for admission
                        and re-admission etc.
                      </li>
                      <a
                        className="cursor-pointer hover:text-blue-800 font-normal lg:text-lg text-sm text-blue-500 duration-500"
                        onClick={handleReadMore} // Add click handler
                      >
                        {showMore ? "Read less..." : ""}
                      </a>
                    </>
                  )}
                </ol>
              </div>
            </div>
            {/* Desktop device */}
            <div className="border-2 border-blue-700 lg:flex flex-col items-center rounded-3xl shadow-gray-500 shadow-xl hidden ">
              <p className="text-center font-bold text-2xl lg:mt-8 my-4">
                Hostel
              </p>
              <div className="lg:mt-56 lg:h-[70vh] h-[40vh]">
                <img
                  src="/hostel.jpg"
                  className="h-full w-full rounded-b-3xl"
                />
              </div>
            </div>

            <div className="border-2 border-blue-700 flex items-center flex-col h-auto rounded-3xl shadow-gray-500 shadow-xl">
              <p className="text-center font-bold text-2xl lg:mt-4 my-4">
                Canteen
              </p>
              <div className="mt-6 lg:h-[60vh] h-[40vh]">
                <img
                  src="/canteen.jpg"
                  className="h-full w-full rounded-b-3xl"
                />
              </div>
            </div>
            <div className="border-2 border-blue-700 flex items-center flex-col h-auto rounded-3xl shadow-gray-500 shadow-xl">
              <p className="text-center font-bold text-2xl lg:mt-4 my-4">
                Library
              </p>
              <div className="mt-6 lg:h-[60vh] h-[40vh]">
                <img
                  src="/library.jpg"
                  className="h-full w-full rounded-b-3xl"
                />
              </div>
            </div>
            <div className="border-2 border-blue-700 flex items-center flex-col h-auto rounded-3xl shadow-gray-500 shadow-xl">
              <p className="text-center font-bold text-2xl mt-4">
                Parking Space
              </p>
              <div className="mt-6 lg:h-[60vh] h-[40vh]">
                <img
                  src="/parking.jpg"
                  className="h-full w-full rounded-b-3xl"
                />
              </div>
            </div>
            <div className="border-2 border-blue-700 flex items-center flex-col h-auto rounded-3xl shadow-gray-500 shadow-xl">
              <p className="text-center font-bold text-2xl mt-4">
                Sport's Ground
              </p>
              <div className="mt-6 lg:h-[60vh] h-[40vh]">
                <img
                  src="/sports.jpg"
                  className="h-full w-full rounded-b-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CampusLife;
