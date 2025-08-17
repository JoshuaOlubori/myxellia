
import { Calculator, TrendingUp, BarChart3 } from 'lucide-react';

const BudgetCalculatorModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-200 bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden">
        {/* Header Section with Calculator Icon */}
        <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 px-8 py-12 text-center relative">
          <div className="bg-white bg-opacity-20 rounded-2xl p-6 inline-block backdrop-blur-sm">
            <Calculator className="w-12 h-12 text-white mx-auto" strokeWidth={2} />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 py-8 space-y-8">
          {/* Main Title */}
          <h2 className="text-xl font-semibold text-gray-900 text-center leading-tight">
            Set up annual budgets by account category
          </h2>

          {/* Features List */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <TrendingUp className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Set up annual budgets by account category
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Allocate funds across income and expense lines with full visibility.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <BarChart3 className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Track actuals vs budget in real time
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  See how your community is performing against plan, month by month.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Calculator className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Adjust figures and forecast with ease
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Create Budget Button */}
          <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-full font-medium text-base hover:bg-gray-800 transition-colors duration-200">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculatorModal;