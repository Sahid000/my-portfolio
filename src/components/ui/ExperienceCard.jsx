import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-background-color p-8 rounded-xl border border-base-color/20 text-base-color">
      <h2 className="text-2xl font-bold mb-2 text-secondary-color">
        {experience.company}
      </h2>
      <p className="mb-1 text-lg">{experience.role}</p>
      <p className="mb-5 text-secondary-color text-base">{experience.date}</p>
      <ul className="list-inside list-disc text-sm space-y-2">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {experience?.projects && (
        <p className="mt-5 ">
          <span className="font-semibold">Projects:</span>{" "}
          {experience?.projects?.map((project) => (
            <span className="text-secondary-color" key={project}>
              {project}
              {project !==
                experience.projects[experience.projects.length - 1] && (
                <span className="text-base-color">,</span>
              )}{" "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default ExperienceCard;
