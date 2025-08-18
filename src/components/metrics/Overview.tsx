import React from "react";

interface OverviewProps {
  title: string;
  kpi1: string;
  kpi2: string;
  kpi3: string;
  kpi1Value: string;
  kpi2Value: string;
  kpi3Value: string;
  iconSrc: string;
}

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
    <div className="max-w-2xl max-h-[180px] rounded-2xl border border-gray-100 bg-white outline-1 outline-gray-300">
      <div className="mb-4 flex items-center justify-between border-b-1 border-gray-200 bg-[#f9fafb] p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl">
            <img src={iconSrc} alt="Overview icon" className="h-6 w-6" />
          </div>
          <h2 className="text-[14px] font-medium text-gray-900">{title}</h2>
        </div>

        <button className="flex items-center gap-2 text-[12px] font-medium text-indigo-600 transition-colors hover:text-indigo-700">
          View all
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-end justify-around">
        <div className="text-center">
          <p className="mb-2 text-[14px] font-medium text-gray-500">{kpi1}</p>
          <p className="text-2xl font-semibold">{kpi1Value}</p>
        </div>

        <div className="text-center">
          <p className="mb-2 text-[14px] font-medium text-gray-500">{kpi2}</p>
          <p className="text-2xl font-semibold">{kpi2Value}</p>
        </div>

        <div className="text-center">
          <p className="mb-2 text-[14px] font-medium text-gray-500">{kpi3}</p>
          <p className="text-2xl font-semibold">{kpi3Value}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
