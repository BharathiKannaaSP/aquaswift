import React, { useState } from 'react';
import PeekPanel from './PeekPanel';
import SingleProductCategories from './SingleProductCategories';
import Reviews from './Reviews';
import Subscription from './Subscription';

const SingleProductBottom = () => {
  const [activePanel, setActivePanel] = useState<null | string>(null);

  const handleOpenPanel = (panel: string) => {
    setActivePanel(panel);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* <Accordion accordionArray={singleProductDetails} /> */}
        <div className="flex-1">
          <div className="p-8 md:p-12 lg:p-20 flex flex-col gap-2">
            <div>
              <h1 className="uppercase text-sm font-medium">Description</h1>
              <span className="text-xs">
                Premium-quality, crystal-clear drinking water packed in a sturdy 20L container.
                Designed for everyday home and office use with a convenient shape for easy handling.
                The container is sealed for hygiene, compatible with standard dispensers, and
                ensures safe, fresh hydration with every pour.
              </span>
            </div>
            <div className="text-sm">
              <p>REF. 17015834</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-8 md:p-12 lg:p-20 flex flex-col gap-4 tracking-wide items-start">
            <button
              onClick={() => handleOpenPanel('Delivery Instructions')}
              className="text-sm font-medium underline underline-offset-4 cursor-pointer"
            >
              Delivery Instructions
            </button>
            <button
              onClick={() => handleOpenPanel('Additional Information')}
              className="text-sm font-medium underline underline-offset-4 cursor-pointer"
            >
              Additional Information
            </button>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-sm">RELATED PRODUCTS</p>
        <SingleProductCategories />
      </div>
      <div className="p-8">
        <p className="text-sm">REVIEWS</p>
        <Reviews />
      </div>

      <Subscription />

      {/* // Peek Panel */}
      <PeekPanel activePanel={activePanel} onClose={handleClosePanel} />
    </>
  );
};

export default SingleProductBottom;
