import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AdminAnalytics from './components/ADMIN/Analytics/AdminAnalytics';
import AdminHome from './components/ADMIN/Home/AdminHome';
import LocalDocuments from './components/Local user/LocalDocuments';
import LocalHome from './components/Local user/LocalHome';
import LocalOverview from './components/Local user/LocalOverview';
import Login from './components/Login/Login';
import Roles from './components/Login/Roles';
import Sidebar from './components/Login/Sidebar/Sidebar';
import ManageLogins from './components/ADMIN/Manage Logins/ManageLogins';
import Broadcast from './components/ADMIN/Broadcast/Broadcast';
import EditProfile from './components/Login/Sidebar/EditProfile';
import Projects from './components/ADMIN/Projects/Projects';
import ProjectDetails from './components/ADMIN/Projects/ProjectDetails';
import SupervisorHome from './components/SUPERVISOR/Home/SupervisorHome';
import ManageProjects from './components/SUPERVISOR/ManageProjects.jsx/ManageProjects';
import ManageDocuments from './components/SUPERVISOR/ManageDocuments/ManageDocuments';
import Chat from './components/SUPERVISOR/Chat/Chat';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/roles" element={<Roles />} />

        {/* ========================= ADMIN ROUTES ======================== */}

        <Route path="/admin/home" element={<><AdminHome /><Sidebar/></>} />
        <Route path="/admin/analytics" element={<><AdminAnalytics /><Sidebar/></>} />
        <Route path="/admin/broadcast" element={<><Broadcast /><Sidebar/></>} />
        <Route path="/admin/logins" element={<><ManageLogins /><Sidebar/></>} />
        <Route path="/admin/projects" element={<><Projects/><Sidebar/></>} />
        <Route path="/admin/project-details" element={<><ProjectDetails/><Sidebar/></>} />
        <Route path="/admin/edit-profile" element={<><EditProfile /><Sidebar/></>} />

        {/* ========================= LOCAL USER ROUTES ======================== */}

        <Route path="/local/home" element={<LocalHome />} />
        <Route path="/local/documents" element={<LocalDocuments />} />
        <Route path="/local/overview" element={<LocalOverview />} />
        <Route path="/" element={<Login/>} />

        {/* ========================= SUPERVISOR ROUTES ======================== */}
        
        <Route path="/supervisor/home" element={<><SupervisorHome /><Sidebar/></>} />
        <Route path="/supervisor/projects" element={<><Projects/><Sidebar/></>} />
        <Route path="/supervisor/manage-projects" element={<><ManageProjects/><Sidebar/></>} />
        <Route path="/supervisor/manage-documents" element={<><ManageDocuments/><Sidebar/></>} />
        <Route path="/supervisor/chat" element={<><Chat/><Sidebar/></>} />



      </Routes>
    </Router>
  );
}
