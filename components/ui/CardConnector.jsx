import Image from "next/image";
import React from "react";
const CardConnector = ({ title, style, img }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${style}`}>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center transition-all duration-300 hover:shadow-xl hover:bg-[#FBE8C6] z-30 w-16 h-16 sm:w-28 sm:h-28 overflow-clip">
        <Image
        src={img}
        alt={img}
        width={56}
        height={56}
        />
        <h5 className="text-xs font-semibold text-black/80">{title}</h5>
      </div>
    </div>
  );
};

export default CardConnector;
