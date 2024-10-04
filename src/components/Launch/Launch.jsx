import React from "react";
import Buttons from "./Buttons";

const Launch = ({ image, children }) => {
  return (
    <section className="z-10 flex flex-col w-full gap-8 lg:items-center lg:justify-center lg:flex-row h-max lg:h-full ">
      <div className="w-3/5">
        <img
          alt=""
          loading="lazy"
          width="2000"
          height="2000"
          decoding="async"
          data-nimg="1"
          className="h-full scale-[1.015] select-none object-cover w-full"
          src={image.src}
          style={{ color: "transparent" }}
        ></img>
      </div>
      <div className="w-2/5 ">
        <div
          className="h-full w-full max-lg:max-h-[30vh] overflow-y-auto"
          style={{ opacity: "1", transform: "none" }}
        >
          <article className="text-content relative max-lg:min-h-[30vh] flex flex-col gap-1 w-full h-full overflow-y-auto">
            <h2
              id="radix-:r1:"
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
        </div>
        <Buttons />
      </div>
    </section>
  );
};

export default Launch;
