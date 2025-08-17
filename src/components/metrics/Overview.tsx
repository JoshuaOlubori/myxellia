import React from 'react';

// 1. Define the props interface using TypeScript
interface OverviewProps {
  title: string;
  kpi1: string;
  kpi2: string;
  kpi3: string;
  kpi1Value: string;
  kpi2Value: string;
  kpi3Value: string;
  iconSrc: string; // The type for the image source
}

// 2. Destructure the props in the component's function signature
const Overview: React.FC<OverviewProps> = ({
  title,
  kpi1,
  kpi2,
  kpi3,
  kpi1Value,
  kpi2Value,
  kpi3Value,
  iconSrc,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-[#f9fafb] p-3 border-b-1 border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            {/* 3. Replace the SVG with an <img> tag using the iconSrc prop */}
            <img src={iconSrc} alt="Overview icon" className="w-6 h-6" />
          </div>
          <h2 className="text-[14px] font-medium text-gray-900">
            {/* 4. Replace the hardcoded title with the title prop */}
            {title}
          </h2>
        </div>
        
        <button className="flex items-center gap-2 text-indigo-600 font-medium text-[12px] hover:text-indigo-700 transition-colors">
          View all
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="flex  justify-around items-end">
        {/* KPI 1 */}
        <div className="text-center">
          <p className="text-gray-500 font-medium text-[14px] mb-2">{kpi1}</p>
          <p className="text-2xl font-semibold ">{kpi1Value}</p>
        </div>

        {/* KPI 2 */}
        <div className="text-center">
          <p className="text-gray-500  font-medium text-[14px] mb-2">{kpi2}</p>
          <p className="text-2xl font-semibold ">{kpi2Value}</p>
        </div>

        {/* KPI 3 */}
        <div className="text-center">
          <p className="text-gray-500 font-mediumtext-[14px] mb-2">{kpi3}</p>
          <p className="text-2xl font-semibold">{kpi3Value}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;