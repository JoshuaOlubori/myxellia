/* eslint-disable @typescript-eslint/no-explicit-any */

import overlay from "@/assets/icons/budgetCalculator/overlay.svg";
import settings from "@/assets/icons/budgetCalculator/settings.svg";
import barChart from "@/assets/icons/budgetCalculator/bar-chart.svg";
import trend from "@/assets/icons/budgetCalculator/trend.svg";

interface BudgetCalculatorModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const BudgetCalculatorModal = ({
  isVisible,
  onClose,
}: BudgetCalculatorModalProps) => {
  if (!isVisible) return null;

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay font-euclid-circular-b fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white">
        <div className="bg-[#0c2841] px-[26px] pt-[26px]">
          <img className="object-cover" src={overlay} alt="overlay svg" />
        </div>

        <div className="space-y-8 px-8 py-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <img src={settings} alt="settings icon" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Set up annual budgets by account category
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  Allocate funds across income and expense lines with full
                  visibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <img src={trend} alt="trends icon" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Track actuals vs budget in real time
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  See how your community is performing against plan, month by
                  month.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <img src={barChart} alt="chart icon" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Adjust figures and forecast with ease
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  Edit amounts, apply percentage changes, or roll forward last
                  year's data—all in one place.
                </p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-full bg-[#18181B] px-6 py-4 font-medium text-white transition-colors duration-200 hover:bg-gray-800">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculatorModal;
