import Image from "next/image";
import { Row1, Row2 } from "./Components";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="xl:w-[80%]">
          <Row1 />
          <Row2 />
        </div>
      </div>
    </div>
  );
}