import { serviceCards } from "@/data";
import React from "react";

const Services = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100" id="services">
      <div className="w-11/12 mx-auto py-10">
        <div className="flex flex-col lg:text-center">
          <div className="flex lg:justify-center items-center gap-4 mb-5">
            logo
            <h3 className="text-cyan-500 capitalize font-medium text-xl">
              Services
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-black">
            Transforming Businesses with Devleon Technology
          </h1>
          <p className="text-black/60 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            iure tenetur! Accusantium totam labore amet quasi recusandae quod
            consequatur porro ipsum voluptate perspiciatis dolor sit amet
            consectetur adipisicing elit. Aliquam, iure tenetur! Accusantium
            totam labore amet quasi recusandae quod consequatur porro ipsum
            voluptate, ipsa ea!
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className={`${card.classname} h-96 md:h-[420px] rounded-2xl bg-blue-100 py-5 text-center shadow-[4px_4px_0_4px_#3b82f6]`}
              >
                <img
                  src={card.src}
                  alt={`${card.name} photo`}
                  className="h-56 md:h-60 w-11/12 mx-auto object-cover rounded-2xl"
                />
                <h2 className="font-bold text-black/80 text-2xl py-5">
                  {card.name}
                </h2>
                <p className="text-black/60 font-semibold">{card.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
