export const HomeMotion = {
  description: {
    initial: {
      y: 50,
      opacity: 0,
    },
    animated: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
  resume: {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animated: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 0.4,
      delay: 1,
    },
  },
  wrapImg: {
    initial: {
      borderTopRightRadius: "100px",
      borderBottomLeftRadius: "100px",
    },
    animated: {
      borderTopRightRadius: "1000px",
      borderBottomLeftRadius: "1000px",
      // borderStartStartRadius: "1000px",
      // borderEndEndRadius: "1000px",
    },
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  image: {
    initial: {
      opacity: 0,
    },
    animated: {
      opacity: 1,
    },
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
};
