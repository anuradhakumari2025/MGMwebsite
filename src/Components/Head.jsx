function Head() {
  return (
    <header className="pt-6 py-2 px-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12 gap-5 ">
        {/* <div className="text-center "> */}
        <img src="/mgm-logo.jpeg" className="h-[90px] w-[90px]" />
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            MGM's College of Engineering and Technology
          </h1>
          <h2 className="text-xl font-semibold mt-2">Kamothe,Navi Mumbai</h2>
          <h4 className="text-lg font-normal mt-1">
            Approved by AICTE, Recognized by Govt. Of Maharashtra & Affiliated to
            University of Mumbai
          </h4>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Head;
