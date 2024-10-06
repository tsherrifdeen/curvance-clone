"use client";
import React from "react";

const Buttons = ({ prev, next, page }) => {
  return (
    <div className="flex w-full gap-4">
      <button
        onClick={prev}
        disabled={page == 0 ? true : false}
        className="cursor-pointer flex gap-1 justify-center items-center rounded-lg font-sans text-sm font-medium duration-300 ease-out disabled:cursor-default border text-new-foreground bg-[rgb(16,16,16)] border-[rgb(33,33,33)] hover:brightness-125 hover:opacity-100 disabled:opacity-25 h-8 px-3 flex-1 !h-10 pointer-events-auto"
      >
        Previous
      </button>
      <button
        onClick={page == 5 ? prev : next}
        className="cursor-pointer flex gap-1 justify-center items-center rounded-lg font-sans text-sm font-medium duration-300 ease-out disabled:cursor-default bg-[linear-gradient(180deg,#6B59C8_0%,#523DBF_100%)] text-new-foreground hover:brightness-125 hover:opacity-100 hover:shadow-new-accent/25 disabled:opacity-25 px-3 z-[9999999] !px-2 py-3.5 !cursor-pointer w-full !flex-1 flex-1 h-10 pointer-events-auto"
      >
        {page == 5 ? "Connect" : "Next"}
      </button>
    </div>
  );
};

export default Buttons;
