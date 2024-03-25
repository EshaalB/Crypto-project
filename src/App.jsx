import React from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Packages from "./components/Packages";
import About from "./components/About";
import Testimonials from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import reviews from "./data";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <Element name="home">
        <Fade>
          <Hero />
        </Fade>
      </Element>
      <Element name="features">
        <Fade>
          <Features />
        </Fade>
      </Element>
      <Element name="packages">
        <Fade>
          <Packages />
        </Fade>
      </Element>
      <Element name="about">
        <Fade>
          <About />
        </Fade>
      </Element>
      <Element name="testimonials">
        <Fade>
          <Testimonials reviews={reviews} />
        </Fade>
      </Element>
      <Element name="cta">
        <Fade>
          <CTA />
        </Fade>
      </Element>
      <Element name="footer">
        <Fade>
          <Footer />
        </Fade>
      </Element>
    </>
  );
}

export default App;
