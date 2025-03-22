import React from "react";

function TrusteeMsg() {
  return (
    <>
      <hr className="h-2" />
      <div className="max-w-4xl mx-auto w-full py-8 mb-5">
        <h1 className="font-bold text-5xl text-center text-slate-900">
          Trustees' Message
        </h1>
        <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-between mt-10">
          <div className="flex w-[34%] flex-col">
            <img src="/trustee1.jpg" />
            <div className="w-full flex">
              <p className="text-center py-4 font-medium  text-lg w-[50%]">
                Dr. S.N. Kadam
              </p>
              <p className="text-center py-4 font-medium text-lg w-[50%]">
                Dr. N.N. Kadam
              </p>
            </div>
          </div>
          <p className="font-normal text-normal text-justify text-gray-700 w-[60%]">
            We are happy to place on record our sincere and hearty greetings to
            you. Here we mention with great pride that we are paving out way to
            the desired goal of helping the cause of economic and industrial
            growth of the country through technical manpower development.
            Keeping in view the quality and standard of technical education our
            group of teachers and other staff are striving hard to impart value
            based technical education at College of Engineering and Technology,
            Kamothe, Navi Mumbai. Imbibing a sense of commitment and adhering to
            it is the work culture of the college at all levels of activities
            resulting in sense of satisfaction and fulfilment. The teaching and
            learning process adopted has the efficiency maximised to the extent
            that the students from the college are well received by industry,
            Public & Private sector organisations, defence services and others.
            We look forward for an effective Industry Institute interaction and
            collective efforts to realise an industrially advanced nation.
          </p>
        </div>
      </div>
    </>
  );
}

export default TrusteeMsg;
