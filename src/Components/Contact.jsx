import React from 'react'
import { useState } from 'react';
function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async(event) => {
    event.preventDefault();}
  return (
    <div className="w-11/12 h-full flex border-2 border-violet-500">
        <div className="contact-container p-5 border-2 border-yellow-400">
          <h3 className="text-3xl text-black font-semibold">Let's talk</h3>
          <p className="text-lg text-black mt-3 sm:pb-0">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          {/* ref={formRef}  */}
          <form
            className="mt-12 flex flex-col space-y-7"
            onSubmit={handleSubmit}
          >
            <label className="space-y-3 sm:pt-0">
              <span className="text-lg">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-600 italic text-lg text-black shadow-gray-600 shadow-2xl focus:outline-none"
                placeholder="Anuradha Kumari"
              />
            </label>

            <label className="space-y-3">
              <span className="text-lg">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-600 italic text-lg text-black shadow-gray-600 shadow-2xl focus:outline-none"
                placeholder="krianur@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="text-lg">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-600 italic text-lg text-black shadow-gray-600 shadow-2xl focus:outline-none"
                placeholder="Share your thoughts..."
              />
            </label>
            {/* disabled={loading} */}
            <button className=" px-5 py-2 min-h-12 rounded-lg shadow-black shadow-2xl flex justify-center items-center text-lg text-black gap-3" type="submit">
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
        <div className="border-2 border-red-500 w-1/2 max-w-xl relative z-10 sm:px-10 px-5 mt-12">
        {/* <Sphere/> */}
        </div>
        </div>
  )
}

export default Contact