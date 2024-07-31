import React, { useState } from "react";
import "./checkbox.scss";

const Broadcast = () => {
  const [showStudents, setShowStudents] = useState(false);
  const [showSupervisors, setShowSupervisors] = useState(false);

  const handleStudentsChange = () => {
    setShowStudents(!showStudents);
  };

  const handleSupervisorsChange = () => {
    setShowSupervisors(!showSupervisors);
  };

  return (
    <div className="h-screen flex items-center">
      <div className="Broadcast gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <div className="outer">
          <div className="Title text-center text-2xl font-semibold">
            BROADCAST YOUR MESSAGE
          </div>
          <hr className="w-[90%] m-auto mt-5 border-t-[1.5px] border-gray-300" />
          <div className="Broadcast-to flex gap-10 items-center mt-4 rounded-lg">
            <div className="Broadcast-to-title text-md p-4 px-10 font-bold">
              BROADCAST TO
            </div>
            <div className="content flex justify-center items-center gap-5">
              Students
              <label className="checkBox">
                <input
                  id="ch1"
                  type="checkbox"
                  checked={showStudents}
                  onChange={handleStudentsChange}
                />
                <div className="transition"></div>
              </label>
            </div>
            <div className="content flex justify-center items-center gap-5 ml-20">
              Supervisors
              <label className="checkBox">
                <input
                  id="ch2"
                  type="checkbox"
                  checked={showSupervisors}
                  onChange={handleSupervisorsChange}
                />
                <div className="transition"></div>
              </label>
            </div>
          </div>
          <div className="audience-container flex justify-center items-center gap-5 p-2 mt-8 rounded-lg h-[18rem] w-full bg-blue-100">
            {showStudents && (
              <div className="students-div flex-1 bg-blue-400 h-full rounded-lg text-center p-3">Student Div</div>
            )}
            {showSupervisors && (
              <div className="supervisors-div flex-1 bg-teal-400 h-full rounded-lg text-center p-3">Supervisor div</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
