import React, { SetStateAction, useState } from 'react';
import { quickAnswers } from '../constants/QuickAnswersConstants';
import Separator from './Separator';
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';

const QuickAnswers = () => {
  const [active, setActive] = useState<SetStateAction<number | null>>(null);

  const toggleAccordion = (activeIndex: number | null): void => {
    setActive(active === activeIndex ? null : activeIndex);
  };

  return (
    <div className="relative h-full w-full p-4 md:p-6 lg:p-8">
      <h1 className="text-xl mb-2 md:text-4xl lg:text-6xl">Quick Answers</h1>
      <div className="flex flex-col lg:flex-row  gap-4 ">
        <div className="flex-1">
          <img
            className="object-cover w-full h-full rounded-xl"
            src="https://cdn.prod.website-files.com/679d8b01c23ed7847fc5108f/681a6ce2e15dbd30edcbb3f7_faq_image.avif"
            alt="quickAnswer"
          />
        </div>
        <div className="flex-1">
          {quickAnswers.map((quickAnswer, index) => (
            <div className="mt-4" key={index}>
              <Separator variant="dark" />
              <div
                onClick={() => toggleAccordion(index)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleAccordion(index)}
                role="button"
                tabIndex={0}
                className="cursor-pointer select-none"
              >
                <div className="flex items-center justify-between w-full">
                  <h2>{quickAnswer.question}</h2>
                  {active !== index ? (
                    <IoAddOutline size={40} className="transition-transform duration-300" />
                  ) : (
                    <IoCloseOutline
                      size={40}
                      className="transition-transform duration-300 rotate-180"
                    />
                  )}
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    active === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray">{quickAnswer.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAnswers;
