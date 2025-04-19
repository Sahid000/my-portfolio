"use client";

import React, { RefObject, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { sendContactEmailAction } from "@/app/actions/contactActions";

const ContactFrom = () => {
  const form = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  const onFinish = async (values) => {
    const toastId = toast.loading("Message Sending...");

    try {
      const data = await sendContactEmailAction({ ...values });
      if (data.success) {
        toast.success("Message Send Successfully", {
          id: toastId,
          duration: 2000,
        });
        reset(); // Reset the form fields after successful submission
      } else {
        toast.error(data.error, {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div>
      <form
        ref={form}
        className="md:w-[80%] mx-auto"
        onSubmit={handleSubmit(onFinish)}
      >
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary-color"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span> Name :</span>
          </label>
          <input
            type="text"
            {...register("name")}
            name="name"
            placeholder="Enter Your Name"
            required
            className="border border-secondary-color/50 bg-transparent text-base-color placeholder:!text-base-color/50 focus:ring-secondary-color/50 p-2 outline-none w-full mt-3 rounded"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary-color"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span> Email :</span>
          </label>
          <input
            type="email"
            {...register("email")}
            name="email"
            placeholder="Enter Your Email"
            required
            className="border border-secondary-color/50 bg-transparent text-base-color placeholder:!text-base-color/50 focus:ring-secondary-color/50 p-2 outline-none w-full mt-3 rounded"
          />
        </div>

        <div className="mb-5 col-span-2">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt-text text-secondary-color"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>
            <span> Message :</span>
          </label>
          <textarea
            {...register("message")}
            name="message"
            placeholder="Enter Your Message"
            required
            className="h-40 border border-secondary-color/50 bg-transparent text-base-color placeholder:!text-base-color/50 focus:ring-secondary-color/50 p-2 outline-none w-full mt-3 rounded"
          />
        </div>
        <div className=" mt-6 col-span-2">
          <button className="w-full flex items-center justify-center border px-4 py-2 rounded mt-5 bg-secondary-color border-secondary-color text-primary-color duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-plus"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
