import React from "react";
import { BackgroundBeams } from "./ui/background-beam";
import { ideas } from "@/data";
import { SiTrustpilot } from "react-icons/si";


const WhyUs = () => {
  return (
    <div className="bg-blue-950 relative antialiased">
      <div className="w-11/12 mx-auto py-14 flex flex-col lg:flex-row gap-10 lg:gap-6">
        <div className="flex flex-col flex-1/2">
          <div className="flex items-center gap-4 mb-5">
            <SiTrustpilot className="text-3xl text-cyan-200" />
            <h3 className="capitalize font-medium text-xl text-cyan-200">
              Why Partner with Devleon?
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-cyan-100">
            Why Devleon Technology is the Right IT Partner for You
          </h1>
          <p className="text-cyan-50">
            Choose Devleon Technology for unmatched expertise, innovative
            solutions, and a commitment to your success. We deliver secure,
            scalable, and sustainable systems that grow with you.
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
          <img
            src="/assets/Images/networking.jpeg"
            alt="networking photo"
            className="object-cover h-96 lg:h-1/2 w-full rounded-lg"
          />
          <h2 className="font-semibold text-xl my-4">
            Transform your business with Devleon’s innovative solutions
          </h2>
          <div className="flex items-center gap-5">
            <span className="text-3xl">🚀</span>
            <div>
              <h2 className="font-semibold text-xl mb-4">Scalable Solution</h2>
              <p className="font-medium">
                Future-proof your business with IT systems that scale
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default WhyUs;
