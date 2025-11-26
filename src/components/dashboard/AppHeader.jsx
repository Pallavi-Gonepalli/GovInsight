import React, { useState } from 'react';
import { Bell, User, Menu, Settings, FileText, MessageSquare, Activity } from 'lucide-react';

import './AppHeader.css';
import logo from '../../assets/logo.jpeg';

const AppHeader = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom modal

  const navItems = [
    { name: 'Dashboard', icon: Activity },
    { name: 'Staff Performance', icon: FileText },
    { name: 'Repeat Grievances', icon: Settings },
    { name: 'Query Assistant', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <>
      <header className="app-header">
        <div className="header-container">

          {/* Left: Brand & Logo */}
          <div className="brand-section">
            {/* Clickable Logo Wrapper */}
            <div
              className="logo"
              onClick={() => setIsZoomed(true)}
              title="Click to Zoom"
            >
              <img src={logo} alt="InsightGOV Logo" />
            </div>
            <div className="brand-info">
              <h1>InsightGOV</h1>
              <p>AI Governance Engine</p>
            </div>
          </div>

          {/* Middle: Navigation Tabs */}
          <nav className="nav-tabs">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`nav-tab ${activeTab === item.name ? 'active' : ''}`}
                onClick={() => setActiveTab(item.name)}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Right: User Info & Actions */}
          <div className="user-actions">
            <button className="notif-btn">
              <Bell size={20} />
              <span className="badge-dot"></span>
            </button>

            <div className="user-profile">
              <div className="user-details text-right">
                <span className="user-name">Admin</span>
                <span className="user-role">District Officer</span>
              </div>
              <div className="avatar">
                <User size={18} />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- Zoom Modal Overlay --- */}
      {isZoomed && (
        <div className="logo-modal-overlay" onClick={() => setIsZoomed(false)}>
          <div className="logo-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={logo} alt="Zoomed Logo" />
          </div>
        </div>
      )}
    </>
  );
};

export default AppHeader;
