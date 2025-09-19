import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { MathUtils } from "three";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ maxWidth: 853 });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

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

      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />

          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.6 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                position={[0, 5, -9]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[0, 3, 1]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[-5, -1, -1]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[10, 1, 0]}
                intensity={2}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
