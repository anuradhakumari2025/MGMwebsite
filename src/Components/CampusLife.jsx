import React from "react";
import CampusVidio from "./CampusVidio/CampusVidio";

function CampusLife() {
  return (
    <>
      <main>
        <div>
          <p className="text-center text-3xl font-bold px-4 py-6 text-blue-950">
            College Facilities
          </p>
          <div className="grid grid-cols-2 border-2 border-yellow-300 gap-8 p-8">
            <div className="col-span-2 px-8">
              <CampusVidio />
            </div>
            <div className="border-2 border-violet-400 flex items-center flex-col h-auto">
              <p className="text-center font-bold text-2xl mt-4 ">Bus Service</p>
              <div className="mt-4 border-2 border-yellow-200 h-[450px]">
                <img src="/busService.jpg" className="w-full h-full" />
              </div>
            </div>

            <div className="p-4 text-lg font-semibold">
              <p>
                MGMCET is housed in a spacious Campus near Panvel at the
                junction of NH-4 and Bombay-Pune Expressway. For the convenience
                of our students, MGMCET provides bus services to college
                students in the morning. All the buses used for this services
                are highly comfortable and secure. Bus services are for boys and
                girls. And above all, these bus services are provided free for
                the students of MGMCET
              </p>
              <div className="flex justify-center items-center">
                <table className="border-2 border-black mt-4 w-80 h-40 text-center">
                  <tr>
                    <th className="border-2 border-black">Bus During</th>
                    <th className="border-2 border-black">Time</th>
                  </tr>
                  <tr>
                    <td className="border-2 border-black">Morning</td>
                    <td className="border-2 border-black">08:00 - 10:00</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black">Afternoon</td>
                    <td className="border-2 border-black">03:30 - 06:00</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className=" px-6">
              <ol className="list-decimal pl-5 p-4 text-lg font-semibold">
                <li> MGMCET provides hostel facility for girls and boys.</li>
                <li>
                  {" "}
                  The hostel facility is granted to the students of the
                  University strictly on the basis of merit.
                </li>
                <li>
                  {" "}
                  The number of seats for each department depends on the
                  department size.
                </li>
              </ol>
              <div className="border-2 border-black text-lg font-semibold rounded-xl">
                <p className="text-center p-4 text-2xl font-bold">
                  Hostel Rules
                </p>
                <ol className="list-decimal pl-6 space-y-2">
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
                  <li>
                    In case I am required to remain away from the Hostel after
                    12 midnight on any day, I shall obtain prior permission from
                    the Warden in writing.
                  </li>
                  <li>
                    I shall take permission to take a visitor to my room by
                    writing in the visitor register maintained by the Warden.
                  </li>
                  <li>
                    I shall not keep any guest in my room for overnight stay
                    without prior permission in writing from the Warden.
                  </li>
                  <li>
                    I shall not consume any alcoholic drinks/drugs in the hostel
                    premises.
                  </li>
                  <li>
                    I shall take the permission to leave the Hostel temporarily
                    or permanently or at the end of the term from the Warden and
                    a clearance certificate for all dues from the Hostel Office.
                  </li>
                  <li>
                    I have also read carefully all the rules pertaining to my
                    stay in Hostel, especially with regard to eligibility,
                    duration of stay, procedure for admission and re-admission
                    etc.
                  </li>
                </ol>
              </div>
            </div>
            <div className="border-2 border-violet-400 flex flex-col items-center ">
              <p className="text-center font-bold text-2xl mt-8">Hostel Life</p>
              <div className="mt-24 h-[450px]">
                <img src="/hostel.jpg" className="h-full w-full"/>
              </div>
            </div>
            <div className="border-2 border-violet-400 flex items-center flex-col h-auto">
              <p className="text-center font-bold text-2xl ">Canteen</p>
              <div className="mt-8 h-[400px]">
                <img src="/canteen.jpg" className="w-full h-full" />
              </div>
            </div>
            <div className="border-2 border-violet-400 flex items-center flex-col h-auto">
              <p className="text-center font-bold text-2xl ">Library</p>
              <div className="mt-8">
                <img src="/mgm-logo.jpeg" className="w-[200px] h-[200px]" />
              </div>
            </div>
            <div className="border-2 border-violet-400 flex items-center flex-col h-auto">
              <p className="text-center font-bold text-2xl ">Parking Space</p>
              <div className="mt-8">
                <img src="/parking.jpg" className="w-full h-[200px]" />
              </div>
            </div>
            <div className="border-2 border-violet-400 flex items-center flex-col h-auto">
              <p className="text-center font-bold text-2xl ">Sport's Ground</p>
              <div className="mt-8">
                <img src="/mgm-logo.jpeg" className="w-[200px] h-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CampusLife;
