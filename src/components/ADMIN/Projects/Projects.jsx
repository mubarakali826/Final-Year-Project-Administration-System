import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");

  // Sample data for admin and supervisor
// Sample data for admin and supervisor
const data = {
  admin: {
    active: [
      {
        name: "Project A",
        students: ["Alice", "Bob","Jia"],
        progress: 75,
        techStack: ["React", "Node.js", "MongoDB"],
        milestones: {
          current: "Database Design",
          covered: ["Requirement Gathering", "Initial Setup"],
        },
        meetings: 4,
        overview: "This project is focused on developing a full-stack web application...",
      },
      {
        name: "Project B",
        students: ["Charlie", "Dave"],
        progress: 95,
        techStack: ["Angular", "Express", "MySQL"],
        milestones: {
          current: "Testing",
          covered: ["UI Development", "Backend Integration"],
        },
        meetings: 6,
        overview: "Project B aims to create a scalable enterprise solution...",
      },
      {
        name: "Project C",
        students: ["Eve", "Frank"],
        progress: 25,
        techStack: ["Vue", "Laravel", "PostgreSQL"],
        milestones: {
          current: "Wireframing",
          covered: ["Concept Design"],
        },
        meetings: 2,
        overview: "This project is an e-commerce platform for small businesses...",
      },
    ],
    completed: [
      {
        name: "Project H",
        students: ["Oscar", "Paul"],
        progress: 100,
        techStack: ["React", "Django", "SQLite"],
        milestones: {
          current: "Completed",
          covered: ["Deployment", "Final Testing"],
        },
        meetings: 8,
        overview: "A fully completed project focused on AI-based recommendations...",
      },
    ],
    unassigned: [
      { students: ["Student X"] },
      { students: ["Student Y"] },
      { students: ["Student Z"] },
    ],
    inhouse: [
      {
        name: "In-house Project 1",
        students: ["Uma", "Victor"],
        progress: 60,
        techStack: ["Python", "Flask", "MongoDB"],
        milestones: {
          current: "Mid-Development",
          covered: ["Initial Setup", "Feature Implementation"],
        },
        meetings: 3,
        overview: "An in-house project to develop an internal tool for data analysis...",
      },
    ],
  },
  supervisor: {
    groups: [
      {
        name: "Web Project 1",
        students: ["Jake", "Amy"],
        progress: 80,
        techStack: ["React", "Redux", "Firebase"],
        milestones: {
          current: "Feature Integration",
          covered: ["UI Design", "Backend Setup"],
        },
        meetings: 5,
        overview: "A web-based project for real-time collaboration...",
      },
      {
        name: "App Project 2",
        students: ["Rosa", "Terry"],
        progress: 50,
        techStack: ["Flutter", "Firebase"],
        milestones: {
          current: "UI Development",
          covered: ["Wireframing"],
        },
        meetings: 3,
        overview: "A cross-platform mobile application for fitness tracking...",
      },
      {
        name: "IOT Project 3",
        students: ["Gina", "Boyle"],
        progress: 70,
        techStack: ["Arduino", "C++", "Python"],
        milestones: {
          current: "Sensor Integration",
          covered: ["Hardware Setup", "Initial Testing"],
        },
        meetings: 4,
        overview: "An IoT project focused on home automation...",
      },
    ],
    completed: [
      {
        name: "ML Project 1",
        students: ["Holt", "Gina","jia"],
        progress: 100,
        techStack: ["Python", "TensorFlow", "Keras"],
        milestones: {
          current: "Completed",
          covered: ["Model Training", "Deployment"],
        },
        meetings: 7,
        overview: "A machine learning project for predictive analysis...",
      },
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
    userRole=="admin"?navigate("/admin/project-details", { state: { project } }):navigate("/supervisor/group-details", { state: { project } });
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
                className="project-item p-4 border rounded-lg text-left bg-blue-200 hover:bg-blue-300 transition-colors duration-200"
                onClick={() => handleProjectClick(item)}
              >
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Students: {item.students?.join(", ")}
                </p>
                <div className="w-full bg-blue-50 rounded-full h-2.5 mt-2">
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
