import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./nav.scss";
import Hero from "../hero/hero";
import Projects from "../projects/projects";
import About from "../about/about";
import Connect from "../connect/connect";

interface LinkInterface {
  id: number;
  path: string;
}

const links: LinkInterface[] = [
  {
    id: 1,
    path: "home",
  },
  {
    id: 2,
    path: "projects",
  },
  {
    id: 3,
    path: "about",
  },
  {
    id: 4,
    path: "connect",
  },
];

const Nav = (): ReactElement => {
  const [expandNav, setExpandNav] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(true);

  const handleClick = (): void => {
    setExpandNav(!expandNav);
  };

  useEffect(() => {
    const adjustNavOnScroll = (): void => {
      if (window.scrollY > 50) {
        setShowBurger(false);
        // setExpandNav(true);
      } else {
        setShowBurger(true);
        // setExpandNav(false);
      }
    };
    window.addEventListener("scroll", adjustNavOnScroll);
    // return () => window.removeEventListener("scroll", adjustNavOnScroll);
    // used to prevent memory leak by removing component when not being used
  }, []);

  return (
    <>
      <nav
        // className="navbar-container"
        className="h-24 sticky top-0 md:h-12 flex items-center justify-center overflow-hidden py-10 px-8 z-10 transition-all duration-700"
        style={{
          background: expandNav || !showBurger ? "hsla(0, 0%, 0%, .5)" : "none",
        }}
      >
        <div
          // className="navbar-menu"
          className="m-2 h-12 w-12 cursor-pointer md:m-4 fixed flex justify-center items-center top-0 left-0 transition-all duration-100"
          onClick={() => handleClick()}
          style={{ transform: showBurger ? "none" : "translateY(-50vh)" }}
        >
          <div
            // className={expandNav ? "burger burger-clicked" : "burger"}
            className={
              expandNav
                ? "w-8 h-0 bg-white transition-all duration-500 before:content-[''] before:absolute before:w-10 before:h-1 before:bg-white before:rounded-full before:translate-y-0 before:rotate-45 before:transition-all before:duration-500 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-white after:rounded-full after:after:translate-y-0 after:-rotate-45 after:transition-all after:duration-500"
                : "w-8 h-1 bg-white rounded-full transition-all duration-500 before:mt-0.5 before:content-[''] before:absolute before:w-10 before:h-1 before:bg-white before:rounded-full before:-translate-y-4 before:transition-all before:duration-500 after:-mt-0.5 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-white after:rounded-full after:translate-y-4 after:transition-all after:duration-500"
            }
            onClick={() => handleClick()}
          ></div>
        </div>
        <div
          // className="navbar"
          className=" flex flex-col md:flex-row justify-around items-center w-10/12 transition-all duration-500"
          style={{
            transform: expandNav || !showBurger ? "none" : "translateY(-50vh)",
          }}
        >
          {links.map((link: LinkInterface) => {
            return (
              <Link
                key={link.id}
                to={link.path}
                smooth={true}
                duration={1000}
                offset={-50}
                // className="navbar-tags"
                className="group text-white font-bold uppercase no-underline md:text-3xl transition-all duration-500 cursor-pointer"
              >
                <span className="text-blue-600 align-top group-hover:text-pink-500">
                  0{link.id}
                </span>
                {link.path}
              </Link>
            );
          })}
        </div>
      </nav>
      <Hero />
      <Projects />
      <About />
      <Connect />
    </>
  );
};

export default Nav;
