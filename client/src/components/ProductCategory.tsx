import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { iconData, productCategory } from '../constants/ProductCategoryConstants';

const ProductCategory = () => {
  const [activeCard, setActiveCard] = useState(1);

  const getCardWidth = (cardNumber: number) => (activeCard === cardNumber ? 'w-[80%]' : 'w-[10%]');

  return (
    <div className="w-full h-full lg:h-screen px-4 py-6 relative">
      <div className="flex gap-2 h-full">
        {productCategory.map((product, index) => (
          <div
            key={product.id}
            style={{ backgroundColor: product.color }}
            className={`relative rounded-2xl transition-all duration-1000 ${getCardWidth(index)}`}
            onClick={() => setActiveCard(index)}
          >
            {activeCard !== index ? (
              <div className="transform h-full rotate-90 cursor-pointer flex justify-center items-center">
                <h1 className="text-sm lg:text-4xl text-main-bg">{product.title}</h1>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col md:flex-row gap-2">
                <div className="max-w-2xl flex-1 flex flex-col justify-between p-8 text-main-bg">
                  <div>
                    <h1 className="text-3xl p-2 flex-1 lg:text-8xl">{product.title}</h1>
                    <p className="text-sm p-2">{product.brandTagline}</p>
                    <p className="text-xs lg:text-sm p-2">{product.description}</p>
                  </div>

                  <div className="hidden lg:flex w-full gap-5 lg:gap-12 pt-12 text-nowrap text-xs lg:text-sm">
                    {iconData.map((icon) => (
                      <div key={icon.label} className="flex flex-col items-center gap-2">
                        <img
                          className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
                          src={icon.src}
                          alt={icon.label}
                        />
                        <span>{icon.label}</span>
                      </div>
                    ))}
                    <div className="flex flex-col items-center gap-2">
                      <img
                        className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
                        src="https://media.istockphoto.com/id/1335551871/vector/ph-value-icon.jpg?s=612x612&w=0&k=20&c=cG026MkqI9Nqs-Zja74n3Rnh817pI6dFdHkYaFdAzxU="
                        alt="pH Level"
                      />
                      <span>pH level - {product.pHLevel}</span>
                    </div>
                  </div>

                  <button className="p-2 border-1 rounded-full mt-4 cursor-pointer hover:bg-main-bg hover:text-black hover:border-1 border-main-bg duration-300 transition-all">
                    Buy Now
                  </button>
                </div>

                <div className="flex-1">
                  <VideoPlayer src={product.video} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
