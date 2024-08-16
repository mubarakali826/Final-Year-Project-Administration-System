import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaSearch, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ongoing');

  // Sample data for ongoing and completed projects
  const ongoingDocuments = [
    { id: 1, projectName: 'Project Alpha', groupMembers: ['Alice', 'Bob'], submittedOn: '2024-07-19' },
    { id: 2, projectName: 'Project Beta', groupMembers: ['Charlie', 'Dave'], submittedOn: '2024-07-18' },
    { id: 2, projectName: 'Project Beta', groupMembers: ['Charlie', 'Dave'], submittedOn: '2024-07-18' },
    { id: 2, projectName: 'Project Beta', groupMembers: ['Charlie', 'Dave'], submittedOn: '2024-07-18' },
  ];

  const completedDocuments = [
    { id: 1, projectName: 'Project Gamma', groupMembers: ['Eve', 'Frank'], submittedOn: '2024-07-17' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDocuments =
    (activeTab === 'ongoing' ? ongoingDocuments : completedDocuments).filter(
      (doc) =>
        doc.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.groupMembers.some((member) =>
          member.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

  return (
    <div className="h-screen flex items-center">
      <div className="manageDocuments gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
      <div className='overflow-y-scroll custom-scrollbar px-5'>

        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="bg-blue-100">
            <TabsTrigger value="ongoing" onClick={() => setActiveTab('ongoing')}>
              Ongoing Projects
            </TabsTrigger>
            <TabsTrigger value="completed" onClick={() => setActiveTab('completed')}>
              Completed Projects
            </TabsTrigger>
          </TabsList>

          {/* Search Bar */}
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Search by project name or group member..."
              className="search-bar p-2 rounded border w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch className="ml-2 text-gray-600" />
          </div>


          <TabsContent value="ongoing" >
            <div className="mt-4 ">
              <h3 className="text-xl font-semibold">Ongoing Projects</h3>
              <ul className="mt-2 ">
                {filteredDocuments.map((doc) => (
                  <li key={doc.id} className="border p-4 rounded-lg mb-2 bg-blue-200 hover:bg-blue-300 cursor-pointer">
                    <Link to={`/supervisor/document-detail/${doc.id}`} state={{ doc }}>
                      <h4 className="text-lg font-semibold">{doc.projectName}</h4>
                      <p className="text-gray-600">Group Members: {doc.groupMembers.join(', ')}</p>
                      <p className="text-gray-600">Submitted On: {doc.submittedOn}</p>
                    </Link>
                    {activeTab === 'ongoing' && (
                      <button className="mt-2 flex items-center bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                        <FaBell className="mr-2" />
                        Send Reminder
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Completed Projects</h3>
              <ul className="mt-2">
                {filteredDocuments.map((doc) => (
                    <li key={doc.id} className="border p-4 rounded-lg mb-2 bg-green-200 hover:bg-green-300 cursor-pointer">
                    <Link to={`/supervisor/document-detail/${doc.id}`} state={{ doc }}>
                      <h4 className="text-lg font-semibold">{doc.projectName}</h4>
                      <p className="text-gray-600">Group Members: {doc.groupMembers.join(', ')}</p>
                      <p className="text-gray-600">Submitted On: {doc.submittedOn}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
                </div>
      </div>
    </div>
  );
};

export default Documents;
