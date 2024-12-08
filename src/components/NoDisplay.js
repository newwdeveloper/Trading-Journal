import React from "react";
import Pic from "../assets/no-projects.png";
import { useNavigate } from "react-router-dom";

const NoDisplay = () => {
  const navigate = useNavigate();
  const handleNewProject = () => {
    navigate("/InputTrade");
  };
  return (
    <div className="w-12/12 mx-auto h-screen flex flex-col items-center gap-6 bg-gray-100 p-6 rounded-xl shadow-lg">
      <div className="text-center">
        <img
          className="w-1/3  h-full mx-auto object-contain"
          src={Pic}
          alt="no display"
        />
        <p className="mt-4 text-gray-700 font-medium">
          Click on the button below to add a new trade entry
        </p>
      </div>
      <div>
        <button
          onClick={handleNewProject}
          className="bg-lime-500 text-white py-2 mt-10 px-6 rounded-xl shadow-md hover:bg-lime-600 transition"
        >
          Add Trade
        </button>
      </div>
    </div>
  );
};

export default NoDisplay;
