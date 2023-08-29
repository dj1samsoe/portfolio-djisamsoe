import { motion } from "framer-motion";
import {
  IconBrandCodepen,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandRedux,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export const Portfolio = () => {
  const { section } = SectionMotion;
  const portfolios = [
    {
      id: 1,
      name: "Simple Calculator",
      image: "/calculator.png",
      link: "https://dj1samsoe.github.io/calculator-djisamsoe/",
      description: "Simple Calculator with HTML, CSS, Vanilla Javascript",
      icon1: <IconBrandHtml5 />,
      label1: "HTML",
      icon2: <IconBrandCss3 />,
      label2: "CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
    },
    {
      id: 2,
      name: "Simple Weather App",
      image: "/weather.png",
      link: "https://dj1samsoe.github.io/weather-app/",
      description: "Simple Weather App with HTML, CSS, Vanilla Javascript",
      icon1: <IconBrandHtml5 />,
      label1: "HTML",
      icon2: <IconBrandCss3 />,
      label2: "CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
    },
    {
      id: 3,
      name: "Slicing Website From Youtube",
      image: "/kopi.png",
      link: "https://dj1samsoe.github.io/kedai-kopi-djimat/",
      description: "Slicing Website from YouTube Web Programming Unpas",
      icon1: <IconBrandHtml5 />,
      label1: "HTML",
      icon2: <IconBrandCss3 />,
      label2: "CSS",
      icon3: <IconBrandJavascript />,
      label3: "JavaScript",
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
      description:
        "Create Simple Todo List Apps Using React Js and Tailwind CSS",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard
            icon4={undefined}
            label4={""}
            key={portfolio.id}
            {...portfolio}
          />
        ))}
      </div>
    </motion.section>
  );
};