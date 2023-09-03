import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DynamicText: React.FC = () => {
  const dynamicTexts: string[] = [
    "Frontend Web Developer",
    "UI/UX Designer",
    "Wordpress Developer",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(
    dynamicTexts[currentTextIndex]
  );
  const [currentVisibleText, setCurrentVisibleText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
      setIsTyping(true);
    }, 2000); // Ganti setiap 2 detik (2000 ms)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        setCurrentVisibleText(
          currentText.slice(0, currentVisibleText.length + 1)
        );
        if (currentVisibleText.length === currentText.length) {
          setIsTyping(false);
        }
      }, 200); // Waktu tampilan efek ketikan per huruf (100 ms)

      return () => clearTimeout(timeout);
    } else {
      setCurrentText(dynamicTexts[currentTextIndex]);
      setCurrentVisibleText("");
      setIsTyping(true);
    }
  }, [currentTextIndex, currentVisibleText, currentText, isTyping]);

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.h2
      className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-bold text-2xl md:text-3xl"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <span style={{ borderRight: "2px solid #3182ce" }}>
        {currentVisibleText}
      </span>
    </motion.h2>
  );
};

export default DynamicText;
