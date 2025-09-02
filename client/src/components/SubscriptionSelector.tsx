import React, { useState } from 'react';
import WeekSelector from './WeekSelector';
import DateSelector from './DateSelector';

const SubscriptionSelector = () => {
  const [subscriptionType, setSubscriptionType] = useState('DAILY');
  const [startDate, setStartDate] = useState('');
  const [subscriptionDuration, setSubscriptionDuration] = useState('30');

  const handleSubscriptionType = (type: string) => {
    setSubscriptionType(type);
  };
  const handleStartDate = (date: string) => {
    setStartDate(date);
  };

  const handleSubscriptionDuration = (duration: string) => {
    setSubscriptionDuration(duration);
  };

  const calculatedDurationEndDate = () => {
    if (startDate === null) return;

    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + parseInt(subscriptionDuration));
    const year = end.getFullYear();
    const month = (end.getMonth() + 1).toString().padStart(2, '0');
    const day = end.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="w-full h-full p-4 bg-white rounded-xl mt-2 flex flex-col gap-4 lg:gap-8">
        <p className="font-semibold text-sm">Select Subscription Type</p>
        <div className="flex gap-3 lg:gap-8 items-center">
          <button
            onClick={() => handleSubscriptionType('DAILY')}
            className={`px-1 cursor-pointer lg:px-4 text-sm py-1 border-1 rounded-md ${subscriptionType === 'DAILY' ? 'bg-black text-main-bg' : ''}`}
          >
            Daily
          </button>
          <button
            onClick={() => handleSubscriptionType('WEEKLY')}
            className={`px-1 cursor-pointer lg:px-4 text-sm py-1 border-1 rounded-md ${subscriptionType === 'WEEKLY' ? 'bg-black text-main-bg' : ''}`}
          >
            Weekly
          </button>
          <button
            onClick={() => handleSubscriptionType('CUSTOM')}
            className={`px-1 cursor-pointer lg:px-4 text-sm py-1 border-1 rounded-md ${subscriptionType === 'CUSTOM' ? 'bg-black text-main-bg' : ''}`}
          >
            Custom
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col mt-2 gap-2">
            <label htmlFor="" className="text-sm">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => handleStartDate(e.target.value)}
              className="p-2 text-sm rounded-md  outline-1"
            />
          </div>
          <div className="flex flex-col mt-2 gap-2">
            <label className="text-sm" htmlFor="">
              End Date
            </label>
            <input
              type="date"
              value={calculatedDurationEndDate()}
              readOnly
              disabled
              className="p-2 text-sm rounded-md  outline-1"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Subscription Duration</label>
          <select
            onChange={(e) => handleSubscriptionDuration(e.target.value)}
            className="p-2 outline-1 rounded-md text-sm"
            name="subscription_duration"
            id=""
          >
            <option value="30">1 month</option>
            <option value="90">3 months</option>
            <option value="180">6 months</option>
            <option value="365">12 months</option>
          </select>
        </div>

        {subscriptionType === 'WEEKLY' && (
          <div className="flex flex-col gap-2">
            <p>Select the days of delivery</p>
            <WeekSelector />
          </div>
        )}

        {subscriptionType === 'CUSTOM' && (
          <div className="flex flex-col gap-2">
            <p>Select the dates of delivery</p>
            <DateSelector />
          </div>
        )}
      </div>
    </>
  );
};

export default SubscriptionSelector;
