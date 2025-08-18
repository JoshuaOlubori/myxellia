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

import Calendar from "../modals/Calendar";
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

  return (
    <div className="relative max-w-[1350px] container mx-auto">
      <header className="font-euclid-circular-b container mx-auto bg-white text-gray-800">
        <div className="container flex items-center justify-between border-b border-zinc-200 bg-[#191919] p-4.5 px-10 text-white">
          <HeaderLogo />

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <div className="group relative">
                  <img
                    src={notification}
                    alt="Notification icon"
                    className="h-6 w-auto"
                  />
                </div>

                <div className="group relative">
                  <button
                    onClick={toggleCalendar}
                    className="transition-opacity hover:opacity-80"
                  >
                    <img
                      src={calendar}
                      alt="Calendar icon"
                      className="h-6 w-auto cursor-pointer"
                    />
                  </button>
                  <div className="absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 transform rounded-md bg-[#191919] px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Calendar
                  </div>
                </div>

                <div className="group relative">
                  <button
                    onClick={toggleBudgetModal}
                    className="transition-opacity hover:opacity-80"
                  >
                    <img
                      src={calculator}
                      alt="Calculator icon"
                      className="h-6 w-auto cursor-pointer"
                    />
                  </button>
                  <div className="absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 transform rounded-md bg-[#191919] px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Budgeting
                  </div>
                </div>

                <div className="group relative">
                  <img
                    src={message}
                    alt="Message icon"
                    className="h-6 w-auto"
                  />
                  <div className="absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 transform rounded-md bg-[#191919] px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Messages
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-xl font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                D
              </button>

              <div className="font-euclid-circular-b absolute right-3 z-10 mt-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-left whitespace-nowrap opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                <div className="font-semibold text-gray-900">Dylan Frank</div>
                <div className="text-xs font-light text-gray-600">
                  dylanfran96@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4.5 px-10">
          <div className="flex items-center justify-center space-x-2 rounded-lg bg-gray-100 px-8 py-2">
            <img src={home} alt="Home icon" className="h-6 w-auto" />
            <span className="text-sm font-bold text-gray-800">Dashboard</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <img src={toolbox} alt="tolbox icon" className="h-6 w-auto" />
            <span className="text-sm font-normal text-gray-600">Listings</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <img src={users} alt="User icon" className="h-6 w-auto" />
            <span className="text-sm font-normal text-gray-600">Users</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <img src={article} alt="article icon" className="h-6 w-auto" />
            <span className="text-sm font-normal text-gray-600">Request</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <img src={scroll} alt="scroll icon" className="h-6 w-auto" />
            <span className="text-sm font-normal text-gray-600">
              Applications
            </span>
          </div>

          <div className="flex gap-3 rounded-lg border border-gray-200 bg-gray-100 py-2 pr-20 pl-2">
            <img src={search} alt="Search icon" className="h-6 w-auto" />
            <input
              type="text"
              placeholder="Search listings, users here..."
              className="bg-transparent text-sm text-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </header>

      <Calendar isVisible={isCalendarVisible} onClose={closeCalendar} />

      <BudgetCalculatorModal
        isVisible={isBudgetModalVisible}
        onClose={closeBudgetModal}
      />

      <ProfileDropdown
        isVisible={isProfileDropdownVisible}
      />
    </div>
  );
};

export default Header;
