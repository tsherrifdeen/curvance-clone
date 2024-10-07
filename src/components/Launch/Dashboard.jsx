import React from "react";

const Dashboard = () => {
  return (
    <article className="text-content relative max-lg:min-h-[30vh]  flex flex-col gap-1 w-full h-full overflow-y-auto overflow-x-hidden animate-fadeLeft">
      <h2
        id="radix-:re:"
        className="font-sans text-new-foreground text-[1.5rem] leading-[2rem] tracking-normal font-medium text-new-foreground w-full font-medium"
      >
        Dashboard
      </h2>
      <div className="mt-2 mb-3">
        <p className="font-sans text-base text-textDark leading-[1.5rem] w-full mb-6 font-normal">
          Monitor your portfolio and active positions. Here you can view your
          total deposits, collateral, debt, locked CVE, accrued rewards, and
          time remaining in the current epoch.
        </p>
      </div>
      <div className="max-h-[280px] pb-8 scrollbar-hide  h-full overflow-y-auto"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none bg-gradient-to-t from-new-secondary/50 to-transparent"></div>
    </article>
  );
};
export default Dashboard;
