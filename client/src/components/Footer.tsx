import React from 'react';
import Separator from './Separator';

const Footer = () => {
  return (
    <div className="w-full h-screen bg-black text-main-bg p-8">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mr-8 mt-2">
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
              <h1 className="text-xl lg:text-4xl">AquaSwift</h1>
              <div>
                <p>Be the first to know</p>
                <span className="text-gray text-sm">
                  We’ll send you only what matters — no noise, no spam.
                </span>
                <br />
                <form className="flex gap-2 items-center justify-center mt-4">
                  <input
                    type="email"
                    className="w-full p-2 border-1 rounded-xl"
                    placeholder="Enter e-mail address"
                  />
                  <button
                    type="submit"
                    className="rounded-full p-2 border-1 cursor-pointer text-sm"
                  >
                    Ok
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-2">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-sm">
                <p className="text-gray">Information</p>
                <ul className="flex flex-col gap-1 mt-2">
                  <li>Whats Included</li>
                  <li>Water Quality</li>
                  <li>For Homes</li>
                  <li>For Businesses</li>
                  <li>Quick Answers</li>
                </ul>
              </div>
              <div className="text-sm">
                <p className="text-gray">Social Media</p>
                <ul className="flex flex-col gap-1 mt-2">
                  <a href="https://www.x.com">X &#8599;</a>
                  <a href="">Instagram &#8599;</a>
                  <a href="">LinkedIn &#8599;</a>
                  <a href="">Behance &#8599;</a>
                  <a href="">Dribbble &#8599;</a>
                </ul>
              </div>
              <div className="text-sm">
                <p className="text-gray">Contact</p>
                <a href="">info@aquaswift.com</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Separator variant="light" />
          <div className="flex flex-col gap-2 mt-2 lg:flex-row justify-between text-xs">
            <div className="flex gap-2">
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
            <div>
              <span>2025. AquaSwift. All rights reserved.</span>
              <br />
              <span className="text-gray">Website designed by Bharathi Kannaa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
