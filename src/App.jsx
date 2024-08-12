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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/admin/home" element={<><AdminHome /><Sidebar/></>} />
        <Route path="/admin/analytics" element={<><AdminAnalytics /><Sidebar/></>} />
        <Route path="/admin/broadcast" element={<><Broadcast /><Sidebar/></>} />
        <Route path="/admin/logins" element={<><ManageLogins /><Sidebar/></>} />
        <Route path="/admin/projects" element={<><Projects/><Sidebar/></>} />
        <Route path="/admin/project-details" element={<><ProjectDetails/><Sidebar/></>} />
        <Route path="/edit-profile" element={<><EditProfile /><Sidebar/></>} />
        <Route path="/local/home" element={<LocalHome />} />
        <Route path="/local/documents" element={<LocalDocuments />} />
        <Route path="/local/overview" element={<LocalOverview />} />
        <Route path="/" element={<Login/>} /> {/* Default route */}
      </Routes>
    </Router>
  );
}
