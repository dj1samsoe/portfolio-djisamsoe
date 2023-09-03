import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MediaBarMotion } from "../common/motion/MediaBar";
import {
  IconBrandGmail,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const MediaBar = () => {
  const media = [
    { icon: <IconBrandGithub />, link: "https://github.com/dj1samsoe" },
    {
      icon: <IconBrandLinkedin />,
      link: "https://www.linkedin.com/in/fauziandhany/",
    },
    {
      icon: <IconBrandInstagram />,
      link: "https://www.instagram.com/djisamsoe__/",
    },
    { icon: <IconBrandWhatsapp />, link: "https://wa.me/+6287752665249" },
    {
      icon: <IconBrandGmail />,
      link: "mailto:dhanyh86@gmail.com",
    },
  ];
  const { container } = MediaBarMotion;
  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="items-center flex flex-row gap-5 py-2 items-center rounded-md"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text hover:text-white"
          aria-label={item.link}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};
