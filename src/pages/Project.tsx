import { motion } from "framer-motion";
import {
  IconBrandCodepen,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandRedux,
  IconBrandVite,
  IconBrandFirebase,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
  const { section } = SectionMotion;
  const projects = [
    {
      id: 1,
      name: "Project Portfolio",
      image: "/home.png",
      link: "https://portfolio-djisamsoe.vercel.app/",
      description:
        "Portfolio Website Using Vite + React Js + Tailwind CSS + Yarn + TypeScript + Framer Motion",
      icon1: <IconBrandVite />,
      label1: "Vite",
      icon2: <IconBrandReact />,
      label2: "React.Js",
      icon3: <IconBrandTailwind />,
      label3: "TailwindCSS",
      icon4: <IconBrandTypescript />,
      label4: "TypeScript",
    },
    {
      id: 2,
      name: "RevoU Mini Coding Project",
      image: "/revoU.png",
      link: "https://revou-fundamental-course.github.io/21-aug-23-dj1samsoe/",
      description: "Assignment in RevoU Fundamental Course Software Engineer",
      icon1: <IconBrandHtml5 />,
      label1: "HTML",
      icon2: <IconBrandCss3 />,
      label2: "CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
    },
    {
      id: 3,
      name: "Djisamsoe Movies Apps",
      image: "/movies.png",
      link: "https://djisamsoe-movies.vercel.app/",
      description:
        "Movie Streaming Apps Using Vite + React JS + Firebase + TMDB API + Tailwind CSS + Framer Motion",
      icon1: <IconBrandVite />,
      label1: "Vite",
      icon2: <IconBrandReact />,
      label2: "React.Js",
      icon3: <IconBrandFirebase />,
      label3: "Firebase",
      icon4: <IconBrandTailwind />,
      label4: "TailwindCSS",
    },
    {
      id: 4,
      name: "Simple Note Apps Using React",
      image: "/note-app.png",
      link: "https://note-app-djisamsoe.vercel.app/",
      description: "Create Simple Note Apps Using React Js and Tailwind CSS",
      icon1: <IconBrandReact />,
      label1: "React.Js",
      icon2: <IconBrandTailwind />,
      label2: "Tailwind.CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
    },
    {
      id: 5,
      name: "Simple Todo List Apps Using React",
      image: "/todo-list.png",
      link: "https://todo-list-app-djisamsoe.vercel.app/",
      description: "Create Simple Todo List Apps Using React Js + Tailwind CSS",
      icon1: <IconBrandReact />,
      label1: "React.Js",
      icon2: <IconBrandTailwind />,
      label2: "Tailwind.CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
    },
    {
      id: 6,
      name: "Quiz Apps Using React and Redux",
      image: "/quiz.png",
      link: "https://quiz-app-djisamsoe.vercel.app/",
      description: "Create Quiz Apps Using React Js, Redux, and Tailwind CSS",
      icon1: <IconBrandReact />,
      label1: "React.Js",
      icon2: <IconBrandTailwind />,
      label2: "Tailwind.CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
      icon4: <IconBrandRedux />,
      label4: "Redux",
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader icon={<IconBrandCodepen />} label="Latest Projects" />
      <div className="flex flex-wrap px-5 gap-5">
        {projects.map((project) => (
          <ProjectCard
            icon4={undefined}
            label4={""}
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </motion.section>
  );
};
