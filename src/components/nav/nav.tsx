import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./nav.scss";
import Hero from "../hero/hero";
import Projects from "../projects/projects";
import About from "../about/about";
import Connect from "../connect/connect";
import { AnimatePresence, motion } from "framer-motion";
import { ModeToggle } from "../theme/theme-toggle";

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
        className="h-24 sticky top-0 md:h-12 flex items-center overflow-hidden py-10 z-10 transition-all duration-700"
        style={{
          background: expandNav || !showBurger ? "hsla(0, 0%, 0%, .5)" : "none",
        }}
      >
        <div
          // className={expandNav ? "burger burger-clicked" : "burger"}
          className={
            expandNav
              ? "ml-5 w-8 h-0 bg-white transition-all duration-500 before:content-[''] before:absolute before:w-10 before:h-1 before:bg-white before:rounded-full before:translate-y-0 before:rotate-45 before:transition-all before:duration-500 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-white after:rounded-full after:after:translate-y-0 after:-rotate-45 after:transition-all after:duration-500"
              : "ml-5 w-8 h-1 bg-white rounded-full transition-all duration-500 before:mt-0.5 before:content-[''] before:absolute before:w-10 before:h-1 before:bg-white before:rounded-full before:-translate-y-4 before:transition-all before:duration-500 after:-mt-0.5 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-white after:rounded-full after:translate-y-4 after:transition-all after:duration-500"
          }
          onClick={() => handleClick()}
        ></div>
        <div
          // className="navbar-menu"
          className="m-2 h-12 w-12 cursor-pointer md:m-4 fixed flex justify-center items-center top-0 left-0 transition-all duration-100"
          onClick={() => handleClick()}
          style={{ transform: showBurger ? "none" : "translateY(-50vh)" }}
        ></div>
        <div
          // className="navbar"
          className="flex flex-col md:flex-row justify-between md:ml-20 md:mr-5 items-center w-9/12 transition-all duration-500"
          // style={{ -- removed style to utilize AnimatePresence/motion
          //   transform: expandNav || !showBurger ? "none" : "translateY(-50vh)",
          // }}
        >
          <AnimatePresence>
            {links.map((link: LinkInterface, idx) => {
              return (
                <Link
                  to={link.path}
                  smooth={true}
                  duration={1000}
                  offset={-50}
                  // className="navbar-tags"
                  className="group text-white font-bold uppercase no-underline md:text-3xl transition-all duration-500 cursor-pointer"
                  key={link.id}
                >
                  {(expandNav || !showBurger) && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2 + idx / 10,
                      }}
                    >
                      <span className="text-blue-600 align-top group-hover:text-pink-500">
                        0{link.id}
                      </span>
                      {link.path}
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="fixed right-4 top-6 md:top-4">
          <ModeToggle />
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
