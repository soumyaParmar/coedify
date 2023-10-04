import { motion } from "framer-motion";

// const linearEasing = [0.4, 0, 0.2, 1];
const animationConfiguration = {
    
        initial: { x: "-10%" }, 
        animate: { x: 0, transition: { type: "spring", damping: 5, stiffness: 100, duration: 0.5 }}, 
        exit: { x: "-100%" }, 
      
};
const Transition = ({ children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};
export default Transition;