"use client";

import Container from "@/components/ui/Container";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const NavItems = [
  { id: "1", name: "Blogs", route: "/blogs" },
  { id: "2", name: "Projects", route: "/projects" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`z-[999] text-base-color ${
        scrolled
          ? "bg-primary-color py-0 transition-all duration-500 shadow"
          : "!bg-transparent !shadow-none py-1 transition-all duration-500"
      } ${mobileMenuOpen ? "shadow-none !bg-primary-color" : ""}`}
    >
      <Container>
        <header className="w-full py-3 flex justify-between items-center z-50 ">
          {/* //*Company name */}
          <div>
            <Link
              href="/"
              className="text-nowrap cursor-pointer flex justify-center items-end"
            >
              <span className="text-2xl font-semibold text-secondary-color ">
                <span className="text-base-color font-extrabold text-2xl italic">
                  {"< "}
                </span>
                SahidHossain
                <span className="text-base-color font-extrabold text-2xl italic">
                  {" />"}
                </span>
              </span>
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? " w-full lg:w-fit lg:static absolute top-[50px] left-0 lg:bg-none bg-primary-color transition-all lg:z-0 -z-50 lg:border-none shadow-md"
                : " w-full lg:w-fit lg:static absolute top-[-550px] left-0 transition-all lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-8 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-secondary-color hover:text-base-color transition-all duration-300"
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
                    className="lg:mb-0 mb-5 cursor-pointer  group relative text-secondary-color hover:text-base-color transition-all duration-300"
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
          <div className="hidden lg:block">
            <Link
              href="https://drive.google.com/file/d/1cyOafJCpfwyMgAot5Td-u4LQZ4Oq7vJm/view?usp=sharing"
              target="_blank"
            >
              <button className="!text-sm text-nowrap border px-3 py-1.5 rounded bg-secondary-color border-secondary-color text-primary-color duration-500">
                My Resume
              </button>
            </Link>
          </div>
          {/* //*Icons */}
          <div className="lg:hidden select-none">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
              </div>
            )}
          </div>
        </header>
      </Container>
    </motion.div>
  );
};

export default Navbar;
