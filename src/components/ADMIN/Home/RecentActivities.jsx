import React from 'react';
import { useLocation } from 'react-router-dom';

const adminActivities = [
  { id: 1, text: 'Approved FYP proposal', date: '2024-07-19' },
  { id: 2, text: 'Scheduled project reviews', date: '2024-07-18' },
  { id: 3, text: 'Reviewed system requirements', date: '2024-07-17' },
  // Add more activities for admin as needed
];

const supervisorActivities = [
  { id: 1, text: 'Submitted FYP proposal', date: '2024-07-19' },
  { id: 2, text: 'Met with project supervisor', date: '2024-07-18' },
  { id: 3, text: 'Completed system requirements', date: '2024-07-17' },
  { id: 4, text: 'Started implementation', date: '2024-07-16' },
  // Add more activities for supervisor as needed
];

export default function RecentActivities() {
  const location = useLocation();

  // Determine the user's role based on the pathname
  const userRole = location.pathname.includes('supervisor') ? 'supervisor' : 'admin';

  // Select activities based on the user role
  const activities = userRole === 'supervisor' ? supervisorActivities : adminActivities;

  return (
    <div className="rounded-lg max-w-[17rem]">
      <div className="p-4 pt-1">
        <h2 className="text-2xl font-semibold text-teal-800">Recent Activities</h2>
      </div>
      <div className="max-h-[220px] overflow-y-auto p-4 custom-scrollbar">
        {activities.map((activity) => (
          <div key={activity.id}>
            <div className="text-sm text-gray-600">{activity.date}</div>
            <div className="text-base mb-2 text-gray-700">{activity.text}</div>
            <hr className="border-b-1 border-gray-300 mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
