import { serviceCards } from "@/data";
import React from "react";
import { Button } from "./ui/stateful-button";
import Link from "next/link";
import { GrServices } from "react-icons/gr";

const Services = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100"
      id="services"
    >
      <div className="w-11/12 mx-auto py-10">
        <div className="flex flex-col lg:text-center">
          <div className="flex lg:justify-center items-center gap-4 mb-5">
            <GrServices className="text-cyan-500 text-3xl" />
            <h3 className="text-cyan-500 capitalize font-medium text-xl">
              Services
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-black">
            Innovative Solutions for a Digital World
          </h1>
          <p className="text-black/60 font-semibold">
            From advanced security systems to sustainable energy and custom
            software, Devleon Technology delivers solutions that empower
            businesses to succeed.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className={`${card.classname} max-h-[420px] rounded-2xl bg-blue-100 py-5 text-center shadow-[4px_4px_0_4px_#3b82f6] overflow-hidden`}
              >
                <div className="relative w-full h-60">
                  <img
                    src={card.src}
                    alt={`${card.name} photo`}
                    className="w-11/12 mx-auto h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center p-4">
                  <h2 className="font-bold text-black/80 text-2xl py-3">
                    {card.name}
                  </h2>
                  <p className="text-black/60 font-semibold text-base leading-relaxed line-clamp-1">
                    {card.des}
                  </p>
                  <Link href={`/${card.id}`} className="w-fit">
                    <Button className="bg-blue-500 rounded-2xl hover:ring-blue-500 mt-4 w-fit">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
