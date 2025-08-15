import React from 'react';
import { mineralsInWater } from '../constants/MineralsInWaterConstants';

const MineralCards = () => {
  return (
    <div className="relative px-8 flex gap-4 marquee-track">
      {mineralsInWater.map((item) => (
        <div
          key={item.symbol}
          className="relative w-74  lg:w-[30%] h-100  lg:h-[600px]  bg-main-bg flex-shrink-0 rounded-xl"
        >
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between absolute top-4 left-4 z-2 text-main-bg">
              <div className="w-40 h-full border-r-1 border-0 border-b-1">
                <h1 className="text-7xl">
                  {item.quantity}
                  <span className="absolute top-0 text-sm"> mg/L</span>
                </h1>
              </div>
              <div className="w-40 px-3 border-0 border-b-1 h-18 flex items-start flex-col">
                <p className="text-xl xl:text-3xl">{item.name}</p>
                <span>{item.symbol}</span>
                <span></span>
              </div>
            </div>
          </div>
          <img
            src={item.img}
            alt="mineral_cards_glutathione"
            className="w-full h-full rounded-xl brightness-50 object-cover"
          />
          <div className="absolute bottom-2 z-2 w-full left-2 lg:left-4 text-main-bg text-sm">
            <span className="text-wrap h-14 block">{item.benefits}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MineralCards;
