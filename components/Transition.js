import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      y: 2,
      transition: {
        duration: 0.333,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.333,
      },
    },
  };

  return (
    <div className="effect-1">
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
