import React from "react";

const FeeStructure = () => {
  return (
    <div className="border">
      <div className="overflow-x-auto max-w-5xl mx-auto mt-6 mb-12">
        <h1 className="text-3xl font-semibold mb-10 mt-4">Fee Structure</h1>
        <table className="min-w-[1000px] w-full h-[70vh] border-collapse border border-gray-400 text-sm text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">Fee Head</th>
              <th className="border px-2 py-1">
                SE/TE
                <br />
                2022-23
              </th>
              <th className="border px-2 py-1">
                (*TE)
                <br />
                2022-23
              </th>
              <th className="border px-2 py-1">
                ME II
                <br />
                2022-23
              </th>
              <th className="border px-2 py-1">
                SE/TE
                <br />
                2022-23
              </th>
              <th className="border px-2 py-1">
                BE
                <br />
                2022-23
              </th>
              <th className="border px-2 py-1">
                SE/TE
                <br />
                2021-22
              </th>
              <th className="border px-2 py-1">
                BE
                <br />
                2021-22
              </th>
              <th className="border px-2 py-1">
                (*TE)
                <br />
                2021-22
              </th>
              <th className="border px-2 py-1">
                (*BE)
                <br />
                2021-22
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Tuition Fee</td>
              <td className="border">75771</td>
              <td className="border">69394</td>
              <td className="border">74008</td>
              <td className="border">69394</td>
              <td className="border">69394</td>
              <td className="border">69394</td>
              <td className="border">69394</td>
              <td className="border">69557</td>
              <td className="border">69557</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Development Fee</td>
              <td className="border">10229</td>
              <td className="border">8606</td>
              <td className="border">9992</td>
              <td className="border">8606</td>
              <td className="border">8606</td>
              <td className="border">8606</td>
              <td className="border">8606</td>
              <td className="border">7443</td>
              <td className="border">7443</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">University Fees</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
              <td className="border">422</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Yuva Raksha</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
              <td className="border">50</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Exam Fee</td>
              <td className="border">2363</td>
              <td className="border">2363</td>
              <td className="border">3484</td>
              <td className="border">2363</td>
              <td className="border">2363</td>
              <td className="border">2363</td>
              <td className="border">2363</td>
              <td className="border">2363</td>
              <td className="border">2363</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Convocation Fee</td>
              <td className="border">0</td>
              <td className="border">0</td>
              <td className="border">250</td>
              <td className="border">0</td>
              <td className="border">0</td>
              <td className="border">0</td>
              <td className="border">0</td>
              <td className="border">250</td>
              <td className="border">250</td>
            </tr>
            <tr className="font-semibold bg-gray-100">
              <td className="border px-2 py-1">Total Amt.</td>
              <td className="border">88835</td>
              <td className="border">80835</td>
              <td className="border">88206</td>
              <td className="border">80835</td>
              <td className="border">81085</td>
              <td className="border">80835</td>
              <td className="border">81085</td>
              <td className="border">79835</td>
              <td className="border">80085</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructure;
