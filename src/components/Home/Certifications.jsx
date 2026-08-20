"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "../ui/Container";
import AnimatedUnderline from "../ui/Animation/AnimatedUnderline";

const certifications = [
  {
    title: "AI+ Prompt Engineer Level 1™",
    description: "Certification for AI Prompt Engineering",
    year: "2024",
    pdf: "/pdf/certification/AI+ Prompt Engineer Level 1™.pdf",
  },
  {
    title: "Professional Scrum MasterTM level I (PSM I)",
    description: "Professional Scrum Master Level I Certification",
    year: "2020",
    pdf: "/pdf/certification/Professional Scrum MasterTM level I (PSM I).pdf",
  },
  {
    title: "Microsoft Certified Solutions Developer",
    description: "Microsoft Certified Solutions Developer Certification",
    year: "2017",
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
    year: "2015",
    pdf: "/pdf/certification/Microsoft Certified Professional.pdf",
  },
  {
    title: "Microsoft Specialist",
    description: "Microsoft Specialist Certification",
    year: "2015",
    pdf: "/pdf/certification/Microsoft Specialist.pdf",
  },
  {
    title: "ISTQB",
    description:
      "International Software Testing Qualifications Board Certification",
    year: "2023",
    pdf: "/pdf/certification/ISTQB.pdf",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <div className="relative overflow-hidden py-24 bg-highlight-color z-10">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-color/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary-color/5 rounded-full blur-[120px] -z-10" />

        <Container>
          <div className="mb-20 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-color to-secondary-color">
                  My Credentials
                </span>
              </h1>
              <div className="mb-6">
                <AnimatedUnderline className="mx-auto" />
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-medium">
                Validating expertise through continuous learning. A showcase of
                my professional certifications and achievements.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative group h-full rounded-[24px] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-secondary-color/50 hover:to-secondary-color/10 transition-all duration-700 shadow-xl hover:shadow-2xl hover:shadow-secondary-color/10"
              >
                {/* Inner Card */}
                <div className="relative h-full bg-[#0a0f16]/90 backdrop-blur-sm rounded-[23px] p-7 md:p-8 flex flex-col justify-between overflow-hidden">
                  {/* Decorative Glow Blob inside card */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-secondary-color/10 rounded-full blur-2xl group-hover:bg-secondary-color/20 group-hover:scale-150 transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold tracking-widest text-secondary-color uppercase bg-secondary-color/10 rounded-full border border-secondary-color/20">
                        {item.year}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-secondary-color group-hover:bg-secondary-color/10 transition-colors duration-300">
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
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                          />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-secondary-color transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto pt-6 border-t border-white/5 group-hover:border-secondary-color/20 transition-colors duration-300">
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="flex items-center gap-3 text-sm font-semibold text-white group-hover:text-secondary-color transition-colors duration-300 w-full"
                    >
                      <span className="relative">
                        Preview Document
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary-color transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <svg
                        className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform duration-300"
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
      </div>

      {/* Modern Glassmorphic Modal for PDF Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0,0,0,0)",
            }}
            animate={{
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            exit={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0,0,0,0)",
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-[#09101A]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
            >
              {/* Modal Decorative Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-color/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />

              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 sm:px-10 sm:py-7 border-b border-white/10 bg-white/[0.02]">
                <div className="pr-4">
                  <span className="text-xs font-bold tracking-widest text-secondary-color uppercase mb-1 block">
                    {selectedCert.year}
                  </span>
                  <h3 className="text-xl md:text-3xl font-extrabold text-white">
                    {selectedCert.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <a
                    href={selectedCert.pdf}
                    download
                    className="flex items-center gap-2 bg-secondary-color text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(85,230,165,0.4)] hover:-translate-y-0.5 text-sm sm:text-base"
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
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-white bg-white/5 hover:bg-error-color p-3 rounded-full transition-all duration-300"
                    title="Close"
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

              {/* Modal Body - PDF Iframe */}
              <div className="flex-grow w-full h-full p-4 sm:p-6 bg-transparent relative z-10">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner border border-white/5 bg-gray-100">
                  <iframe
                    src={selectedCert.pdf}
                    className="w-full h-full border-0"
                    title={selectedCert.title}
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
