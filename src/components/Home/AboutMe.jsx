/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const aboutImage = {
  initial: { y: 0 },
  animate: {
    y: 15,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const AboutMe = () => {
  const view = useRef(null);
  const inView = useInView(view);
  return (
    <div className="w-full py-20  overflow-hidden">
      <Container>
        <motion.div
          ref={view}
          animate={
            inView
              ? { opacity: 1, y: 0, transition: { duration: 1 } }
              : { opacity: 0, y: -200, transition: { duration: 1 } }
          }
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-10 items-stretch justify-stretch my-10"
        >
          <div className="xl:col-span-2">
            <div className=" mb-5">
              <h1 className=" text-secondary-color text-3xl mb-1 font-bold">
                About Me :
              </h1>
              <div className="w-48 h-1 bg-secondary rounded "></div>
            </div>
            <p className="text-base-color/60 mb-2">
              My name is Sahid Hossain, and I'm from Dhaka. I hold a master’s
              degree from National University and a professional diploma from
              IDB-BISEW. I bring over 7 years of experience in Software Quality
              Assurance and Software Testing. Alongside certified as a web
              developer and product scrum master.
            </p>
            <p className="text-base-color/60 mb-2">
              Throughout my career, I’ve worked with 3 different organizations,
              Currently, I’m working as an augmented employee at Grameenphone
              through Mir Info System, where I conduct both manual and automated
              testing for the MyGP app on Android and iOS platforms. My role
              involves API testing with Postman, managing CI/CD pipelines via
              Jenkins, Android automation with Espresso and Appium, and web
              automation using Selenium Cucumber for the MyGP Web. I focus on
              identifying critical bugs early to enhance user satisfaction,
              ensuring a better user experience.
            </p>
            <p className="text-base-color/60 mb-2">
              In addition to my technical expertise, I’m skilled in
              collaborating with cross-functional teams to deliver high-quality
              software solutions. I’m deeply committed to continuous learning
              and refining my QA skills to keep up with industry standards.
            </p>

            <Link
              href="https://drive.google.com/file/d/1MHez5sR-ZpAFsASz47ixSYpz6tONVz9l/view?usp=sharing "
              target="_blank"
            >
              <button className="bg-transparent border-2 px-4 py-2 rounded mt-5 hover:bg-secondary-color border-secondary-color text-secondary-color hover:text-primary-color duration-500">
                My Resume
              </button>
            </Link>
          </div>
          <motion.div
            variants={aboutImage}
            initial="initial"
            animate="animate"
            className="relative "
          >
            <div className="!rounded w-fit  h-fit mx-auto  overflow-hidden border-2 border-secondary-color">
              <Image
                src="/img/myProfile.jpg"
                alt="my-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto min-h-[400px] h-full mx-auto p-2 !rounded object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutMe;
