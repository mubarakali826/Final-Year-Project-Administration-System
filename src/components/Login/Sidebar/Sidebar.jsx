import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiBroadcastBold } from "react-icons/pi";
import { FaUsersGear } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoDocuments } from "react-icons/io5";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdChat } from "react-icons/md";


const Sidebar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(1);
  // const [role, setRole] = useState("student");
  const [role, setRole] = useState("admin"); 
  // const [role, setRole] = useState("supervisor");

  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const photoUrl = useSelector((state) => state.user.photoUrl);
 console.log(location.pathname
 );
 
  useEffect(() => {
    switch (location.pathname) {
      case "/admin/home":
      case "/student/home":
      case "/supervisor/home":
        setSelectedItem(1);
        break;
      case "/admin/analytics":
      case "/supervisor/manage-projects":
      case "/supervisor/project-details":
        setSelectedItem(2);
        break;
        
      case "/admin/broadcast":
      case "/supervisor/documents/sdd":
      case "/supervisor/manage-documents":
        setSelectedItem(3);
        break;
      case "/admin/logins":
      case "/student/profile":
      case "/supervisor/chat":
        setSelectedItem(4);
        break;
      case "/admin/edit-profile":
        setSelectedItem(5);
        break;
    
    }
  }, [location.pathname]);

  const menuItems = {
    admin: [
      { path: "/admin/home", icon: <FaHome />, label: "Home" },
      {
        path: "/admin/analytics",
        icon: <DiGoogleAnalytics />,
        label: "Analytics",
      },
      {
        path: "/admin/broadcast",
        icon: <PiBroadcastBold />,
        label: "Broadcast",
      },
      { path: "/admin/logins", icon: <FaUsersGear />, label: "Manage Logins" },
    ],
    supervisor: [
      { path: "/supervisor/home", icon: <FaHome />, label: "Home" },
      {
        path: "/supervisor/manage-projects",
        icon: <TbDeviceDesktopAnalytics />,
        label: "Manage Projects",
      },
      {
        path: "/supervisor/manage-documents",
        icon: <IoDocuments />,
        label: "Manage Documents",
      },
      { path: "/supervisor/chat", icon: <MdChat />, label: "Chat" },
    ],
    student: [
      { path: "/student/home", icon: <FaHome />, label: "Home" },
      {
        path: "/student/assignments",
        icon: <FaProjectDiagram />,
        label: "Assignments",
      },
      {
        path: "/student/messages",
        icon: <PiBroadcastBold />,
        label: "Messages",
      },
      { path: "/student/profile", icon: <FaUsersGear />, label: "Profile" },
    ],
  };

  return (
    <div className="relative flex">
      <div className="fixed inset-y-0 left-[5%] Sidebar w-[20%] p-4 h-[85%] my-auto rounded-2xl pt-7">
        <h2 className="text-[1.2rem] font-semibold mb-6 ml-1">
          FYP Administration
        </h2>
        <hr className="w-[90%] m-auto border-t-[1.5px] border-gray-300" />
        <ul className="mt-5 pl-1 ">
          {menuItems[role].map((item, index) => (
            <li
              key={index}
              className={`mb-2 rounded-full ${
                selectedItem === index + 1 ? "active" : ""
              }`}
            >
              <Link to={item.path} className="flex items-center link">
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="user flex items-center justify-center flex-col mt-1 gap-[0px]">
          <div className="user_avatar">
            <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-full border-2 border-white">
              <img src={photoUrl} alt="" className="h-full w-full" />
            </div>
          </div>
          <div className="name font-semibold">{name}</div>
          <div className="email text-gray-400 text-[0.7rem]">{email}</div>
          <Link
            className="mt-1 py-[2px] px-7 rounded-md bg-green-600 transition-all hover:bg-green-500 text-white text-[0.8rem]"
            to={"/admin/edit-profile"}
          >
            Edit

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
