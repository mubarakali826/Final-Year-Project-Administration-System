import { FaHome , FaProjectDiagram } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiBroadcastBold } from "react-icons/pi";
import { FaUsersGear } from "react-icons/fa6";
import { IoDocuments,IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdHandshake } from "react-icons/md";

import { useState } from "react";

const Sidebar = () => {
  const [current, setCurrent] = useState("admin") ;
  // const [current, setCurrent] = useState("student");
  // const [current, setCurrent] = useState("supervisor");
  return (
    <div className="relative flex">
      <div className="fixed inset-y-0 left-[5%] Sidebar w-[20%] p-4 h-[85%] my-auto rounded-2xl pt-7">
        <h2 className="text-[1.2rem] font-semibold mb-6 ml-1">FYP Administration</h2>
        <hr className="w-[90%] m-auto border-t-[1.5px] border-gray-300" />
        {current === "admin" ? (
          <ul className="mt-5 pl-1">
            <li className="mb-2 rounded-full ">
              <a href="/admin-home">
                <FaHome />
                Home
              </a>
            </li>
            <li className="mb-2 rounded-full active">
              <a href="/admin-analytics">
                <DiGoogleAnalytics />
                Analytics
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/admin-broadcast">
                <PiBroadcastBold />
                Broadcast
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/admin-logins">
                <FaUsersGear />
                Manage Logins
              </a>
            </li>
          </ul>
        ) : current === "student" ? (
          <ul className="mt-5 pl-1">
            <li className="mb-2 rounded-full active">
              <a href="/student-home">
                <FaHome />
                Home
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/student-documents">
                <IoDocuments />
                 Submit documents
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/student-meetings">
                <MdHandshake />
                Meetings
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/student-chat">
                <IoChatboxEllipsesSharp />
                Chat
              </a>
            </li>
          </ul>
        ) : current === "supervisor" ? (
          <ul className="mt-5 pl-1">
            <li className="mb-2 rounded-full active">
              <a href="/supervisor-home">
                <FaHome />
                Home
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/supervisor-projects">
                <FaProjectDiagram />
                Manage Projects
                
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/supervisor-documents">
                <IoDocuments />
                Manage Documents
              </a>
            </li>
            <li className="mb-2 rounded-full">
              <a href="/supervisor-chat">
                <IoChatboxEllipsesSharp />
                Chat
              </a>
            </li>
          </ul>
        ) : null}

        <div className="user flex items-center justify-center flex-col mt-6 gap-1">
          <div className="user_avatar">
          <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-full border-2 border-white ">
              <FaUsersGear/>
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
