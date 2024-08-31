import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FaFileAlt,
  FaClipboardList,
  FaExclamationCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ManageDocuments = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [rejectionComment, setRejectionComment] = useState("");

  const projectDocuments = [
    {
      id: 1,
      name: "SRS Document",
      lastUpdated: "2024-07-19",
      link: "/supervisor/documents/srs",
    },
    {
      id: 2,
      name: "SDD Document",
      lastUpdated: "2024-07-18",
      link: "/supervisor/documents/sdd",
    },
    {
      id: 3,
      name: "Proposal",
      lastUpdated: "2024-07-17",
      link: "/supervisor/documents/proposal",
    },
  ];
  const meetingLogs = [
    {
      id: 1,
      total: 3,
      group: ["Noman", "Mubarak"],
      notes: "Discussed project milestones and deadlines.",
    },
    {
      id: 2,
      total: 9,
      notes: "Reviewed initial SRD submission.",
      group: ["Ahmed", "Hussain", "Adnan", "Abdullah"],
    },
    {
      id: 3,
      total: 4,
      notes: "Finalized design specifications.",
      group: ["Sara", "Ali", "Zain"],
    },
    {
      id: 4,
      total: 2,
      notes: "Discussed testing strategies and QA.",
      group: ["Bilal", "Kashif", "Sana"],
    },
    {
      id: 5,
      total: 6,
      notes: "Reviewed progress and set new deadlines.",
      group: ["Taha", "Farhan", "Irfan", "Saba"],
    },
  ];

  const pendingReviews = [
    {
      id: 1,
      type: "Meeting Log",
      details: "Meeting Log from 2024-07-20",
      status: "Pending Review",
      group: ["Noman", "Mubarak"],
      link: "/supervisor/document-detail/:4",
    },
    {
      id: 2,
      type: "Project Document",
      details: "SDD Document",
      status: "Pending Approval",
      group: ["Ahmed", "Hussain", "Adnan", "Abdullah"],
      link: "/supervisor/document-detail/:2",
    },
  ];
  const handleSendReminder = (group) => {
    alert(`Reminder sent to ${group.join(", ")}`);
  };
  const handleReject = (review) => {
    setSelectedReview(review);
    setShowRejectPopup(true);
  };
  const handleSubmitRejection = () => {
    // Implement logic for submitting the rejection with a comment
    alert(
      `Review with ID ${selectedReview.id} rejected with comment: ${rejectionComment}`
    );
    setShowRejectPopup(false);
    setRejectionComment("");
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  const handleMeetingCLick = () => {
    navigate("/supervisor/documents/meeting");
  };

  const handleScheduleMeeting = (group) => {
    alert(`Meeting scheduled for ${group.join(", ")}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMeetingLogs = meetingLogs.filter((log) =>
    log.group.some((member) =>
      member.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="h-screen flex items-center">
      <div className="manageDocuments gap-4 h-[85%]  custom-scrollbar   w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col relative">
        <Tabs
          defaultValue="manage-documents"
          className="w-full overflow-y-scroll px-3"
        >
          <TabsList className="bg-blue-100 sticky top-0  ">
            <TabsTrigger value="manage-documents">
              <FaFileAlt className="mr-2" /> Manage Project Documents
            </TabsTrigger>
            <TabsTrigger value="manage-meeting-logs">
              <FaClipboardList className="mr-2" /> Manage Meeting Logs
            </TabsTrigger>
            <TabsTrigger value="pending-reviews">
              <FaExclamationCircle className="mr-2" /> Pending Reviews &
              Approvals
            </TabsTrigger>
          </TabsList>

          {/* Manage Project Documents Tab */}
          <TabsContent value="manage-documents">
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Manage Project Documents
              </h3>
              <ul className="mt-2">
                {projectDocuments.map((doc) => (
                  <Link key={doc.id} to={doc.link}>
                    <li className="border p-4 rounded-lg mb-2 bg-blue-200 hover:bg-blue-300 cursor-pointer">
                      <h4 className="text-lg font-semibold">{doc.name}</h4>
                      <p className="text-gray-600">
                        Last Updated: {doc.lastUpdated}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Manage Meeting Logs Tab */}
          <TabsContent value="manage-meeting-logs">
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Manage Meeting Logs</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by group members..."
                className="w-full p-2 border rounded-lg mb-4"
              />
              <ul className="mt-2">
                {filteredMeetingLogs.map((log) => (
                  <li
                    key={log.id}
                    className="border p-4 rounded-lg mb-2 bg-green-200 hover:bg-green-300 cursor-pointer"
                    onClick={handleMeetingCLick}
                  >
                    <h3 className="text-lg font-semibold text-blue-900">
                      Group: {log.group.join(" , ")}
                    </h3>
                    <h4 className="text-lg font-semibold">
                      Total Meetings:{" "}
                      <span className="font-bold text-blue-500 text-[1.35rem]">
                        {log.total}
                      </span>
                    </h4>
                    <p className="text-gray-600">Notes: {log.notes}</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSendReminder(log.group);
                        }}
                        className="bg-yellow-400 px-3 py-2 rounded-lg hover:bg-yellow-500"
                      >
                        Send Reminder
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleScheduleMeeting(log.group);
                        }}
                        className="bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-500"
                      >
                        Schedule Meeting
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Pending Reviews & Approvals Tab */}
          <TabsContent value="pending-reviews">
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Pending Reviews & Approvals
              </h3>
              <ul className="mt-2">
                {pendingReviews.map((review) => (
                  <li
                    key={review.id}
                    className="border p-4 rounded-lg mb-2 bg-yellow-200 hover:bg-yellow-300 cursor-pointer"
                    onClick={() => handleCardClick(review.link)} // Navigate to the document page on click
                  >
                    <h4 className="text-lg font-semibold">{review.type}</h4>
                    <p className="text-gray-600">Details: {review.details}</p>
                    <p className="text-gray-600">
                      Group: {review.group.join(", ")}
                    </p>{" "}
                    {/* Display group members */}
                    <p className="text-red-600">Status: {review.status}</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAccept(review.id);
                        }}
                        className="bg-green-400 px-3 py-1 rounded-lg hover:bg-green-500"
                      >
                        Accept
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReject(review);
                        }}
                        className="bg-red-400 px-3 py-1 rounded-lg hover:bg-red-500"
                      >
                        Reject
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popup for rejection comment */}
            {showRejectPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    Add Rejection Comment
                  </h3>
                  <textarea
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                    placeholder="Enter your comment..."
                    value={rejectionComment}
                    onChange={(e) => setRejectionComment(e.target.value)}
                  />
                  <div className="flex justify-end mt-6 gap-4">
                    <button
                      className="bg-gray-200 text-gray-600 px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                      onClick={() => setShowRejectPopup(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                      onClick={handleSubmitRejection}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageDocuments;
