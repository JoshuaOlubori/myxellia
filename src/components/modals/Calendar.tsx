import{ useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, X } from 'lucide-react';



const Calendar = ({ isVisible, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 16));
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isNextMonth: false,
        isPrevMonth: true
      });
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day: day,
        isCurrentMonth: true,
        isNextMonth: false,
        isPrevMonth: false
      });
    }
    
    const remainingSlots = 42 - days.length;
    for (let day = 1; day <= remainingSlots; day++) {
      days.push({
        day: day,
        isCurrentMonth: false,
        isNextMonth: true,
        isPrevMonth: false
      });
    }
    
    return days;
  };
  
  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };
  
  const days = getDaysInMonth(currentDate);
  const selectedDay = 16;
  
  return (
    <>
      <div className={`
        fixed right-0 font-euclid-circular-b top-[72px] z-50 bg-black text-white w-100 h-[827px] shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#171717]">
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[16px] font-semibold">Calendar</span>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 hover:text-gray-300" />
          </button>
        </div>
        
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => navigateMonth(-1)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-[16px] font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={() => navigateMonth(1)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 border-t border-gray-700">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-xs text-gray-400 py-3 font-medium border-r border-gray-700 last:border-r-0">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7">
          {days.map((date, index) => {
            const isSelected = date.isCurrentMonth && date.day === selectedDay;
            
            return (
              <div
                key={index}
                className={`
                  relative h-16 w-full flex items-center justify-center text-sm
                  border-r border-b border-gray-700 last:border-r-0
                  hover:bg-gray-800 transition-colors cursor-pointer
                  ${!date.isCurrentMonth ? 'text-gray-600' : 'text-white'}
                `}
              >
                <span className={`
                  ${isSelected ? 'bg-blue-600 text-white px-2 py-1 rounded-full text-xs' : ''}
                `}>
                  {date.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Calendar