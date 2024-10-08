import React from "react";

const About = () => {
  return (
    <div className="flex flex-col-reverse w-full h-full gap-10 xl:flex-col lg:border-b border-white/10">
      <div class="mt-auto font-mono border-b-0 lg:border-b xl:border-b-0 border-b-white/10">
        <div class="flex items-center border border-borderLight tracking-tighter leading-none px-4 py-3 justify-between false">
          <div class="flex py-1">
            <div class="min-w-[50px] h-full bg-white hidden"></div>
            <h3 class="uppercase leading-none text-lg text-white/80">About</h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-5 overflow-y-hidden text-xs border-b lg:border-b-0 lg:border-x-borderLight font-gellix text-white/60 false">
        <div className="flex flex-col items-center max-w-[50ch] justify-center gap-5 text-center p-4">
          <span className="mx-auto text-base font-gellix text-start">
            Curvance is a modular protocol for optimized liquidity management.
          </span>
          <span className="mx-auto text-base font-gellix text-start">
            Collateralize, leverage, and earn boosted rewards across DeFi.
          </span>
          <span className="mx-auto text-base font-gellix text-start">
            Coming to Ethereum, Arbitrum, Optimism, Polygon zkEVM, Base, Blast,
            Monad with many more to follow.
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
