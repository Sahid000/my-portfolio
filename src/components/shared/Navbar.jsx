"use client";

import Container from "@/components/ui/Container";
import { getResumeUrl } from "@/utils/getEnviromentVariable";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";

 const NavItems = [
//   { id: "1", name: "Blogs", route: "/blogs" },
//   { id: "2", name: "Projects", route: "/projects" },
 ];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const resumeUrl = getResumeUrl();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 0) {
      setScrolled(true);
    } else setScrolled(false);
  });
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`z-[999] text-content-primary ${
        scrolled
          ? "bg-surface-base/70 backdrop-blur-xl border-b border-line-subtle py-0 transition-all duration-500 shadow-panel"
          : "!bg-transparent !shadow-none border-b border-transparent py-1 transition-all duration-500"
      } ${
        mobileMenuOpen
          ? "shadow-none !bg-surface-base/95 !backdrop-blur-xl"
          : ""
      }`}
    >
      <Container>
        <header className="w-full py-3 flex justify-between items-center z-50 ">
          {/* //*Company name */}
          <div>
            <Link
              href="/"
              className="text-nowrap cursor-pointer flex justify-center items-end"
            >
              <span className="font-display text-lg sm:text-xl text-accent tracking-display">
                <span className="text-content-primary/50 text-lg sm:text-xl">
                  {"< "}
                </span>
                SahidHossain
                <span className="text-content-primary/50 text-lg sm:text-xl">
                  {" />"}
                </span>
              </span>
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? " w-full lg:w-fit lg:static absolute top-[50px] left-0 lg:bg-none bg-surface-base/95 backdrop-blur-xl transition-all lg:z-0 -z-50 lg:border-none border-b border-line-subtle shadow-panel"
                : " w-full lg:w-fit lg:static absolute top-[-550px] left-0 transition-all lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-8 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-content-primary hover:text-accent-strong transition-all duration-300"
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-content-primary hover:text-accent-strong transition-all duration-300"
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />
            <Link
              href={resumeUrl}
              target="_blank"
            >
              <button 
                className="!text-xs text-nowrap border px-5 py-2 bg-accent border-accent text-btn-primary-text font-semibold tracking-wide transition-all hover:bg-btn-primary-hover hover:border-btn-primary-hover hover:shadow-glow active:scale-[0.97]"
                style={{
                  clipPath: `polygon(
                    0 0,
                    calc(100% - 10px) 0,
                    calc(100% - 10px) 5px,
                    100% 5px,
                    100% calc(100% - 5px),
                    calc(100% - 10px) calc(100% - 5px),
                    calc(100% - 10px) 100%,
                    0 100%
                  )`,
                }}
              >
                My Resume
              </button>
            </Link>
          </div>
          {/* //*Icons */}
          <div className="lg:hidden select-none flex items-center gap-2">
            <ThemeSwitcher />
            {mobileMenuOpen ? (
              <button
                type="button"
                aria-label="Close menu"
                aria-expanded="true"
                className="text-accent hover:text-accent-strong transition-colors duration-300 rounded p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded="false"
                className="text-accent hover:text-accent-strong transition-colors duration-300 rounded p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </header>
      </Container>
    </motion.div>
  );
};

export default Navbar;
