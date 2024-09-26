import React, { useState } from "react";
import { FaBullhorn, FaPaperPlane, FaFileUpload } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RxCross2 } from "react-icons/rx";

const BroadcastModule = () => {
  const [selectedTarget, setSelectedTarget] = useState("all");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleBroadcast = () => {
    // Logic for broadcasting the message or document to the selected audience
    console.log(`Broadcasting to: ${selectedTarget}`);
    console.log(`Message: ${message}`);
    if (file) {
      console.log(`File attached: ${file.name}`);
    }
    // Reset after broadcast
    setMessage("");
    setFile(null);
  };

  return (
    <div className="h-screen flex items-center">
      <div className="Broadcast gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
      
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600">
            Broadcast Message
          </h2>
          <p className="text-gray-500">
            Send a message or document to students, supervisors, or both.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-blue-100">
            <TabsTrigger value="all" onClick={() => setSelectedTarget("all")}>
              All
            </TabsTrigger>
            <TabsTrigger
              value="students"
              onClick={() => setSelectedTarget("students")}
            >
              Students
            </TabsTrigger>
            <TabsTrigger
              value="supervisors"
              onClick={() => setSelectedTarget("supervisors")}
            >
              Supervisors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="mt-4">
              <p className="text-gray-500">
                This message will be sent to both students and supervisors.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="students">
            <div className="mt-4">
              <p className="text-gray-500">
                This message will be sent only to students.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="supervisors">
            <div className="mt-4">
              <p className="text-gray-500">
                This message will be sent only to supervisors.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <textarea
            className="w-full border rounded-lg p-4 focus:ring focus:ring-blue-300"
            rows="5"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4 px-2">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer flex items-center gap-2 text-blue-600"
          >
            <FaFileUpload />{" "}
            {file ? (
              file.name
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>Attach a document</TooltipTrigger>
                  <TooltipContent  className="ml-[10rem] text-yellow-500 shadow-none border-none bg-transparent">
                    <p>Document can be in any format e.g: png , jpg , xls , pdf</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </label>

          <button
            className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500"
            onClick={handleBroadcast}
          >
            <FaPaperPlane /> Send Broadcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default BroadcastModule;
