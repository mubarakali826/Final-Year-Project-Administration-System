import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");

  // Sample data for admin and supervisor
  const data = {
    admin: {
      active: [
        { name: "Project A", students: ["Alice", "Bob"], progress: 75 },
        { name: "Project B", students: ["Charlie", "Dave"], progress: 95 },
        { name: "Project C", students: ["Eve", "Frank"], progress: 25 },
      ],
      completed: [
        { name: "Project H", students: ["Oscar", "Paul"], progress: 100 },
      ],
      unassigned: [
        { students: ["Student X"] },
        { students: ["Student Y"] },
        { students: ["Student Z"] },
      ],
      inhouse: [
        { name: "In-house Project 1", students: ["Uma", "Victor"], progress: 60 },
      ],
    },
    supervisor: {
      groups: [
        { name: "Web Project 1", students: ["Jake", "Amy"], progress: 80 },
        { name: "App Project 2", students: ["Rosa", "Terry"], progress: 50 },
        { name: "IOT Project 3", students: ["Gina", "Boyle"], progress: 70 },
      ],
      completed: [
        { name: "ML Project 1", students: ["Holt", "Gina"], progress: 100 },
      ],
    },
  };

  // Determine which card was clicked (from location state)
  const selectedCard = location.state?.card || "active";
  const userRole = location.pathname.includes("supervisor") ? "supervisor" : "admin";

  console.log(userRole);
  
  const titleMap = {
    admin: {
      active: "Active Projects",
      completed: "Completed Projects",
      unassigned: "Unassigned Students",
      inhouse: "In-house Projects",
    },
    supervisor: {
      groups: "My Groups",
      completed: "Completed Projects",
    },
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter and sort projects based on user input
  const filteredProjects = (data[userRole][selectedCard] || [])
    .filter((project) =>
      project.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "progress") {
        return b.progress - a.progress;
      } else if (sortOption === "students") {
        return b.students.length - a.students.length;
      }
      return 0;
    });

  const handleProjectClick = (project) => {
    navigate("/admin/project-details", { state: { project } });
  };

  return (
    <div className="h-screen flex items-center">
      <div className="adminHome gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col relative">
        <Link to={userRole === "supervisor" ? "/supervisor/home" : "/admin/home"}>
          <RxCross2
            size={30}
            className="absolute top-6 right-6 cursor-pointer"
          />
        </Link>
        <h2 className="text-2xl font-bold mb-4">{titleMap[userRole][selectedCard]}</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="search-bar p-2 rounded border mb-4 w-full"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Sort Options */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="mb-4 p-2 rounded border"
        >
          <option value="name">Sort by Name</option>
          <option value="progress">Sort by Progress</option>
          <option value="students">Sort by Students Count</option>
        </select>

        {/* List of Clickable Projects */}
        <div
          className="flex flex-col gap-4 overflow-y-auto"
          style={{ maxHeight: "60vh" }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item, index) => (
              <button
                key={index}
                className="project-item p-4 border rounded-lg shadow-lg text-left hover:bg-gray-200 transition-colors duration-200"
                onClick={() => handleProjectClick(item)}
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
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;