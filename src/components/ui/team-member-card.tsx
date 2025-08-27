import { motion } from "framer-motion";
import { User } from "lucide-react";

interface TeamMemberCardProps {
  name?: string;
  role: string;
  description: string;
  gradient: string;
  delay?: number;
  testId?: string;
}

export function TeamMemberCard({ 
  name = "Team Member", 
  role, 
  description, 
  gradient, 
  delay = 0, 
  testId 
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
      data-testid={testId}
    >
      <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full mx-auto mb-6 flex items-center justify-center`}>
        <User className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-semibold text-soft-charcoal mb-2">{name}</h3>
      <p className="text-soft-pink font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}