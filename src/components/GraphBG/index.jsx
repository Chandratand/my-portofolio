import React from "react";
import Image from "next/image";
import Graph from "../../../public/assets/bg-graph-1.svg";

const GraphBG = () => {
  return (
    <div className="absolute right-[-150px] top-[-50px] -z-10 block sm:right-0 lg:top-0">
      <div className="relative">
        <Image src={Graph} alt="graph" />
        <div className="absolute left-[73.95%] right-[9.27%] top-[79.02%] bottom-[14.34%] h-[202px] w-[202px] rounded-full bg-white blur-[50px] dark:bg-black" />
        <div className="absolute left-[-41.61%] right-[82.34%] top-[-17.48%] bottom-[58.22%] h-[339px] w-[339px] rounded-full bg-white blur-[50px] dark:bg-black" />
      </div>
    </div>
  );
};

export default GraphBG;
