"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoClock } from "react-icons/go";
import useScrollGrow from "../animation/ScrollGrow";
import { motion } from "framer-motion";

const BlogCard = ({ item }) => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-white  rounded-lg shadow p-4  hover:shadow-lg transition-shadow duration-300 border border-[#E6E7E6"
    >
      <Image
        src={item.image}
        alt="blog_img"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[250px] object-cover   rounded-lg"
      />

      <div className="flex items-center text-base-color text-sm mb-3 mt-6">
        <GoClock className="mr-2 text-secondary-color size-5" />
        <span>{item.date}</span>
      </div>

      <p className="text-base-color text-xl mb-4">
        {item.title}
        <Link href="/blogs/64854564231231">
          <span className="text-secondary-color font-semibold hover:underline">
            Read More...
          </span>
        </Link>
      </p>
    </motion.div>
  );
};

export default BlogCard;
