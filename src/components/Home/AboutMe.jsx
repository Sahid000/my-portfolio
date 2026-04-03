/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { getResumeUrl } from "@/utils/getEnviromentVariable";

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

  const resumeUrl = getResumeUrl();


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
              My name is Sahid Hossain, and I am based in Dhaka. I hold a master’s
              degree from National University and a Professional Diploma from
              IsDB-BISEW. With over 9+ years of experience in Software Quality
              Assurance and Software Testing, I specialize in delivering 
              high-quality, user-centric software solutions. Alongside 
              I am an ISTQB CTFL (v4.0) certified tester, and also certified in Web Development 
              and Product Scrum Master, which enables me to contribute effectively across 
              both technical and Agile environments.
            </p>
            <p className="text-base-color/60 mb-2">
              Throughout my career, I’ve worked with 4 different organizations,
              Currently, I’m working at Adventure Dhaka Ltd. as a Senior SQA Engineer, 
              contributing to the Skyticket platform, an international travel booking service. 
              My responsibilities include test planning, manual and automated testing for web, 
              Android, and iOS platforms, and collaborating closely with the Japan team to ensure 
              smooth execution of QA tasks. I also work with Autify for automated regression testing 
              and have been involved in projects like airline API integration to support 
              seamless flight bookings.

              Previously, I served as an augmented Senior SQA engineer for Grameenphone's MyGP app through Mir Info System, 
              where I conducted both manual and automated testing across mobile and web platforms. My role involved 
              API testing strategy for microservices that reduced integration bugs with Postman, CI/CD pipeline management 
              using Jenkins, Android automation with Espresso and web automation using Selenium Cucumber.
              </p>
            <p className="text-base-color/60 mb-2">
              I take pride in identifying critical bugs early in the development cycle, improving system reliability 
              and user satisfaction. I'm also experienced in working with cross-functional teams, mentoring junior testers,
              and continuously sharpening my skills to stay aligned with evolving industry standards.
            </p>
            <Link
              href={resumeUrl}
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
