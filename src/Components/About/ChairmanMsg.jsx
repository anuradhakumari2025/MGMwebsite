import React from "react";

function ChairmanMsg() {
  return (
    <>
      <hr className="h-2" />
      <div className="max-w-4xl mx-auto w-full py-8 mb-5">
        <h1 className="font-bold text-5xl text-center text-slate-900">Chairman's Message</h1>
        <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-between mt-10">
          <div className="lg:w-[18%] w-[20%]">
            <img src="/chairman.jpg" />
            <p className="w-fit text-center py-4 font-medium text-lg">Kamalkishore N. Kadam</p>
          </div>
          <p className="font-normal text-normal text-justify text-gray-700  w-[70%]">
            For more than two decades, it has been our mission to contribute in
            a small measure, towards the fulfilment of the dream of the Father
            of the Nation. Freedom becomes more realistic and meaningful with
            knowledge. The beginning of the twenty first century will be like
            the Era of Engineers who will thrust to world Economy. Mahatma
            Gandhi Mission’s College of Engineering and Technology provides rich
            learning experience from the faculty, practising engineers and
            successful professionals. We are making an earnest effort to make
            engineering curriculum a perfect mix of theory, practice and
            implementation of knowledge, which is fundamental on any
            technological advancement. A technical institute provides valuable
            human resource, which shapes the country’s economy. Through the
            placement of graduate engineers of institutes in different
            industrial organisations, we play our role in nation building. We
            hope these young engineers will create a difference in the Indian
            and Global Scenario.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default ChairmanMsg;
