import {
  IconLeaf,
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandHtml5,
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandMysql,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandFramer,
  IconBrandJavascript,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { SectionMotion } from "../common/motion/Section";
import { SkillCard } from "../components/SkillCard";

export const About = () => {
  const { section } = SectionMotion;
  const skills = [
    { label: "HTML", icon: <IconBrandHtml5 /> },
    { label: "CSS", icon: <IconBrandCss3 /> },
    { label: "JavaScript", icon: <IconBrandJavascript /> },
    { label: "React Js", icon: <IconBrandReact /> },
    { label: "Next Js", icon: <IconBrandNextjs /> },
    // { label: "Vue Js", icon: <IconBrandVue /> },
    // { label: "Nuxt Js", icon: <IconBrandNuxt /> },
    // { label: "Svelte Js", icon: <IconBrandSvelte /> },
    { label: "Tailwind CSS", icon: <IconBrandTailwind /> },
    { label: "Bootstrap", icon: <IconBrandBootstrap /> },
    { label: "Laravel Framework", icon: <IconBrandLaravel /> },
    { label: "PHP", icon: <IconBrandPhp /> },
    { label: "MySQL", icon: <IconBrandMysql /> },
    { label: "Figma", icon: <IconBrandFigma /> },
    { label: "Framer Motion", icon: <IconBrandFramer /> },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader icon={<IconLeaf />} label="About Me" />
      <div className="flex gap-2 text-md lg:text-2xl font-medium px-4">
        <h2 className="font-semibold">Hello, i'm Dhany</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p className="sm:text-md text-justify px-4 tracking-normal pb-12">
        I am a student at Universitas Brawijaya, Malang, majoring in Sistem
        Informasi (Information Systems). I have a strong interest in front-end
        web development and enjoy creating visually appealing and user-friendly
        websites using HTML, CSS, and JavaScript. In addition to front-end
        development, I also have some skills in back-end development, such as
        PHP and MySQL. I am passionate about staying up-to-date with the latest
        web design trends and technologies and strive to enhance my skills and
        knowledge to create engaging and interactive web experiences.
      </p>
      <hr />
      <SectionHeader icon={<IconCodeCircle />} label="My Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-4 px-6">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
