"use client";

import React, { Suspense } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Revel from "../ui/Animation/Revel";

const intro = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 0,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};
const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#12103E",
  },
};

const Banner = () => {
  return (
    <div className="bg-background-color w-full py-20 min-h-[100vh] overflow-hidden flex flex-col items-center justify-center">
      <Container>
        <div className=" lg:mt-10 xl:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center justify-items-center w-full h-full gap-10 mt-5 lg:mt-0">
            <div>
              <motion.div variants={intro} initial="hidden" animate="visible">
                <Revel delay={0}>
                  <motion.h1
                    variants={introChildren}
                    className="text-3xl lg:text-4xl xl:text-5xl text-base-color mb-2 md:mb-4"
                  >
                    <span className="block md:inline-block"> I&apos;M</span>
                    <span className="text-base-color font-extrabold">
                      {" "}
                      Sahid Hossain
                    </span>
                  </motion.h1>
                </Revel>
                <Revel delay={0}>
                  <motion.h3
                    variants={introChildren}
                    className="text-xl lg:text-2xl text-base-color font-semibold mb-3 md:mb-5"
                  >
                    I am a
                    <span className="text-base-color">
                      {" "}
                      <Typewriter
                        words={["SQA Engineer"]}
                        loop={100}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </motion.h3>
                </Revel>{" "}
                <Revel delay={0}>
                  <motion.p
                    variants={introChildren}
                    className="text-base-color/60 text-sm"
                  >
                    I am a dedicated and results-driven professional with a
                    robust academic background in Enterprise System Analysis &
                    Design (C#.Net) and a Master’s degree in Business Studies.
                    Leveraging extensive experience as a Software Quality
                    Assurance Engineer, I excel in conducting comprehensive
                    end-to-end testing, implementing effective test automation
                    strategies, and ensuring seamless system integration.
                    <br /> <br />
                    With a proven ability to collaborate with cross-functional
                    teams, communicate complex technical concepts with clarity,
                    and resolve critical issues efficiently, I bring both
                    technical expertise and a proactive problem-solving approach
                    to every project. I am passionate about delivering
                    high-quality solutions and am now seeking to contribute my
                    skills to innovative, growth-focused initiatives within a
                    dynamic organization.
                  </motion.p>
                </Revel>
                <motion.div
                  variants={introChildren}
                  className="flex justify-start items-center gap-5 my-5"
                >
                  <Revel delay={0}>
                    <Link href="https://github.com/Sahid000" target="_blank">
                      <FaGithub className="text-secondary-color cursor-pointer  text-2xl" />
                    </Link>
                  </Revel>
                  <Revel delay={0}>
                    <Link
                      href="https://www.linkedin.com/in/shahid06/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-secondary-color cursor-pointer text-2xl" />
                    </Link>
                  </Revel>
                  <Revel delay={0}>
                    <Link
                      href="https://www.facebook.com/hassan.shahid.50/"
                      target="_blank"
                    >
                      <FaFacebook className="text-secondary-color cursor-pointer  text-2xl" />
                    </Link>
                  </Revel>
                  <Revel delay={0}>
                    <Link
                      href="https://www.instagram.com/hassan_shahid77/"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-secondary-color cursor-pointer text-2xl" />
                    </Link>
                  </Revel>
                </motion.div>
                <Revel delay={0}>
                  <motion.div variants={introChildren}>
                    {" "}
                    <Link
                      href="https://drive.google.com/file/d/1cyOafJCpfwyMgAot5Td-u4LQZ4Oq7vJm/view?usp=sharing"
                      target="_blank"
                    >
                      <button className="bg-transparent border-2 border-secondary-color px-4 py-2 rounded mt-5 text-base-color hover:bg-secondary-color hover:border-secondary-color hover:text-primary-color duration-500">
                        My Resume
                      </button>
                    </Link>
                  </motion.div>
                </Revel>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 lg:mt-0  order-last"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,

                duration: 3,
              }}
            >
              <Suspense>
                <video
                  controls
                  controlsList="nodownload"
                  className=" w-full h-full rounded-lg shadow-md"
                >
                  <source src="/video/banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
