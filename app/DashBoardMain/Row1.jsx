"use client"
import React from "react";
import Card from "./Card";
import LineChart from "../Components/LineChart";
import { FaWalking } from "react-icons/fa";


const Row1 = () => {
  const detail = [
    {
      "id": "Walk",
      "data": [
        {
          "x": 2021,
          "y": 26
        },
        {
          "x": 2022,
          "y": 30
        },
        {
          "x": 2023,
          "y": 13
        },
        {
          "x": 2024,
          "y": 15
        },
        
      ]
    },
    {
      "id": " Jog",
      "data": [
        {
          "x": 2021,
          "y": 15
        },
        {
          "x": 2022,
          "y": 24
        },
        {
          "x": 2023,
          "y": 15
        },
        {
          "x": 2024,
          "y": 27
        }
      ]
    },
    {
      "id": "Runnig",
      "data": [
        {
          "x": 2021,
          "y": 20
        },
        {
          "x": 2022,
          "y": 15
        },
        {
          "x": 2023,
          "y": 27
        },
        {
          "x": 2024,
          "y": 17
        }
      ]
    },
    
    
  ]
  return (
    <section className="flex gap-6 lg:w-[96%] mx-4 max-xl:flex-col max-lg:items-center">

      {/* ------------left portion--------------------- */}

      <div className="w-[70%] h-full bg-white drop-shadow-2xl rounded-2xl max-md:w-[90%] max-lg:w-[90%] max-xl:w-[90%]">
        <div className="w-full h-[66px] px-4 py-2 flex justify-between text-[#05004E]">
          <div className="flex flex-col gap-2 items-start w-full">
            <p>Today&apos;s Workout</p>
            <p>March 2024</p>
          </div>
          <div className="flex justify-center items-center p-2 border-2 h-[40px] rounded-md">
            <button className="flex justify-center items-center w-full h-full gap-2">
              <img src="/Export.svg" alt="export" width={30} height={30} />
              <label>Export</label>
            </button>
          </div>
        </div>

        <div className="flex justify-between mb-2 pt-4 px-4 max-md:grid max-md:grid-cols-2 max-lg:grid max-lg:grid-cols-3 max-lg:gap-2 max-lg:justify-center gap-2">
          <Card
            cardbg="#FFE2E5"
            iconURL="/Icon1.svg"
            heading="1K"
            text="Distance"
            percentage="+8%"
          />
          <Card
            cardbg="#FFF4DE"
            iconURL="/Icon2.svg"
            heading="300"
            text="Calories Burn"
            percentage="+5%"
          />
          <Card
            cardbg="#DCFCE7"
            iconURL="/Icon3.svg"
            heading="2"
            text="Time (Hour)"
            percentage="+1.2%"
          />
          <Card
            cardbg="#F3E8FF"
            iconURL="/Icon4.svg"
            heading="8000"
            text="Steps"
            percentage="+0.5%"
          />
        </div>
      </div>


      {/* ----------------right portion------------------- */}

      <div className="w-[560px] h-full bg-white drop-shadow-2xl rounded-2xl max-md:w-[90%] max-lg:w-[90%]">
        <div className="w-full h-full px-4 py-4 flex flex-col gap-2 text-[#05004E]">
          <p className="pb-4">Last 4 year Data</p>
          <div className="flex flex-col justify-center items-center gap-4" style={{height:"26vh"}}>
            <LineChart data={detail} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Row1;
