import React from 'react';
import VideoPlayer from './VideoPlayer';
import { iconData, productCategory } from '../constants/ProductCategoryConstants';
import AnimatedButton from '../animations/AnimatedButton';
import { useNavigate } from 'react-router';

const ProductCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full p-6 relative flex flex-col gap-4 ">
      {productCategory.map((product) => (
        <div
          style={{ backgroundColor: 'black' }}
          className="flex flex-col lg:flex-row text-main-bg  rounded-2xl gap-8 p-8"
        >
          <div className="flex-1 gap-8 flex flex-col">
            <h1 className="text-3xl">{product.title}</h1>
            <p className="text-sm">{product.description}</p>
            <span className="text-xs">{product.brandTagline}</span>
            <div className="flex items-center gap-8">
              {iconData.map((icon) => (
                <div key={icon.label} className="flex flex-col items-center text-sm gap-2">
                  <img src={icon.src} className="w-10 h-10 object-cover rounded-full" />
                  <span>{icon.label}</span>
                </div>
              ))}
              <div className="mt-1">
                <h1 className="text-4xl font-light">{product.pHLevel}</h1>
                <span>pH level</span>
              </div>
            </div>
            <AnimatedButton
              onClick={() => navigate(`/product/${product.title}`)}
              containerClass="mt-4"
              label="Buy Now"
              fullWidth
              variant="light"
            />
          </div>
          <div className="flex-1 mt-4">
            <VideoPlayer playIcon src={product.video} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
