import React from "react";

const BuySideInput = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-100 shadow-lg rounded-xl">
      <div className="border-2 flex items-center justify-between gap-3 bg-lime-400 p-3 rounded-xl">
        <label className="text-sm font-medium">BUY Date</label>
        <input
          className="bg-lime-400 border-2 p-2 border-slate-600 rounded-xl w-2/3 text-sm"
          type="date"
          alt="date"
          placeholder="Enter buy date"
        />
      </div>

      <div className="p-3 flex justify-between gap-3 items-center border-2 rounded-xl mt-3 bg-white">
        <label className="text-sm font-medium">Stock Name</label>
        <input
          className="border-2 border-slate-600 rounded-xl p-2 w-2/3 text-sm"
          type="text"
          alt="stock name"
          placeholder="Enter Stock Name"
        />
      </div>

      <div className="p-3 flex justify-between gap-4 items-center border-2 rounded-xl mt-3 bg-white">
        <div className="flex flex-col items-start">
          <label className="text-sm font-medium">Buy Price</label>
          <input
            className="border-2 border-slate-600 rounded-xl p-2 w-full text-sm"
            type="number"
            alt="stock name"
            placeholder="Enter Buy Price"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-sm font-medium">Qty</label>
          <input
            className="border-2 border-slate-600 rounded-xl p-2 w-full text-sm"
            type="number"
            alt="stock name"
            placeholder="Enter Quantity"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3 border-2 rounded-xl mt-3 bg-white">
        <label className="text-sm font-medium">Reference Image</label>
        <input
          className="border-2 p-2 rounded-xl w-full text-sm"
          type="url"
          alt="stock image"
          placeholder="Input your image URL"
        />
      </div>

      <div className="flex flex-col gap-2 p-3 border-2 rounded-xl mt-3 bg-white">
        <label className="text-sm font-medium">Reason to Buy</label>
        <textarea
          className="border-2 p-2 rounded-xl w-full text-sm h-20 resize-none"
          placeholder="Explain why you are buying"
        ></textarea>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-lime-500 text-white py-2 px-4 rounded-xl shadow-md hover:bg-lime-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default BuySideInput;
