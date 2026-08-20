import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row justify-stretch items-center md:gap-5 xl:gap-10 bg-surface-raised border border-line-subtle rounded-2xl overflow-hidden text-content-primary p-7 md:p-0 ">
      <Image
        src={item.image}
        alt="Testimonial"
        width={0}
        height={0}
        sizes="100vw"
        className=" h-20 w-20 rounded-full md:rounded-none md:w-auto md:h-[350px] md:max-w-[250px] lg:h-[400px] lg:max-w-[300px] object-center"
      />
      <div className="flex flex-col items-center md:items-start md:px-5 xl:px-10 py-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1 md:mb-4 text-content-secondary tracking-display">
          {item.name}
        </h1>
        <p className="text-sm eyebrow text-accent mb-1 md:mb-4">{item.role}</p>
        <div className="flex gap-2 items-center">
          <FaStar className="size-5 text-accent" />
          <FaStar className="size-5 text-accent" />
          <FaStar className="size-5 text-accent" />
          <FaStar className="size-5 text-accent" />
          <FaStar className="size-5 text-accent" />
        </div>
        <p className="mt-5 md:mt-10 text-sm text-content-muted text-center md:text-start">
          {item.message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
