"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "../ui/Container";
import AnimatedUnderline from "../ui/Animation/AnimatedUnderline";

const certifications = [
  {
    title: "ISTQB",
    description:
      "International Software Testing Qualifications Board Certification",
    year: "2026",
    pdf: "/pdf/certification/ISTQB.pdf",
  },
  {
    title: "AI+ Prompt Engineer Level 1™",
    description: "Certification for AI Prompt Engineering",
    year: "2025",
    pdf: "/pdf/certification/AI-Prompt-Engineer-Level-1.pdf",
  },
  {
    title: "Professional Scrum Master™ level I (PSM I)",
    description: "Professional Scrum Master Level I Certification",
    year: "2021",
    pdf: "/pdf/certification/Professional Scrum MasterTM level I (PSM I).pdf",
  },
  {
    title: "Microsoft Certified Solutions Developer",
    description: "Microsoft Certified Solutions Developer Certification",
    year: "2016",
    pdf: "/pdf/certification/Microsoft Certified Solutions Developer.pdf",
  },
  {
    title: "Microsoft Certified Solutions Associate",
    description: "Microsoft Certified Solutions Associate Certification",
    year: "2016",
    pdf: "/pdf/certification/Microsoft Certified Solutions Associate.pdf",
  },
  {
    title: "Microsoft Certified Professional",
    description: "Microsoft Certified Professional Certification",
    year: "2016",
    pdf: "/pdf/certification/Microsoft Certified Professional.pdf",
  },
  {
    title: "Microsoft Specialist",
    description: "Microsoft Specialist Certification",
    year: "2016",
    pdf: "/pdf/certification/Microsoft Specialist.pdf",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const closeModal = () => setSelectedCert(null);

  return (
    <>
      <section className="relative overflow-hidden py-24 z-10">
        <Container>
          {/* Section Header */}
          <div className="mb-20 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-content-secondary mb-4 tracking-display px-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-strong via-accent to-accent-soft">
                  My Credentials
                </span>
              </h1>

              <div className="mb-6">
                <AnimatedUnderline className="mx-auto" />
              </div>

              <p className="text-sm sm:text-base text-content-muted max-w-2xl mx-auto">
                Validating expertise through continuous learning. A showcase of
                my professional certifications and achievements.
              </p>
            </motion.div>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {certifications.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                  margin: "0px 0px -80px 0px",
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.06, 0.3),
                  ease: "easeOut",
                }}
                className="
                  relative group h-full rounded-[24px] p-[1px]
                  bg-gradient-to-b from-content-primary/10 to-transparent
                  hover:from-accent/50 hover:to-accent/10
                  transition-colors duration-300
                "
              >
                {/* Card */}
                <div
                  className="
                    relative h-full
                    bg-surface-base dark:bg-transparent
                    rounded-[23px]
                    p-7 md:p-8
                    flex flex-col justify-between
                    overflow-hidden
                  "
                >
                  {/* Lightweight decorative glow */}
                  <div
                    className="
                      absolute -top-12 -right-12
                      w-24 h-24
                      bg-accent/10
                      rounded-full
                      blur-xl
                      opacity-70
                      group-hover:opacity-100
                      transition-opacity duration-300
                      pointer-events-none
                    "
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span
                        className="
                          inline-flex items-center justify-center
                          px-3 py-1 eyebrow text-xs
                          text-accent
                          bg-accent/10
                          rounded-full
                          border border-accent/25
                        "
                      >
                        {item.year}
                      </span>

                      <div
                        className="
                          w-10 h-10 rounded-full
                          bg-content-primary/5
                          flex items-center justify-center
                          text-content-muted
                          group-hover:text-accent
                          group-hover:bg-accent/10
                          transition-colors duration-200
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                          />
                        </svg>
                      </div>
                    </div>

                    <h3
                      className="
                        text-lg md:text-xl
                        font-semibold
                        text-content-secondary
                        mb-3
                        group-hover:text-accent
                        transition-colors duration-200
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="text-content-muted text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Preview Button */}
                  <div
                    className="
                      relative z-10 mt-auto pt-6
                      border-t border-line-subtle
                      group-hover:border-accent/25
                      transition-colors duration-200
                    "
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedCert(item)}
                      className="
                        flex items-center gap-3
                        text-sm font-semibold
                        text-content-primary
                        group-hover:text-accent
                        transition-colors duration-200
                        w-full
                      "
                    >
                      <span className="relative">
                        Preview Certificate

                        <span
                          className="
                            absolute left-0 -bottom-1
                            w-0 h-[2px]
                            bg-accent
                            group-hover:w-full
                            transition-[width] duration-200
                          "
                        />
                      </span>

                      <svg
                        className="
                          w-4 h-4 ml-auto
                          group-hover:translate-x-1
                          transition-transform duration-200
                        "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              p-3 sm:p-4 lg:p-6
              bg-black/70
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                y: 10,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full max-w-3xl
                h-[90vh] sm:h-[85vh]
                bg-surface-overlay
                border border-line-subtle
                rounded-3xl
                shadow-panel
                overflow-hidden
                flex flex-col
              "
            >
              {/* Modal Header */}
              <div
                className="
                  flex justify-between items-center
                  p-5 sm:px-8 sm:py-6
                  border-b border-line-subtle
                  shrink-0
                "
              >
                <div className="pr-4 min-w-0">
                  <span className="eyebrow text-xs text-accent mb-2 block">
                    {selectedCert.year}
                  </span>

                  <h3 className="text-lg md:text-2xl font-semibold text-content-secondary truncate">
                    {selectedCert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <a
                    href={selectedCert.pdf}
                    download
                    className="
                      flex items-center gap-2
                      bg-accent
                      text-btn-primary-text
                      px-4 py-2.5
                      sm:px-5 sm:py-3
                      font-semibold
                      hover:bg-btn-primary-hover
                      transition-colors duration-200
                      text-sm
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>

                    <span className="hidden sm:inline">
                      Download
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="
                      text-content-muted
                      hover:text-content-secondary
                      bg-content-primary/5
                      hover:bg-error-color
                      p-3
                      rounded-full
                      transition-colors duration-200
                    "
                    title="Close"
                    aria-label="Close certificate preview"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF */}
              <div className="flex-1 min-h-0 p-3 sm:p-5">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-line-subtle bg-gray-100">
                  <iframe
                    src={selectedCert.pdf}
                    className="w-full h-full border-0"
                    title={selectedCert.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
