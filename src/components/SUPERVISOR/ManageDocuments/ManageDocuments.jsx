import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaFileAlt, FaClipboardList, FaExclamationCircle } from 'react-icons/fa';

const ManageDocuments = () => {
  const projectDocuments = [
    { id: 1, name: 'SRS Document', status: 'Submitted', lastUpdated: '2024-07-19' },
    { id: 2, name: 'SDD Document', status: 'In Progress', lastUpdated: '2024-07-18' },
    { id: 3, name: 'Proposal', status: 'Approved', lastUpdated: '2024-07-17' },
  ];

  const meetingLogs = [
    { id: 1, date: '2024-07-20', notes: 'Discussed project milestones and deadlines.' },
    { id: 2, date: '2024-07-15', notes: 'Reviewed initial SRD submission.' },
  ];

  const pendingReviews = [
    { id: 1, type: 'Meeting Log', details: 'Meeting Log from 2024-07-20', status: 'Pending Review' },
    { id: 2, type: 'Project Document', details: 'SDD Document', status: 'Pending Approval' },
  ];

  return (
    <div className="h-screen flex items-center">
      <div className="manageDocuments gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <Tabs defaultValue="manage-documents" className="w-full">
          <TabsList className="bg-blue-100">
            <TabsTrigger value="manage-documents">
              <FaFileAlt className="mr-2" /> Manage Project Documents
            </TabsTrigger>
            <TabsTrigger value="manage-meeting-logs">
              <FaClipboardList className="mr-2" /> Manage Meeting Logs
            </TabsTrigger>
            <TabsTrigger value="pending-reviews">
              <FaExclamationCircle className="mr-2" /> Pending Reviews & Approvals
            </TabsTrigger>
          </TabsList>

          {/* Manage Project Documents Tab */}
          <TabsContent value="manage-documents">
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Manage Project Documents</h3>
              <ul className="mt-2">
                {projectDocuments.map((doc) => (
                  <li key={doc.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                    <h4 className="text-lg font-semibold">{doc.name}</h4>
                    <p className="text-gray-600">Status: {doc.status}</p>
                    <p className="text-gray-600">Last Updated: {doc.lastUpdated}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Manage Meeting Logs Tab */}
          <TabsContent value="manage-meeting-logs">
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Manage Meeting Logs</h3>
              <ul className="mt-2">
                {meetingLogs.map((log) => (
                  <li key={log.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                    <h4 className="text-lg font-semibold">Meeting Date: {log.date}</h4>
                    <p className="text-gray-600">Notes: {log.notes}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Pending Reviews & Approvals Tab */}
          <TabsContent value="pending-reviews">
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Pending Reviews & Approvals</h3>
              <ul className="mt-2">
                {pendingReviews.map((review) => (
                  <li key={review.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                    <h4 className="text-lg font-semibold">{review.type}</h4>
                    <p className="text-gray-600">Details: {review.details}</p>
                    <p className="text-red-600">Status: {review.status}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageDocuments;
