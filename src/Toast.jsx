import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Toast = ({ message, show, setShow, style = "white", color="black" }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          className={`fixed p-4 bg-${style} text-${color} bottom-3 right-3 border-2 drop-shadow-md rounded-md`}
        >
          <p>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
