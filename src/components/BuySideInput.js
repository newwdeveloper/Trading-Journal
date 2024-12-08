import React, { useState, useRef, useEffect } from "react";

const BuySideInput = () => {
  const [entryData, setEntryData] = useState({});
  const [totalAmount, setTotalAmount] = useState(0); // State for total amount
  const buyDateRef = useRef();
  const stockNameRef = useRef();
  const buyPriceRef = useRef();
  const qtyRef = useRef();
  const referenceBuyImgRef = useRef();
  const reasonToBuyRef = useRef();

  // Function to update total amount when qty or buyPrice changes
  const handleQtyPriceChange = () => {
    const qty = parseFloat(qtyRef.current.value) || 0;
    const buyPrice = parseFloat(buyPriceRef.current.value) || 0;
    setTotalAmount(qty * buyPrice); // Update total amount
  };

  const handleEntryData = () => {
    const qty = parseFloat(qtyRef.current.value);
    const buyPrice = parseFloat(buyPriceRef.current.value);
    const newBuyEntry = {
      buyDate: buyDateRef.current.value,
      stockName: stockNameRef.current.value,
      buyPrice: buyPrice,
      qty: qty,
      total: totalAmount, // Use the state for total
      referanceBuyImg: referenceBuyImgRef.current.value,
      reasonToBuy: reasonToBuyRef.current.value,
    };
    setEntryData(newBuyEntry);
    console.log("Entry Data: ", entryData);
  };

  useEffect(() => {
    handleQtyPriceChange(); // Recalculate total on initial render in case qty and price are already filled
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-100 shadow-lg rounded-xl">
      <div className="border-2 flex items-center justify-between gap-3 bg-lime-400 p-3 rounded-xl">
        <label className="text-sm font-medium">BUY Date</label>
        <input
          className="bg-lime-400 border-2 p-2 border-slate-600 rounded-xl w-2/3 text-sm"
          type="date"
          ref={buyDateRef}
          alt="date"
          placeholder="Enter buy date"
        />
      </div>

      <div className="p-3 flex justify-between gap-3 items-center border-2 rounded-xl mt-3 bg-white">
        <label className="text-sm font-medium">Stock Name</label>
        <input
          className="border-2 border-slate-600 rounded-xl p-2 w-2/3 text-sm uppercase"
          ref={stockNameRef}
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
            ref={buyPriceRef}
            type="number"
            alt="stock name"
            placeholder="Enter Buy Price"
            onChange={handleQtyPriceChange} // Recalculate total on price change
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-sm font-medium">Qty</label>
          <input
            className="border-2 border-slate-600 rounded-xl p-2 w-full text-sm"
            ref={qtyRef}
            type="number"
            alt="stock name"
            placeholder="Enter Quantity"
            onChange={handleQtyPriceChange} // Recalculate total on qty change
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-sm font-medium">Tot Amt</label>
          <input
            className="border-2 border-slate-600 rounded-xl p-2 w-full text-sm"
            value={totalAmount} // Automatically update based on qty and price
            readOnly // Make it read-only
            alt="total amount"
            placeholder="Total Amount"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3 border-2 rounded-xl mt-3 bg-white">
        <label className="text-sm font-medium">Reference Image</label>
        <input
          className="border-2 p-2 rounded-xl w-full text-sm"
          ref={referenceBuyImgRef}
          type="url"
          alt="stock image"
          placeholder="Input your image URL"
        />
      </div>

      <div className="flex flex-col gap-2 p-3 border-2 rounded-xl mt-3 bg-white">
        <label className="text-sm font-medium">Reason to Buy</label>
        <textarea
          className="border-2 p-2 rounded-xl w-full text-sm h-20 resize-none uppercase"
          ref={reasonToBuyRef}
          placeholder="Explain why you are buying"
        ></textarea>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleEntryData}
          className="bg-lime-500 text-white py-2 px-4 rounded-xl shadow-md hover:bg-lime-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BuySideInput;
