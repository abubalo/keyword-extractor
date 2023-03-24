import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ children, isOpen, setIsOpen }) => {
  

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, delay: 0.2 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={()=> setIsOpen(false)}
            className="fixed w-full h-screen flex justify-center items-center bg-black backdrop-filter backdrop-blur-md bg-opacity-60 top-0 left-0 right-0 bottom-0 cursor-pointer"
          >

          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1, y: -30 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "linear" }}
            onClick={e => e.stopPropagation()}
            className="max-w-[400px] bg-white p-7 space-y-2 text-center cursor-text rounded-md"
          >
            {children}
          </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
