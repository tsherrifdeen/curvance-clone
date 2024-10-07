import React from "react";

const Markets = () => {
  return (
    <article className="text-content relative max-lg:min-h-[30vh] flex flex-col gap-1 w-full h-full overflow-x-clip overflow-y-auto animate-fadeLeft">
      <h2
        id=""
        className="font-sans text-[1.5rem] leading-[2rem] tracking-normal text-new-foreground w-full font-medium"
      >
        Markets
      </h2>
      <div className="mt-2 mb-3">
        <p className="font-sans text-base text-textDark leading-[1.5rem] w-full mb-6 font-normal">
          This page provides a detailed breakdown of all Markets and assets
          supported on Curvance. Markets are grouped by smart contract risk and
          asset volatility while showing their Chain, TVL, Total Collateral,
          Total Debt, and Maximum Debt. Users can view and search Markets for
          depositing, lending, and borrowing from this page.
        </p>
      </div>
    </article>
  );
};

export default Markets;
