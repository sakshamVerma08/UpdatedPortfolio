import { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedText from "../components/AnimatedText";

const About = () => {
  const imgRef = useRef(null);

  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production.`;

  const aboutText = `Obsesssed with building fast, intuitive apps from pixel`;
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeader
        subTitle={"Discipline. Perseverance. Strong Mentality"}
        title={"About"}
        textColor={"white"}
        text={text}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          src="images/man.jpg"
          alt="MAN"
          className="w-md rounded-3xl"
          ref={imgRef}
        />

        <AnimatedText text={aboutText} />
      </div>
    </section>
  );
};

export default About;
