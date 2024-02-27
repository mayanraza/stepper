import React from "react";
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Details = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">

<div className="step">
        <h1>Step # 2</h1>
        <br />
        <h3>Details</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ad perferendis minima ab porro.</p>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
          {""}
          Name
        </div>

        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={userData["username"] || ""}
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2 mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Email
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              value={userData["password"] || ""}
            />
          </div>
        </div>

        <div className="w-1/2 mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Phone Number
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              placeholder="Password"
              name="password"
              type="number"
              onChange={handleChange}
              value={userData["password"] || ""}
            />
          </div>
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {""}
          Anything else you'd like to share?
        </div>

        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <textarea
            className="p-1 px-2 appearance-none outline-none w-full h-30 text-gray-800"
            placeholder="Enter your text"
            name="additionalInfo"
            onChange={handleChange}
            // value={userData["username"] || ""}
          />
        </div>
      </div>

      <a className="mt-4 flex justify-center" href="/">
        <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline border-gray-300 rounded-lg focusLshadow-outline hover:bg-green-500 hover:text-green-100 text-center">
          Send Request
        </button>
      </a>
    </div>
  );
};

export default Details;
