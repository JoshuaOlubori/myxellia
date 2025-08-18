import { Bar } from "react-chartjs-2";
import StatCard from "@/components/metrics/StatCard"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";


import chartLeft from  "@/assets/icons/metrics/chartLeft.svg";
import chartRight from  "@/assets/icons/metrics/chartRight.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SalesOverview = () => {
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
          callback: function (value: string | number) {
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


  return (
    <div className="bg-white">
      <div className="grid-rows-[128px_minmax(0,1fr)]">
        <div className="pt-5 pr-5 pb-3 pl-5">
          <div className="mb-3 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2x font-semi-bold mb-3 text-gray-900">
                Sales Overview
              </h2>
              <p className="text-sm font-normal text-gray-500">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button className="rounded-full border border-gray-200 px-9 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50">
                View Transactions
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 rounded-lg">
            <button className="rounded-md px-4.5 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
              1 Week
            </button>
            <button className="rounded-md px-4.5 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
              1 Month
            </button>
            <button className="rounded-md bg-gray-100 px-4.5 py-1.5 text-sm font-semibold text-gray-900">
              1 Year
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-1 border-gray-300 px-5 pt-5">
          <div className="relative rounded-xl border border-gray-100 bg-white px-6 pt-6">
            <div className="relative">
              <Bar data={chartData} options={chartOptions} />
            </div>

            <button className="absolute top-1/2 -left-1 -translate-y-1/2 transform rounded-full border border-gray-200 bg-[#E4E4E4] p-1 shadow-lg transition-shadow hover:shadow-xl">
                <img src={chartLeft} alt="Chart navigation icon" />
            </button>
            <button className="absolute top-1/2 -right-1 -translate-y-1/2 transform rounded-full border border-gray-200 bg-[#E4E4E4] p-1  shadow-lg transition-shadow hover:shadow-xl">
             <img src={chartRight} alt="Chart navigation icon" />
            </button>
          </div>

          <div className="my-auto text-center mb-4">
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
