import Image from "../assets/vira_bg.jpeg";
import Logo from "../assets/Vira.svg";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion";

export default function Hero() {
  // all states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  /**
   * The objects below are the core values that will be mapped for Vira
   * on the landing page.
   *
   * It will be annimated using framer motion.
   * */

  const data = [
    {
      Heading: "Innovative",
      text: "We don't just build homes, we craft living experiences. From smart technology that anticipates your needs to sustainable design that inspires, Vira pushes the boundaries of what community can be.",
    },
    {
      Heading: "Adaptable",
      text: "Life twists and turns, and so should your space. At Vira, flexible layouts and shared areas embrace change, allowing you to reimagine your life as you grow and evolve.",
    },
    {
      Heading: "Forward-Thinking",
      text: "We don't settle for the status quo. Vira anticipates tomorrow's needs, investing in sustainable practices and building a community that thrives in a changing world.",
    },
    {
      Heading: "Proactive",
      text: "We don't wait for problems to arise. At Vira, we identify challenges and seek solutions before they occur, ensuring a smooth and vibrant community for everyone.",
    },
    {
      Heading: "Transparent",
      text: "Honesty is our cornerstone. From open communication to clear financial planning, Vira guarantees you're always in the loop, building trust one conversation at a time.",
    },
  ];

  //   core datat loop and animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    // set opacity to zeo
    setInterval(() => {
      setAnimate("opacity-0");
    }, 4900);

    // set opacity to zeo
    setInterval(() => {
      setAnimate("opacity-100");
    }, 4999);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [data.length]);

  //   framer motioin functions
  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    // opacity: 0,
    y: "-100%",
    duration: 1,
    transitionEnd: {
      display: "none",
      // ease: "easeInOut",
      // velocity: 50
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  /**
   * Visible parts of this component starts from here
   * everything above are functions to make the hero section
   * work as it should.
   * */
  return (
    <div className="w-full h-screen overflow-hidden">
      {/**
       * Loader div and motion
       */}
      <motion.div
        className="h-screen w-screen fixed top-0 left-0 z-[200000]"
        animate={isVisible ? show : hide}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
          velocity: 50,
        }}
      >
        <Loader />
      </motion.div>

      <section className="flex items-center justify-between text-white mb-10">
        <img src={Logo} alt="" className="w-20" />
        <p className="font-black">&apos;24</p>
      </section>
      {/* hero with text */}
      <div className="rounded-xl w-full h-[85%] overflow-hidden relative">
        <div className="w-full h-full bg-gradient-to-t to-transparent from-black absolute flex items-end text-white">
          <div className="p-10 text-left w-full md:w-[40%] mb-10 lg:mb-20">
            <p className="mb-3">
              At our core —{" "}
              <span
                className={`font-bold font-['Lora'] uppercase transition-opacity ease-in-out delay-150 ${animate}`}
              >
                {data[currentIndex].Heading}
              </span>
            </p>
            <p
              className={`${animate} transition-opacity ease-in-out delay-150`}
            >
              {data[currentIndex].text}
            </p>

            <section className="mt-5">
              <p className="font-semibold">
                Providing a space where everyone belongs through Innovation,
                Transparency, and Accountability
              </p>
              <button className="bg-black mt-5 px-10 font-bold py-3 rounded-full text-[#BCEB00] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <p>Join waitlist</p>
              </button>
            </section>
          </div>
        </div>
        <img
          className="object-cover object-top h-full w-full"
          src={Image}
          alt=""
        />
      </div>
    </div>
  );
}
