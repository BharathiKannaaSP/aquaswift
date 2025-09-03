import React from 'react';
import Review from './Review';

const Reviews = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="mt-2">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Review key={index} />
            ))}

          <div className="mt-10">
            <h2>Add a review</h2>
            <form>
              <textarea
                rows={5}
                cols={30}
                placeholder="Your opinion about the product"
                className="border-1 rounded-lg p-2"
              />
              <div className="flex gap-30">
                <div className="gap-2 flex items-center">
                  <span>Stars</span>
                  <select name="reviewStar" id="reviewStar" className="p-2 border-1">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                <button type="submit" className="bg-black text-main-bg px-4 rounded-md">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
