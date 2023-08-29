import { motion } from "framer-motion";
import { IconBallpen } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { CommonCard } from "../components/CommonCard";

export const Education = () => {
  const { section } = SectionMotion;
  // mockup education data
  const educations = [
    {
      id: 1,
      image: "/logo-ub.png",
      name: "Brawijaya University",
      position: "Bachelor of Computer Science",
      startDate: "Aug 2020",
      endDate: "Aug 2025",
      duration: "5 years",
      location: "Malang",
    },
    {
      id: 2,
      image: "/dib.png",
      name: "Dibimbing.id",
      position: "Video E-Learning",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      duration: "5 Month",
      location: "Jakarta",
    },
    {
      id: 3,
      image: "/myskill.png",
      name: "Myskill.id",
      position: "Video E-Learning",
      startDate: "Aug 2023",
      endDate: "Aug 2024",
      duration: "1 Year",
      location: "Jakarta",
    },
    {
      id: 4,
      image: "/dicoding.webp",
      name: "Dicoding Indonesia",
      position: "Dicoding For University Batch 1",
      startDate: "Aug 2023",
      endDate: "Nov 2023",
      duration: "4 Month",
      location: "Bandung",
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader icon={<IconBallpen />} label="Latest Educations" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
