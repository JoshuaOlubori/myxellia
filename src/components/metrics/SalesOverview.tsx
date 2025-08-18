
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import upIndicator1 from "@/assets/icons/metrics/up-indicator-1.svg"
import upIndicator2 from "@/assets/icons/metrics/up-indicator-2.svg"
import downIndicator1 from "@/assets/icons/metrics/down-indicator-1.svg"
import downIndicator2 from "@/assets/icons/metrics/down-indicator-2.svg"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SalesOverview = () => {
  // Chart.js data configuration
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Inflow",
        data: [35, 28, 27, 25, 35, 48, 37, 35, 37],
        backgroundColor: "#3B82F6",
        borderRadius: 0,
        maxBarThickness: 4,
      },
      {
        label: "MRR",
        data: [28, 4, 15, 25, 10, 35, 25, 22, 35],
        backgroundColor: "#10B981",
        borderRadius: 0,
        maxBarThickness: 4,
      },
      {
        label: "GMV",
        data: [10, 8, 10, 8, 8, 18, 8, 18, 8],
        backgroundColor: "#EF4444",
        borderRadius: 0,
        maxBarThickness: 4,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 50,
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
          stepSize: 10,
          callback: function (value: string | number){
            return value + "m";
          },
        },
        border: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
  };

  type StatCardProps = {
  index: number;
  title: string;
  value: string;
  percentage: string;
  isUp: boolean;
  color?: "blue" | "green" | "teal" | "red"; // The '?' makes the prop optional
};
  // A simple component for the stat cards
  const StatCard: React.FC<StatCardProps> = ({ index, title, value, percentage, isUp, color = "blue" }) => {
    const colorClasses = {
      blue: "text-blue-500",
      green: "text-green-500",
      teal: "text-teal-500",
      red: "text-red-500",
    };

    return (
      <div className={`${index === 1 ? 'mr-4 mb-4' : index === 2 ? 'mb-4' : index === 3 ? 'mr-4' : ''} inline-block w-full sm:w-[calc(50%-10px)] bg-white p-6 rounded-xl border border-gray-300 hover:shadow-md transition-shadow`}>
        <h4 className={`text-2xl font-bold mb-2 ${colorClasses[color]}`}>
          {value}
        </h4>
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-600 font-medium">{title}</p>
          <div
            className={`flex items-center text-xs font-light ${
              isUp ? "text-green-500" : "text-red-500"
            }`}
          >
            <div
              className={` w-5 h-5 rounded-full flex items-center justify-center mr-1 `}
            >
               <img
        src={index === 1 ? upIndicator1 : index === 2 ? upIndicator2 : index === 3 ? downIndicator1 : downIndicator2}
        alt="Myxellia Logo"
        className="h-6 w-auto" // ✅ this matches the styling you had before
      />
            </div>
            {percentage}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="grid-rows-[128px_minmax(0,1fr)]">
        <div className="pt-5 pr-5 pl-5 pb-3">

      
        {/* Header and Buttons */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-3">
          <div>
            <h2 className="text-2x mb-3 text-gray-900 font-semi-bold">
              Sales Overview
            </h2>
            <p className="text-sm font-normal text-gray-500">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="px-9 py-4 border border-gray-200 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              View Transactions
            </button>
          </div>
        </div>
        {/* Timeframe Buttons */}
        <div className="rounded-lg flex justify-end gap-3">
          <button className="px-4.5 py-1.5 text-sm text-gray-500 font-medium rounded-md transition-colors hover:text-gray-700">
            1 Week
          </button>
          <button className="px-4.5 py-1.5 text-sm text-gray-500 font-medium rounded-md transition-colors hover:text-gray-700">
            1 Month
          </button>
          <button className="px-4.5 py-1.5 text-sm bg-gray-100 text-gray-900 font-semibold rounded-md">
            1 Year
          </button>
        </div>
          </div>

        {/* Main Content Area: Chart and Stat Cards */}
        <div className="pt-5 px-5  grid grid-cols-2 gap-2 border-t-1 border-gray-300">
          {/* Chart Section */}
          <div className=" bg-white rounded-xl border border-gray-100 pt-6 px-6 relative">
            <div className="relative">
              <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Previous/Next Chart Buttons */}
            <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <svg
                className="h-5 w-5 text-gray-400"
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

          {/* Stats Cards Section */}
          <div className="text-center my-auto">
            
            <StatCard
            index={1}
              title="Total Inflow"
              value="₦120,000,000.00"
              percentage="2.5%"
              isUp={true}
              color="blue"
            />
            <StatCard
             index={2}
              title="MRR"
              value="₦50,000,000.00"
              percentage="2.5%"
              isUp={true}
              color="green"
            />
            <StatCard
             index={3}
              title="Commission Revenue"
              value="₦200,000,000.00"
              percentage="0.5%"
              isUp={true}
              color="teal"
            />
            <StatCard
             index={4}
              title="GMV"
              value="₦100,000,000.00"
              percentage="0.5%"
              isUp={false}
              color="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
