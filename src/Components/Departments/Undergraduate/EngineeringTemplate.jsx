function EngineeringTemplate({
  title,
  about,
  vision,
  mission,
  pso,
  peos,
  img1,
  img2,
  img3,
}) {
  return (
    <>
      <div className="border-2 border-blue-700 px-32 flex">
        <div className=" shadow-2xl shadow-gray-600 h-auto pb-6 w-3/4 px-6 mr-2">
          <p className="text-center text-xl font-bold text-blue-900 mt-4">
            {title}
          </p>
          <p className="px-8 mt-4">{about}</p>
          <p className="text-center text-xl font-bold text-blue-900 mt-4">
            Vision
          </p>
          <p className="px-8 mt-4">{vision}</p>
          <p className="text-center text-xl font-bold text-blue-900">Mission</p>
          <p className="px-8 mt-4">{mission}</p>
          <p className="text-center text-xl font-bold text-blue-900 mt-4">
            Program Specific Outcomes (PSOs)
          </p>
          <p className="px-8 mt-4">{pso}</p>
          <p className="text-center text-xl font-bold text-blue-900 mt-4">
            Program Educational Outcomes (PEOs)
          </p>
          <p className="px-8 mt-4">{peos}</p>
        </div>
        <div className="shadow-xl w-1/4 shadow-gray-500 ml-2 h-auto py-10 space-y-20">
          <div>
            <img src={img1} className="h-60 w-full shadow-xl shadow-gray-600" />
          </div>
          <div>
            <img src={img2} className="h-60 w-full shadow-xl shadow-gray-600" />
          </div>
          <div>
            <img src={img3} className="h-60 w-full shadow-xl shadow-gray-600" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineeringTemplate;
