import AnimatedHeader from "../components/AnimatedHeader";
import { projects } from "../constants";

const Work = () => {
  const text = `Featured projects that have been meticulously crafted
     with passion to learn and improve my skill as a developer.`;

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeader
        subTitle={"Logic meets Aesthetics, Seamelessly"}
        title={"My Work"}
        textColor={"black"}
        text={text}
      />

      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              id="project"
              className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
