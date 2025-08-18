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
      className="fixed inset-0 modal-overlay z-50 flex items-center justify-center font-euclid-circular-b"
      onClick={handleOverlayClick}
    >
      {/* This is the main container for the modal content.
        Added 'bg-white' to give it a solid white background.
      */}
      <div className="rounded-xl max-w-md w-full mx-auto overflow-hidden bg-white"> 
        {/* Header Section with Calculator Icon */}
        <div className="pt-[26px] px-[26px] bg-[#0c2841]">
          <img className="object-cover" src={overlay} alt="overlay svg" />
        </div>
        
        {/* Content Section */}
        <div className="px-8 py-8 space-y-8">
          {/* Features List */}
          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <img src={settings} alt="settings icon" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Set up annual budgets by account category
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Allocate funds across income and expense lines with full
                  visibility.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <img src={trend} alt="trends icon" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Track actuals vs budget in real time
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  See how your community is performing against plan, month by
                  month.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <img src={barChart} alt="chart icon" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Adjust figures and forecast with ease
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Edit amounts, apply percentage changes, or roll forward last
                  year's data—all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Create Budget Button */}
          <button className="w-full bg-[#18181B] text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculatorModal;