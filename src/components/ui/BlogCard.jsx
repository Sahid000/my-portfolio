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
      className="pixel-card p-4 hover:shadow-glow hover:border-accent/40 transition-all duration-instant"
    >
      <Image
        src={item.image}
        alt="blog_img"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[250px] object-cover   rounded-lg"
      />

      <div className="flex items-center text-content-muted text-xs eyebrow mb-3 mt-6">
        <GoClock className="mr-2 text-accent size-5" />
        <span>{item.date}</span>
      </div>

      <p className="text-content-primary text-base mb-4">
        {item.title}
        <Link href="/blogs/64854564231231">
          <span className="text-accent font-semibold hover:text-accent-strong hover:underline underline-offset-4">
            Read More...
          </span>
        </Link>
      </p>
    </motion.div>
  );
};

export default BlogCard;
