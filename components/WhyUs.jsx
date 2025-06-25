import React from "react";
import { BackgroundBeams } from "./ui/background-beam";
import { ideas } from "@/data";

const WhyUs = () => {
  return (
    <div className="bg-blue-950 relative antialiased">
      <div className="w-11/12 mx-auto py-14 flex flex-col lg:flex-row gap-10 lg:gap-6">
        <div className="flex flex-col flex-1/2">
          <div className="flex items-center gap-4 mb-5">
            logo
            <h3 className="capitalize font-medium text-xl text-cyan-200">
              why choose us?
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-cyan-100">
            Why Devleon Technology is the Right IT Partner for You
          </h1>
          <p className="text-cyan-50">
            At Devleon Technology, we are committed to delivering cutting-edge
            IT solutions that drive business growth, enhance security, and
            streamline operations.
          </p>
          <div className="grid grid-cols-1 gap-4 w-full mt-5">
            {ideas.map((idea) => (
              <div
                className="flex flex-col md:flex-row text-center justify-center items-center lg:justify-start bg-black/60 rounded-2xl h-40 md:pl-5 md:gap-5"
                key={idea.id}
              >
                {idea.icon}
                <div>
                  <h2 className="font-semibold text-3xl my-4 text-cyan-100 capitalize">
                    {idea.title}
                  </h2>
                  <p className="text-cyan-50 font-semibold">{idea.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col">
            <img src="/assets/Images/networking.jpeg" alt="networking photo" className="object-cover h-96 lg:h-1/2 w-full rounded-lg" />
            <h2 className="font-semibold text-xl my-4">Partner with Devleon Technology and transform your IT infrastructure today</h2>
            <div className="flex items-center gap-5">
                icon
                <div>
                    <h2 className="font-semibold text-xl mb-4">Scalable Solution</h2>
                    <p className="font-medium">IT solution that grows with your business</p>
                </div>
            </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default WhyUs;
