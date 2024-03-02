'use client';
import React from "react";
import Image from "next/image";
import ArrowIcon from "../../components/ArrowIcon";

function AboutMe(props) {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
    ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-[#7c51f0]" />
            <span className="text-[#7c51f0] font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-[#7c51f0] opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-600 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header">
              <span className="text-gray-600">
                Hello! My name is Ganesh, and I am a passionate software engineer and problem solver, dedicated to
                creating impactful codes that thrive on the internet. My journey in computer science began in 2009 when
                I delved into the world of Ethical Hacking using BackTrack OS. Little did I know that programming skills
                would become essential in pursuing this interest, marking the start of my programming journey.
              </span>
            </div>
            <div className="font-Header">
              <span className="text-gray-600">
                Since pursuing my engineering degree, my career has taken me through diverse industries, allowing me to
                refine my expertise in desktop and web development. In the realm of{" "}
                <span className="text-[#7c51f0]">web3</span>, I am dedicated to pushing boundaries and driving
                advancements. With experience working alongside esteemed organizations like{" "}
                <span className="text-[#7c51f0]">ENS Vision</span>, where I played a key role in releasing v2 of{" "}
                <span className="text-[#7c51f0]">ENS Vision Marketplace</span>, my passion for web3 and continuous
                learning drives me to make a positive impact and advance technology.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-600">
                Here are a few technologies I have been been working with recently :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              {technologies.map((techList, index) => (
                <div key={index} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techList.map((tech, index) => (
                    <div key={index} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className="h-3 w-3 text-[#7c51f0]" />
                      <span className="text-gray-600 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-[#7c51f0] translate-x-5 translate-y-5 rounded"></div>

            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-20 bg-[#7c51f0] opacity-5 duration-300 rounded overflow-hidden"></div>
              <Image
                src="/contact.jpg"
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
                width={450}
                height={450}
              />
            </div>
          </div>

          {/* Image in Mobile */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center bottom-9 order-[-1] ">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-[#7c51f0] "></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Image
                src="/contact.jpg"
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
                width={450}
                height={450}
              />
            </div>
            <div className="absolute w-48 h-full bg-[#7c51f0] opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AboutMe;