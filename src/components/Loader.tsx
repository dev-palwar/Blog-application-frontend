import React from "react";
import loaderGif from "../assets/loaderGif.gif";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Image
        src={loaderGif}
        height={100}
        width={100}
        alt="loading..."
        className="h-[22vw] w-[22vw]"
      />
    </div>
  );
};
