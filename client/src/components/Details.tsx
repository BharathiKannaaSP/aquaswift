import React from 'react';
import Separator from './Separator';
import { personalFeatures, professionalFeatures } from '../constants/DetailsConstants';

const Details = () => {
  return (
    <div className="w-full p-4 md:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row justify-between gap-4 h-full">
        <div className="flex-1 rounded-xl p-4 bg-white">
          <h1 className="text-4xl mb-2">Personal</h1>
          <p>For individuals who want clean water, anytime, anywhere</p>
          <Separator variant="dark" />
          {personalFeatures.map((personalFeature) => (
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <h2>{personalFeature.title}</h2>
                <p className="text-sm text-gray">{personalFeature.description}</p>
                <Separator variant="dark" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl p-4 bg-black text-main-bg">
          <h1 className="text-4xl mb-2">Professional</h1>
          <p>For offices and businesses needing seamless water management</p>
          <Separator variant="light" />
          {professionalFeatures.map((professionalFeature) => (
            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <h2>{professionalFeature.title}</h2>
                <p className="text-sm text-gray">{professionalFeature.description}</p>
                <Separator variant="light" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
