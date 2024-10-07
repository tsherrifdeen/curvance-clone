import React from "react";

const Testnet = () => {
  return (
    <article className="text-content relative max-lg:min-h-[30vh]  flex flex-col gap-1 w-full h-full overflow-y-auto overflow-x-hidden animate-fadeLeft">
      <h2
        id="radix-:re:"
        className="font-sans text-new-foreground text-[1.5rem] leading-[2rem] tracking-normal text-new-foreground w-full font-medium"
      >
        Curvance Testnet Timeline
      </h2>
      <div className="mt-2 mb-3">
        <p className="font-sans text-base text-textDark leading-[1.5rem] w-full mb-6 font-normal">
          Curvance's testnet launch has multiple phases so we can maximize
          meaningful user feedback.
        </p>
      </div>
      <div className="max-h-[280px] pb-8 scrollbar-hide  h-full overflow-y-auto">
        <div className="flex flex-col gap-8">
          <div className="!px-0">
            <div className="flex items-center gap-3">
              <span className="flex justify-center items-center text-xs size-[18px] rounded-full bg-purpleBg text-white">
                1
              </span>
              <h4 className="text-base leading-none mb-0.5">
                Invite-Only Access
              </h4>
            </div>
            <p></p>
          </div>
          <div className="!px-0">
            <div className="flex items-center gap-3">
              <span className="flex justify-center items-center text-xs size-[18px] rounded-full bg-purpleBg text-white">
                2
              </span>
              <h4 className="text-base leading-none mb-0.5">
                Purple Ecosystem Access
              </h4>
            </div>
            <p></p>
          </div>
          <div className="!px-0">
            <div className="flex items-center gap-3">
              <span className="flex justify-center items-center text-xs size-[18px] rounded-full bg-purpleBg text-white">
                3
              </span>
              <h4 className="text-base leading-none mb-0.5">
                Partner Roles Access
              </h4>
            </div>
            <p></p>
          </div>
          <div className="!px-0">
            <div className="flex items-center gap-3">
              <span className="flex justify-center items-center text-xs size-[18px] rounded-full bg-purpleBg text-white">
                4
              </span>
              <h4 className="text-base leading-none mb-0.5">Public Access</h4>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none bg-gradient-to-t from-new-secondary/50 to-transparent"></div>
    </article>
  );
};

export default Testnet;
