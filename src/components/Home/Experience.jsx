"use client";
import React from "react";
import AnimatedUnderline from "../ui/Animation/AnimatedUnderline";
import Container from "../ui/Container";
import ExperienceCard from "../ui/ExperienceCard";

const experience = [
  {
    id: 1,
    company: "Adventure Dhaka Limited",
    role: "Senior Software Quality Assurance Engineer",
    date: "Feb 2025 - Present",
    points: [
      "Conducting quality assurance for international flight services within the Skyticket application.",
      "Contributing to the smooth integration of airline APIs into the Skyticket platform, ensuring accurate data flow and reliable booking functionality across web and mobile platforms.",
      " Collaborating regularly with the Japan team to align on QA tasks and ensure seamless communication.",
      "Designing comprehensive test plans and executing test cases for Web, Android, and iOS platforms to support the Japan team and manage QA tasks effectively. ",
      "Continuously monitoring the live application to identify and address potential issues, ensuring a seamless user experience.",
    ],
    projects: ["Skyticket"],
  },
  {
    id: 2,
    company: "Mir Info System",
    role: "Senior Software Quality Assurance Engineer",
    date: "Mar 2022 - Jan 2025",
    points: [
      "Participate in transitioning system architecture from Monolithic to Microservices.",
      "Automate login systems for MyGp apps and the web to enhance reliability.",
      "Work as an augmented employee of Grameenphone's team, ensuring seamless integration.",
      "Conduct end-to-end API testing to confirm system readiness and platform compatibility.",
      "Maintain and update automated test suites for alignment with ongoing development.",
      "Perform sanity testing on live applications post-release to ensure stability.",
      "Train and mentor junior QA engineers, promoting best practices in testing.",
    ],
    projects: ["MyGp App and MyGp Web"],
  },
  {
    id: 3,
    company: "Archibo GmbH IT Consultancy and Services",
    role: "Software Quality Assurance Engineer",
    date: "Jun 2021 - Feb 2022",
    points: [
      "Analyzed test requirements for Web, CRM, & Desktop applications, reducing overlooked requirements by 30%.",
      "Developed and executed functional tests, boosting test coverage by 75%.",
      "Automated test scripts with Selenium TestNG and Postman, enhancing test efficiency by 45%.",
      "Conducted QA documentation & managed defect-tracking tools, cutting response time by 18%.",
      "Enhanced user satisfaction by detecting critical bugs early, reducing post-release defects.",
      "Collaborated closely with Developers and Product Owners for seamless communication.",
      "Performed Functional, Non-functional, Regression, and Retesting to ensure software quality.",
      "Participated in a 14-day sprint cycle as part of an agile team for timely release delivery.",
    ],
    projects: ["Agilibo", "EWF", "Vitaldent", "Workshore", "Archibo"],
  },
  {
    id: 4,
    company: "Redlime Solutions",
    role: "Software Quality Assurance Engineer",
    date: "Jan 2017 - May 2021",
    points: [
      "Conducted manual testing (functional, regression, UI, etc.) to ensure high-quality software delivery.",
      "Implemented automation using Selenium TestNG reducing testing efforts.",
      "Performed mobile responsiveness testing on BrowserStack and Genymotion.",
      "Worked with Project Managers and Developers to optimize issue resolution and defect prevention.",
      "Tracked and managed bugs in JIRA for efficient issue handling.",
    ],
    projects: [
      "Quartolab",
      "RideCentric",
      "TotemBi",
      "The Vineyard",
      "Adolphus Tower",
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-20 bg-background-color overflow-hidden">
      <div className="mb-10 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold place-items-start text-secondary-color mb-5">
          Experience
        </h1>

        <AnimatedUnderline />
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Experience;
