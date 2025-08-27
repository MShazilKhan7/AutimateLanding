import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconGradient: string;
  delay?: number;
  testId?: string;
  className?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  iconGradient, 
  delay = 0, 
  testId,
  className = ""
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${className}`}
      data-testid={testId}
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${iconGradient} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="text-white text-lg" />
      </div>
      <h4 className="font-semibold text-soft-charcoal mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}