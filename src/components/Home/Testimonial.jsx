/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import Container from "../ui/Container";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { motion, useInView } from "framer-motion";
import TestimonialCard from "../ui/Testimonial";
import AnimatedUnderline from "../ui/Animation/AnimatedUnderline";

const testimonials = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Laura S.",
    role: "Client",
    message:
      "Navigating my husband's chronic illness felt overwhelming until we joined Clinivea. Our MVR has been with us every step of the way, ensuring we make informed decisions.",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dr. Anne L.",
    role: "Colleague",
    message:
      "Clinivea’s MedicoVigilance services have made a tremendous difference in patient outcomes. MVRs bridge the gap between medical instructions and patient understanding, leading to improved adherence rates and overall satisfaction.",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "John D",
    role: "CEO of BD Tallent",
    message:
      "“Thanks to my MVR, I finally understand my treatment options and feel more in control of my health. Clinivea transformed how I view my healthcare journey—I feel supported and secure knowing my health decisions are in experienced hands”.",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Nurse Emily R.",
    role: "Senion SQA Engineer",
    message:
      "“Working with Clinivea’s MVRs has made patient follow-ups more efficient and meaningful. Patients now have a better understanding of their treatment plans, which results in adherence improvement by 35%. This collaborative approach is a game-changer in care.”",
  },
];

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} className="py-20 overflow-hidden">
      <div className="my-10 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold place-items-start text-base-color mb-5">
          Testimonials
        </h1>

        <AnimatedUnderline />
      </div>

      <Container>
        <div className="relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="hidden lg:block w-full lg:w-1/5 min-h-[687px] bg-[#19363D]"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[95%] mx-auto block lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:max-h-[450px]"
          >
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              modules={[EffectFade, Navigation]}
              className="mySwiper px-5 md:px-10"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute top-[50%] left-4 z-10 cursor-pointer text-[#19363D] text-2xl bg-[#D3EBE7] rounded py-1 px-2 -ml-3 md:ml-0">
              <GoArrowLeft />
            </div>
            <div className="custom-next absolute top-[50%] right-4 z-10 cursor-pointer text-[#19363D] text-2xl bg-[#D3EBE7] rounded py-1 px-2 -mr-3 md:mr-0">
              <GoArrowRight />
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Testimonial;
