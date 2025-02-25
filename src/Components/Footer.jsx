import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
function Footer() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <footer>
      <div className="">
        <div className=" bg-gray-900 text-white flex p-4 py-8 justify-center ">
          <div className="w-1/4">
            <div className="flex justify-center items-center flex-col mt-44">
              <div className="my-2">
                <img src="/mgm-logo.jpeg" className="w-[50px] h-[50px]" />
              </div>
              <div className="text-center text-lg flex flex-col space-y-2">
                <p className=" text-lg"><b>Mahatma Gandhi College of Engineering and Technology</b></p>
                <p>Kamothe,Navi Mumbai</p>
                <div className="flex justify-center items-center gap-2">
                  <IoCall />
                  <a>000-8799-567</a>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <MdOutlineMail /> <a>info.@mgm.in</a>
                </div>
                <p>
                  <a>www.mgm.in</a>
                </p>
                <div className="flex items-center justify-center gap-5">
                  <div className="border-2 border-white p-3 mt-5 rounded-full">
                    <a>
                      <FaXTwitter />
                    </a>
                  </div>
                  <div className="border-2 border-white p-3 mt-5 rounded-full">
                    <a>
                      <BsInstagram />
                    </a>
                  </div>
                  <div className="border-2 border-white p-3 mt-5 rounded-full">
                    <a>
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 p-2 px-10 ml-8 justify-center">
            {/* <div className="text-gray-400 space-y-4">
              <p className="font-semibold text-white border-b-2 border-red-600">Quick Links</p>
              <p>Departments</p>
              <p>Centres & CoEs</p>
              <p>Anti-Ragging Policy</p>
              <p>Office of Carrier Services</p>
            </div>
            <div className="text-gray-400 ml-10 space-y-4">
              <p className="font-semibold text-white border-b-2 border-red-600">Explore</p>
              <p>Rules</p>
              <p>Institure Newseltter</p>
              <p>Educational Programmes</p>
              <p>PhD Seminar</p>
            </div> */}
            <div className=" w-full">
              <h3 className="text-3xl text-white font-semibold">Let's talk</h3>
              <p className="text-lg text-white mt-2 sm:pb-0">
                Whether you’re looking to build a new website, improve your
                existing platform, or bring a unique project to life, I’m here
                to help.
              </p>
              {/* ref={formRef}  */}
              <form
                className="mt-6 flex flex-col space-y-7"
                onSubmit={handleSubmit}
              >
                <label className="space-y-3 sm:pt-0">
                  <span className="text-lg">
                    <b>Full Name</b>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-600 italic text-lg text-black shadow-gray-500 shadow-2xl focus:outline-none"
                    placeholder="Anuradha Kumari"
                  />
                </label>

                <label className="space-y-3">
                  <span className="text-lg">
                    <b>Email address</b>{" "}
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-600 italic text-lg text-black shadow-gray-500 shadow-2xl focus:outline-none"
                    placeholder="krianur@gmail.com"
                  />
                </label>

                <label className="space-y-3">
                  <span className="text-lg">
                    <b>Your message</b>
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-600 italic text-lg text-black shadow-gray-500 shadow-2xl focus:outline-none"
                    placeholder="Share your thoughts..."
                  />
                </label>
                {/* disabled={loading} */}
                <button
                  className=" px-5 py-2 min-h-12 rounded-lg shadow-gray-500 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <GoArrowUpRight />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" bg-gray-800 h-16 flex items-center text-gray-400 justify-between px-6">
          <div>
            Copyright &#169; 2024 MGM's College of Engineering &amp; Technology
            ,Navi Mumbai. All Rights Reserved.{" "}
          </div>
          <div>Developed &amp; Maintained by MGMCET,Navi Mumbai</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
