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
      <hr />
        <div className=" max-w-5xl lg:px-0 px-6 mx-auto w-full mt-4 mb-8 flex flex-col lg:flex-row">
          <div className=" lg:shadow-2xl shadow-md shadow-gray-600 h-auto pb-6 lg:w-3/4 w-full px-8 lg:px-6 mr-2">
            <p className="text-center text-xl font-bold text-blue-900 my-4">
              {title}
            </p>
            <div className="px-6 my-4 text-justify">
              {/* Render each paragraph in the 'about' array */}
              {Array.isArray(about) ? (
                about.map((paragraph, index) => (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{about}</p>
              )}
            </div>
            <p className="text-center text-xl font-bold text-blue-900 my-4">
              Vision
            </p>
            <p className="px-6 my-4 text-justify">{vision}</p>
            <p className="text-center text-xl font-bold text-blue-900">
              Mission
            </p>

            <ol className="px-8 my-4 list-decimal space-y-2">
              {Array.isArray(mission) &&
                mission.map((item, index) => (
                  <li key={index} className="text-justify">
                    {item}
                  </li>
                ))}
            </ol>
            <p className="text-center text-xl font-bold text-blue-900 my-4">
              Program Specific Outcomes (PSOs)
            </p>
            <ol className="px-8 my-4 list-decimal space-y-2">
              {Array.isArray(pso) &&
                pso.map((item, index) => (
                  <li key={index} className="text-justify">
                    {item}
                  </li>
                ))}
            </ol>
            <p className="text-center text-xl font-bold text-blue-900 my-4">
              Program Educational Outcomes (PEOs)
            </p>
            <ol className="px-8 mt-4 list-decimal space-y-2">
              {Array.isArray(peos) &&
                peos.map((item, index) => (
                  <li key={index} className="text-justify">
                    {item}
                  </li>
                ))}
            </ol>
          </div>
          <div className="shadow-xl lg:w-1/4 shadow-gray-500 ml-2 w-full lg:px-0 px-16 h-auto py-10 space-y-20">
            <div>
              <img
                src={img1}
                className="h-60 w-full shadow-xl shadow-gray-600"
              />
            </div>
            <div>
              <img
                src={img2}
                className="h-60 w-full shadow-xl shadow-gray-600"
              />
            </div>
            <div>
              <img
                src={img3}
                className="h-60 w-full shadow-xl shadow-gray-600"
              />
            </div>
          </div>
        </div>
    </>
  );
}

export default EngineeringTemplate;
