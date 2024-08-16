import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaLaptopCode, FaCog, FaDatabase } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ManageProjects = () => {
  const [discipline, setDiscipline] = useState('CS');
  const [fyp, setFYP] = useState('FYP1');
  const Navigate=useNavigate()
  const handleProjectClick = (project) => {
    Navigate("/supervisor/project-details", { state: { project } });
  };
  
  const projectsData = {
  CS: {
    FYP1: [
      {
        id: 1,
        name: 'CS Project 1',
        techStack: ['React', 'Node.js', 'MongoDB'],
        progress: 75,
        milestones: {
          current: 'Implement Authentication',
          covered: ['Setup Project', 'Create Initial Components', 'Setup Database'],
        },
        meetings: 5,
        students: ['Alice', 'Bob'],
        overview: 'This project aims to create a robust web application for managing tasks and deadlines.',
      },
      {
        id: 2,
        name: 'CS Project 2',
        techStack: ['Vue.js', 'Express', 'PostgreSQL'],
        progress: 50,
        milestones: {
          current: 'Build User Dashboard',
          covered: ['Create API', 'Design UI', 'Setup Authentication'],
        },
        meetings: 3,
        students: ['Charlie', 'Dave'],
        overview: 'This project focuses on building a user-friendly dashboard for data visualization.',
      },
    ],
    FYP2: [
      {
        id: 3,
        name: 'CS Project 3',
        techStack: ['Angular', 'Spring Boot', 'MySQL'],
        progress: 85,
        milestones: {
          current: 'Optimize Performance',
          covered: ['Setup Backend', 'Integrate Frontend', 'Implement Security'],
        },
        meetings: 7,
        students: ['Eve', 'Frank'],
        overview: 'This project is aimed at optimizing performance and scalability of a web application.',
      },
    ],
  },
  SE: {
    FYP1: [
      {
        id: 4,
        name: 'SE Project 1',
        techStack: ['React', 'Firebase', 'Firestore'],
        progress: 65,
        milestones: {
          current: 'Implement Notifications',
          covered: ['Setup Project', 'Create Database', 'Integrate Authentication'],
        },
        meetings: 4,
        students: ['Grace', 'Heidi'],
        overview: 'This project aims to develop a real-time notification system for web applications.',
      },
    ],
    FYP2: [
      {
        id: 5,
        name: 'SE Project 2',
        techStack: ['Django', 'React', 'SQLite'],
        progress: 40,
        milestones: {
          current: 'Develop API Endpoints',
          covered: ['Setup Backend', 'Design Frontend', 'Implement User Authentication'],
        },
        meetings: 2,
        students: ['Ivan', 'Judy'],
        overview: 'This project focuses on building a RESTful API for a student management system.',
      },
      {
        id: 6,
        name: 'SE Project 3',
        techStack: ['Laravel', 'Vue.js', 'MySQL'],
        progress: 70,
        milestones: {
          current: 'Finalize UI Design',
          covered: ['Setup Backend', 'Create Frontend Components', 'Integrate Payment Gateway'],
        },
        meetings: 6,
        students: ['Karl', 'Liam'],
        overview: 'This project involves developing an e-commerce platform with advanced features.',
      },
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
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200 hover:bg-blue-300 cursor-pointer" onClick={()=>handleProjectClick(project)}>
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
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200 hover:bg-blue-300 cursor-pointer" onClick={()=>handleProjectClick(project)}>
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
                      <li key={project.id} className="border p-4 rounded-lg mb-2  bg-blue-200 hover:bg-blue-300 cursor-pointer" onClick={()=>handleProjectClick(project)}>
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
                      <li key={project.id} className="border p-4 rounded-lg mb-2 bg-blue-200 hover:bg-blue-300 cursor-pointer" onClick={()=>handleProjectClick(project)}>
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
