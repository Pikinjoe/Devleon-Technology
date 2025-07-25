import { testimoniesList } from "@/data";
import Image from "next/image";
import React from "react";
import { FaHandshake } from "react-icons/fa";


const Testimonies = () => {
  return (
    <div
      className="bg-gradient-to-br from-white via-blue-50 to-blue-100"
      id="testimonies"
    >
      <div className="w-11/12 mx-auto py-10">
        <div className="flex flex-col lg:text-center">
          <div className="flex lg:justify-center items-center gap-4 mb-5">
            <FaHandshake className="text-cyan-500 text-xl" />
            <h3 className="text-cyan-500 capitalize font-medium text-xl">
              Clients Testimonies
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-black">
            What Our Clients Say
          </h1>
          <p className="text-black/60 font-semibold">
            Our clients trust us to deliver innovative solutions with transparency and dedication. Hear their stories.

          </p>
        </div>
        <div className="py-10 flex flex-col gap-5 md:gap-7">
            {testimoniesList.map((testimony) => (
            <div key={testimony.id} className="flex flex-col md:flex-row gap-10">
                         <img
                     src={testimony.src}
                     alt={`${testimony.name} photo`}
                     className={`w-36 h-36 rounded-full object-center object-cover md:min-w-36 ${testimony.classname}`}
                     />
            <div className={`relative bg-blue-100 p-10 rounded-2xl shadow-xl ${testimony.class}`}>
                <div className={`w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-b-blue-100 border-l-transparent border-r-transparent absolute -top-[6%] ${testimony.class === "md:order-2" && "md:border-b-[20px] md:border-t-[20px] md:border-r-[20px] md:border-l-0 md:border-r-blue-100 md:border-b-transparent border-t-transparent md:-left-[2.7%] lg:-left-[2%] xl:-left-[1.5%] md:top-[20%]"} ${testimony.class === "md:order-1" && "md:border-b-[20px] md:border-t-[20px] md:border-l-[20px] md:border-r-0 md:border-l-blue-100 md:border-b-transparent border-t-transparent md:-right-[2.7%] lg:-right-[2%] xl:-right-[1.5%] md:top-[20%]"}`} />
                <h3 className="font-semibold text-md text-cyan-700">{testimony.title}</h3>
                <h2 className="text-lg font-semibold text-black/80">{testimony.name}</h2>
                <p className="text-black/60 mt-1.5">{testimony.des}</p>
            </div>
            </div>
            ))}
           
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
