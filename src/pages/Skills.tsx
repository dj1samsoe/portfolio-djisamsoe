import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandSvelte,
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
  IconBrandFramerMotion,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { SkillCard } from "../components/SkillCard";

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = "List of my skills";
  // mockup skills data
  const skills = [
    { label: "React Js", icon: <IconBrandReact /> },
    { label: "Next Js", icon: <IconBrandNextjs /> },
    { label: "Vue Js", icon: <IconBrandVue /> },
    { label: "Nuxt Js", icon: <IconBrandNuxt /> },
    { label: "Svelte Js", icon: <IconBrandSvelte /> },
    { label: "Tailwind CSS", icon: <IconBrandTailwind /> },
    { label: "Bootstrap", icon: <IconBrandBootstrap /> },
    { label: "HTML5", icon: <IconBrandHtml5 /> },
    { label: "CSS", icon: <IconBrandCss3 /> },
    { label: "Javascript", icon: <IconBrandJavascript /> },
    { label: "Laravel Framework", icon: <IconBrandLaravel /> },
    { label: "PHP", icon: <IconBrandPhp /> },
    { label: "MySQL", icon: <IconBrandMysql /> },
    { label: "Figma", icon: <IconBrandFigma /> },
    { label: "Framer", icon: <IconBrandFramer /> },
    { label: "Framer Motion", icon: <IconBrandFramerMotion /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader icon={<IconCodeCircle />} label="My Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
