"use client";
import { Paper } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-[68px] py-2 mt-[56px] relative max-sm:px-0 overflow-hidden">
      <Image src="/1.jpg" alt="banner" width={1340} height={400} className="" />

      <Paper className="absolute xl:top-[62px] max-2xl:top-[62px] left-[130px] rounded-[1.5px] w-[400px] h-[180px] bg-white flex flex-col items-center justify-center gap-2 px-5 pt-5 pb-8 shadow-lg shadow-black/10 max-sm:hidden max-md:block  max-md:w-[290px] max-md:h-[120px] max-lg:block max-lg:top-[50px] max-md:top-[30px] max-lg:w-[350px] max-lg:h-[150px] ">
        <div className="font-bold text-[30px] leading-9 max-lg:text-[26px] max-md:text-[18px] max-md:leading-6">
          So many courses starting at $13.99
        </div>
        <div className="text-[16px] max-lg:text-[14px] max-md:text-[12px]">
          Your future’s wide open, and so is our course library. Learn more for
          less.
        </div>
      </Paper>
    </div>
  );
};

export default Hero;
