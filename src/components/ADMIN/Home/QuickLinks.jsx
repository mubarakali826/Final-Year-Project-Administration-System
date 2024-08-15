import React from 'react';
import { FaAmbulance } from 'react-icons/fa';
import { FaAddressBook, FaPerson, FaManatSign } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const adminLinks = [
  { icon: <FaAddressBook className='text-white' size={15} />, label: 'Home', href: '#' },
  { icon: <FaAmbulance className='text-white' size={15} />, label: 'Broadcast', href: '#' },
  { icon: <FaPerson className='text-white' size={15} />, label: 'View Students', href: '#' },
  { icon: <FaManatSign className='text-white' size={10} />, label: 'View Supervisors', href: '#' },
  // Add more admin links as needed
];

const supervisorLinks = [
  { icon: <FaAddressBook className='text-white' size={15} />, label: 'Home', href: '#' },
  { icon: <FaAmbulance className='text-white' size={15} />, label: 'Broadcast', href: '#' },
  { icon: <FaPerson className='text-white' size={15} />, label: 'My Students', href: '#' },
  { icon: <FaManatSign className='text-white' size={10} />, label: 'My Projects', href: '#' },
  // Add more supervisor links as needed
];

const QuickLinks = () => {
  const location = useLocation();

  // Determine the user's role based on the pathname
  const userRole = location.pathname.includes('supervisor') ? 'supervisor' : 'admin';

  // Select links based on the user role
  const links = userRole === 'supervisor' ? supervisorLinks : adminLinks;

  return (
    <div className="rounded-lg max-w-[17rem]">
      <div className="p-4 pt-1">
        <h2 className="text-lg font-semibold text-blue-600">Quick Links</h2>
      </div>
      <div className="flex flex-col gap-4 p-4 pt-1">
        {links.map((link, index) => (
          <a href={link.href} key={index} className="flex items-center gap-2 text-sm text-gray-600 hover">
            <div className='bg-red-500 rounded-full h-7 w-7 flex items-center justify-center'>
              {link.icon}
            </div>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
