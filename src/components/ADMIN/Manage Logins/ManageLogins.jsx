import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ManageLogins = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("student");
  const [isGenerateLoginVisible, setIsGenerateLoginVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGenerateLoginClick = () => {
    setIsGenerateLoginVisible(true);
  };

  const handleEditLogin = (id) => {
    console.log(`Edit login for ID: ${id}`);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
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
      name: "Mubarak ali",
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

  const filteredUsers = users.filter(
    (user) =>
      user.type === activeTab &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.rollNumber &&
          user.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="h-screen flex items-center">
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
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("student")}
            >
              Students
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "supervisor"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
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
                <div className="buttons flex gap-2 mr-3">
                  <Dialog>
                    <DialogTrigger>
                      <button
                        className="edit-button"
                        onClick={() => handleEditLogin(user.id)}
                      >
                        <svg className="edit-svgIcon" viewBox="0 0 512 512">
                          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                        </svg>
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Login Details</DialogTitle>
                        <DialogDescription>
                          Update the email and password for this account.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mt-6 flex justify-end">
                        <Button className="change-button bg-blue-500 text-white py-2 px-4 rounded-lg">
                          Change
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <button className="del-button">
                    <svg viewBox="0 0 448 512" class="svgIcon">
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

        <div className="mt-4 flex items-center justify-end">
          <button
            onClick={handleGenerateLoginClick}
            className="generate-login-btn p-3 rounded-lg text-sm shadow-lg "
          >
            Generate Logins
          </button>
        </div>

        {isGenerateLoginVisible && (
          <div className="mt-4 p-4 border border-gray-300 rounded-md ">
            <h2 className="text-xl font-semibold mb-2">Generate New Login</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageLogins;
