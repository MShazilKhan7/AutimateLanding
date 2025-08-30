import { motion } from "framer-motion";
import { User } from "lucide-react";

interface TeamMemberCardProps {
  name?: string;
  role: string;
  gradient: string;
  delay?: number;
  testId?: string;
  imageUrl?: string;
}

export function TeamMemberCard({ 
  name = "Team Member", 
  role, 
  gradient, 
  delay = 0, 
  testId,
  imageUrl
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
      <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-full"
            data-testid={testId ? `${testId}-image` : undefined}
          />
        ) : (
          <User className="text-white text-2xl" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-soft-charcoal mb-2">{name}</h3>
      <p className="text-soft-pink font-medium mb-3">{role}</p>
    </motion.div>
  );
}