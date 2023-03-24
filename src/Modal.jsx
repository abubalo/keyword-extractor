import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const Modal = ({ text, isOpen, setIsOpen }) => {
    const ref = useRef(null)
    if(ref.current){
        setIsOpen(false)
    }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0, delay: 0.1}}
          transition={{duration: 0.3, ease: "easeInOut"}}
          className="fixed w-full h-screen bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0"></motion.div>
          <motion.div 
          initial={{opacity: 0, x: -50, delay: 0.1}}
          animate={{opacity: 1}}
          exit={{opacity: 0, x: -50}}
          transition={{duration: 0.3, ease: "linear"}}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4">
            {text}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
