import React from "react";
import CardConnector from "./ui/CardConnector";
import { ColourfulText } from "./ui/colorfulText";
import { animatedCards, animatedLines } from "@/data";
import { Button } from "./ui/stateful-button";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:bg-none dark:!bg-black lg:min-h-screen"
      id="home"
    >
      <div className="w-11/12 mx-auto flex gap-12 sm:gap-36 lg:gap-4 flex-col lg:flex-row items-center justify-between p-6 lg:min-h-screen">
        <div className="order-2 lg:order-none text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold capitalize text-black dark:text-cyan-200">
            power your future with devleon <br />{" "}
            <ColourfulText text="technology" />
          </h1>
          <p className="mt-4 text-gray-600 dark:text-cyan-100">
            Unlock innovation with our cutting-edge IT, security, and green
            energy solutions. From smart locks to custom software, we help
            businesses thrive in the digital era.
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <Link href="/contact">
              <Button className="bg-blue-600 text-white capitalize font-semibold min-w-full md:w-fit">
                Get Started Today
              </Button>
            </Link>

            <Link href="#services">
              <Button className="bg-blue-200 hover:ring-blue-200 text-blue-600 capitalize font-semibold min-w-full md:w-fit">
                Discover Our Solutions
              </Button>
            </Link>
          </div>
        </div>

        <div className="order-1 relative w-full max-w-xl lg:max-w-2xl mt-8 sm:mt-48 lg:mt-0 flex justify-center items-center">
          <svg
            className="z-10 triangle-glow w-[180px] h-[250px] sm:w-[470px] sm:h-[415px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470 415"
            fill="none"
          >
            <path
              fill="url(#gradient)"
              stroke="url(#strokeGradient)"
              strokeWidth="2"
              d="M303.352 185.647c11.235 6.487 11.235 22.703 0 29.19l-122.884 70.947c-11.235 6.486-25.279-1.622-25.279-14.595V129.295c0-12.973 14.044-21.081 25.279-14.595l122.884 70.947Z"
              id="triangle"
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="194.746"
                x2="386.679"
                y1="232.543"
                y2="146.407"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0E52AE" />
                <stop offset="1" stopColor="#2FA7A7" stopOpacity="0.19" />
              </linearGradient>

              {/* Animated multi-color stroke */}
              <linearGradient
                id="strokeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff00ff">
                  <animate
                    attributeName="stop-color"
                    values="#ff00ff;#00ffff;#00ff00;#ffff00;#ff00ff"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#00ffff">
                  <animate
                    attributeName="stop-color"
                    values="#00ffff;#00ff00;#ffff00;#ff00ff;#00ffff"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="28"
              fill="white"
              fontWeight="bold"
              className="animate-text-glow"
              transform="translate(-10, -10)"
            >
              Devleon
            </text>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="18"
              fill="white"
              className="animate-text-glow"
              transform="translate(-15, 20)"
            >
              Tech
            </text>

            {/* Animated Dashed Lines */}
            {animatedLines.map((line) => (
              <path
                key={line.id}
                id={line.id}
                stroke={line.stroke}
                strokeDasharray={line.strokeDasharray}
                strokeWidth={line.strokeWidth}
                d={line.d}
                className="animate-dash"
              />
            ))}
          </svg>

          {/* Surrounding CardConnectors */}
          {animatedCards.map((card) => (
            <CardConnector
              key={card.id}
              id={card.id}
              title={card.title}
              img={card.img}
              style={card.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
