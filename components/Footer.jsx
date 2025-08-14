import { company, contacts, navItems, services } from "@/data";
import React from "react";
import { BackgroundBeams } from "./ui/background-beam";
import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";

const Footer = () => {
  return (
    <div
      className="bg-black dark:bg-blue-950 relative text-cyan-100 antialiased"
      id="contact"
    >
      <div className="w-11/12 mx-auto py-14">
        <div className="flex flex-col lg:text-center">
          <div className="flex items-center lg:justify-center mb-5">
            <img
              src="/assets/Images/newLogo.png"
              alt="Devleon logo"
              className="w-20"
            />
            <h1 className="font-bold text-xl md:text-4xl text-cyan-200">
              Devleon Technology{" "}
            </h1>
          </div>
          <p className=" font-medium">
            Devleon Technology: Innovate. Secure. Sustain. Empowering businesses
            with cutting-edge IT, security, and green energy solutions.
          </p>
        </div>
        <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h1 className="text-3xl font-semibold mb-3">Quick Links</h1>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div className="flex items-center gap-4 z-50" key={item.link}>
                  <BiChevronsRight />

                  <Link
                    href={item.link}
                    className="cursor-pointer hover:scale-110"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-3">Our Services</h1>
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <div
                  className="flex items-center gap-4 z-50"
                  key={service.name}
                >
                  <BiChevronsRight />

                  <Link
                    href={service.link}
                    className="cursor-pointer hover:scale-110"
                  >
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-3">Resources</h1>
            <div className="flex flex-col gap-2">
              {company.map((item) => (
                <div className="flex items-center gap-4 z-50 " key={item.name}>
                  <BiChevronsRight />

                  <Link
                    href={item.link}
                    className="cursor-pointer hover:scale-110"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-3">Get in Touch</h1>
            <div className="flex flex-col gap-2">
              {contacts.map((contact) => (
                <div
                  className="flex items-center gap-4 z-50"
                  key={contact.name}
                >
                  <BiChevronsRight />
                  <Link
                    href={contact.link}
                    className="cursor-pointer hover:scale-110"
                  >
                    {contact.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-between lg:flex-row mt-5">
          <p>©2025 Devleon Technology. All Right Reserved</p>
          <p className="z-50">
            Developed by:{" "}
            <Link
              href="https://devleoncode.netlify.app"
              className="cursor-pointer z-50 text-blue-500 hover:scale-110"
            >
              Devleon Code
            </Link>
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Footer;
