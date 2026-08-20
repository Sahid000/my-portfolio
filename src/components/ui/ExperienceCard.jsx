import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="group bg-surface-raised p-8 rounded-2xl border border-line-subtle text-content-primary transition-all duration-instant hover:border-accent/40 hover:shadow-glow">
      <h2 className="text-2xl font-semibold mb-2 text-content-secondary transition-colors duration-300 group-hover:text-accent-strong">
        {experience.company}
      </h2>
      <p className="mb-1 text-base text-content-primary">{experience.role}</p>
      <p className="mb-5 eyebrow text-xs text-accent">{experience.date}</p>
      <ul className="list-inside list-disc text-sm space-y-2 text-content-muted marker:text-accent/70">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {experience?.projects && (
        <p className="mt-6 text-sm border-t border-line-subtle pt-5">
          <span className="font-semibold text-content-muted">Projects:</span>{" "}
          {experience?.projects?.map((project) => (
            <span className="text-accent-strong" key={project}>
              {project}
              {project !==
                experience.projects[experience.projects.length - 1] && (
                <span className="text-content-muted">,</span>
              )}{" "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default ExperienceCard;
