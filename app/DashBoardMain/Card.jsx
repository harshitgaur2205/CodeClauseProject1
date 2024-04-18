import React from "react";

const Card = (props) => {
  return (
    <div
      style={{ background: `${props.cardbg}` }}
      className="w-[184px] h-full rounded-xl border p-2 flex flex-col gap-4"
    >
        <img src={`${props.iconURL}`} alt="icon1" width={40} height={40}/>
        <p className="font-bold">{`${props.heading}`}</p>
        <p>{`${props.text}`}</p>
        <p className="text-[#4079ED]">{`${props.percentage} from yesterday`}</p>
    </div>
  );
};

export default Card;
