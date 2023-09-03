import { motion } from "framer-motion";
import { HomeMotion } from "../common/motion/Home";
import { Link } from "react-router-dom";
import { MediaBar } from "../components/MediaBar";
import DynamicText from "../components/DynamicText";

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col gap-12 lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-fuchsia-500 via-sky-900 to-black overflow-hidden"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/dhany.png"
          alt="profile"
          width="50%"
          height="50%"
        />
      </motion.div>
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-xl lg:text-2xl font-medium font-sora">
          <span>Hi there!</span>{" "}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-3xl text-center md:text-4xl">
          Achmad Fauzian Dhany Hidayat
        </h1>
        <DynamicText />
        <p className="text-center md:text-start text-md md:text-justify lg:text-xl">
          Undergraduate Student of Information Systems at Brawijaya University |
          Frontend Developer Enthusiast
        </p>
        <MediaBar />
        <Link to="/about">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
          >
            <button className="border-sky-600 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};
