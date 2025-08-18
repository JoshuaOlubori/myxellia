import { useState } from "react";
import HeaderLogo from "./headerLogo";

import notification from "../../assets/icons/header/notification.svg";
import calculator from "../../assets/icons/header/calculator.svg";
import calendar from "../../assets/icons/header/calendar.svg";
import message from "../../assets/icons/header/message.svg";

import home from "../../assets/icons/header/home.svg";
import toolbox from "../../assets/icons/header/toolbox.svg";
import users from "../../assets/icons/header/users.svg";
import article from "../../assets/icons/header/article.svg";
import scroll from "../../assets/icons/header/scroll.svg";
import search from "../../assets/icons/header/search.svg";

import Calendar from "../../Calendar";
import BudgetCalculatorModal from "../modals/BudgetCalculatorModal";
import ProfileDropdown from "../modals/ProfileDropDown";

const Header = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isBudgetModalVisible, setIsBudgetModalVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const closeCalendar = () => {
    setIsCalendarVisible(false);
  };

  const toggleBudgetModal = () => {
    setIsBudgetModalVisible(!isBudgetModalVisible);
  };

  const closeBudgetModal = () => {
    setIsBudgetModalVisible(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  // const closeProfileDropdown = () => {
  //   setIsProfileDropdownVisible(false);
  // };

  return (
    <div className="relative">
      <header className="container font-euclid-circular-b bg-white text-gray-800 mx-auto">
        {/* Top Header Section */}
        <div className="container flex items-center justify-between p-4.5 bg-[#191919] text-white border-b border-zinc-200 px-10">
          {/* Logo */}
          <HeaderLogo />

          {/* Right-side Icons and Profile */}
          <div className="flex items-center space-x-6">
            {/* Icons */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                {/* Notification Icon */}
                <div className="relative group">
                  <img
                    src={notification}
                    alt="Notification icon"
                    className="h-6 w-auto"
                  />
                </div>

                {/* Calendar Icon */}
                <div className="relative group">
                  <button
                    onClick={toggleCalendar}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={calendar}
                      alt="Calendar icon"
                      className="h-6 w-auto cursor-pointer"
                    />
                  </button>
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#191919] text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Calendar
                  </div>
                </div>

                {/* Calculator Icon */}
                <div className="relative group">
                  <button
                    onClick={toggleBudgetModal}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={calculator}
                      alt="Calculator icon"
                      className="h-6 w-auto cursor-pointer"
                    />
                  </button>
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#191919] text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Budgeting
                  </div>
                </div>

                {/* Message Icon */}
                <div className="relative group">
                  <img
                    src={message}
                    alt="Message icon"
                    className="h-6 w-auto"
                  />
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#191919] text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Messages
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Icon */}
            <div className="relative group">
              <button
                onClick={toggleProfileDropdown}
                className="size-9 text-xl bg-white rounded-full flex items-center justify-center font-semibold text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                D
              </button>

              <div className="font-euclid-circular-b  absolute right-3 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 px-4 py-3 text-left">
                <div className="font-semibold text-gray-900">Dylan Frank</div>
                <div className="text-gray-600 font-light text-xs">
                  dylanfran96@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Section */}
        <div className="flex items-center justify-between p-4.5 bg-white border-b border-gray-200 px-10">
          {/* Navigation Links */}

          {/* Dashboard (Active) */}
          <div className="flex items-center justify-center space-x-2 bg-gray-100 px-8 py-2 rounded-lg">
            {/* Dashboard Icon */}
            <img src={home} alt="Home icon" className="h-6 w-auto" />
            <span className="font-bold text-sm text-gray-800">Dashboard</span>
          </div>
          {/* Listings */}
          <div className="flex items-center space-x-2 p-2">
            {/* Listings Icon */}
            <img src={toolbox} alt="tolbox icon" className="h-6 w-auto" />
            <span className="font-normal text-sm text-gray-600">Listings</span>
          </div>
          {/* Users */}
          <div className="flex items-center space-x-2 p-2">
            {/* Users Icon */}
            <img src={users} alt="User icon" className="h-6 w-auto" />
            <span className="font-normal text-sm text-gray-600">Users</span>
          </div>
          {/* Request */}
          <div className="flex items-center space-x-2 p-2">
            {/* Request Icon */}
            <img src={article} alt="article icon" className="h-6 w-auto" />
            <span className="font-normal text-sm text-gray-600">Request</span>
          </div>
          {/* Applications */}
          <div className="flex items-center space-x-2 p-2">
            {/* Applications Icon */}
            <img src={scroll} alt="scroll icon" className="h-6 w-auto" />
            <span className="font-normal text-sm text-gray-600">
              Applications
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3 bg-gray-100 border border-gray-200 rounded-lg pr-20 pl-2 py-2">
            <img src={search} alt="Search icon" className="h-6 w-auto" />
            <input
              type="text"
              placeholder="Search listings, users here..."
              className="bg-transparent focus:outline-none text-sm text-gray-500"
            />
          </div>
        </div>
      </header>

      {/* Calendar Component */}
      <Calendar isVisible={isCalendarVisible} onClose={closeCalendar} />

      {/* Budget Calculator Modal */}
      <BudgetCalculatorModal
        isVisible={isBudgetModalVisible}
        onClose={closeBudgetModal}
      />

      {/* Profile Dropdown */}
      <ProfileDropdown
        isVisible={isProfileDropdownVisible}
        // onClose={closeProfileDropdown}
      />
    </div>
  );
};

export default Header;
