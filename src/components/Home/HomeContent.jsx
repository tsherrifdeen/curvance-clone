import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Lending from "./Lending";

const HomeContent = () => {
  return (
    <>
      <Header />
      <section className="w-full">
        <div className="grid grid-cols-2 border border-borderLight">
          <About />
          <Lending />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeContent;
