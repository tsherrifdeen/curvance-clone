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
import Markets from "./Markets";
import SpecificMarkets from "./SpecificMarkets";
import Lock from "./Lock";
import Claim from "./Claim";
import Dashboard from "./Dashboard";
import Testnet from "./Testnet";
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

  const contents = [
    <Markets />,
    <SpecificMarkets />,
    <Lock />,
    <Claim />,
    <Dashboard />,
    <Testnet />,
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
    <section className="z-10 flex flex-col w-full gap-8 lg:justify-center lg:flex-row lg:items-stretch h-max lg:h-full ">
      <div className="lg:w-3/5">
        <div className="mx-auto border rounded-2xl max-lg:max-w-xl border-borderLight">
          <img
            alt=""
            loading="lazy"
            width="2000"
            height="2000"
            decoding="async"
            data-nimg="1"
            className="h-full scale-[1.015] select-none object-cover w-full rounded-2xl animate-fadeLeft "
            src={images[page].src}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <div className="lg:w-2/5">
        <div
          className="flex flex-col justify-between w-full h-full overflow-x-hidden"
          style={{ opacity: "1", transform: "none" }}
        >
          {contents[page]}
          <Buttons prev={PrevPage} next={NextPage} page={page} />
        </div>
      </div>
    </section>
  );
};

export default Launch;
