import React from 'react';
import { highlights } from '../constants/HighLights';

const HighLights = () => {
  return (
    <div className="relative w-full h-full px-2 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="h-80 border-b-1 border-r-1 border-l-0 border-t-1 border-dashed border-gray-600"
          >
            <div className="flex flex-col justify-between  h-80 p-4">
              <img className="w-16 h-16 object-cover" src={highlight.img} alt={highlight.title} />
              <div className="h-25">
                <h2 className="text-xl font-normal">{highlight.title}</h2>
                <span className="text-sm">{highlight.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighLights;
