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


const Header = () => {
  return (
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
              <img
                src={notification}
                alt="Notification icon"
                className="h-6 w-auto" // ✅ this matches the styling you had before
              />
              {/* Calendar Icon */}
              <img
                src={calendar}
                alt="Calendar icon"
                className="h-6 w-auto" // ✅ this matches the styling you had before
              />
              {/* Calculator Icon */}
              <img
                src={calculator}
                alt="Calculator icon"
                className="h-6 w-auto" // ✅ this matches the styling you had before
              />
              {/* Message Icon */}
              <img
                src={message}
                alt="Message icon"
                className="h-6 w-auto" // ✅ this matches the styling you had before
              />
            </div>
          </div>
          {/* Profile Icon */}
          <div className="size-9 text-xl bg-white rounded-full flex items-center justify-center font-semibold text-gray-900">
            D
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="flex items-center  justify-between p-4.5 bg-white border-b border-gray-200 px-10">
        {/* Navigation Links */}
       
          {/* Dashboard (Active) */}
          <div className="flex items-center justify-center space-x-2 bg-gray-100 px-8 py-2 rounded-lg">
            {/* Dashboard Icon */}
            <img
              src={home}
              alt="Home icon"
              className="h-6 w-auto" // ✅ this matches the styling you had before
            />
            <span className="font-bold text-sm text-gray-800">Dashboard</span>
          </div>
          {/* Listings */}
          <div className="flex items-center space-x-2 p-2">
            {/* Listings Icon */}
            {/* Dashboard Icon */}
            <img
              src={toolbox}
              alt="tolbox icon"
              className="h-6 w-auto" // ✅ this matches the styling you had before
            />
            <span className="font-normal text-sm text-gray-600">Listings</span>
          </div>
          {/* Users */}
          <div className="flex items-center space-x-2 p-2">
            {/* Users Icon */}
            {/* Dashboard Icon */}
            <img
              src={users}
              alt="User icon"
              className="h-6 w-auto" // ✅ this matches the styling you had before
            />
            <span className="font-normal text-sm text-gray-600">Users</span>
          </div>
          {/* Request */}
          <div className="flex items-center space-x-2 p-2">
            {/* Request Icon */}
            {/* Dashboard Icon */}
            <img
              src={article}
              alt="article icon"
              className="h-6 w-auto" // ✅ this matches the styling you had before
            />
            <span className="font-normal text-sm text-gray-600">Request</span>
          </div>
          {/* Applications */}
          <div className="flex items-center space-x-2 p-2">
            {/* Applications Icon */}
            <img
              src={scroll}
              alt="scroll icon"
              className="h-6 w-auto" // ✅ this matches the styling you had before
            />
            <span className="font-normal text-sm text-gray-600">
              Applications
            </span>
          </div>
    

        {/* Search Bar */}
        <div className="flex gap-3 bg-gray-100 border border-gray-200 rounded-lg  pr-20 pl-2 py-2">
           <img
                src={search}
                alt="Search icon"
                className="h-6 w-auto" // ✅ this matches the styling you had before
              />
          <input
            type="text"
            placeholder="Search listings, users here..."
            className="bg-transparent focus:outline-none text-sm text-gray-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
