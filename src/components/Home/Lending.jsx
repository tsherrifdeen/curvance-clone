const Lending = () => {
  return (
    <div className="flex flex-col-reverse w-full h-full xl:flex-col lg:border-b border-white/10">
      <div class="mt-auto font-mono border-b-0 lg:border-b xl:border-b-0 border-b-white/10">
        <div class="flex items-center border border-borderLight tracking-tighter leading-none px-4 py-3 justify-between false">
          <div class="flex py-1">
            <div class="min-w-[50px] h-full bg-white hidden"></div>
            <h3 class="uppercase leading-none text-lg text-white/80">
              Lending
            </h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-5 overflow-y-hidden text-xs border-b lg:border-b-0 lg:border-t-borderLight font-gellix text-white/60 false"></div>
      <div class="p-1 xl:p-3 xl:px-1 lg:px-2 xl:mb-2">
        <div class="gradient-bg absolute left-0 right-0 -top-12 w-full h-16 -z-[5]"></div>
        <p class="text-[13.8px] z-[1000] lg:text-base text-white/75 font-gellix font-lighter">
          Zap and leverage long tail positions in one click
        </p>
      </div>
    </div>
  );
};

export default Lending;
