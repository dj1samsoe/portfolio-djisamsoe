import { motion } from "framer-motion";
import {
  IconBrandWhatsapp,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconAddressBook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { ContactCard } from "../components/ContactCard";

export const Contact = () => {
  const { section } = SectionMotion;
  const iconStyles = { width: "100%", height: "100%" };
  const contacts = [
    {
      id: 1,
      name: "Whatsapp",
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: "+6287752665249",
      link: "https://wa.me/+6287752665249",
    },
    {
      id: 2,
      name: "Email",
      image: <IconBrandGmail style={iconStyles} />,
      description: "dhanyh86@gmail.com",
      link: "mailto:dhanyh86@gmail.com",
    },
    {
      id: 3,
      name: "Instagram",
      image: <IconBrandInstagram style={iconStyles} />,
      description: "@djisamsoe__",
      link: "https://www.instagram.com/djisamsoe__",
    },
    {
      id: 4,
      name: "Github",
      image: <IconBrandGithub style={iconStyles} />,
      description: "dj1samsoe",
      link: "https://github.com/dj1samsoe",
    },
    {
      id: 5,
      name: "Linkedin",
      image: <IconBrandLinkedin style={iconStyles} />,
      description: "fauziandhany",
      link: "https://www.linkedin.com/in/fauziandhany/",
    },
    {
      id: 6,
      name: "Twitter",
      image: <IconBrandTwitter style={iconStyles} />,
      description: "djisamsoe__",
      link: "https://www.twitter.com/djisamsoe__",
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader icon={<IconAddressBook />} label="Contact Me" />
      <div className="flex flex-wrap justify-center gap-5">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
