import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  const data = {
    active: [
      { name: "Project A", students: ["Alice", "Bob"], progress: 75 },
      { name: "Project B", students: ["Charlie", "Dave"], progress: 50 },
      { name: "Project C", students: ["Eve", "Frank"], progress: 25 },
      // Add more projects as needed
    ],
    completed: [
      { name: "Project H", students: ["Oscar", "Paul"], progress: 100 },
      // Add more completed projects as needed
    ],
    unassigned: [
      {
        students: ["Student X"],
      },
      {
        students: ["Student Y"],
      },
      {
        students: ["Student Z"],
      },
    ],
    inhouse: [
      { name: "In-house Project 1", students: ["Uma", "Victor"], progress: 60 },
      // Add more in-house projects as needed
    ],
  };

  const location = useLocation();
  const selectedCard = location.state?.card || "active"; // Default to 'active' if no state is passed

  const titleMap = {
    active: "Active Projects",
    completed: "Completed Projects",
    unassigned: "Unassigned Students",
    inhouse: "In-house Projects",
  };

  return (
    <div className="h-screen flex items-center">
      <div className="adminHome gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col relative">
        <Link to="/admin/home">
          <RxCross2
            size={30}
            className="absolute top-6 right-6 cursor-pointer"
          />
        </Link>
        <h2 className="text-2xl font-bold mb-4">{titleMap[selectedCard]}</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="search-bar p-2 rounded border mb-4 w-full"
        />

        {/* List of Clickable Projects */}
        <div
          className="flex flex-col gap-4 overflow-y-auto"
          style={{ maxHeight: "60vh" }}
        >
          {data[selectedCard].map((item, index) => (
            <button
              key={index}
              className="project-item p-4 border rounded-lg shadow-lg text-left hover:bg-gray-200 transition-colors duration-200"
              onClick={() => console.log(`${item.name} clicked`)}
            >
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Students: {item.students?.join(", ")}
              </p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Progress: {item.progress}%
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
