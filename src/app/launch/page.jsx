"use client";
import { React, useState } from "react";
import square from "../../assets/images/square.svg";
import Launch from "@/components/Launch/Launch";
const Page = () => {
  const [page, setPage] = useState(0);

  return (
    <main className="flex items-center justify-center h-screen">
      <section className="rounded-2xl max-lg:fixed max-lg:bottom-0 overflow-hidden p-[6px] w-full max-w-[1230px] border border-borderTwo focus-visible:outline-none relative">
        <div className="backdrop-blur-lg opacity-100 bg-[#08080a80] flex rounded-2xl p-[24px] z-10 flex-col lg:items-center lg:justify-center w-full gap-2 lg:h-[540px]  relative transition-transform duration-300 ease-out">
          <div className="flex items-start justify-between w-full gap-4">
            <div className="z-20 flex flex-col w-full gap-3 lg:px-2 lg:w-full h-max">
              <div className="relative flex items-center w-full gap-3 rounded-full number">
                <div
                  className={`flex items-center relative cursor-pointer duration-150 ease-out hover:bg-white/5 justify-start w-full flex-1 z-20 rounded-full h-1.5 overflow-hidden bg-purpleBg ring-8 ring-[#0b0b0b]`}
                  style={{ opacity: "1" }}
                >
                  <div className="z-20 w-full h-full duration-150 ease-out hover:bg-purpleBg/50"></div>
                </div>
                {Array.from({ length: page }).map((_, index) => (
                  <>
                    <div
                      key={index}
                      className={`flex items-center relative cursor-pointer duration-150 ease-out hover:bg-white/5 justify-start w-full flex-1 z-20 rounded-full h-1.5 overflow-hidden bg-purpleBg ring-8 ring-[#0b0b0b] animate-lengthLeft`}
                      style={{ opacity: "1" }}
                    >
                      <div className="z-20 w-full h-full duration-150 ease-out hover:bg-purpleBg/50"></div>
                    </div>
                  </>
                ))}
                {Array.from({ length: 5 - page }).map((_, index) => (
                  <>
                    <div
                      key={index}
                      className={`flex items-center relative cursor-pointer duration-150 ease-out hover:bg-white/5 justify-start w-full flex-1 z-20 rounded-full h-1.5 overflow-hidden ring-8 bg-white/10 ring-[#0b0b0b]`}
                      style={{ opacity: "1" }}
                    >
                      <div className="z-20 w-full h-full duration-150 ease-out"></div>
                    </div>
                  </>
                ))}
                <div
                  className={`flex items-center relative cursor-pointer duration-150 ease-out hover:bg-white/5 justify-start w-full flex-1 z-20 rounded-full h-1.5 overflow-hidden bg-white/10  ring-8 ring-[#0b0b0b]`}
                  style={{ opacity: "1" }}
                >
                  <div className="z-20 w-full h-full duration-150 ease-out"></div>
                </div>
              </div>
              <p className="w-full justify-end flex text-[#ffffff80]">
                {page + 1}/7
              </p>
            </div>
          </div>
          <Launch page={page} setPage={setPage} />
        </div>
        <img
          alt=""
          loading="lazy"
          width="180"
          height="180"
          decoding="async"
          data-nimg="1"
          className="absolute brightness-125 saturate-125 -top-6 -left-6"
          src={square.src}
        ></img>
        <img
          alt=""
          loading="lazy"
          width="180"
          height="180"
          decoding="async"
          data-nimg="1"
          className="absolute brightness-125 saturate-125 rotate-[35deg] -top-6 -right-12"
          src={square.src}
        ></img>
      </section>
    </main>
  );
};

export default Page;
