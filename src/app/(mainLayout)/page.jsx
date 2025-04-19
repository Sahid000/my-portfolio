import ContactMe from "@/components/ContactMe/ContactMe";
import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import AcademicRecords from "@/components/Home/Education";
import Experience from "@/components/Home/Experience";
import RecentVlog from "@/components/Home/RecentVlog";
import Skills from "@/components/Home/Skills";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Experience />
      <AcademicRecords />
      <Skills />
      {/* <Testimonial /> */}
      <ContactMe />
    </div>
  );
};

export default page;
