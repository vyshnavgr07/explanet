import { Monitor } from 'lucide-react';

const StatCard = ({
  icon: Icon = Monitor,
  count,
  label,
  bg = 'bg-yellow-50',
  iconColor = 'text-yellow-400',
}) => {
  return (
    <div
      className={`w-full max-w-[260px] rounded-md p-5 flex items-center gap-4 ${bg} transition-all duration-300`}
    >
      <Icon className={`w-10 h-10 ${iconColor}`} />
      <div>
        <h4 className="text-lg font-bold text-gray-800">{count}</h4>
        <p className="text-sm text-gray-700">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
