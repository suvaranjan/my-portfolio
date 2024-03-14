import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Box, Container } from "@chakra-ui/react";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
