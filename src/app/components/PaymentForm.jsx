import React from 'react';

export default function PaymentForm() {
  return (
    <div className="min-h-min  p-8 flex flex-col font-sans">
      
      {/* Top Header Text */}
      <div className="w-full max-w-3xl mb-10">
        <h2 className="text-[#666] text-lg text-center">
          Paypal Payments Gateway Accept Paypal Balance/Credit Card/Debit Card
        </h2>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md flex flex-col items-start">
        <form className="w-64 flex flex-col gap-3">
          
          {/* Categories Dropdown */}
          <div className="flex flex-col">
            <label className="text-[#666] text-[15px] mb-0.5">Categories</label>
            <select className="border border-gray-400 p-0.5 text-sm text-gray-700 bg-white focus:outline-none rounded-sm">
              <option>Author $600.00 USD</option>
              {/* Add more pricing tiers here if needed */}
            </select>
          </div>

          {/* Paper Id Input */}
          <div className="flex flex-col">
            <label className="text-[#666] text-[15px] mb-0.5">Paper Id</label>
            <input 
              type="text" 
              className="border border-gray-400 p-0.5 text-sm focus:outline-none bg-white rounded-sm h-7"
            />
          </div>

          {/* Paper Title Input */}
          <div className="flex flex-col">
            <label className="text-[#666] text-[15px] mb-0.5">Paper Title</label>
            {/* The image shows a darker/thicker border for this specific input */}
            <input 
              type="text" 
              className="border-2 border-gray-800 p-0.5 text-sm focus:outline-none bg-white rounded-sm h-7" 
            />
          </div>

          
          <button 
            type="button" 
            className="mt-2 bg-[#ffc439] hover:bg-[#f4bb33] text-[#003087] font-extrabold text-[15px] py-1 px-4 rounded-full w-32 shadow-sm transition-colors cursor-pointer"
          >
            Buy Now
          </button>
        </form>

        {/* Payment Icons Row */}
        <div className="flex gap-1.5 mt-3">
            {/* 
              Note: Replace these placeholder <div> elements with actual <img> 
              or Next.js <Image /> tags once you download the payment provider logos. 
            */}
            <div className="h-6 w-9 bg-white border border-gray-300 rounded-sm flex items-center justify-center text-[8px] font-bold text-red-600">MC</div>
            <div className="h-6 w-9 bg-white border border-gray-300 rounded-sm flex items-center justify-center text-[8px] font-bold text-blue-600">VISA</div>
            <div className="h-6 w-9 bg-white border border-gray-300 rounded-sm flex items-center justify-center text-[8px] font-bold text-blue-400">AMEX</div>
            <div className="h-6 w-9 bg-white border border-gray-300 rounded-sm flex items-center justify-center text-[8px] font-bold">Pay</div>
            <div className="h-6 w-9 bg-white border border-gray-300 rounded-sm flex items-center justify-center text-[8px] font-bold text-orange-500">Disc</div>
        </div>
      </div>
      
    </div>
  );
}