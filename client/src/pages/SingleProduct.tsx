import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import AnimatedButton from '../animations/AnimatedButton';
import SubscriptionSelector from '../components/SubscriptionSelector';
import SingleProductBottom from '../components/SingleProductBottom';

const SingleProduct = () => {
  const [checked, setChecked] = useState(false);
  const handleSubscription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="w-full h-full relative pt-20 bg-white">
      <div>
        {/* // Single Product Top */}
        <div className="flex flex-col lg:flex-row">
          <div className="mt-24">
            <div className="flex flex-col gap-4 w-32 h-full">
              <img
                className="w-20 h-20 object-cover border-1 p-2 mb-2 ml-4"
                src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
                alt=""
              />
              <img
                className="w-20 h-20 object-cover border-1 p-2 mb-2 ml-4"
                src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwf6cfc5ef/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterPageInfo.png"
                alt=""
              />
              <img
                className="w-20 h-20 object-cover border-1 p-2 mb-2 ml-4"
                src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwb70656d7/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterSmallImage.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex-2 m-2 h-180 w-full rounded-md bg-white ">
            <img
              className="h-full w-full object-cover rounded-md"
              // src="https://shop.mango.com/assets/rcs/pics/static/T1/fotos/outfit/S/17071143_09-99999999_01.jpg?imwidth=2048&imdensity=1&ts=1744733200221"
              // src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwf6cfc5ef/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterPageInfo.png"
              // src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwb70656d7/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterSmallImage.png"
              src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
              alt="active_img"
            />
          </div>
          <div className="flex-3 p-12 flex flex-col gap-4">
            <h1 className="text-3xl">Bisleri 20 L Packaged Drinking Water</h1>
            <span className="text-gray text-xs">Product ID - cAvbeat122011200433</span>
            <span className="text-sm text-gray">
              Be it use at home or in office, it ensures that you have pure, safe and healthy
              drinking water available all the time. In terms of its usage, hygiene is best
              maintained with the push tap and stand mechanism.
            </span>
            <p className="text-5xl">
              ₹95/- <span className="text-sm text-gray">per jar</span>
            </p>
            <p>(Inclusive all taxes)</p>

            <div className="mt-8 flex items-center gap-8">
              <h2 className="text-lg">Select Quantity</h2>
              <div className="w-46 h-12 flex justify-center gap-8 items-center bg-black text-main-bg rounded-xl">
                <button>
                  <FaMinus size={20} className="cursor-pointer ml-2" />
                </button>
                <div className=" bg-main-bg text-black rounded-md p-2">10</div>
                <button>
                  <FaPlus size={20} className="cursor-pointer mr-2" />
                </button>
              </div>
            </div>
            <div className="w-full p-4 border-dashed border-1 border-green-400 flex flex-col gap-2 bg-green-100">
              <div className=" flex gap-2 items-center">
                <input type="checkbox" onChange={(event) => handleSubscription(event)} />
                <span className="text-sm">
                  The subscription plan will start min. 24 hrs from the subscription order date.
                  Please check your active subscriptions under the 'My Account's section to know
                  your subscription schedule.
                </span>
              </div>
              {checked && <SubscriptionSelector />}
            </div>
            <div>
              <AnimatedButton
                label="Add to Cart"
                containerClass="bg-black text-white! border-2 rounded-sm p-2!"
                variant="dark"
                size="lg"
              />
            </div>

            <div></div>
          </div>
        </div>
        {/* // Single Product Bottom */}
        <div className="p-4">
          <SingleProductBottom />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
