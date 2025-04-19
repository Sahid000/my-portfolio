"use client";
import Container from "../ui/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import BlogCard from "../ui/BlogCard";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const blogData = [
  {
    image: "https://sufosec.ch/wp-content/uploads/2020/07/litho-800x560-ph.jpg",
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: "https://sufosec.ch/wp-content/uploads/2020/07/litho-800x560-ph.jpg",
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: "https://sufosec.ch/wp-content/uploads/2020/07/litho-800x560-ph.jpg",
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: "https://sufosec.ch/wp-content/uploads/2020/07/litho-800x560-ph.jpg",
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: "https://sufosec.ch/wp-content/uploads/2020/07/litho-800x560-ph.jpg",
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: "https://sufosec.ch/wp-content/uploads/2020/07/litho-800x560-ph.jpg",
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
];

const RecentVlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} className=" overflow-hidden">
      <div className="mb-10 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-base-color/10">
          Blog
        </h1>
        <p className="text-secondary-color font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          Recent Blog!
        </p>
        <div className="w-48 h-1 bg-base-color rounded mx-auto"></div>
      </div>
      <Container>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation]}
              className="mySwiper !pt-10 !pb-20 px-2"
            >
              {blogData.map((item, i) => (
                <SwiperSlide key={i}>
                  <BlogCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="custom-prev select-none  absolute top-[100%] right-28 z-10 cursor-pointer text-secondary-color bg-[#E6E7E6] rounded-full p-1 -mt-[40px]">
              <MdKeyboardArrowLeft className="size-8" />
            </div>
            <div className="custom-next select-none  absolute top-[100%] right-10 z-10 cursor-pointer text-secondary-color bg-[#E6E7E6] rounded-full p-1 -mt-[40px]">
              <MdKeyboardArrowRight className="size-8" />
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default RecentVlog;
