import React, { useState } from 'react';
import AppHeader from '../components/dashboard/AppHeader';
import DashboardFilters from '../components/dashboard/DashboardFilters';
import SummaryCards from '../components/dashboard/SummaryCards';
import EarlyWarningStrip from '../components/dashboard/EarlyWarningStrip';
import { TrendChart, HotspotChart } from '../components/dashboard/DashboardCharts';
import CategoryBreakdownTable from '../components/dashboard/CategoryBreakdownTable';
import RiskAndFakeInsightsCard from '../components/dashboard/RiskAndFakeInsightsCard';
import './DashboardPage.css';

const DashboardPage = () => {
  // --- 1. State to hold active filters ---
  const [activeFilters, setActiveFilters] = useState({
    district: 'All Districts',
    department: 'All Departments',
    timeRange: 'Last 30 days'
  });

  // --- 2. Handler called when "Apply" is clicked ---
  const handleFilterApply = (newFilters) => {
    console.log("Filters Applied:", newFilters);
    setActiveFilters(newFilters);
  };

  return (
    <div className="page-layout">
      <AppHeader />

      {/* --- 3. Pass handler to Filters component --- */}
      <DashboardFilters onApply={handleFilterApply} />

      <main className="main-content">
        <div className="content-wrapper">
          <section className="section-block">
            <h2 className="section-title">Overview</h2>
            <SummaryCards filters={activeFilters} /> {/* Pass filters if needed */}
          </section>

          <EarlyWarningStrip />

          <div className="main-grid-layout" style={{ display: 'grid', gridTemplateColumns: '6fr 4fr', gap: '24px', marginTop: '24px' }}>
            <div className="left-column" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* --- 4. Pass filters to Charts so they can update --- */}
              <TrendChart filters={activeFilters} />
              <HotspotChart filters={activeFilters} />
            </div>

            <div className="right-column" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <CategoryBreakdownTable />
              <RiskAndFakeInsightsCard />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
