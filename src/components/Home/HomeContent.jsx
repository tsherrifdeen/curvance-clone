import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Lending from "./Lending";
import { homeImage } from "@/constants/images";
import Docs from "./Docs";
import Locking from "./Locking";

const HomeContent = () => {
  return (
    <>
      <Header />
      <section className="grid w-full grid-cols-4 ">
        <div className="col-span-3 border border-borderLight">
          <div className="grid grid-cols-2 ">
            <About />
            <Lending />
            <Locking />
            <Docs />
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="min-h-[95vh] flex items-center fixed border border-borderLight">
            <img src={homeImage.src} alt="" className="w-full max-w-full" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeContent;
