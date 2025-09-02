import React, { useState } from 'react';

const WeekSelector = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev: string[]) => {
      return prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
    });
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {days.map((day) => (
        <button
          onClick={() => toggleDay(day)}
          className="p-1 border-1 px-6 cursor-pointer rounded-md"
          style={{
            backgroundColor: selectedDays.includes(day) ? 'black' : 'white',
            color: selectedDays.includes(day) ? 'white' : 'black',
          }}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default WeekSelector;
