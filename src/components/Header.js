import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer :hover:text-4xl hover:text-neutral-50 text-3xl text-center border-2 p-2 bg-slate-500 rounded-lg py-4 md:text-4xl"
        >
          TRADING JOURNAL
        </h1>
      </div>
    </div>
  );
};

export default Header;
