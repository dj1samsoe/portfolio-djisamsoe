import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface ProjectCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  link: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
  icon4: React.ReactNode;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const {
    image,
    name,
    link,
    description,
    icon1,
    icon2,
    icon3,
    icon4,
    label1,
    label2,
    label3,
    label4,
  } = props;
  return (
    <Link to={link} target="_blank">
      <motion.div
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
        transition={{
          duration: 0.2,
        }}
        className="rounded-xl shadow-sm relative bg-zinc-800 cursor-pointer"
      >
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-max"
          style={{ height: "200px" }}
        />
        <div className="flex flex-col w-full px-4 py-3 justify-start pt-5 text-gray-400 text-sm">
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <p className="text-gray-400 text-sm mb-5">{description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-6">
              <div className="group relative pb-2">
                <div className="absolute invisible bottom-7 group-hover:visible px-4 py-2 text-center bg-white text-black mb-2 text-sm rounded-md">
                  <p className=" text-gray-700">{label1}</p>
                </div>
                {icon1}
              </div>
            </div>
            <div className="w-6">
              <div className="group relative pb-2">
                <div className="absolute invisible bottom-7 group-hover:visible px-4 py-2 text-center bg-white text-black mb-2 text-sm rounded-md">
                  <p className=" text-gray-700">{label2}</p>
                </div>
                {icon2}
              </div>
            </div>
            <div className="w-6">
              <div className="group relative pb-2">
                <div className="absolute invisible bottom-7 group-hover:visible px-4 py-2 text-center bg-white text-black mb-2 text-sm rounded-md">
                  <p className=" text-gray-700">{label3}</p>
                </div>
                {icon3}
              </div>
            </div>
            <div className="w-6">
              <div className="group relative pb-2">
                <div className="absolute invisible bottom-7 group-hover:visible px-4 py-2 text-center bg-white text-black mb-2 text-sm rounded-md">
                  <p className="leading-1 text-gray-700">{label4}</p>
                </div>
                {icon4}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
