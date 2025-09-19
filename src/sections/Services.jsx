import { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { servicesData } from "../constants";

const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smoothUX to drive growth not headaches.`;

  const serviceRefs = useRef([]);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeader
        title={"Service"}
        textColor={"white"}
        subTitle={"Behind the scene, Beyond the screen"}
        text={text}
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => {
        return (
          <div
            key={index}
            className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
          >
            <div className="flex items-center justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                  {service.description}
                </p>

                <div className=""></div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
