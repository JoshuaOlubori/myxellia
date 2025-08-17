
import { Users, UserCheck, Lock, Shield, LogOut } from 'lucide-react';

const ProfileDropdown = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-[72px] right-10 z-50 bg-white rounded-lg shadow-lg border border-gray-200 w-72 overflow-hidden">
      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            D
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-base">Dylan Frank</h3>
            <p className="text-sm text-gray-600">dylan96@mail.com</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {/* Teams */}
        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
          <Users className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
          <span className="text-gray-900 font-medium">Teams</span>
        </button>

        {/* Contact Persons */}
        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
          <UserCheck className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
          <span className="text-gray-900 font-medium">Contact Persons</span>
        </button>

        {/* Change Password */}
        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
          <Lock className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
          <span className="text-gray-900 font-medium">Change password</span>
        </button>

        {/* 2-Factor Authentication */}
        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
          <Shield className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
          <span className="text-gray-900 font-medium">2 - Factor Authentication</span>
        </button>

        {/* Logout */}
        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left border-t border-gray-100 mt-1">
          <LogOut className="w-5 h-5 text-red-500" strokeWidth={1.5} />
          <span className="text-red-500 font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;