import React from "react";
import BuySideInput from "./BuySideInput";
import SellSideInput from "./SellSideInput";

const InputContainer = () => {
  return (
    <div className="w-12/12 border-2 ">
      <div className=" border-2">
        <h2 className="text-4xl text-center p-5">Enter your Trade Details</h2>
        <p className=" text-lg text-center pb-3 ">
          Enter your trade details in the box to easily track and manage your
          trades effectively (Specially made for Swing Trading).
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-6/12">
          <BuySideInput />
        </div>
        <div className="w-6/12">
          <SellSideInput />
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
