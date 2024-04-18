"use client"
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { FaTicketSimple } from "react-icons/fa6";
import BarChart from "../Components/BarChart";
import Lines from "../Components/Lines";
import Marks from "../Components/Marks";

export default function Row2() {

  const details = [
    {
      "CALORIES": "2022",
      "2024": 102,
      "2024Color": "hsl(62, 70%, 50%)",
      "burger": 89,
      "burgerColor": "hsl(129, 70%, 50%)",
      "sandwich": 129,
      "sandwichColor": "hsl(85, 70%, 50%)",
      "kebab": 189,
      "kebabColor": "hsl(241, 70%, 50%)",
      "fries": 1,
      "friesColor": "hsl(341, 70%, 50%)",
      "donut": 15,
      "donutColor": "hsl(328, 70%, 50%)"
    },
    {
      "CALORIES": "2023",
      "2024": 128,
      "2024Color": "hsl(323, 70%, 50%)",
      "burger": 87,
      "burgerColor": "hsl(157, 70%, 50%)",
      "sandwich": 131,
      "sandwichColor": "hsl(264, 70%, 50%)",
      "kebab": 8,
      "kebabColor": "hsl(248, 70%, 50%)",
      "fries": 70,
      "friesColor": "hsl(247, 70%, 50%)",
      "donut": 16,
      "donutColor": "hsl(295, 70%, 50%)"
    },
    {
      "CALORIES": "2024",
      "2024": 167,
      "2024Color": "hsl(115, 70%, 50%)",
      "burger": 75,
      "burgerColor": "hsl(151, 70%, 50%)",
      "sandwich": 120,
      "sandwichColor": "hsl(280, 70%, 50%)",
      "kebab": 108,
      "kebabColor": "hsl(60, 70%, 50%)",
      "fries": 60,
      "friesColor": "hsl(275, 70%, 50%)",
      "donut": 170,
      "donutColor": "hsl(115, 70%, 50%)"
    }
  ]

  const detail2 = [
    {
      "id": "BPM",
      "color": "hsl(231, 70%, 50%)",
      "data": [
        {
          "x": "Mon",
          "y": 92
        },
        {
          "x": "Tues",
          "y": 192
        },
        {
          "x": "Wednes",
          "y": 102
        },
        {
          "x": "Thurs",
          "y": 231
        }
      ]
    },
    
  ]
  const revenur = [
    {
      "statement": "it's good",
      "participation": 27,
      "stronglyAgree": 3,
      "agree": 8,
      "disagree": 14,
      "stronglyDisagree": 18
    },
  ]

  return (
    <section>
      <div className="2nd-row flex gap-5 lg:pt-5 mx-4 max-lg:flex-col max-md:items-center">

        {/* ------------Total Revenue--------------------- */}
        <div className="total-revenue lg:w-[40%] w-[90%] rounded-[20px] shadow-2xl px-5 py-5 max-lg:mt-5">
          <h2 className="text-xl mb-3">Total Calories</h2>
          <div className="bar-chart max-lg:flex items-center" style={{height:"50vh"}}>
            <BarChart data={details}  />
          </div>
        </div>

        {/* ------------Customer Satisfaction Graph--------------------- */}
        <div className="customer-satisfaction lg:w-[30%] w-[90%] rounded-[20px] shadow-2xl px-5 py-5">
          <h2 className="text-xl mb-3">HEART RATE</h2>
          <div className="bar-chart" style={{height:"50vh" }}>
            <Lines data={detail2} />
          </div>
          <hr />
          <div className="bar-details flex justify-center mt-5">
            <div className="px-5">
              <div className="">Last Month</div>
              <div>140 bpm</div>
            </div>
            <div className="border-solid border-l-4 border-black h-14"></div>
            <div className="px-5">
              <div>This Month</div>
              <div>120 bpm</div>
            </div>
          </div>
        </div>

        {/* ------------Total Revenue 2--------------------- */}
        <div className="total-revenue lg:w-[25%] w-[90%] rounded-[20px] shadow-2xl px-5 py-5">
          <h2 className="text-xl mb-3">Water Intake</h2>
          <div className="bar-chart max-lg:flex items-center" style={{height:"50vh"}}>
            <Marks data={revenur} />
          </div>
          <div className="chart-details w-full mt-5 font-semibold">
            <div className="flex items-center">
              <div><CiShoppingBasket className="w-8 h-8 mr-5 bg-green-400 text-green-700 rounded-md" /></div>
              <div className="w-full flex items-center gap-16">
                <div className="">TODAY</div>
                <div className="text-green-400">8.823</div>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div><FaTicketSimple className="w-8 h-8 mr-5 bg-green-400 text-green-700 rounded-md px-1" /></div>
              <div className="w-full flex items-center gap-16">
                <div className="">TARGET</div>
                <div className="text-green-400">12.122</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
