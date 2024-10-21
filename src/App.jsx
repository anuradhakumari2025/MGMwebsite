import React from 'react'
// import  Form  from './Components/Form'
// import Animation from './Components/Animation'
import Head from "./Components/Head"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import CampusLife from './Components/CampusLife'
import Testomonial from './Components/Testomonial'
import Contact from './Components/Contact'
import About from './Components/About/About'
import Programs from './Components/Programs/Programs'
// import Testimonials from './Components/Testimonials/Testimonials'
import Campus from './Components/Campus/Campus'

function App() {
  return (
    <>
    {/* // <Animation/> */}
    <Head/>
    <Navbar/>
    <Programs/>
    <About/>
    <Campus/>
    {/* <Testimonials/> */}
    {/* <Contact/> */}
    <Testomonial/>
    {/* <Video/> */}
    {/* <CampusLife/> */}
    <Footer/>
    </>
  )
}

export default App