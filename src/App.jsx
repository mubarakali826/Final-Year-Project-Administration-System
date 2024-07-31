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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/admin/home" element={<><AdminHome /><Sidebar/></>} />
        <Route path="/admin/analytics" element={<><AdminAnalytics /><Sidebar/></>} />
        <Route path="/local/home" element={<LocalHome />} />
        <Route path="/local/documents" element={<LocalDocuments />} />
        <Route path="/local/overview" element={<LocalOverview />} />
        <Route path="/" element={<Login/>} /> {/* Default route */}
      </Routes>
    </Router>
  );
}
