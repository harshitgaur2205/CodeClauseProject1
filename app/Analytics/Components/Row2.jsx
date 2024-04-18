import React from "react";
import { FaFilter } from "react-icons/fa";
import SellingProducts from "./SellingProducts";

const Row2 = () => {
  return (
    <main className="flex gap-5 m-5 max-lg:flex-col">
      <div className="selling-products max-lg:w-[90%] w-[65%] p-7 shadow-2xl rounded-3xl ">
        <div className="main-header flex justify-between items-center max-sm:flex-col max-sm:items-start">
          <div className="header text-xl">Daily Goal</div>
          <div className="flex gap-5">
            <div className="icon">
              <FaFilter className="w-11 h-11 bg-slate-200 p-3 rounded-lg" />
            </div>
            <div>
              <select
                name="date"
                id="date"
                className="bg-slate-200 p-3 rounded-lg"
              >
                <option value="8 Jul - 24 Jul">8 Jul - 24 Jul</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content overflow-x-auto">
          <SellingProducts />
        </div>
      </div>
      <div className="total-revenue lg:w-[25%] w-[60%] rounded-[20px] shadow-2xl px-5 py-5">
        <h2 className="text-xl mb-3">Leading Countries</h2>
        <div className="bar-chart max-lg:flex items-center">
          <img
            src="/image4.png"
            alt=""
            className="w-full min-h-[200px] max-h-[297px] max-lg: flex items-center"
          />
        </div>
        <button className="bg-slate-100 rounded-xl p-2 my-2 w-full">
          Load More
        </button>
      </div>
    </main>
  );
};

export default Row2;
