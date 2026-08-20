import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="app-shell flex justify-center items-center flex-col text-center min-h-screen m-auto text-content-primary">
      <Container>
        <h1 className="text-accent text-6xl md:text-7xl lg:text-9xl tracking-display mb-10">
          404
        </h1>
        <h3 className="text-xl md:text-2xl mb-5 font-semibold text-content-secondary">
          <span className="text-accent">OOPS!</span> NOTHING WAS FOUND
        </h3>
        <p className="text-sm lg:text-base text-content-muted max-w-prose mx-auto">
          <span>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.{" "}
          </span>
          <Link
            href="/"
            className="text-accent hover:text-accent-strong font-semibold underline decoration-accent/50 hover:decoration-accent-strong underline-offset-4 transition-colors duration-300"
          >
            Return to homepage
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default NotFoundPage;
