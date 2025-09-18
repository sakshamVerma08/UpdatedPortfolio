import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const aboutText = `
  Full-stack developer with
     a passion for backend technologies,
     system design, and
     turning ideas into scalable
     digital solutions.
     `;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div
            className="flex flex-col pt-16 justify-center gap-12 sm:gap-16"
            ref={headerRef}
          >
            <p className="text-sm font-light uppercase tracking-[0.5rem] px-10 text-black">
              404 No Bugs Found
            </p>

            <div className="px-10">
              <h1 className="flex flex-row flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 lg:whitespace-nowrap md:block">
                Saksham Verma
              </h1>
            </div>
          </div>
        </div>

        <div className="relative px-10 text-black">
          <div className="absolute inset-x-0 border-t-2" />
          <div className="py-12 sm:py-16 text-end">
            <AnimatedText
              className={"font-light uppercase value-text-responsive"}
              text={aboutText}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
