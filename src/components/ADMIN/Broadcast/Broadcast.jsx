import React, { useState } from "react";
import "./checkbox.scss";
import { HiSpeakerphone } from "react-icons/hi";
import { Textarea } from "@/components/ui/textarea";
import File from "./File";
import MirrorButton from "@/components/MirrorButton/MirrorButton";

const Broadcast = () => {
  const [showStudents, setShowStudents] = useState(true);
  const [showSupervisors, setShowSupervisors] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false);
  const [isSupervisorsDropdownOpen, setIsSupervisorsDropdownOpen] =
    useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleStudentsDropdown = () => {
    setIsStudentsDropdownOpen(!isStudentsDropdownOpen);
    setIsSupervisorsDropdownOpen(false); // Close the other dropdown
  };

  const toggleSupervisorsDropdown = () => {
    setIsSupervisorsDropdownOpen(!isSupervisorsDropdownOpen);
    setIsStudentsDropdownOpen(false); // Close the other dropdown
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

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
              BROADCAST TO :
            </div>
            <div className="content flex justify-center items-center gap-5">
              Students
              <label className="checkBox">
                <input
                  id="ch1"
                  type="checkbox"
                  className="filter-check"
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
          <div className="audience-container flex justify-center items-center gap-5 mt-5 rounded-lg h-[18.5rem] w-full ">
            {showStudents && (
              <div className="broadcast-audience students-div flex-1 h-full rounded-lg p-4 flex justify-between">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex filter justify-center w-full rounded-md shadow-sm p-3 bg-white text-lg font-medium text-gray-700 hover:bg-gray-100 "
                      onClick={toggleStudentsDropdown}
                    >
                      <HiSpeakerphone size={15} />
                    </button>
                  </div>
                  {isStudentsDropdownOpen && (
                    <div className=" absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center px-4 py-2 gap-5 bg-[#f0f3f4]"
                          >
                            <input
                              type="checkbox"
                              id={option}
                              className="filter-check h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              checked={selectedOptions.includes(option)}
                              onChange={() => handleCheckboxChange(option)}
                            />
                            <label htmlFor={option} className="text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="name text-lg font-semibold flex flex-col justify-start items-center w-full gap-10">
                  <div className="aud">Students</div>
                  <div className="textarea self-start w-[90%] text-center ml-10 ">
                    <Textarea
                      placeholder="Type your message here."
                      className="text-white bg-transparent border border-gray-500 outline-none resize-none"
                    />
                  </div>
                  <div className="self-start flex gap-5 w-full justify-around">
                    <div className="flex flex-col gap-3 justify-center items-center mt-[-2rem]">
                      <p className="text-white text-sm">Select File if any</p>
                      <File />
                    </div>
                    <MirrorButton height={3} width={10} text={"Broadcast"} colorScheme={"primary"} />
          
                  </div>
                </div>
              </div>
            )}
            {showSupervisors && (
              <div className="broadcast-audience students-div flex-1 h-full rounded-lg p-4 flex justify-between">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex filter justify-center w-full rounded-md shadow-sm p-3 bg-white text-lg font-medium text-gray-700 hover:bg-gray-100"
                      onClick={toggleSupervisorsDropdown}
                    >
                      <HiSpeakerphone size={15} />
                    </button>
                  </div>
                  {isSupervisorsDropdownOpen && (
                    <div className=" absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center px-4 py-2 gap-5 bg-[#f0f3f4]"
                          >
                            <input
                              type="checkbox"
                              id={option}
                              className="filter-check h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              checked={selectedOptions.includes(option)}
                              onChange={() => handleCheckboxChange(option)}
                            />
                            <label htmlFor={option} className="text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="name text-lg font-semibold flex flex-col justify-start items-center w-full gap-10">
                  <div className="aud">Supervisors</div>
                  <div className="textarea self-start w-[90%] text-center ml-10 ">
                    <Textarea
                      placeholder="Type your message here."
                      className="text-white bg-transparent border border-gray-500 outline-none resize-none"
                    />
                  </div>
                  <div className="self-start flex gap-5 w-full justify-around">
                    <div className="flex flex-col gap-3 justify-center items-center mt-[-1.3rem]">
                      <p className="text-white text-sm">Select File if any</p>
                      <File />
                    </div>
                    <MirrorButton height={3} width={10} text={"Broadcast"} colorScheme={"primary"} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
