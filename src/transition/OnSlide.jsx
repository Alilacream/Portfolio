import { motion } from "framer-motion";

export default function OnSlide({ children, direction = "left" }) {
  const x = direction === "left" ? -80 : 80;

  return (
    <motion.div
      className="hover"
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}