import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaUsers, FaSearch, FaPaperPlane, FaFileUpload, FaImage } from 'react-icons/fa';

const ChatModule = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [chatTabs, setChatTabs] = useState([]);

  const groups = [
    { id: 1, name: 'Group Alpha' },
    { id: 2, name: 'Group Beta' },
    { id: 3, name: 'Group Gamma' },
    { id: 4, name: 'Group Delta' },
  ];

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGroupClick = (group) => {
    if (!chatTabs.find(tab => tab.id === group.id)) {
      setChatTabs([...chatTabs, group]);
    }
    setSelectedGroup(group);
  };

  return (
    <div className="h-screen flex items-center">
      <div className="supHome gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <div className="flex gap-4">
          {/* Group Selection Section */}
          <div className="w-1/3 border-r pr-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Select Group</h3>
              <div className="relative mt-2 ">
                <FaSearch className="absolute left-3 top-2 text-gray-400 mt-1 " />
                <input
                  type="text"
                  className="w-full border rounded-lg pl-10 pr-4 py-2 focus:ring focus:ring-blue-300"
                  placeholder="Search for a group..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <ul className="mt-4">
              {filteredGroups.map(group => (
                <li
                  key={group.id}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => handleGroupClick(group)}
                >
                  <FaUsers className="inline mr-2" />
                  {group.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Tabs Section */}
          <div className="w-2/3">
            <Tabs defaultValue={selectedGroup?.id || ''} className="w-full">
              <TabsList className="bg-blue-100">
                {chatTabs.map(tab => (
                  <TabsTrigger key={tab.id} value={tab.id}>
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {chatTabs.map(tab => (
                <TabsContent key={tab.id} value={tab.id}>
                  <div className="flex flex-col h-80 border rounded-lg p-4 shadow-inner ">
                    <div className="flex-1 overflow-y-auto p-2">
                      {/* Chat messages would appear here */}
                      <p className="text-gray-500 text-center">No messages yet.</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 border rounded-lg p-2 focus:ring focus:ring-blue-300"
                      />
                      <button className="bg-blue-500 text-white rounded-lg p-2">
                        <FaPaperPlane />
                      </button>
                      <button className="bg-gray-200 text-gray-600 rounded-lg p-2">
                        <FaImage />
                      </button>
                      <button className="bg-gray-200 text-gray-600 rounded-lg p-2">
                        <FaFileUpload />
                      </button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
