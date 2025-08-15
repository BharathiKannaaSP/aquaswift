import React from 'react';
import AnimatedTitle from '../animations/AnimatedTitle';
import { adaptiveServiceFeatures } from '../constants/AdaptiveServiceFeaturesConstants';

const AdaptiveServiceFeatures = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full overflow-auto!">
      <div className="w-full lg:w-1/2 p-8">
        <div className="sticky top-12">
          <AnimatedTitle
            id="adaptiveService"
            variant="dark"
            title="Designed for You. Built to Evolve with You"
            className="text-xl md:text-4xl lg:text-7xl tracking-normal leading-tight"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-8 space-y-8">
        {adaptiveServiceFeatures.map((service) => (
          <div key={service.title} className="flex items-center gap-4">
            <img className="w-8 h-8" src={service.img} alt={service.title} />
            <div>
              <h1 className="text-lg">{service.title}</h1>
              <span className="text-sm text-gray">{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveServiceFeatures;
