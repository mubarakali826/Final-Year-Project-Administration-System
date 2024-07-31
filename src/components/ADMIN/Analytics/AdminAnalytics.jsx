import AreaChart from "./AreaCh";
import Radar  from "./Radar";
import React from "react";



const AdminAnalytics = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="adminAnalytics gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <div className="inner flex max-w-[70%] items-center justify-between ">
          <div className="area-chart">
          <AreaChart/>
          </div>
          <div className="radar-chart">
          <Radar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
