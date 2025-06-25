import React from "react";
const CardConnector = ({ title, svgPath, style, svgFill }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${style}`}>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center transition-all duration-300 hover:shadow-xl hover:bg-[#FBE8C6] z-30 w-16 h-16 sm:w-28 sm:h-28 overflow-clip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 470 415"
          width="56"
          height="56"
          fill="none"
          className="mb-2"
        >
          <path fill={svgFill} d={svgPath} />
          <defs>
            <linearGradient
              id="nodeGradient"
              x1="0"
              x2="56"
              y1="0"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#FFF" />
              <stop offset="1" stopColor="#0367F2" />
            </linearGradient>
          </defs>
        </svg>
        <h5 className="text-xs font-semibold text-black/80">{title}</h5>
      </div>
    </div>
  );
};

export default CardConnector;
