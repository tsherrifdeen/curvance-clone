import React from "react";

const Locking = () => {
  return (
    <div className="flex flex-col-reverse w-full h-full gap-12 xl:flex-col lg:border-b border-white/10">
      <div class="mt-auto font-mono border-b-0 lg:border-b xl:border-b-0 border-b-white/10">
        <div class="flex items-center border border-borderLight tracking-tighter leading-none px-4 py-3 false">
          <div class="flex py-1 items-end">
            <h3 class="uppercase leading-none text-lg text-white/80">
              Locking
            </h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-5 overflow-y-hidden text-xs border-b lg:border-b-0 lg:border-t-borderLight font-gellix text-white/60 false"></div>
      <div className="p-1 xl:p-3 xl:px-4 lg:px-2 xl:mb-2">
        <div className="gradient-bg absolute left-0 right-0 -top-12 w-full h-16 -z-[5]">
          <div className="max-w-[450px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 283 139"
              className="absolute left-1/3 lg:left-1/3 sm:left-1/2 max-w-[550px] -translate-x-1/2 bottom-2/3 translate-y-1/2 w-full h-full"
            >
              <mask
                id="locking-graph_svg__b"
                width="283"
                height="139"
                x="0"
                y="0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="url(#locking-graph_svg__a)"
                  d="M0 0h283v139H0z"
                ></path>
              </mask>
              <g mask="url(#locking-graph_svg__b)">
                <path
                  fill="url(#locking-graph_svg__c)"
                  d="M290.562 5.531V127H0v-14.134a1.84 1.84 0 0 1 1.84-1.84h8.089a1.84 1.84 0 0 0 1.49-.76l4.296-5.93a1.84 1.84 0 0 1 2.753-.258l12.643 11.937a1.84 1.84 0 0 0 1.263.502h14.259a1.84 1.84 0 0 0 1.192-.439l4.193-3.569a1.84 1.84 0 0 1 2.557.167l5.917 6.544a1.84 1.84 0 0 0 2.56.165l19.251-16.454a1.84 1.84 0 0 1 2.489.09l5.671 5.61a1.84 1.84 0 0 0 2.72-.146l8.736-10.722a1.84 1.84 0 0 1 .927-.609l12.253-3.455a1.84 1.84 0 0 0 1.243-1.18l5.65-16.664a1.84 1.84 0 0 1 1.08-1.126l9.524-3.675a1.84 1.84 0 0 0 .864-.689l3.484-5.177a1.84 1.84 0 0 1 3.108.087l9.18 15.435a1.84 1.84 0 0 0 2.355.728l13.728-6.37a1.84 1.84 0 0 0 .987-1.137l10.13-33.546a1.84 1.84 0 0 1 2.178-1.26l7.406 1.722a1.84 1.84 0 0 0 1.989-.837l7.508-12.359a1.84 1.84 0 0 1 2.459-.657l4.175 2.296a1.84 1.84 0 0 0 2.284-.415l.715-.835a1.84 1.84 0 0 1 2.753-.047l8.467 9.235c.948 1.034 2.658.669 3.102-.661l9.572-28.708a1.84 1.84 0 0 1 2.464-1.111l11.085 4.706a1.84 1.84 0 0 0 2.026-.399L255.019.546A1.84 1.84 0 0 1 256.326 0h14.379a1.84 1.84 0 0 1 1.743 1.251l5.492 16.264c.473 1.402 2.323 1.7 3.213.518l9.409-12.502z"
                ></path>
                <path
                  stroke="#644aee"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  d="m291 4.687-.637.849-9.387 12.505c-.889 1.185-2.742.886-3.215-.517l-5.479-16.272A1.84 1.84 0 0 0 270.539 0h-14.348a1.84 1.84 0 0 0-1.309.547l-10.381 10.516a1.84 1.84 0 0 1-2.03.4l-11.054-4.705a1.84 1.84 0 0 0-2.467 1.112l-9.552 28.725a1.84 1.84 0 0 1-3.103.661l-8.442-9.232a1.84 1.84 0 0 0-2.757.047l-.707.828a1.84 1.84 0 0 1-2.287.416l-4.157-2.293a1.84 1.84 0 0 0-2.462.658l-7.491 12.364a1.84 1.84 0 0 1-1.991.838l-7.384-1.722a1.84 1.84 0 0 0-2.179 1.261l-10.113 33.574a1.836 1.836 0 0 1-.985 1.137l-13.697 6.372a1.84 1.84 0 0 1-2.358-.729l-9.159-15.439a1.84 1.84 0 0 0-3.109-.087l-3.474 5.175a1.84 1.84 0 0 1-.864.691l-9.504 3.677a1.84 1.84 0 0 0-1.079 1.126l-5.641 16.68a1.84 1.84 0 0 1-1.242 1.181l-12.227 3.457a1.84 1.84 0 0 0-.928.61l-8.716 10.726a1.84 1.84 0 0 1-2.723.146l-5.653-5.606a1.84 1.84 0 0 0-2.492-.09l-19.208 16.46a1.84 1.84 0 0 1-2.563-.165l-5.9-6.541a1.84 1.84 0 0 0-2.56-.167l-4.18 3.566a1.84 1.84 0 0 1-1.194.44H32.64a1.84 1.84 0 0 1-1.265-.503L18.761 104.17a1.84 1.84 0 0 0-2.756.259l-4.284 5.929a1.84 1.84 0 0 1-1.491.762H0"
                  opacity="0.2"
                ></path>
              </g>
              <defs>
                <radialGradient
                  id="locking-graph_svg__a"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 69.5 -141.5 0 141.5 69.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#d9d9d9"></stop>
                  <stop offset="1" stop-color="#d9d9d9" stop-opacity="0"></stop>
                </radialGradient>
                <linearGradient
                  id="locking-graph_svg__c"
                  x1="145.281"
                  x2="145.281"
                  y1="-273.694"
                  y2="127.285"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#644aee"></stop>
                  <stop offset="1" stop-color="#644aee" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="w-full group max-w-[450px] left-auto hover:cursor-pointer h-full absolute bottom-0 lg:left-0 right-0 scale-125"
              viewBox="0 0 339 162"
              fill="none"
              id="lock-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                filter="url(#filter1_b_674_26)"
                className="transform transition-transform duration-[700ms] lg:duration-150 group-hover:translate-y-[45px] ease-in-out"
              >
                <rect
                  x="191"
                  y="59"
                  width="22"
                  height="22"
                  rx="11"
                  fill="black"
                  fill-opacity="0.5"
                ></rect>
                <rect
                  x="196"
                  y="64"
                  width="12"
                  height="12"
                  rx="6"
                  fill="#644AEE"
                ></rect>
                <path
                  d="M202 66.5228V69.0935L203.999 70.0644L202 66.5228Z"
                  fill="white"
                  fill-opacity="0.602"
                ></path>
                <path
                  d="M201.999 66.5228L200 70.0644L201.999 69.0935V66.5228Z"
                  fill="white"
                ></path>
                <path
                  d="M202 71.7304V73.4772L204 70.4691L202 71.7304Z"
                  fill="white"
                  fill-opacity="0.602"
                ></path>
                <path
                  d="M201.999 73.4772V71.7301L200 70.4691L201.999 73.4772Z"
                  fill="white"
                ></path>
                <path
                  d="M202 71.326L203.999 70.0644L202 69.0941V71.326Z"
                  fill="white"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M200 70.0644L201.999 71.326V69.0941L200 70.0644Z"
                  fill="white"
                  fill-opacity="0.602"
                ></path>
                <rect
                  x="196"
                  y="64"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="0.413238"
                ></rect>
                <rect
                  x="191.056"
                  y="59.0563"
                  width="21.8875"
                  height="21.8875"
                  rx="10.9437"
                  stroke="url(#paint0_linear_674_26)"
                  stroke-opacity="0.2"
                  stroke-width="0.112527"
                ></rect>
                <rect
                  x="236"
                  y="13"
                  width="22"
                  height="22"
                  rx="11"
                  fill="black"
                  fill-opacity="0.5"
                ></rect>
                <rect
                  x="241"
                  y="18"
                  width="12"
                  height="12"
                  rx="6"
                  fill="#644AEE"
                ></rect>
                <path
                  d="M248.782 22.8087C248.653 22.731 248.485 22.731 248.343 22.8087L247.336 23.4043L246.651 23.7928L245.644 24.3885C245.515 24.4662 245.347 24.4662 245.205 24.3885L244.404 23.9223C244.275 23.8446 244.185 23.7022 244.185 23.5468V22.6274C244.185 22.472 244.262 22.3295 244.404 22.2518L245.192 21.7986C245.321 21.7209 245.489 21.7209 245.631 21.7986L246.419 22.2518C246.548 22.3295 246.638 22.472 246.638 22.6274V23.223L247.323 22.8216V22.226C247.323 22.0706 247.245 21.9281 247.103 21.8504L245.644 20.9958C245.515 20.9181 245.347 20.9181 245.205 20.9958L243.72 21.8504C243.577 21.9281 243.5 22.0706 243.5 22.226V23.9482C243.5 24.1036 243.577 24.246 243.72 24.3237L245.205 25.1784C245.334 25.2561 245.502 25.2561 245.644 25.1784L246.651 24.5957L247.336 24.1942L248.343 23.6115C248.472 23.5338 248.64 23.5338 248.782 23.6115L249.57 24.0648C249.699 24.1424 249.79 24.2849 249.79 24.4403V25.3597C249.79 25.5151 249.712 25.6575 249.57 25.7352L248.782 26.2014C248.653 26.2791 248.485 26.2791 248.343 26.2014L247.555 25.7481C247.426 25.6705 247.336 25.528 247.336 25.3726V24.777L246.651 25.1784V25.774C246.651 25.9294 246.729 26.0719 246.871 26.1496L248.356 27.0042C248.485 27.0819 248.653 27.0819 248.795 27.0042L250.28 26.1496C250.41 26.0719 250.5 25.9294 250.5 25.774V24.0518C250.5 23.8964 250.423 23.754 250.28 23.6763L248.782 22.8087Z"
                  fill="white"
                ></path>
                <rect
                  x="241"
                  y="18"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="0.413238"
                ></rect>
                <rect
                  x="236.056"
                  y="13.0563"
                  width="21.8875"
                  height="21.8875"
                  rx="10.9437"
                  stroke="url(#paint1_linear_674_26)"
                  stroke-opacity="0.2"
                  stroke-width="0.112527"
                ></rect>
              </g>
              <g filter="url(#filter2_b_674_26)">
                <path
                  d="M265.96 46.0234H229.886C227.124 46.0234 224.886 48.262 224.886 51.0234V87.0469C224.886 89.8083 222.647 92.0469 219.886 92.0469H184.883C182.121 92.0469 179.883 94.2855 179.883 97.0469V132C179.883 134.761 177.644 137 174.883 137H4.99999C2.23857 137 0 139.239 0 142V156.5C0 159.261 2.23859 161.5 5.00001 161.5H334C336.762 161.5 339 159.261 339 156.5V137V5C339 2.23858 336.762 0 334 0H275.96C273.199 0 270.96 2.23858 270.96 5V41.0234C270.96 43.7849 268.721 46.0234 265.96 46.0234Z"
                  fill="url(#paint2_linear_674_26)"
                  fill-opacity="0.025"
                ></path>
                <path
                  d="M229.886 46.2388H265.96C268.84 46.2388 271.176 43.9038 271.176 41.0234V5C271.176 2.35754 273.318 0.215409 275.96 0.215409H334C336.643 0.215409 338.785 2.35754 338.785 5V137V156.5C338.785 159.142 336.643 161.285 334 161.285H5.00001C2.35755 161.285 0.215409 159.142 0.215409 156.5V142C0.215409 139.358 2.35754 137.215 4.99999 137.215H174.883C177.763 137.215 180.098 134.88 180.098 132V97.0469C180.098 94.4044 182.24 92.2623 184.883 92.2623H219.886C222.766 92.2623 225.101 89.9273 225.101 87.0469V51.0234C225.101 48.381 227.243 46.2388 229.886 46.2388Z"
                  stroke="url(#paint3_linear_674_26)"
                  stroke-opacity="0.15"
                  stroke-width="0.5"
                ></path>
              </g>
              <g className="invisible group-hover:visible duration-[50ms]">
                <g filter="url(#filter3_f_674_26)" className="">
                  <circle
                    cx="201.5"
                    cy="114.5"
                    r="10.5"
                    fill="#634AEE"
                    fill-opacity="0.65"
                  ></circle>
                </g>
                <g filter="url(#filter4_f_674_26)" className="">
                  <circle
                    cx="246.5"
                    cy="68.5"
                    r="10.5"
                    fill="#634AEE"
                    fill-opacity="0.65"
                  ></circle>
                </g>
              </g>
              <g filter="url(#filter5_b_674_26)">
                <path
                  d="M258.673 52H234.327C231.937 52 230 53.9375 230 56.3275V80.6725C230 83.0625 231.937 85 234.327 85H258.673C261.063 85 263 83.0625 263 80.6725V56.3275C263 53.9375 261.063 52 258.673 52Z"
                  fill="white"
                  fill-opacity="0.02"
                ></path>
                <path
                  d="M234.327 52.25H258.673C260.924 52.25 262.75 54.0755 262.75 56.3275V80.6725C262.75 82.9245 260.924 84.75 258.673 84.75H234.327C232.076 84.75 230.25 82.9245 230.25 80.6725V56.3275C230.25 54.0755 232.076 52.25 234.327 52.25Z"
                  stroke="white"
                  stroke-opacity="0.05"
                  stroke-width="0.5"
                ></path>
              </g>
              <g className="invisible group-hover:visible">
                <path
                  d="M249.405 64.0828H250.927L250.928 67.2447H249.406L249.405 64.0828Z"
                  fill="#D9D9D9"
                ></path>
                <path
                  d="M204.405 110.083H205.927L205.928 113.245H204.406L204.405 110.083Z"
                  fill="#D9D9D9"
                ></path>
              </g>
              <g clip-path="url(#clip0_674_26)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M242.588 64.1697C242.588 61.8668 244.455 60 246.758 60C249.061 60 250.928 61.8668 250.928 64.1697H250.167H249.406C249.406 62.7072 248.221 61.5216 246.758 61.5216C245.296 61.5216 244.11 62.7072 244.11 64.1697V66.3527H242.588V64.1697Z"
                  fill="#D9D9D9"
                ></path>
                <path
                  d="M241 66.3527H242.63V75.9433H241V66.3527Z"
                  fill="#634AEE"
                ></path>
                <path
                  d="M250.963 66.3527H252.955V75.9433H250.963V66.3527Z"
                  fill="#634AEE"
                ></path>
                <path
                  d="M242.63 66.3527H250.963V69.3587H242.631L242.63 66.3527Z"
                  fill="white"
                ></path>
                <path
                  d="M242.631 69.3587H250.963V71.3627H242.631V69.3587Z"
                  fill="#EEEEEE"
                ></path>
                <path
                  d="M242.631 71.3627H250.963V75.9433H242.63L242.631 71.3627Z"
                  fill="#B6B6B6"
                ></path>
                <path
                  d="M248.246 72.3647H249.151V74.3688H248.246V72.3647Z"
                  fill="#634AEE"
                ></path>
              </g>
              <g filter="url(#filter6_b_674_26)">
                <path
                  d="M213.673 98H189.327C186.937 98 185 99.9375 185 102.327V126.673C185 129.063 186.937 131 189.327 131H213.673C216.063 131 218 129.063 218 126.673V102.327C218 99.9375 216.063 98 213.673 98Z"
                  fill="white"
                  fill-opacity="0.02"
                ></path>
                <path
                  d="M189.327 98.25H213.673C215.924 98.25 217.75 100.076 217.75 102.327V126.673C217.75 128.924 215.924 130.75 213.673 130.75H189.327C187.076 130.75 185.25 128.924 185.25 126.673V102.327C185.25 100.076 187.076 98.25 189.327 98.25Z"
                  stroke="white"
                  stroke-opacity="0.05"
                  stroke-width="0.5"
                ></path>
              </g>
              <g clip-path="url(#clip1_674_26)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M197.588 110.17C197.588 107.867 199.455 106 201.758 106C204.061 106 205.928 107.867 205.928 110.17H205.167H204.406C204.406 108.707 203.221 107.522 201.758 107.522C200.296 107.522 199.11 108.707 199.11 110.17V112.353H197.588V110.17Z"
                  fill="#D9D9D9"
                ></path>
                <path
                  d="M196 112.353H197.63V121.943H196V112.353Z"
                  fill="#634AEE"
                ></path>
                <path
                  d="M205.963 112.353H207.955V121.943H205.963V112.353Z"
                  fill="#634AEE"
                ></path>
                <path
                  d="M197.63 112.353H205.963V115.359H197.631L197.63 112.353Z"
                  fill="white"
                ></path>
                <path
                  d="M197.631 115.359H205.963V117.363H197.631V115.359Z"
                  fill="#EEEEEE"
                ></path>
                <path
                  d="M197.631 117.363H205.963V121.943H197.63L197.631 117.363Z"
                  fill="#B6B6B6"
                ></path>
                <path
                  d="M203.246 118.365H204.151V120.369H203.246V118.365Z"
                  fill="#634AEE"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_674_26"
                  x="116.373"
                  y="-15.6265"
                  width="171.253"
                  height="171.253"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="37.3133"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_674_26"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_674_26"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter1_b_674_26"
                  x="161.373"
                  y="-61.6265"
                  width="171.253"
                  height="171.253"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="37.3133"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_674_26"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_674_26"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter2_b_674_26"
                  x="-4"
                  y="-4"
                  width="347"
                  height="169.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="2"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_674_26"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_674_26"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter3_f_674_26"
                  x="187"
                  y="100"
                  width="29"
                  height="29"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_674_26"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter4_f_674_26"
                  x="232"
                  y="54"
                  width="29"
                  height="29"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_674_26"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter5_b_674_26"
                  x="223"
                  y="45"
                  width="47"
                  height="47"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="3.5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_674_26"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_674_26"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter6_b_674_26"
                  x="178"
                  y="91"
                  width="47"
                  height="47"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="3.5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_674_26"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_674_26"
                    result="shape"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_674_26"
                  x1="196.983"
                  y1="57.9685"
                  x2="202"
                  y2="81"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_674_26"
                  x1="241.983"
                  y1="11.9685"
                  x2="247"
                  y2="35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_674_26"
                  x1="9.7554"
                  y1="12.4231"
                  x2="353.924"
                  y2="66.4758"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#644AEE"></stop>
                  <stop offset="1" stop-color="#8D5DCF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_674_26"
                  x1="313"
                  y1="8.10431e-06"
                  x2="313"
                  y2="162"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.0260417"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop offset="0.310031" stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <clipPath id="clip0_674_26">
                  <rect
                    width="12"
                    height="16"
                    fill="white"
                    transform="translate(241 60)"
                  ></rect>
                </clipPath>
                <clipPath id="clip1_674_26">
                  <rect
                    width="12"
                    height="16"
                    fill="white"
                    transform="translate(196 106)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p className="text-[13.8px] z-[1000] lg:text-base text-white/75 font-gellix font-lighter">
          Unified vote-escrow system across multiple chains
        </p>
      </div>
    </div>
  );
};

export default Locking;
