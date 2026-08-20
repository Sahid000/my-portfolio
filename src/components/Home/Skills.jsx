"use client";
import React from "react";
import Container from "../ui/Container";
import SkillShowPage from "../ui/SkillShowPage";
import AnimatedUnderline from "../ui/Animation/AnimatedUnderline";

const techSkills = [
  {
    id: 1,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png",
    skillName: "Selenium",
    percentage: 95,
  },
  {
    id: 2,
    image: "https://avatars.githubusercontent.com/u/12528662?s=280&v=4",
    skillName: "TestNG",
    percentage: 90,
  },
  {
    id: 3,
    image: "https://cucumber.io/img/logo.svg",
    skillName: "Cucumber",
    percentage: 90,
  },
  {
    id: 4,
    image:
      "https://appium.io/docs/en/latest/assets/images/appium-logo-white.png",
    skillName: "Appium",
    percentage: 90,
  },
  {
    id: 5,
    image:
      "https://i0.wp.com/blog.nashtechglobal.com/wp-content/uploads/2024/01/imagejmeter.jpeg?fit=1024%2C576&ssl=1",
    skillName: "JMeter",
    percentage: 90,
  },
  {
    id: 6,
    image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
    skillName: "Postman",
    percentage: 90,
  },
  {
    id: 7,
    image: "https://git-scm.com/images/logo@2x.png",
    skillName: "Git",
    percentage: 90,
  },
  {
    id: 8,
    image: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
    skillName: "Jenkins",
    percentage: 90,
  },
  {
    id: 9,
    image:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/elasticco_kibana_logo_icon_169209.png",
    skillName: "Kibana",
    percentage: 90,
  },
  {
    id: 10,
    image:
      "https://www.shutterstock.com/image-vector/vector-illustration-ci-cd-continuous-600nw-2243991131.jpg",
    skillName: "CI/CD",
    percentage: 90,
  },
  {
    id: 11,
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png",
    skillName: "Android Studio",
    percentage: 90,
  },
  {
    id: 12,
    image:
      "https://w7.pngwing.com/pngs/992/738/png-transparent-jira-hd-logo-thumbnail.png",
    skillName: "JIRA",
    percentage: 90,
  },
  {
    id: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVAtVmEqYpbD4Z4EF9bHgPNOMV0XAk7khzA&s",
    skillName: "Confluence",
    percentage: 90,
  },
  {
    id: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3Od3udlZ3OGQprOdBuJoc53vQ0iZvbSvtA&s",
    skillName: "TestRail",
    percentage: 90,
  },
  {
    id: 15,
    image:
      "https://e7.pngegg.com/pngimages/424/702/png-clipart-microsoft-sql-server-database-microsoft-corporation-application-software-sql-logo-angle-triangle.png",
    skillName: "SQL Server",
    percentage: 95,
  },
];

const programmingSkills = [
  {
    id: 1,
    image:
      "https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all",
    skillName: "JAVA",
    percentage: 95,
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
    skillName: ".Net",
    percentage: 95,
  },
  {
    id: 3,
    image: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
    skillName: "C#",
    percentage: 95,
  },
];
const softSkills = [
  {
    id: 1,
    image:
      "https://classplusapp.com/growth/wp-content/uploads/2022/07/Importance-of-good-communication-skills-for-teachers.jpg",
    skillName: "Strong Communication",
    percentage: 90,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/d4/f1/02/d4f1022d76bec06abd6d04c4c9a7d88a.jpg",
    skillName: "Teamwork",
    percentage: 90,
  },
  {
    id: 3,
    image:
      "https://img.magnific.com/free-vector/keyword-research-illustration_335657-4664.jpg?semt=ais_hybrid&w=740&q=80",
    skillName: "Attention to Detail",
    percentage: 90,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFdbeOgkg-HoMLk67u7x-IdWKqhSKU1vY0A&s",
    skillName: " Proven Product Scrum Master",
    percentage: 90,
  },
];

const Skills = () => {
  return (
    <div className="py-24 overflow-hidden">
      <div className="mb-10 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl  place-items-start text-content-secondary tracking-display mb-5 text-center px-4">
          My Expertise Skills
        </h1>

        <AnimatedUnderline />
      </div>
      <Container>
        <div>
          <div className=" mt-20">
            <h1 className="text-xl sm:text-2xl place-items-start text-accent tracking-display">
              Tools & Technologies :
            </h1>
            <div>
              <SkillShowPage skillData={techSkills} />
            </div>
          </div>
          <div className=" mt-20">
            <h1 className="text-xl sm:text-2xl place-items-start text-accent tracking-display">
              Programming Language :
            </h1>
            <div>
              <SkillShowPage skillData={programmingSkills} />
            </div>
          </div>

          <div className=" mt-20">
            <h1 className="text-xl sm:text-2xl place-items-start text-accent tracking-display">
              Soft Skills:
            </h1>
            <div>
              <SkillShowPage skillData={softSkills} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
