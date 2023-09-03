import { IconBatteryAutomotive, IconMenu2 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "./Drawer";
import { INavLink } from "../types/common";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navLink: INavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Skills", path: "/skills" },
    { name: "Experiences", path: "/experience" },
    { name: "Educations", path: "/education" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];
  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }
  return (
    <motion.header className="w-full sticky md:px-20 top-0 bg-zinc-900 z-20 mb-4 flex text-white items-center justify-between p-4">
      <Link to="/">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2 font-bold text-md md:text-3xl text-fuchsia-500"
        >
          <IconBatteryAutomotive width={35} height={35} />
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Dhany Hidayat
          </span>
        </motion.div>
      </Link>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:flex space-x-10"
      >
        {navLink.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-white font-bold hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text"
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>
      <IconMenu2
        onClick={toggleDrawer}
        className="cursor-pointer flex lg:hidden"
      />
      {openDrawer && <Drawer onClick={toggleDrawer} links={navLink} />}
    </motion.header>
  );
};
