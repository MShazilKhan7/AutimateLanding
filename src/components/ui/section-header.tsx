import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl font-bold text-soft-charcoal mb-6">{title}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
    </motion.div>
  );
}