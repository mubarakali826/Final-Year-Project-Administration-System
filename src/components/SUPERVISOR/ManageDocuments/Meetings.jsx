import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

const Meetings = () => {
  const navigate = useNavigate();
   
  const groupName="Mubarak , Noman"
  const meetingLogs = [
    { id: 1, date: '2024-07-05', mainPoints: 'Introduced project goals and objectives.' },
    { id: 2, date: '2024-07-12', mainPoints: 'Discussed initial requirements and scope.' },
    { id: 3, date: '2024-07-19', mainPoints: 'Reviewed design prototypes and feedback.' },
    { id: 4, date: '2024-07-26', mainPoints: 'Discussed database schema and API structure.' },
    { id: 5, date: '2024-08-02', mainPoints: 'Reviewed progress on frontend development.' },
    { id: 6, date: '2024-08-09', mainPoints: 'Discussed integration with backend services.' },
    { id: 7, date: '2024-08-16', mainPoints: 'Reviewed testing strategy and QA plan.' },
    { id: 8, date: '2024-08-23', mainPoints: 'Discussed deployment and hosting options.' },
    { id: 9, date: '2024-08-30', mainPoints: 'Reviewed project completion and final steps.' },
  ];
  
  const expectedMeetings = 5;

  // Check if meetings are below the expected number
  const isBelowExpected = meetingLogs.length < expectedMeetings;

  return (
    <div className="h-screen flex items-center">
      <div className="manageDocuments gap-4 h-[85%] w-[69%] ml-[26%] rounded-2xl p-8 flex flex-col relative">
        <RxCross2
          size={30}
          className="absolute top-8 right-[4rem] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="overflow-y-scroll custom-scrollbar px-5">
          <h2 className="text-2xl font-bold">{groupName} - Meeting Logs</h2>

          <div className="mt-4">
            <ul className="mt-2">
              {meetingLogs.map((log, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg mb-2 bg-green-200 hover:bg-green-300 cursor-pointer"
                >
                  <Link to={`/supervisor/document-detail/${log.id}`} state={{ log }}>
                    <h4 className="text-lg font-semibold">Meeting {index + 1}</h4>
                    <p className="text-gray-600">Date: {log.date}</p>
                    <p className="text-gray-600">Main Points Discussed: {log.mainPoints}</p>
                  </Link>
                </li>
              ))}
            </ul>

            {isBelowExpected && (
              <button className="mt-6 flex items-center bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600">
                <FaBell className="mr-2" />
                Send Reminder - Meetings Below Expected Number
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
