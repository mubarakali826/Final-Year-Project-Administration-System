import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiBroadcastBold } from "react-icons/pi";
import { FaUsersGear } from "react-icons/fa6";
import { IoDocuments, IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdHandshake } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import headshot from "../../../assets/images/profile-pic (3) (1).png";
const Sidebar = () => {
  const [current, setCurrent] = useState("admin");
  // const [current, setCurrent] = useState("student");
  // const [current, setCurrent] = useState("supervisor");

  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <div className="relative flex">
      <div className="fixed inset-y-0 left-[5%] Sidebar w-[20%] p-4 h-[85%] my-auto rounded-2xl pt-7">
        <h2 className="text-[1.2rem] font-semibold mb-6 ml-1">
          FYP Administration
        </h2>
        <hr className="w-[90%] m-auto border-t-[1.5px] border-gray-300" />
        {current === "admin" ? (
          <ul className="mt-5 pl-1 ">
            <li
              className={`mb-2 rounded-full ${
                current === "admin" && selectedItem === 1 ? "active" : ""
              }`}
            >
              <Link
                to="/admin/home"
                className="flex items-center link"
                onClick={() => setSelectedItem(1)}
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "admin" && selectedItem === 2 ? "active" : ""
              }`}
            >
              <Link
                to="/admin/analytics"
                className="link flex items-center"
                onClick={() => setSelectedItem(2)}
              >
                <DiGoogleAnalytics />
                <span className="ml-2">Analytics</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "admin" && selectedItem === 3 ? "active" : ""
              }`}
            >
              <Link
                to="/admin/broadcast"
                className="link flex items-center"
                onClick={() => setSelectedItem(3)}
              >
                <PiBroadcastBold />
                <span className="ml-2">Broadcast</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "admin" && selectedItem === 4 ? "active" : ""
              }`}
            >
              <Link
                to="/admin/logins"
                className="link flex items-center"
                onClick={() => setSelectedItem(4)}
              >
                <FaUsersGear />
                <span className="ml-2">Manage Logins</span>
              </Link>
            </li>
          </ul>
        ) : current === "student" ? (
          <ul className="mt-5 pl-1">
            <li
              className={`mb-2 rounded-full ${
                current === "student" && selectedItem === 1 ? "active" : ""
              }`}
            >
              <Link
                to="/student/home"
                className="link flex items-center"
                onClick={() => setSelectedItem(1)}
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "student" && selectedItem === 2 ? "active" : ""
              }`}
            >
              {" "}
              <Link
                to="/student/documents"
                className="link flex items-center"
                onClick={() => setSelectedItem(2)}
              >
                <IoDocuments />
                <span className="ml-2">Submit Documents</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "student" && selectedItem === 3 ? "active" : ""
              }`}
            >
              {" "}
              <Link
                to="/student/meetings"
                className="link flex items-center"
                onClick={() => setSelectedItem(3)}
              >
                <MdHandshake />
                <span className="ml-2">Meetings</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "student" && selectedItem === 4 ? "active" : ""
              }`}
            >
              {" "}
              <Link
                to="/student/chat"
                className="link flex items-center"
                onClick={() => setSelectedItem(4)}
              >
                <IoChatboxEllipsesSharp />
                <span className="ml-2">Chat</span>
              </Link>
            </li>
          </ul>
        ) : current === "supervisor" ? (
          <ul className="mt-5 pl-1">
            <li
              className={`mb-2 rounded-full ${
                current === "supervisor" && selectedItem === 1 ? "active" : ""
              }`}
            >
              {" "}
              <Link
                to="/supervisor/home"
                className="link flex items-center"
                onClick={() => setSelectedItem(1)}
              >
                <FaHome />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "supervisor" && selectedItem === 2 ? "active" : ""
              }`}
            >
              <Link
                to="/supervisor/projects"
                className="link flex items-center"
                onClick={() => setSelectedItem(2)}
              >
                <FaProjectDiagram />
                <span className="ml-2">Manage Projects</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "supervisor" && selectedItem === 3 ? "active" : ""
              }`}
            >
              <Link
                to="/supervisor/documents"
                className="link flex items-center"
                onClick={() => setSelectedItem(3)}
              >
                <IoDocuments />
                <span className="ml-2">Manage Documents</span>
              </Link>
            </li>
            <li
              className={`mb-2 rounded-full ${
                current === "supervisor" && selectedItem === 4 ? "active" : ""
              }`}
            >
              <Link
                to="/supervisor/chat"
                className="link flex items-center"
                onClick={() => setSelectedItem(4)}
              >
                <IoChatboxEllipsesSharp />
                <span className="ml-2">Chat</span>
              </Link>
            </li>
          </ul>
        ) : null}

        <div className="user flex items-center justify-center flex-col mt-2 gap-[2px]">
          <div className="user_avatar">
            <div className="w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-full border-2 border-white ">
              <img src={headshot} alt="" className="h-full w-full" />
              <div></div>
            </div>
          </div>
          <div className="name font-semibold">Mubarak Ali</div>
          <div className="email text-gray-400 text-[0.7rem]">kingjohn135251@gmail.com</div>
          <Link
            className="mt-1 p-1 px-4 rounded-md bg-[#68bd69] text-white text-[0.9rem]"
            to={"/edit-profile"}
          >
            Edit 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
