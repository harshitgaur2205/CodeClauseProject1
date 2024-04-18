import Image from "next/image";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Sidebar from "../Components/SideBar";

export default function Home() {
  return (
    <section>
    <div className="flex">
      <Sidebar />
      <div className="xl:w-[80%] my-5">
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  </section>
  );
}
