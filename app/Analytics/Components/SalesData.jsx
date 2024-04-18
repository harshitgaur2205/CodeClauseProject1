import { FaArrowTrendUp } from "react-icons/fa6";

const SalesData = (props) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg w-[230px] h-full drop-shadow-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <img src={props.iconURL} alt="icon" />
        <img src="/more.svg" alt="more" />
      </div>

      <h4 className="text-[#606060] text-sm">{props.heading}</h4>
      <p className="text-2xl">{props.value}</p>

      <div className="flex gap-2 items-center">
        <FaArrowTrendUp className=" text-green-600" />
        <label className="text-[#16C098]">{props.growth}</label>
        <p className="text-sm">{props.timePeriod}</p>
      </div>
    </div>
  );
};

export default SalesData;
