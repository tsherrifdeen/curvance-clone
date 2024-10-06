"use client";
// import { React, useState } from "react";
import Buttons from "./Buttons";
import {
  claim,
  dashboard,
  lock,
  markets,
  publicPhases,
  specialMarkets,
} from "../../constants/images";
const Launch = ({ page, setPage }) => {
  // const [page, setPage] = useState(0);
  const images = [
    markets,
    specialMarkets,
    lock,
    claim,
    dashboard,
    publicPhases,
  ];

  const NextPage = () => {
    if (page == 5) {
      console.log("lastPage");
    } else {
      let location = page + 1;
      setPage(location);
    }
  };

  const PrevPage = () => {
    if (page == 0) {
      console.log("lastPage");
    } else {
      let location = page - 1;
      setPage(location);
    }
  };

  return (
    <section className="z-10 flex flex-col w-full gap-8 lg:items-center lg:justify-center lg:flex-row lg:items-stretch h-max lg:h-full ">
      <div className="w-3/5">
        <img
          alt=""
          loading="lazy"
          width="2000"
          height="2000"
          decoding="async"
          data-nimg="1"
          className="h-full scale-[1.015] select-none object-cover w-full rounded-2xl border border-borderLight animate-fadeLeft"
          src={images[page].src}
          style={{ color: "transparent" }}
        />
      </div>
      <div className="w-2/5">
        <div
          className="h-full w-full flex flex-col justify-between max-lg:max-h-[30vh] overflow-y-auto"
          style={{ opacity: "1", transform: "none" }}
        >
          <article className="text-content relative max-lg:min-h-[30vh] flex flex-col gap-1 w-full h-full overflow-y-auto animate-fadeLeft">
            <h2
              id=""
              className="font-sans text-[1.5rem] leading-[2rem] tracking-normal text-new-foreground w-full font-medium"
            >
              Markets
            </h2>
            <div className="mt-2 mb-3">
              <p className="font-sans text-base text-textDark leading-[1.5rem] w-full mb-6 font-normal">
                This page provides a detailed breakdown of all Markets and
                assets supported on Curvance. Markets are grouped by smart
                contract risk and asset volatility while showing their Chain,
                TVL, Total Collateral, Total Debt, and Maximum Debt. Users can
                view and search Markets for depositing, lending, and borrowing
                from this page.
              </p>
            </div>
          </article>

          <Buttons prev={PrevPage} next={NextPage} page={page} />
        </div>
      </div>
    </section>
  );
};

export default Launch;
