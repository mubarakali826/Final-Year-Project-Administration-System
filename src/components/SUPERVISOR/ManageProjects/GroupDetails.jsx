import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUsers, FaProjectDiagram, FaExclamationCircle, FaCheckCircle, FaClock, FaComments, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const GroupDetails = () => {
  const groupAssigned = false;
  const projectTitle = "AI-Based Student Attendance System";
  const projectOverview = "This project aims to develop an AI-based system to automate student attendance, providing real-time tracking and reporting features.";

  const students = [
    { name: "Student 1", avatar: "/avatars/student1.jpg" },
    { name: "Student 2", avatar: "/avatars/student2.jpg" },
    { name: "Student 3", avatar: "/avatars/student3.jpg" },
  ];
  const deadline = "August 31, 2024";
  const timeRemaining = "15 days";

  const preMadeMessage = `Please select a project by ${deadline}. Time remaining: ${timeRemaining}.`;

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="groupDetails ml-[21%] gap-4 h-[85%] w-[69%] rounded-2xl p-2 flex flex-col shadow-lg overflow-hidden ">
        <Card className="rounded-xl p-6 flex flex-col gap-6 bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-600">
              <FaUsers /> Group Details
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-700 flex items-center gap-2">
                <FaUsers size={20}/> Group Members
              </h3>   
              <ul className="list-none mt-2 flex gap-4">
                {students.map((student, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Avatar className="w-12 h-12 ">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback className="bg-blue-200">{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{student.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-xl font-semibold text-yellow-700 flex items-center gap-2">
                <FaExclamationCircle size={20}/> Group Status:
              </h3>
              <Badge className= {`${!groupAssigned?"text-red-600 border-red-600":"text-green-600 border-green-600"} px-3 py-1 text-md bg-transparent cursor-default hover:bg-transparent`}>
                {groupAssigned ? (
                  <span className="flex items-center gap-2">
                    <FaCheckCircle size={20}/> Project Assigned
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaExclamationCircle size={20} /> No Project Assigned
                  </span>
                )}
              </Badge>
            </div>

            {groupAssigned ? (
              <div>
                <h3 className="text-xl font-semibold text-yellow-700 flex items-center gap-2">
                  <FaProjectDiagram size={20}/> Project Title:
                </h3>
                <p className="text-gray-700">{projectTitle}</p>
                <h3 className="text-xl font-semibold text-yellow-700 flex items-center gap-2 mt-4">
                  <FaInfoCircle size={20}/> Project Overview:
                </h3>
                <p className="text-gray-700">{projectOverview}</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                  <FaExclamationCircle size={20}/> Action Required:
                </h3>
                <p className="text-gray-700">{preMadeMessage}</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            {!groupAssigned && (
              <Button variant="outline" className="bg-red-600 text-white hover:bg-red-500 flex items-center gap-2">
                <FaExclamationCircle size={20} /> Send Reminder
              </Button>
            )}
            <Link to="/supervisor/chat">
              <Button variant="primary" className={`bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-2 ${groupAssigned?"mt-[-3rem]":""}`}>
                <FaComments size={20}/> Chat
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GroupDetails;
