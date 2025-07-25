import React from "react";
import { BackgroundBeams } from "./ui/background-beam";
import { aboutImg } from "@/data";
import { Button } from "./ui/stateful-button";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";


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
            <FcAbout className="text-4xl text-cyan-200" />
            <h3 className="capitalize font-medium text-xl text-cyan-200">
              about us
            </h3>
          </div>
          <h1 className="font-bold text-4xl mb-5 text-cyan-100">
            Pioneering Technology for a Smarter Future
          </h1>
          <p className="text-cyan-50">
            At Devleon Technology, we’re passionate about transforming
            businesses with innovative IT, security, and green energy solutions.
            Based in Abuja, Nigeria, our team delivers tailored, scalable
            systems to drive growth and security.
          </p>
          <Link href="/about" className="z-10 w-fit">
            <Button className="bg-blue-500 rounded-full hover:ring-blue-500 mt-4 w-fit ring-offset-blue-950">
              Learn More
            </Button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5">
            <div className="flex flex-col text-center items-center justify-center bg-black/60 rounded-2xl h-80">
              <span className="text-4xl">🌐</span>
              <h2 className="font-semibold text-3xl my-4 text-cyan-100">
                Our Vision
              </h2>
              <p className="text-cyan-50">
                Our vision is to lead the way in digital transformation,
                empowering businesses with sustainable, secure, and innovative
                technology.
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
