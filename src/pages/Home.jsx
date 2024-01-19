import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Topnav from "../components/Topnav";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
