import { GoReport } from "react-icons/go";
import AreaChart from "./AreaCh";
import Radar from "./Radar";
import React from "react";
import {
  MdBugReport,
  MdPublishedWithChanges,
  MdReportGmailerrorred,
} from "react-icons/md";
import QuickLinks from "../Home/QuickLinks";
import { TbReport } from "react-icons/tb";

const AdminAnalytics = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="adminAnalytics gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <div className="inner flex  items-center justify-between flex-col ">
          <div className="area-chart">
            <AreaChart />
          </div>
          <div className="w-full">
            <div className="relative flex justify-center gap-[20%]">
              <div>
                <Radar />
              </div>
              <div className="flex justify-center items-center mr-10 flex-col gap-2">
                <div className="card h-[50%] w-[150%] rounded-md"></div>
                <button className="flex items-center gap-2 bg-teal-600 text-white rounded-lg transition-all duration-200 px-4 py-2 hover:bg-teal-500">
                  <TbReport /> Generate Reports
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="reports-btn flex p-3 rounded-md items-center w-50 mt-20 text-2xl m-auto justify-center cursor-pointer">
          <MdBugReport className="mr-3"/>
          Generate Reports
        </div> */}
      </div>
    </div>
  );
};

export default AdminAnalytics;
