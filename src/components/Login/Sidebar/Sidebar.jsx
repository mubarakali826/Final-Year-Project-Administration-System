import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiBroadcastBold } from "react-icons/pi";
import { FaUsersGear } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
const Sidebar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(1);
  const name = useSelector((state) => state.user.name)
  const email = useSelector((state) => state.user.email)
  const photoUrl = useSelector((state) => state.user.photoUrl)

  useEffect(() => {
    switch (location.pathname) {
      case '/admin/home':
        setSelectedItem(1);
        break;
      case '/admin/analytics':
        setSelectedItem(2);
        break;
      case '/admin/broadcast':
        setSelectedItem(3);
        break;
      case '/admin/logins':
        setSelectedItem(4);
        break;
      case '/edit-profile':
        setSelectedItem(5);
        break;
      default:
        setSelectedItem(1); // Default to Home if path doesn't match
    }
  }, [location.pathname]);

  return (
    <div className="relative flex">
      <div className="fixed inset-y-0 left-[5%] Sidebar w-[20%] p-4 h-[85%] my-auto rounded-2xl pt-7">
        <h2 className="text-[1.2rem] font-semibold mb-6 ml-1">
          FYP Administration
        </h2>
        <hr className="w-[90%] m-auto border-t-[1.5px] border-gray-300" />
        <ul className="mt-5 pl-1 ">
          <li
            className={`mb-2 rounded-full ${
              selectedItem === 1 ? "active" : ""
            }`}
          >
            <Link
              to="/admin/home"
              className="flex items-center link"
              // onClick={() => setSelectedItem(1)}
            >
              <FaHome />
              <span className="ml-2">Home</span>
            </Link>
          </li>
          <li
            className={`mb-2 rounded-full ${
              selectedItem === 2 ? "active" : ""
            }`}
          >
            <Link
              to="/admin/analytics"
              className="link flex items-center"
              // onClick={() => setSelectedItem(2)}
            >
              <DiGoogleAnalytics />
              <span className="ml-2">Analytics</span>
            </Link>
          </li>
          <li
            className={`mb-2 rounded-full ${
              selectedItem === 3 ? "active" : ""
            }`}
          >
            <Link
              to="/admin/broadcast"
              className="link flex items-center"
              // onClick={() => setSelectedItem(3)}
            >
              <PiBroadcastBold />
              <span className="ml-2">Broadcast</span>
            </Link>
          </li>
          <li
            className={`mb-2 rounded-full ${
              selectedItem === 4 ? "active" : ""
            }`}
          >
            <Link
              to="/admin/logins"
              className="link flex items-center"
              // onClick={() => setSelectedItem(4)}
            >
              <FaUsersGear />
              <span className="ml-2">Manage Logins</span>
            </Link>
          </li>
        </ul>
        <div className="user flex items-center justify-center flex-col mt-2 gap-[2px]">
          <div className="user_avatar">
            <div className="w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-full border-2 border-white ">
              <img src={photoUrl} alt="" className="h-full w-full" />
              <div></div>
            </div>
          </div>
          <div className="name font-semibold">{name}</div>
          <div className="email text-gray-400 text-[0.7rem]">{email}</div>
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
