import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaLaptopCode, FaCog, FaDatabase } from 'react-icons/fa';

const ManageProjects = () => {
  const [discipline, setDiscipline] = useState('CS');
  const [fyp, setFYP] = useState('FYP1');

  const projectsData = {
    CS: {
      FYP1: [
        { id: 1, name: 'CS Project 1', students: ['Alice', 'Bob'] },
        { id: 2, name: 'CS Project 2', students: ['Charlie', 'Dave'] },
      ],
      FYP2: [
        { id: 3, name: 'CS Project 3', students: ['Eve', 'Frank'] },
      ],
    },
    SE: {
      FYP1: [
        { id: 4, name: 'SE Project 1', students: ['Grace', 'Heidi'] },
      ],
      FYP2: [
        { id: 5, name: 'SE Project 2', students: ['Ivan', 'Judy'] },
        { id: 6, name: 'SE Project 3', students: ['Karl', 'Liam'] },
      ],
    },
  };

  return (
    <div className="h-screen flex items-center">
      <div className="manageProjects gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col">
        <Tabs defaultValue="CS" className="w-full">
          <TabsList className="bg-blue-100">
            <TabsTrigger value="CS" onClick={() => setDiscipline('CS')}>
              <FaLaptopCode className="mr-2" /> CS Projects
            </TabsTrigger>
            <TabsTrigger value="SE" onClick={() => setDiscipline('SE')}>
              <FaCog className="mr-2" /> SE Projects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="CS">
            <Tabs defaultValue="FYP1" className="mt-4">
              <TabsList className="bg-slate-300">
                <TabsTrigger value="FYP1" onClick={() => setFYP('FYP1')}>
                  FYP1
                </TabsTrigger>
                <TabsTrigger value="FYP2" onClick={() => setFYP('FYP2')}>
                  FYP2
                </TabsTrigger>
              </TabsList>
              <TabsContent value="FYP1">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">CS - FYP1 Projects</h3>
                  <ul className="mt-2">
                    {projectsData.CS.FYP1.map((project) => (
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                        <h4 className="text-lg font-semibold">{project.name}</h4>
                        <p className="text-gray-600">Students: {project.students.join(', ')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="FYP2">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">CS - FYP2 Projects</h3>
                  <ul className="mt-2">
                    {projectsData.CS.FYP2.map((project) => (
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                        <h4 className="text-lg font-semibold">{project.name}</h4>
                        <p className="text-gray-600">Students: {project.students.join(', ')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="SE">
            <Tabs defaultValue="FYP1" className="mt-4">
              <TabsList className="bg-slate-300">
                <TabsTrigger value="FYP1" onClick={() => setFYP('FYP1')}>
                  FYP1
                </TabsTrigger>
                <TabsTrigger value="FYP2" onClick={() => setFYP('FYP2')}>
                  FYP2
                </TabsTrigger>
              </TabsList>
              <TabsContent value="FYP1">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">SE - FYP1 Projects</h3>
                  <ul className="mt-2">
                    {projectsData.SE.FYP1.map((project) => (
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                        <h4 className="text-lg font-semibold">{project.name}</h4>
                        <p className="text-gray-600">Students: {project.students.join(', ')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="FYP2">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">SE - FYP2 Projects</h3>
                  <ul className="mt-2">
                    {projectsData.SE.FYP2.map((project) => (
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200">
                        <h4 className="text-lg font-semibold">{project.name}</h4>
                        <p className="text-gray-600">Students: {project.students.join(', ')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageProjects;
