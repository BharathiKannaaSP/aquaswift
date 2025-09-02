import { ReactNode, SetStateAction, useState } from 'react';
import Separator from './Separator';
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';

type AccordionProps = {
  accordionArray: {
    question: string | ReactNode;
    answer: ReactNode;
  }[];
};

const Accordion = ({ accordionArray }: AccordionProps) => {
  const [active, setActive] = useState<SetStateAction<number | null>>(null);

  const toggleAccordion = (activeIndex: number | null): void => {
    setActive(active === activeIndex ? null : activeIndex);
  };
  return (
    <div className="mt-4">
      {accordionArray.map((item, index) => (
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
              <h2>{item.question}</h2>
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
                active === index ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm text-gray">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
