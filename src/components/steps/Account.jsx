import React from "react";
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <div className="step">
        <h1>Step # 1</h1>
        <br />
        <p>What is your monthly digital marketing budget?</p>
      </div>
      <br />
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <button
          type="button" // Use "button" type to prevent form submission
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onClick={handleChange} // Replace with your click handler
        >
          &lt; $1,000/mo
        </button>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <button
          type="button" // Use "button" type to prevent form submission
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onClick={handleChange} // Replace with your click handler
        >
          $1,000 - $2,000
        </button>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <button
          type="button" // Use "button" type to prevent form submission
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onClick={handleChange} // Replace with your click handler
        >
          $2,000 - $5,000
        </button>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <button
          type="button" // Use "button" type to prevent form submission
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onClick={handleChange} // Replace with your click handler
        >
          $5,000 - $10,000
        </button>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <button
          type="button" // Use "button" type to prevent form submission
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onClick={handleChange} // Replace with your click handler
        >
          $10,000 - $25,000
        </button>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <button
          type="button" // Use "button" type to prevent form submission
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          onClick={handleChange} // Replace with your click handler
        >
          $25,000 +
        </button>
      </div>
    </div>
  );
};

export default Account;
