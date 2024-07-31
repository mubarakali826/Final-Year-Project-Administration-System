import { FaHome, FaProjectDiagram } from 'react-icons/fa';
import { DiGoogleAnalytics } from 'react-icons/di';
import { PiBroadcastBold } from 'react-icons/pi';
import { FaUsersGear } from 'react-icons/fa6';
import { IoDocuments, IoChatboxEllipsesSharp } from 'react-icons/io5';
import { MdHandshake } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const [current, setCurrent] = useState("admin");
  // const [current, setCurrent] = useState("student");
  // const [current, setCurrent] = useState("supervisor");

  const handleLinkClick = (role) => {
    setCurrent(role);
  };

  return (
    <div className="relative flex">
      <div className="fixed inset-y-0 left-[5%] Sidebar w-[20%] p-4 h-[85%] my-auto rounded-2xl pt-7">
        <h2 className="text-[1.2rem] font-semibold mb-6 ml-1">FYP Administration</h2>
        <hr className="w-[90%] m-auto border-t-[1.5px] border-gray-300" />
        
        {current === "admin" ? (
          <ul className="mt-5 pl-1">
            <li className={`mb-2 rounded-full ${current === "admin" ? "active" : ""}`}>
              <Link 
                to="/admin/home" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("admin")}
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "admin" ? "active" : ""}`}>
              <Link 
                to="/admin/analytics" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("admin")}
              >
                <DiGoogleAnalytics />
                <span className="ml-2">Analytics</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "admin" ? "active" : ""}`}>
              <Link 
                to="/admin/broadcast" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("admin")}
              >
                <PiBroadcastBold />
                <span className="ml-2">Broadcast</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "admin" ? "active" : ""}`}>
              <Link 
                to="/admin/logins" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("admin")}
              >
                <FaUsersGear />
                <span className="ml-2">Manage Logins</span>
              </Link>
            </li>
          </ul>
        ) : current === "student" ? (
          <ul className="mt-5 pl-1">
            <li className={`mb-2 rounded-full ${current === "student" ? "active" : ""}`}>
              <Link 
                to="/student/home" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("student")}
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "student" ? "active" : ""}`}>
              <Link 
                to="/student/documents" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("student")}
              >
                <IoDocuments />
                <span className="ml-2">Submit Documents</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "student" ? "active" : ""}`}>
              <Link 
                to="/student/meetings" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("student")}
              >
                <MdHandshake />
                <span className="ml-2">Meetings</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "student" ? "active" : ""}`}>
              <Link 
                to="/student/chat" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("student")}
              >
                <IoChatboxEllipsesSharp />
                <span className="ml-2">Chat</span>
              </Link>
            </li>
          </ul>
        ) : current === "supervisor" ? (
          <ul className="mt-5 pl-1">
            <li className={`mb-2 rounded-full ${current === "supervisor" ? "active" : ""}`}>
              <Link 
                to="/supervisor/home" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("supervisor")}
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "supervisor" ? "active" : ""}`}>
              <Link 
                to="/supervisor/projects" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("supervisor")}
              >
                <FaProjectDiagram />
                <span className="ml-2">Manage Projects</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "supervisor" ? "active" : ""}`}>
              <Link 
                to="/supervisor/documents" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("supervisor")}
              >
                <IoDocuments />
                <span className="ml-2">Manage Documents</span>
              </Link>
            </li>
            <li className={`mb-2 rounded-full ${current === "supervisor" ? "active" : ""}`}>
              <Link 
                to="/supervisor/chat" 
                className="flex items-center link" 
                onClick={() => handleLinkClick("supervisor")}
              >
                <IoChatboxEllipsesSharp />
                <span className="ml-2">Chat</span>
              </Link>
            </li>
          </ul>
        ) : null}

        <div className="user flex items-center justify-center flex-col mt-6 gap-1">
          <div className="user_avatar">
            <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-full border-2 border-white ">
              <FaUsersGear />
            </div>
          </div>
          <div className="name font-semibold">name</div>
          <div className="email text-gray-400 text-sm">email@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
