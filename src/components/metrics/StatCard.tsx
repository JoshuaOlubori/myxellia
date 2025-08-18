

import upIndicator1 from "@/assets/icons/metrics/up-indicator-1.svg";
import upIndicator2 from "@/assets/icons/metrics/up-indicator-2.svg";
import downIndicator1 from "@/assets/icons/metrics/down-indicator-1.svg";
import downIndicator2 from "@/assets/icons/metrics/down-indicator-2.svg";

  type StatCardProps = {
    index: number;
    title: string;
    value: string;
    percentage: string;
    isUp: boolean;
    color: "blue" | "green" | "teal" | "red";
  };

   const colorClasses = {
      blue: "text-blue-500",
      green: "text-green-500",
      teal: "text-teal-500",
      red: "text-red-500",
    };

export default function StatCard ({index, title, value, percentage, isUp, color}: StatCardProps)  {
    return (
      <div
        className={`${index === 1 ? "mr-4 mb-4" : index === 2 ? "mb-4" : index === 3 ? "mr-4" : ""} inline-block w-full rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md sm:w-[calc(50%-10px)]`}
      >
        <h4 className={`mb-2 text-xl font-bold ${colorClasses[color]}`}>
          {value}
        </h4>
        <div className="flex items-center gap-1">
          <p className="text-xs font-medium text-gray-600">{title}</p>
          <div
            className={`flex items-center text-xs font-light ${
              isUp ? "text-green-500" : "text-red-500"
            }`}
          >
            <div
              className={`mr-1 flex h-5 w-5 items-center justify-center rounded-full`}
            >
              <img
                src={
                  index === 1
                    ? upIndicator1
                    : index === 2
                      ? upIndicator2
                      : index === 3
                        ? downIndicator1
                        : downIndicator2
                }
                alt="Myxellia Logo"
                className="h-6 w-auto"
              />
            </div>
            {percentage}
          </div>
        </div>
      </div>
    );
  };