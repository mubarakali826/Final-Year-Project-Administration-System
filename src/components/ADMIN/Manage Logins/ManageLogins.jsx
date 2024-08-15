import React, { useState } from "react";
import EditLoginDialog from "./EditLoginDialog"; // Import the Dialog component
import { FaUserPlus, FaFileExcel, FaPaperPlane,  } from "react-icons/fa";
import { SiSimplelogin } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ManageLogins = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("student");
  const [isGenerateLoginVisible, setIsGenerateLoginVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", e.target.value); // Debugging: Check search query
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGenerateLoginClick = () => {
    setIsGenerateLoginVisible(!isGenerateLoginVisible);
    console.log(isGenerateLoginVisible);
  };

  const handleEditLogin = (id) => {
    console.log(`Edit login for ID: ${id}`);
  };

  const users = [
    {
      id: 1,
      name: "Noman Tariq",
      discipline: "Software Engineering",
      rollNumber: "CS123",
      type: "student",
    },
    {
      id: 2,
      name: "Mubarak Ali",
      discipline: "Software Engineering",
      rollNumber: "EE456",
      type: "student",
    },
    {
      id: 3,
      name: "Meer Jamal",
      discipline: "Computer Science",
      type: "supervisor",
    },
    {
      id: 4,
      name: "Omer Abdullah",
      discipline: "Software Engineering",
      rollNumber: "ME789",
      type: "student",
    },
    {
      id: 5,
      name: "Huzaifa",
      discipline: "Computer Science",
      rollNumber: "CE101",
      type: "student",
    },
    {
      id: 6,
      name: "Ayesha Aslam",
      discipline: "Software Engineering",
      type: "supervisor",
    },
  ];

  // Filtered list based on the active tab and search query
  const filteredUsers = users.filter(
    (user) =>
      user.type === activeTab &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.rollNumber &&
          user.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const GenerateLogin = () => {
    const [rollNumber, setRollNumber] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState(null);

    const handleGenerateLogin = () => {
      // Logic to generate login and send to the provided email
      console.log(
        `Generating login for: Roll No: ${rollNumber}, Email: ${email}`
      );
      // Reset the inputs after generating
      setRollNumber("");
      setEmail("");
    };

    const handleBulkUpload = () => {
      // Logic to handle the bulk upload of Excel file
      if (file) {
        console.log(`Bulk login generation initiated with file: ${file.name}`);
      }
      // Reset file input after processing
      setFile(null);
    };

    return (
      <div className=" h-screen w-[95%] flex items-center">
        <div className="generate-logins gap-4 h-[85%] w-[100%] ml-[27.35%] rounded-2xl p-8 flex flex-col relative">
       
       <RxCross2
       onClick={handleGenerateLoginClick}
       className="absolute top-5 right-5 cursor-pointer" size={30}/>
      
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Generate Logins
            </h2>
            <p className="text-gray-600">
              Add individual login details or upload an Excel file for bulk
              generation.
            </p>
          </div>

          {/* Individual Login Generation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Generate Single Login
            </h3>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                className="w-1/2 border border-gray-300 rounded-lg p-4 focus:ring focus:ring-green-300 focus:border-green-500"
                placeholder="Enter Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
              <input
                type="email"
                className="w-1/2 border border-gray-300 rounded-lg p-4 focus:ring focus:ring-green-300 focus:border-green-500"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="flex items-center gap-2 bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-500"
              onClick={handleGenerateLogin}
            >
              <FaUserPlus /> Generate and Send Login
            </button>
          </div>

          <hr className="my-3 border-gray-300" />

          {/* Bulk Login Generation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Bulk Login Generation
            </h3>
            <div className="flex items-center  gap-10 mb-4">
              <input
                type="file"
                id="bulkUpload"
                className="hidden"
                accept=".xlsx, .xls"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label
                htmlFor="bulkUpload"
                className="cursor-pointer flex items-center gap-2 text-green-600"
              >
                <FaFileExcel /> {file ? file.name : <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>Attach a document</TooltipTrigger>
                  <TooltipContent  className=" text-yellow-500 bg-transparent border-none shadow-none ">
                    <p>Document format must be xls or xlsx</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>}
              </label>
              <button
                className="flex items-center cursor-pointer gap-2 bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-500"
                onClick={handleBulkUpload}
                disabled={!file}
              >
                <FaPaperPlane /> Generate and Send Bulk Logins
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen flex items-center">
      {isGenerateLoginVisible ? (
        <GenerateLogin />
      ) : (
        <div className="manage-logins gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search by roll number or name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 border border-gray-400 rounded-md w-1/2"
            />
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-md duration-200 transition-all ${
                  activeTab === "student"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleTabChange("student")}
              >
                Students
              </button>
              <button
                className={`px-4 py-2 rounded-md duration-200 transition-all ${
                  activeTab === "supervisor"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleTabChange("supervisor")}
              >
                Supervisors
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{user.name}</span>
                    <span className="text-sm text-gray-500">
                      {user.discipline}
                    </span>
                    {user.rollNumber && (
                      <span className="text-sm text-gray-500">
                        {user.rollNumber}
                      </span>
                    )}
                  </div>
                  <div className="buttons flex gap-3">
                    <EditLoginDialog
                      handleEditLogin={handleEditLogin}
                      userId={user.id}
                    />
                    <button className="del-button">
                      <svg viewBox="0 0 448 512" className="svgIcon">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No users found.</p>
            )}
          </div>
          <button
            className="flex w-[25%] text-center m-auto items-center justify-center duration-200 transition-all cursor-pointer gap-2 bg-teal-600 text-white rounded-lg px-4 py-2 hover:bg-teal-500 mb-[-2%]"
            onClick={handleGenerateLoginClick}
          >
          <SiSimplelogin className="mt-1" size={30}/> Generate Logins
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageLogins;
