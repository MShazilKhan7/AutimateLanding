interface StatCardProps {
  value: string;
  label: string;
  color: string;
  testId?: string;
}

export function StatCard({ value, label, color, testId }: StatCardProps) {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold ${color}`} data-testid={testId}>
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}