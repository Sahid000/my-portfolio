"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";

const Accordion = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Calculate the height of the content when it opens or closes
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); // Set to the content's height when open
    } else {
      setHeight(0); // Set to 0 when closed
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        "mb-5 pixel-card transition-colors duration-instant shadow-panel hover:border-accent/40 ",
        className
      )}
    >
      <div
        className="flex justify-between items-center p-5 cursor-pointer text-accent duration-instant"
        onClick={toggleAccordion}
      >
        <h3 className="text-content-secondary text-lg font-semibold">{title}</h3>
        {isOpen ? (
          <div>
            <HiMinus className="text-2xl duration-500" />
          </div>
        ) : (
          <div>
            <GoPlus className="text-2xl duration-500" />
          </div>
        )}
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${height}px`, // Dynamic height
          overflow: "hidden",
          transition: "height 0.5s ease", // Smooth transition effect for height
        }}
      >
        <div className="px-5 pb-5 text-content-muted text-sm rounded-bl-2xl rounded-br-2xl">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
