import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        onClick={() => handleClick()}
        className={`left 
    ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}
  `}
      >
        <span style={{ marginTop:"10px",fontSize: "17px" }}> &#129028;</span> Go Back
      </button>

      <button onClick={() => handleClick("next")} className=" right ">
        {currentStep === steps - 1 ? "Confirm" : "Next"} <span style={{ marginTop:"10px",fontSize: "17px" }}> &#129030;</span>
      </button>
    </div>
  );
};

export default StepperControl;
