import React from "react";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenu = () => {
  return (
    <div className="h-full w-1/4 bg-gray-200 flex flex-col ">
      <div className="py-4 bg-gray-300 text-gray-800 flex justify-center items-center">
        <span>Menu</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col justify-center items-center w-full">
          <SideMenuItem />
        </ul>
      </div>
    </div>
  );
};
