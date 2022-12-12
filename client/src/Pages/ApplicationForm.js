import background from "../static/bg.jpg";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const ApplicationForm = () => {
  const states = [
    "Select",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState(18);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [batch, setBatch] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let batchNo = 1;
    if (batch === "6-7AM") batchNo = 1;
    else if (batch === "7-8AM") batchNo = 2;
    else if (batch === "8-9AM") batchNo = 3;
    else if (batch === "5-6PM") batchNo = 4;
    batchNo = parseInt(batchNo);
    const data = {
      firstName,
      lastName,
      mobile,
      age,
      address,
      city,
      state,
      zip,
      batchNo,
    };

    await axios
      .post("https://yogaform-g5lcgbvxna-ue.a.run.app/api/application", data)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        setMessage(err.response.data);
      });
  };

  return (
    <div>
      <div
        className="absolute top-0 w-full h-full bg-white-500"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
        }}
      ></div>
      <div class="flex justify-end mr-6">
        See all registered users&nbsp;
        <Link to="/applicationlist" class="text-red-600">
          here{" "}
        </Link>
      </div>
      <div class="text-3xl flex justify-center align-middle mt-10 mb-10">
        Yoga Application Form
      </div>
      <div class="flex justify-center align-center">
        <form class="w-full max-w-lg ">
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Saurav"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="mobile-number"
              >
                Mobile Number
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="mobile-number"
                type="text"
                placeholder="1234567890"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>
            <div class="w-full md:w-1/3 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Age
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="22"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="address"
              >
                Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                type="address"
                placeholder="Apartment, Block, Area"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  {states.map((state) => {
                    return <option>{state}</option>;
                  })}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="302031"
                onChange={(e) => {
                  setZip(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="w-full mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-batch"
            >
              Batch
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-batch"
                onChange={(e) => {
                  setBatch(e.target.value);
                }}
              >
                <option>Select Batch</option>
                <option>6-7AM</option>
                <option>7-8AM</option>
                <option>8-9AM</option>
                <option>5-6PM</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="mt-4 flex align-middle justify-center">
            <button
              class="bg-blue-400 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-10 text-lg border border-blue-400 hover:border-transparent rounded"
              onClick={handleSubmit}
            >
              Submit and Pay
            </button>
          </div>
          <div class="block uppercase tracking-wide text-red-500 text-xs font-bold mt-4">
            {message}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
