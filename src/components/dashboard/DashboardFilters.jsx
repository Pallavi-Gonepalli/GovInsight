import React, { useState } from 'react';
import { Filter, Loader2 } from 'lucide-react';
import './DashboardFilters.css';

const DashboardFilters = ({ onApply }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    district: 'All Districts',
    department: 'All Departments',
    timeRange: 'Last 30 days'
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyClick = () => {
    setIsLoading(true);

    // Simulate a network request/data fetch delay
    setTimeout(() => {
      setIsLoading(false);
      if (onApply) onApply(filters); // Trigger parent update
    }, 1500);
  };

  const districts = [
    "Visakhapatnam", "Guntur", "Krishna", "Chittoor", "Nellore",
    "Kurnool", "Anantapur", "East Godavari", "West Godavari"
  ];

  const departments = [
    "Revenue", "Panchayat Raj", "RWS (Rural Water Supply)",
    "Municipal Admin", "Health & Family Welfare", "Police", "Agriculture"
  ];

  return (
    <div className="dashboard-filters">
      <div className="filters-container">
        <div className="filter-group no-scrollbar">

          {/* 1. State (Read-Only) */}
          <div className="select-wrapper">
            <select className="filter-select" disabled value="Andhra Pradesh">
              <option>Andhra Pradesh</option>
            </select>
          </div>

          {/* 2. District */}
          <div className="select-wrapper">
            <select
              className="filter-select"
              value={filters.district}
              onChange={(e) => handleFilterChange('district', e.target.value)}
            >
              <option>All Districts</option>
              {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          {/* 3. Department */}
          <div className="select-wrapper">
            <select
              className="filter-select"
              value={filters.department}
              onChange={(e) => handleFilterChange('department', e.target.value)}
            >
              <option>All Departments</option>
              {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
            </select>
          </div>

          {/* 4. Time Range */}
          <div className="select-wrapper">
            <select
              className="filter-select time-select"
              value={filters.timeRange}
              onChange={(e) => handleFilterChange('timeRange', e.target.value)}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Month</option>
              <option>Custom...</option>
            </select>
          </div>

        </div>

        {/* 5. Apply Button with Loading State */}
        <button
          className={`apply-btn ${isLoading ? 'loading' : ''}`}
          onClick={handleApplyClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Filter size={16} />
          )}
          <span>{isLoading ? 'Fetching Data...' : 'Apply Filters'}</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardFilters;
