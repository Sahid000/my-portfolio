"use client";

import Container from "@/components/ui/Container";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import ContactFrom from "./ContactFrom";
import ContactMeCard from "./ContactMeCard";
import AnimatedUnderline from "../ui/Animation/AnimatedUnderline";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 0,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
};

const ContactMe = () => {
  const view = useRef(null);

  const inView = useInView(view);
  return (
    <div className="py-24 text-content-primary">
      <div className="mb-10 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl  place-items-start text-content-secondary tracking-display mb-5 text-center px-4">
          Contact With Me
        </h1>

        <AnimatedUnderline />
      </div>
      <Container>
        <motion.div
          variants={intro}
          ref={view}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          <motion.div variants={introChildren}>
            <ContactMeCard />
          </motion.div>
          <motion.div variants={introChildren}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 place-items-start text-accent tracking-display px-4">
              Get In Touch
            </h1>
          </motion.div>
          <motion.div variants={introChildren}>
            <ContactFrom />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactMe;
