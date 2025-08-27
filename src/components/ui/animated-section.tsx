import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up" 
}: AnimatedSectionProps) {
  const directionMap = {
    up: { opacity: 0, y: 20 },
    down: { opacity: 0, y: -20 },
    left: { opacity: 0, x: -20 },
    right: { opacity: 0, x: 20 }
  };

  return (
    <motion.div
      initial={directionMap[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}