import { useScrollLock } from '../sharedFunctions/useScrollLock';
import { IoMdClose } from 'react-icons/io';
import Separator from './Separator';
import CartPanel from './CartPanel';

interface PeekPanelProps {
  activePanel: null | string;
  onClose: () => void;
}

const PeekPanel = ({ activePanel, onClose }: PeekPanelProps) => {
  useScrollLock(!!activePanel);

  return (
    <>
      {/* // Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 bg-opacity-50 transition-opacity duration-300 z-50
            ${activePanel ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      {/*Overlay ends */}

      <div
        className={`p-6 w-full lg:w-auto h-full fixed  top-0 right-0 bg-white z-50  transform transition-transform duration-300 ${activePanel ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className=" flex justify-between items-center gap-8">
          <h2 className="text-xs uppercase">{activePanel}</h2>
          <IoMdClose size={20} onClick={onClose} className="cursor-pointer" />
        </div>

        {activePanel === 'Delivery Instructions' && (
          <div className="mt-10">
            <p>Deliveries:</p>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-10 text-sm">
              {/* Row 1 */}
              <span>Home Delivery</span>
              <span>24 hours</span>
              <span>
                ₹20 <span className="text-gray">(Free delivery on orders above ₹500)</span>
              </span>

              {/* Row 2 */}
              <span>Bulk / Event Delivery (20L cans or 200ml bottles)</span>
              <span>Scheduled as per order</span>
              <span>Cost calculated based on quantity (may be free for large orders)</span>

              {/* Row 3 */}
              <span>Express Delivery</span>
              <span>Same-day priority delivery</span>
              <span>Cost: ₹100 (fixed), not eligible for free delivery</span>
            </div>

            <div className="mt-10">
              <Separator variant="dark" />
            </div>
            <div className="mt-10">
              <p>Returns and cancellations:</p>
              <ul className="mt-2 list-disc list-inside text-sm flex flex-col gap-3">
                <li>
                  You can return or cancel your order within 30 days (but only 14 days for large
                  bulk or event orders).
                </li>
                <li>AquaSwift will pick up the return for free.</li>
                <li>
                  You can’t return opened or used water cans, because of hygiene and safety reasons.
                </li>
                <li>Any promotional or sealed products must stay sealed to be returned.</li>
                <li>
                  Bulk water deliveries must be returned with their original packaging and labels.
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <Separator variant="dark" />
            </div>
            <div className="mt-10 text-sm flex flex-col gap-1">
              <p>Need help?</p>
              <span>
                Email:{' '}
                <a
                  href="mailto: support@aquaswift.com"
                  className="underline underline-offset-4 cursor-pointer"
                >
                  support@aquaswift.com
                </a>
              </span>
              <span>
                Phone:{' '}
                <a
                  href="tel: +916383680011"
                  className="underline underline-offset-4 cursor-pointer"
                >
                  +91 6383680011
                </a>
              </span>
            </div>
          </div>
        )}

        {activePanel === 'Additional Information' && (
          <div className="mt-10">
            <div className="w-full lg:w-96 flex flex-col gap-6">
              <p>Manufactured by:</p>
              <span className="text-sm">
                For Manufactured by please see product label Marketed by: Bisleri International Pvt
                Ltd WEH, Andheri (East), Mumbai- 400099, Maharashtra.
              </span>
              <Separator variant="dark" />

              <div className="flex items-center gap-2">
                <p>Net Quantity:</p>
                <span className="text-sm ml-4">20 Litre</span>
              </div>

              <div className="flex items-center gap-2">
                <p>Customer care:</p>
                <span className="text-sm">1800-121-1007 | wecare@bisleri.co.in</span>
              </div>
              <div className="flex items-center gap-2">
                <p>Country of Origin:</p>
                <span className="text-sm">Made in India.</span>
              </div>
              <div className="flex items-center gap-2">
                <p>Self Life:</p>
                <span className="text-sm">Best Before Three Month From Manufacture</span>
              </div>
            </div>
          </div>
        )}

        {activePanel === 'Cart' && (
          <>
            <CartPanel />
            <div className="fixed bottom-0 left-0 z-50 bg-white border-0 border-t-1 w-full px-6 py-4 h-16">
              <div className="flex justify-between items-center">
                <button className="border-1 p-2 cursor-pointer px-8">View Cart</button>
                <button className="border-1 p-2 cursor-pointer px-8 bg-black text-main-bg">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PeekPanel;
