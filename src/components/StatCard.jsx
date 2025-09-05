import React from 'react';

const colorMap = {
  green: 'from-green-400 to-green-500',
  blue: 'from-blue-400 to-blue-500',
  purple: 'from-purple-400 to-purple-500',
  orange: 'from-orange-400 to-orange-500',
};

const StatCard = ({ title, value, change, icon, color }) => {
  return (
    <div className="p-4 rounded-xl hover:-translate-y-1 transition-transform duration-300 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xs font-semibold text-gray-600">{title}</div>
        <div className={`p-2 rounded-md bg-gradient-to-r w-9 h-9 ${colorMap[color]} items-center justify-center flex`}>
          {icon}
        </div>
      </div>
      <div className="text-sm lg:text-lg font-bold text-gray-900">{value}</div>
      <div className="text-xs text-green-600 mt-2">{change}</div>
    </div>
  );
};

export default StatCard;
