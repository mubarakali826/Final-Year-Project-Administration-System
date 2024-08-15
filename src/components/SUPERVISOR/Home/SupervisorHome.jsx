import React, { useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { LiaUserClockSolid } from "react-icons/lia";
import { LuBuilding2 } from "react-icons/lu";
import { FaCircleArrowLeft } from "react-icons/fa6";
import PiChart from "../../ADMIN/Home/PiChart";
import RecentActivities from "../../ADMIN/Home/RecentActivities";
import QuickLinks from "../../ADMIN/Home/QuickLinks";
import { Link } from "react-router-dom";
const AdminHome = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="h-screen flex items-center">
      <div className="supHome gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <div className="number-stats flex gap-4 h-[130px]">
          <Link
            to="/supervisor/projects"
            state={{ card: "groups" }}
            className="inner-stat rounded-lg relative duration-500"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaCircleArrowLeft
              className={`goto-arrow absolute right-4 top-[15%] text-white transition-opacity duration-300  ${
                hoveredCard === 1 ? "opacity-100 rotate-180" : "opacity-0"
              }`}
              size={30}
            />
            <h1 className="text-white font-bold card-name-sup text-[1.7rem]">My Groups</h1>
            <div className="bottom-div flex items-center absolute bottom-3 gap-10">
              <GoProjectRoadmap className="text-white dashboard-icon" />
              <div className="stat-number text-3xl font-bold text-white mr-8">
                163
              </div>
            </div>
          </Link>
          <Link
            to="/supervisor/projects"
            state={{ card: "completed" }}
            className="inner-stat rounded-lg relative duration-500"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaCircleArrowLeft
              className={`goto-arrow absolute right-4 top-[15%] text-white transition-opacity duration-300 ${
                hoveredCard === 2 ? "opacity-100 rotate-180" : "opacity-0"
              }`}
              size={30}
            />
            <h1 className="text-white font-bold card-name-sup text-[1.7rem]">
              Completed Projects
            </h1>
            <div className="bottom-div flex items-center absolute bottom-3 gap-10">
              <CiCircleCheck className="text-white dashboard-icon" />
              <div className="stat-number text-3xl font-bold text-white mr-8">
                23
              </div>
            </div>
          </Link>
        </div>

        <div className="home-bottom flex rounded-lg max-h-50 ">
          <div className="w-[51.5%] pi rounded-lg max-h-full">
            <PiChart />
          </div>
          <div className="recent-activities">
            <RecentActivities />
          </div>
          <div className="quick-links">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
