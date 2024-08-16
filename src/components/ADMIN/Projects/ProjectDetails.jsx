import React from "react";
import { FaCheckCircle, FaUsers, FaCalendarCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { HiDocument } from "react-icons/hi2";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;
  const path = location.pathname;
  const userRole =
    path == "/supervisor/project-details" ? "supervisor" : "admin";
  console.log(userRole);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="projectDetails ml-[21%] gap-4 h-[85%] w-[69%] rounded-2xl p-5 flex flex-col shadow-lg relative">
        <div className=" overflow-y-auto p-5 custom-scrollbar">
          <Link
            to={
              userRole === "supervisor"
                ? "/supervisor/manage-projects"
                : "/admin/home"
            }
          >
            <IoMdArrowRoundBack
              size={30}
              className="fix top-6 left-6 cursor-pointer"
            />
          </Link>
          <h2 className="text-5xl font-bold mt-5 text-gray-800 mb-6 text-center">
            {project.name}
          </h2>

          {/* Circular Progress Bar */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg
                className="circular-progress w-full h-full"
                viewBox="0 0 36 36"
              >
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="3"
                />
                <path
                  className="circle"
                  strokeDasharray={`${project.progress}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-700">
                {project.progress}%
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tech Stack
            </h3>
            <div className="flex gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-200 text-blue-800 text-sm font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Current and Covered Milestones */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Current Milestone
            </h3>
            <div className="flex items-center gap-2 text-lg text-gray-700 mb-4">
              <FaCheckCircle className="text-green-500" />
              {project.milestones.current}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Covered Milestones
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {project.milestones.covered.map((milestone, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  {milestone}
                </li>
              ))}
            </ul>
          </div>

          {/* Meetings with Supervisor */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Meetings with Supervisor
            </h3>
            <div className="flex items-center gap-2 text-lg text-gray-700">
              <FaCalendarCheck className="text-blue-500" />
              {project.meetings} meetings
            </div>
          </div>

          {/* Group Members */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Group Members
            </h3>
            <div className="flex gap-4">
              {project.students.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
                >
                  <FaUsers className="text-blue-500" />
                  <span className="text-gray-700">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Project Overview
            </h3>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-700 shadow-sm">
              {project.overview}
            </div>
          </div>
          <div>
            <button className="flex items-center gap-2 mt-5 bg-teal-600 text-white rounded-lg transition-all duration-200 px-4 py-2 hover:bg-teal-500">
              <HiDocument /> Project Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
