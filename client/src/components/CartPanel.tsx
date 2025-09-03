import Separator from './Separator';

const CartPanel = () => {
  return (
    <>
      <div className="py-6 px-6 w-full  overflow-x-hidden custom-scroll max-h-[432px] ">
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <img
            className="w-30 h-32 object-cover"
            src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
            alt="cart-1"
          />
          <div className="flex gap-2 flex-col">
            <p className="w-64 truncate">
              Lorem ipsum dolor, sit
              ajaskjdbkasbdkjbaskdbkjasbdkaskdbkasjbdkjasbdkbaksdaskckasbkdbqwkbdkjasbkjdbasjkbdkjm
            </p>
            <p>Quantity - 1</p>
            <p>20 Litre</p>
          </div>
          <div>
            <p className="font-semibold">Rs. 95/-</p>
          </div>
        </div>
        <div className="text-end">
          <button className="text-red-400 cursor-pointer">Remove</button>
        </div>
        <Separator variant="dark" />
        {/* 2 */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <img
            className="w-30 h-32 object-cover"
            src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
            alt="cart-1"
          />
          <div className="flex gap-2 flex-col">
            <p className="w-64 truncate">
              Lorem ipsum dolor, sit
              ajaskjdbkasbdkjbaskdbkjasbdkaskdbkasjbdkjasbdkbaksdaskckasbkdbqwkbdkjasbkjdbasjkbdkjm
            </p>
            <p>Quantity - 1</p>
            <p>20 Litre</p>
          </div>
          <div>
            <p className="font-semibold">Rs. 95/-</p>
          </div>
        </div>
        <div className="text-end">
          <button className="text-red-400 cursor-pointer">Remove</button>
        </div>
        <Separator variant="dark" />
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <img
            className="w-30 h-32 object-cover"
            src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
            alt="cart-1"
          />
          <div className="flex gap-2 flex-col">
            <p className="w-64 truncate">
              Lorem ipsum dolor, sit
              ajaskjdbkasbdkjbaskdbkjasbdkaskdbkasjbdkjasbdkbaksdaskckasbkdbqwkbdkjasbkjdbasjkbdkjm
            </p>
            <p>Quantity - 1</p>
            <p>20 Litre</p>
          </div>
          <div>
            <p className="font-semibold">Rs. 95/-</p>
          </div>
        </div>
        <div className="text-end">
          <button className="text-red-400 cursor-pointer">Remove</button>
        </div>
        <Separator variant="dark" />{' '}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <img
            className="w-30 h-32 object-cover"
            src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
            alt="cart-1"
          />
          <div className="flex gap-2 flex-col">
            <p className="w-64 truncate">
              Lorem ipsum dolor, sit
              ajaskjdbkasbdkjbaskdbkjasbdkaskdbkasjbdkjasbdkbaksdaskckasbkdbqwkbdkjasbkjdbasjkbdkjm
            </p>
            <p>Quantity - 1</p>
            <p>20 Litre</p>
          </div>
          <div>
            <p className="font-semibold">Rs. 95/-</p>
          </div>
        </div>
        <div className="text-end">
          <button className="text-red-400 cursor-pointer">Remove</button>
        </div>
        <Separator variant="dark" />{' '}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <img
            className="w-30 h-32 object-cover"
            src="https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwff6a45f6/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/TwentyLiterFrontPage.png"
            alt="cart-1"
          />
          <div className="flex gap-2 flex-col">
            <p className="w-64 truncate">
              Lorem ipsum dolor, sit
              ajaskjdbkasbdkjbaskdbkjasbdkaskdbkasjbdkjasbdkbaksdaskckasbkdbqwkbdkjasbkjdbasjkbdkjm
            </p>
            <p>Quantity - 1</p>
            <p>20 Litre</p>
          </div>
          <div>
            <p className="font-semibold">Rs. 95/-</p>
          </div>
        </div>
        <div className="text-end">
          <button className="text-red-400 cursor-pointer">Remove</button>
        </div>
        <Separator variant="dark" />
      </div>

      {/* SubTotal Section */}
      <div>
        <div className="mt-4  lg:mt-10 flex items-center justify-between text-sm">
          <p>Subtotal</p>
          <p>Rs. 560</p>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <p>Delivery Fee</p>
          <p>Free</p>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm font-semibold">
          <div>
            <p className="uppercase">TOTAL</p>
            <span className="font-medium text-xs">(Taxes included)</span>
          </div>
          <p>Rs. 560.00</p>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
