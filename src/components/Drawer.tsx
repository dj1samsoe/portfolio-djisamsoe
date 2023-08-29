import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { INavLink } from "../types/common";
import { Link } from "react-router-dom";
import { DrawerMotion } from "../common/motion/Drawer";

interface DrawerProps {
  onClick(): void;
  links: INavLink[];
}

export const Drawer = ({ onClick, links }: DrawerProps) => {
  const { container } = DrawerMotion;

  return (
    <motion.nav
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="bg-zinc-800 p-4 fixed top-0 left-0 right-0 border-b border-sky-400 rounded-b-xl"
    >
      <div
        onClick={onClick}
        className="flex justify-between font-bold text-lg mb-4 border-b border-white py-2 w-full"
      >
        <Link to="/" className="text-white hover:text-sky-400">
          Achmad Fauzian Dhany Hidayat
        </Link>
        <IconX className="cursor-pointer" />
      </div>
      <div className="flex flex-col space-y-2 text-center">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            onClick={onClick}
            className="text-white hover:text-sky-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
