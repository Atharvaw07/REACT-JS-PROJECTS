import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonals from "./components/Testimonals/Testimonals";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="our program" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="testimonials" title="What Students Say" />
        <Testimonals />
        <Title subtitle="contact us" title="Get In Touch" />
        <Contact/>
      </div>
      <Footer/>

    </>
  );
}

export default App;
