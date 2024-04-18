"use client"
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import SalesData from "./SalesData";
import LineChart2 from "./LineChart2";

const Row1 = () => {
  const detail = [
    {
      "id": "Sleep",
      "data": [
        {
          "x": 1,
          "y": 18
        },
        {
          "x": 2,
          "y": 15
        },
        {
          "x": 3,
          "y": 22
        },
        {
          "x": 4,
          "y": 19
        },
        {
          "x": 5,
          "y": 26
        }
      ]
    },
    {
      "id": "Awake",
      "data": [
        {
          "x": 1,
          "y": 27
        },
        {
          "x": 2,
          "y": 28
        },
        {
          "x": 3,
          "y": 15
        },
        {
          "x": 4,
          "y": 15
        },
        {
          "x": 5,
          "y": 26
        }
      ]
    }
  ]
  return (
    <main className="flex gap-5 m-5 max-lg:flex-col">
      <div className="Overall Sales max-lg:w-[90%] w-[45%] shadow-2xl rounded-3xl min-h-[400px] flex flex-col justify-between">
        <div className="main-header flex justify-between items-center p-7 max-lg:p-4 max-md:py-4 max-sm:pb-0 max-sm:flex-col max-sm:items-start">
          <div className="header">
            <p className=" text-sm text-[#606060]">Overall Sleep</p>
            <div className="flex gap-2 items-center">
              <h1 className="text-lg">7 HR</h1>
              <FaArrowTrendUp className=" text-green-600" />
              <span> 13.02%</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <select
                name="period"
                id="period"
                className="bg-slate-200 p-3 rounded-lg"
              >
                <option value="This Month">This Month</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-4 w-full h-full max-lg:p-4 max-md:py-0 max-sm:pt-0" style={{height:"50vh" ,width:"100%"}} >
          <LineChart2 data={detail} />
          {/* <img src="/data.svg" alt="data" className="w-full h-full" /> */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pl-7 max-lg:pl-0 max-sm:grid-cols-1 max-sm:grid-rows-4">
        <SalesData
          iconURL="/icon1.png"
          heading="Healthy Food"
          value="258"
          growth="13.02%"
          timePeriod="From May"
        />
        <SalesData
          iconURL="/icon2.png"
          heading="Sleep"
          value="7hr Avg."
          growth="3.02%"
          timePeriod="From May"
        />
        <SalesData
          iconURL="/icon3.png"
          heading="Self Growth"
          value="4hr per day"
          growth="6.02%"
          timePeriod="From May"
        />
        <SalesData
          iconURL="/icon4.png"
          heading="Money on Junk"
          value="$86.34"
          growth="0.32%"
          timePeriod="From May"
        />
      </div>
    </main>
  );
};

export default Row1;
