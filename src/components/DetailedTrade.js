import React from "react";
import { useLocation } from "react-router-dom";

const DetailedTrade = () => {
  const location = useLocation();
  const stockDetails = location.state; // Access the passed stock details

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">Trade Details</h1>
      {stockDetails ? (
        <div>
          <p className="mb-2">
            <strong>Stock Name:</strong> {stockDetails.stockName.toUpperCase()}
          </p>
          <p className="mb-2">
            <strong>Buy Date:</strong> {stockDetails.buyDate}
          </p>
          <p className="mb-2">
            <strong>Quantity:</strong> {stockDetails.qty}
          </p>
          <p className="mb-2">
            <strong>Buy Price:</strong> {stockDetails.buyPrice}
          </p>
          <p className="mb-2">
            <strong>Total:</strong> {stockDetails.total}
          </p>
          <p className="mb-2">
            <strong>Reason to Buy:</strong> {stockDetails.reasonToBuy}
          </p>
          <p className="mb-2">
            <strong>Link:</strong>
            <a
              href={stockDetails.referanceBuyImg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline"
            >
              {stockDetails.referanceBuyImg}
            </a>
          </p>
        </div>
      ) : (
        <p>No details available.</p>
      )}
    </div>
  );
};

export default DetailedTrade;
