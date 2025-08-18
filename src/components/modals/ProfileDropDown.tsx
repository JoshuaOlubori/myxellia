import { Users, UserCheck, Lock, Shield, LogOut } from "lucide-react";

interface BudgetCalculatorModalProps {
  isVisible: boolean;
}

const ProfileDropdown = ({ isVisible }: BudgetCalculatorModalProps) => {
  if (!isVisible) return null;

  return (
    <div className="font-euclid-circular-b absolute top-[72px] right-10 z-50 w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-100 p-4">
        <div className="rounded-lg bg-[#fafafa] px-2 py-3 outline outline-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#195d51] text-4xl text-white">
              D
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Dylan Frank
              </h3>
              <p className="text-sm text-gray-600">dylan96@mail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-2">
        <button className="flex w-full items-center space-x-3 border-b border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50">
          <Users className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          <span className="font-medium text-gray-900">Teams</span>
        </button>

        <button className="flex w-full items-center space-x-3 border-b border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50">
          <UserCheck className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          <span className="font-medium text-gray-900">Contact Persons</span>
        </button>

        <button className="flex w-full items-center space-x-3 border-b border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50">
          <Lock className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          <span className="font-medium text-gray-900">Change password</span>
        </button>

        <button className="flex w-full items-center space-x-3 border-b border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50">
          <Shield className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
          <span className="font-medium text-gray-900">
            2 - Factor Authentication
          </span>
        </button>

        <button className="mt-1 flex w-full items-center space-x-3 px-4 py-3 text-left transition-colors hover:bg-gray-50">
          <LogOut className="h-5 w-5 text-red-500" strokeWidth={1.5} />
          <span className="font-medium text-red-500">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
