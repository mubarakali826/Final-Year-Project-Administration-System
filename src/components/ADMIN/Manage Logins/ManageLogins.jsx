import React, { useState } from "react";
import EditLoginDialog from "./EditLoginDialog"; // Import the Dialog component
import File from "../Broadcast/File";
import { RxCross2 } from "react-icons/rx";
import MirrorButton from "@/components/MirrorButton/MirrorButton";

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

  // console.log("Filtered Users:", filteredUsers); // Debugging: Check filtered users

  return (
    <div className="h-screen flex items-center">
      {isGenerateLoginVisible ? (
        <div className="generate-logins gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-[3rem] flex flex-col items-center justify-center bg-gray-100">
          <div className="upload-div h-full w-full p-[10%] flex flex-col rounded-lg relative justify-center gap-2 items-center">
            <span className="absolute top-3 right-3 cursor-pointer">
              <RxCross2 size={25} onClick={handleGenerateLoginClick} />
            </span>
            <h2 className="text-xl font-semibold mb-4">Upload Excel File</h2>
            <p className="text-gray-600 mb-4">
              Please upload a file in Excel format (e.g., .xlsx)
            </p>

            <File />

            <MirrorButton
              height={2.5}
              width={8}
              text={"Submit"}
              colorScheme={"primary"}
            />
          </div>
        </div>
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
                className={`px-4 py-2 rounded-md ${
                  activeTab === "student"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleTabChange("student")}
              >
                Students
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
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
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No users found.</p>
            )}
          </div>

          <div className="mt-4 flex items-center justify-end"
          onClick={handleGenerateLoginClick}
          >
            <MirrorButton
              height={3}
              width={10}
              text={"Generate Logins"}
              colorScheme={"secondary"}
              event={handleGenerateLoginClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageLogins;
