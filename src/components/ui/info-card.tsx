import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  iconColor: string;
}

export function InfoCard({ icon: Icon, title, content, iconColor }: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`${iconColor} text-xl`} />
        <h4 className="font-semibold text-soft-charcoal">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  );
}