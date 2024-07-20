import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';

const LocalHome = () => {
  const projects = [
    { name: 'Project Alpha', members: ['Alice', 'Bob', 'Charlie'], upvotes: 25,technologies:'Machine Learning and Data Science' },
    { name: 'Project Beta', members: ['Dave', 'Eve', 'Frank'], upvotes: 30 , technologies:'MERN stack' },
    { name: 'Project Gamma', members: ['Grace', 'Heidi', 'Ivan'], upvotes: 15, technologies: 'Flutter App development'},
    { name: 'Project Delta', members: ['Jack', 'Kathy', 'Leo'], upvotes: 20, technologies: 'React native app development' },
    { name: 'Project Epsilon', members: ['Mia', 'Nina', 'Oscar'], upvotes: 40, technologies: ' Java Web development'}
  ];

  const [likedStates, setLikedStates] = useState(Array(projects.length).fill(false));
  const [likesCount, setLikesCount] = useState(projects.map(project => project.upvotes));

  const toggleLiked = (index) => {
    const newLikedStates = [...likedStates];
    const newLikesCount = [...likesCount];

    newLikedStates[index] = !newLikedStates[index];
    newLikesCount[index] = newLikedStates[index] ? newLikesCount[index] + 1 : newLikesCount[index] - 1;

    setLikedStates(newLikedStates);
    setLikesCount(newLikesCount);
  };

  const arrangedProjects = projects.sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div className='p-7'>
      <div className='searchBar mb-5 flex justify-between items-center gap-2 mt-2 px-6'>
        <div className="local-filter cursor-pointer text-gray-800 px-10">
      <FaFilter size={30} />
      Filter
        </div>
        <div className='flex justify-center items-center gap-5'>
        <FaSearch size={20} className='text-gray-500' />
        <input type='text' placeholder='Search Project' className='w-[30rem] p-3 rounded-lg'></input>
        </div>
      </div>
      <div className='local-home-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
        {arrangedProjects.map((project, index) => (
          <div key={index} className='project-container cursor-pointer gap-7 h-[15rem] flex flex-col justify-center items-center rounded-lg p-4 shadow-md'>
            <div className='mt-5 flex flex-col justify-center items-center'>
            <div className='project-name text-center font-bold text-lg mb-2 '>{project.name}</div>
            <div className='project-members text-center text-sm mb-2'>
              Members: {project.members.join(', ')}
            </div>
            <div className='project-tech text-center mb-2 text-sm'>{project.technologies}</div>
            </div>
            <div className='project-likes mt-5 text-center text-sm flex items-center justify-center'>
              <div className='heart-bg'>
                <div className={`heart-icon ${likedStates[index] ? 'liked' : ''}`} onClick={() => toggleLiked(index)}></div>
              </div>
              <div className='likes-count'>{likesCount[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalHome;
