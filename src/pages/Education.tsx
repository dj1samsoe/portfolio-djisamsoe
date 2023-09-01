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
      image: "/dicoding.webp",
      name: "Dicoding Indonesia",
      position: "Dicoding For University Batch 1",
      startDate: "Aug 2023",
      endDate: "Nov 2023",
      duration: "4 Month",
      location: "Bandung",
    },
    {
      id: 3,
      image: "/revou-logo.png",
      name: "RevoU",
      position: "Fundamental Course Software Engineering",
      startDate: "21 Aug 2023",
      endDate: "1 Sep 2023",
      duration: "2 Weeks",
      location: "Jakarta",
    },
    {
      id: 4,
      image: "/dib.png",
      name: "Dibimbing.id",
      position: "Video E-Learning",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      duration: "5 Month",
      location: "Jakarta",
    },
    {
      id: 5,
      image: "/myskill.png",
      name: "Myskill.id",
      position: "Video E-Learning",
      startDate: "Aug 2023",
      endDate: "Aug 2024",
      duration: "1 Year",
      location: "Jakarta",
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
      <div className="flex flex-wrap justify-center gap-5">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
