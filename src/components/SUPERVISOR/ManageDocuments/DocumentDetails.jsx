import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaDownload, FaFileAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";

const DocumentDetail = () => {
  const location = useLocation();
  const { doc } = location.state || {};
  const navigate=useNavigate();
  return (
    <div className="h-screen flex items-center">
      <div className="documentDetail gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col justify-center items-center relative">
      <IoMdArrowRoundBack
      size={30}
      className="absolute top-10 left-10 cursor-pointer"
      onClick={() => navigate(-1)} // Go back to the previous page
    />
        <h2 className="text-2xl font-bold mb-4">{doc?.projectName}</h2>
        <p className="text-lg mb-4">
          Group Members: {doc?.groupMembers.join(", ")}
        </p>
        <p className="text-lg mb-4">Submitted On: {doc?.submittedOn}</p>

        <div className="flex items-center gap-4">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <FaFileAlt className="mr-2" />
            Open Document
          </button>
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            <FaDownload className="mr-2" />
            Download Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;
