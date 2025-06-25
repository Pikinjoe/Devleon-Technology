import React from "react";
import { BackgroundBeams } from "./ui/background-beam";
import { aboutImg } from "@/data";

const About = () => {
  return (
    <div className="bg-blue-950 relative antialiased" id="about">
      <div className="w-11/12 mx-auto py-14 flex flex-col lg:flex-row gap-10 lg:gap-6">
        <div className="lg:order-1 order-2 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1/2">
          {aboutImg.map((img) => (
            <img
              src={img.src}
              alt={img.name}
              key={img.id}
              className={`w-full h-80 rounded-2xl ${img.classname}`}
            />
          ))}
        </div>
        <div className="lg:order-2 flex flex-col flex-1/2">
          <div className="flex items-center gap-4 mb-5">
            logo
            <h3 className="capitalize font-medium text-xl text-cyan-200">
              about us
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-cyan-100">
            Innovating the Future with Cutting Edge Technology
          </h1>
          <p className="text-cyan-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aliquid ipsa temporibus! Repellendus quisquam sint consectetur
            corrupti alias doloremque libero eveniet? Voluptatum fuga saepe quam
            autem dolor modi, blanditiis enim soluta quos vitae quia magnam ex
            corporis assumenda veritatis inventore commodi voluptatibus aliquid
            culpa amet quibusdam incidunt. Natus, eveniet enim.
          </p>
          <button className="bg-blue-500 w-32 px-4 py-2 rounded-full mt-4 hover:bg-transparent hover:border-[1px]  hover:border-blue-500 cursor-pointer z-10">
            Learn More
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5">
            <div className="flex flex-col text-center items-center justify-center bg-black/60 rounded-2xl h-80">
              Icon
              <h2 className="font-semibold text-3xl my-4 text-cyan-100">
                Our Vision
              </h2>
              <p className="text-cyan-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                dignissimos quia porro consequatur, beatae iste! Esse modi
                asperiores tenetur ab.
              </p>
            </div>
            <img
              src="/assets/Images/workstation.jpeg"
              alt="workstation"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default About;
