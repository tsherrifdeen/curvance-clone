import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col-reverse w-full h-full gap-12 xl:flex-col lg:border-b border-white/10">
      <div className="mt-auto font-mono border-b-0 lg:border-b xl:border-b-0 border-b-white/10">
        <div className="flex items-center px-4 py-3 leading-none tracking-tighter border border-borderLight false">
          <div className="flex items-end py-1">
            <h3 className="text-lg leading-none uppercase text-white/80">
              Partners
            </h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-5 overflow-y-hidden text-xs border-b lg:border-b-0 lg:border-t border-borderLight font-gellix text-white/60 false">
        <div
          className="w-full h-full bg-black"
          style={{ position: "relative" }}
        >
          <div
            className="relative flex flex-col items-center w-full h-full border-2 border-transparent outline-none focus:border-pri"
            tabindex="0"
          >
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex justify-center w-full">
                <div className="py-4 grow basis-0"></div>
                <div className="relative">
                  {/* .. */}

                  <div className="absolute inset-0 pointer-events-none"></div>
                </div>
                <div className="w-16 p-4 font-mono text-base grow basis-0">
                  <div className="hidden sm:block">
                    <button className="rounded-lg button default">
                      <span className="flex items-center justify-center gap-2 leading-none">
                        Play Game
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
