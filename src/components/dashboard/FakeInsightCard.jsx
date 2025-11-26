import React, { useState } from "react";
import FakeRiskLocations from "./FakeRiskLocations";
import "./FakeInsightCard.css";

function FlaggedFakeGrievancesTable() {
  return (
    <div className="flagged-table-placeholder">
      Flagged Grievances List Component
    </div>
  );
}

const FakeInsightCard = () => {
  const [activeTab, setActiveTab] = useState('locations');
  return (
    <div className="fake-card">
      <div className="fake-card-header">
        <h3 className="fake-card-title">Risk &amp; Fake Intelligence</h3>
        <div className="tab-group">
          <button
            onClick={() => setActiveTab('locations')}
            className={`tab-btn${activeTab === 'locations' ? ' tab-active' : ''}`}
          >
            High Risk Locations
          </button>
          <button
            onClick={() => setActiveTab('flagged')}
            className={`tab-btn${activeTab === 'flagged' ? ' tab-active' : ''}`}
          >
            Flagged Grievances
          </button>
        </div>
      </div>
      <div className="fake-card-content">
        {activeTab === "locations" ? <FakeRiskLocations /> : <FlaggedFakeGrievancesTable />}
      </div>
    </div>
  );
};

export default FakeInsightCard;
