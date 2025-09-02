import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const DateSelector = () => {
  const [selected, setSelected] = useState<Date[] | undefined>();

  const today = new Date();
  const oneYearLater = new Date();
  oneYearLater.setFullYear(today.getFullYear() + 1);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // month is 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formattedDates = selected
    ?.slice()
    ?.sort((a, b) => a.getTime() - b.getTime())
    ?.map(formatDate);

  // console.log(formattedDates);
  return (
    <div>
      <DayPicker
        animate
        mode="multiple"
        min={1}
        max={30}
        disabled={{ before: new Date(), after: oneYearLater }}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

export default DateSelector;
