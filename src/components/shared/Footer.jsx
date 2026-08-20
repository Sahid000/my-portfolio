import Container from "@/components/ui/Container";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="relative  lg:h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="lg:fixed lg:bottom-0 h-auto w-full">
        <footer className="pt-16 pb-5 bg-primary-color text-content-primary border-t border-line-subtle">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:justify-items-center items-start pt-20">
              <div className="mb-5">
                <div>
                  <Link
                    href="/"
                    className="text-2xl cursor-pointer flex justify-start items-center gap-1 mb-1"
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
                <p className="text-sm text-content-muted max-w-prose mt-4">
                  I am a dedicated and results-driven professional with a robust
                  academic background in Enterprise System Analysis & Design
                  (C#.Net) and a Master’s degree in Business Studies. Leveraging
                  extensive experience as a Software Quality Assurance Engineer,
                  I excel in conducting comprehensive end-to-end testing,
                  implementing effective test automation strategies, and
                  ensuring seamless system integration.
                </p>
              </div>
              <div className="mb-5 lg:mb-0 place-self-end">
                <h1 className="text-lg mb-4 text-content-secondary tracking-display">
                  Contact Me
                </h1>
                <ul className="text-sm text-content-muted">
                  <li className="mb-2">
                    R.K. Mission Road Gopibag 3th Lane, Dhaka, Bangladesh
                  </li>
                  <li className="mb-2">
                    Phone:{" "}
                    <span className="font-semibold text-accent">
                      +8801677266742
                    </span>
                  </li>
                  <li className="mb-2">
                    {" "}
                    Email:{" "}
                    <span className="font-semibold text-accent break-all">
                      sahidhossain000@outlook.com
                    </span>
                  </li>
                  <li className="mb-2">
                    <div className="flex justify-start items-center gap-5 my-5">
                      <Link href="https://github.com/Sahid000" target="_blank">
                        <FaGithub className="text-content-muted hover:text-accent transition-colors duration-300 cursor-pointer text-2xl" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/shahid06/"
                        target="_blank"
                      >
                        <FaLinkedin className="text-content-muted hover:text-accent transition-colors duration-300 cursor-pointer text-2xl" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/hassan.shahid.50/"
                        target="_blank"
                      >
                        <FaFacebook className="text-content-muted hover:text-accent transition-colors duration-300 cursor-pointer text-2xl" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/hassan_shahid77/"
                        target="_blank"
                      >
                        <FaInstagramSquare className="text-content-muted hover:text-accent transition-colors duration-300 cursor-pointer text-2xl" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="w-10/12 mx-auto mt-20 h-px border-0 rule-fade" />
            <div className="flex flex-wrap justify-center py-8 text-sm text-content-muted">
              © Copyright {currentYear} by{" "}
              <span className="font-semibold text-sm text-accent underline decoration-accent/40 underline-offset-4 ps-2">
                Sahid Hossain
              </span>
            </div>
          </Container>
        </footer>
      </div>
    </div>
    // <div className="w-full h-2">
    //   {/* <svg
    //     viewBox="0 0 1440 100"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
    //       className="fill-current text-[#020409]"
    //     ></path>
    //   </svg> */}

    //   <div className="bg-highlight-color text-base-color pb-5 ">

    //   </div>
    // </div>
  );
};

export default Footer;
