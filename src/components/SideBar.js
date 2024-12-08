import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const stockData = useSelector((store) => store.input.buyInput);
  const navigate = useNavigate();

  const handleDetails = (stock) => {
    //receive that stocksetail as a stock
    //navigate to detailed trade page with stock detail passed for particular trade
    navigate("/DetailedTrade", { state: stock });
  };

  return (
    <div className="w-3/12 border-2 bg-gray-50 p-4 rounded-lg shadow-lg">
      <ul className="space-y-2">
        {stockData.map((list, index) => (
          <li key={index}>
            <button
              className="w-full text-left bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition flex justify-between items-center"
              onClick={() => handleDetails(list)} // This will pass the function reference to handleDetails when the button is clicked
              //pass stock detail as a state
            >
              <span className="font-medium">
                {index + 1}. {list.stockName.toUpperCase()}
              </span>
              <span className="text-sm text-gray-200">{list.buyDate}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
