import { motion } from "framer-motion";
import { IconClockPlay, IconBrandWordpress } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { CommonCard } from "../components/CommonCard";

export const Experience = () => {
  const { section } = SectionMotion;
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: "/wordpress.png",
      name: "Zahrach Store",
      position: "Wordpress Developer",
      startDate: "Apr 2023",
      endDate: "Jul 2023",
      duration: "3 Months",
      location: "Malang",
    },
    {
      id: 2,
      image: "/ngadas.png",
      name: "desangadas.com",
      position: "KKN FILKOM UB 2022",
      startDate: "Jul 2022",
      endDate: "Aug 2022",
      duration: "1 Months",
      location: "Malang",
    },
    {
      id: 3,
      image: "/figma.webp",
      name: "djisamsoe.store",
      position: "UI Designer",
      startDate: "Aug 2023",
      endDate: "Now",
      duration: "1 Months",
      location: "Malang",
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader icon={<IconClockPlay />} label="My Experiences" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
