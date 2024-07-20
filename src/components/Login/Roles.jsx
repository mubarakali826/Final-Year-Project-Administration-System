import React from "react";
import {
  FaUserShield,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUser,
} from "react-icons/fa";

const Roles = () => {
  const roles = [
    { name: "Admin", icon: <FaUserShield className="rolesIcon" /> },
    { name: "Student", icon: <FaUserGraduate className="rolesIcon" /> },
    { name: "Supervisor", icon: <FaChalkboardTeacher className="rolesIcon" /> },
    { name: "Local User", icon: <FaUser className="rolesIcon" /> },
  ];

  return (
    <div className="flex text-center justify-center items-center min-h-screen flex-col ">
      <h2 className="heading mb-10 text-4xl font-bold p-5">
        FYP ADMINISTRATION SYSTEM
      </h2>
      <div className="flex flex-wrap justify-center items-center bg-white p-10 rounded-lg">
        {roles.map((role, index) => (
          <div key={index} className="m-4 text-center cursor-pointer group icons-div">
            <div className="w-32 h-32 flex items-center justify-center rounded-full border-2 group-hover:border-[#0e435d] border-black group-hover:shadow-lg  transition-all duration-300">
              {role.icon}
            </div>
            <div className="mt-2 text-lg font-semibold icon-text">{role.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
