import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Lending from "./Lending";
import { homeImage } from "@/constants/images";

const HomeContent = () => {
  return (
    <>
      <Header />
      <section className="grid w-full grid-cols-3">
        <div className="col-span-2">
          <div className="grid grid-cols-2 border border-borderLight">
            <About />
            <Lending />
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-[90vh]">
            <img src={homeImage.src} alt="" className="w-full max-w-full" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeContent;
