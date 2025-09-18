import React, { useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);

  return (
    <nav
      ref={navRef}
      className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2  "
    >
      <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
        {["home", "services", "about", "work", "contact"].map(
          (section, idx) => {
            return (
              <div
                key={idx}
                ref={(el) => {
                  linksRef.current[idx] = el;
                }}
              >
                <a className="transition-all duration-300 cursor-pointer hover:text-white">
                  {section}
                </a>
              </div>
            );
          }
        )}
      </div>

      <div
        ref={contactRef}
        className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
      >
        <div>
          <p className="tracking-wider text-white/50">E-mail</p>
          <p className="text-xl tracking-widest lowercase text-pretty">
            sakshamverma1000@gmail.com
          </p>
        </div>

        <div className="font-light">
          <p className="tracking-wider text-white/50">Social Media</p>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row gap-x-2"></div>
        
      </div>
    </nav>
  );
};

export default Navbar;
