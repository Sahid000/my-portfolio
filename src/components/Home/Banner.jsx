"use client";

import React from "react";
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
import { getResumeUrl } from "@/utils/getEnviromentVariable";

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
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const Banner = () => {
  const resumeUrl = getResumeUrl();

  return (
    <div className="relative w-full py-20 min-h-[100vh] overflow-hidden flex flex-col items-center justify-center">
      <Container>
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center mt-5 lg:mt-0">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center w-full"
          >
            <Revel delay={0}>
              <motion.h1
                variants={introChildren}
                className="text-4xl lg:text-6xl xl:text-7xl text-base-color mb-6 tracking-display font-display"
              >
                <span className="block text-sm lg:text-base text-secondary-color tracking-eyebrow mb-4 opacity-80 uppercase font-sans">
                  I&apos;M
                </span>
                <span className="uppercase font-extrabold text-base-color">
                  Sahid Hossain
                </span>
              </motion.h1>
            </Revel>

            <Revel delay={0}>
              <motion.h3
                variants={introChildren}
                className="text-lg lg:text-2xl text-base-color font-semibold mb-6"
              >
                I am a
                <span className="text-secondary-color ml-2">
                  <Typewriter
                    words={["Sr. SQA Engineer"]}
                    loop={100}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </motion.h3>
            </Revel>

            <Revel delay={0}>
              <motion.p
                variants={introChildren}
                className="text-base-color/60 text-sm lg:text-base max-w-[750px] leading-relaxed mx-auto px-4 lg:px-0"
              >
                I am a dedicated and results-driven professional with a robust
                academic background in Enterprise System Analysis & Design
                (C#.Net) and a Master’s degree in Business Studies. Leveraging
                extensive experience as a Software Quality Assurance Engineer, I
                excel in conducting comprehensive end-to-end testing,
                implementing effective test automation strategies, and ensuring
                seamless system integration.
                <br /> <br />
                With a proven ability to collaborate with cross-functional
                teams, communicate complex technical concepts with clarity, and
                resolve critical issues efficiently, I bring both technical
                expertise and a proactive problem-solving approach to every
                project. I am passionate about delivering high-quality solutions
                and am now seeking to contribute my skills to innovative,
                growth-focused initiatives within a dynamic organization.
              </motion.p>
            </Revel>

            <Revel delay={0}>
              <motion.div variants={introChildren} className="mt-8">
                <Link href={resumeUrl} target="_blank">
                  <button
                    className="bg-secondary-color text-primary-color px-8 py-3 text-sm font-bold tracking-wider duration-500 hover:bg-accent hover:text-secondary-color active:scale-[0.97] transition-all duration-200"
                    // style={{
                    //   clipPath: `polygon(
                    //     0 0,
                    //     calc(100% - 10px) 0,
                    //     calc(100% - 10px) 5px,
                    //     100% 5px,
                    //     100% calc(100% - 5px),
                    //     calc(100% - 10px) calc(100% - 5px),
                    //     calc(100% - 10px) 100%,
                    //     0 100%
                    //   )`,
                    // }}
                  >
                    My Resume
                  </button>
                </Link>
              </motion.div>
            </Revel>

            <motion.div
              variants={introChildren}
              className="flex justify-center items-center gap-6 mt-12"
            >
              <Revel delay={0}>
                <Link href="https://github.com/Sahid000" target="_blank">
                  <FaGithub className="text-base-color hover:text-accent duration-500 transition-colors duration-300 cursor-pointer text-2xl" />
                </Link>
              </Revel>
              <Revel delay={0}>
                <Link
                  href="https://www.linkedin.com/in/shahid06/"
                  target="_blank"
                >
                  <FaLinkedin className="text-base-color hover:text-accent duration-500 transition-colors duration-300 cursor-pointer text-2xl" />
                </Link>
              </Revel>
              <Revel delay={0}>
                <Link
                  href="https://www.facebook.com/hassan.shahid.50/"
                  target="_blank"
                >
                  <FaFacebook className="text-base-color hover:text-accent duration-500 transition-colors duration-300 cursor-pointer text-2xl" />
                </Link>
              </Revel>
              <Revel delay={0}>
                <Link
                  href="https://www.instagram.com/hassan_shahid77/"
                  target="_blank"
                >
                  <FaInstagramSquare className="text-base-color hover:text-accent duration-500 transition-colors duration-300 cursor-pointer text-2xl" />
                </Link>
              </Revel>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
