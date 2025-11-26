import React, { useState } from 'react';
import './DashboardTables.css';

const RiskLocationsTable = () => (
  <table className="dashboard-table small-text">
    <thead>
      <tr>
        <th>Location</th>
        <th>Risk</th>
        <th>Pattern Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mandal A</td>
        <td><span className="badge high">HIGH</span></td>
        <td>Bulk Similar Text</td>
      </tr>
      <tr>
        <td>Mandal B</td>
        <td><span className="badge medium">MED</span></td>
        <td>Sudden Spike</td>
      </tr>
      <tr>
        <td>Mandal C</td>
        <td><span className="badge medium">MED</span></td>
        <td>Same Mobile Group</td>
      </tr>
    </tbody>
  </table>
);

const FlaggedGrievancesTable = () => (
  <table className="dashboard-table small-text">
    <thead>
      <tr>
        <th>ID</th>
        <th>Type</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="link-text">#GR-1023</td>
        <td>Mass Filing</td>
        <td><span className="score-bar" style={{width: '90%', backgroundColor: '#ef4444'}}></span></td>
      </tr>
      <tr>
        <td className="link-text">#GR-1045</td>
        <td>Duplicate</td>
        <td><span className="score-bar" style={{width: '75%', backgroundColor: '#f97316'}}></span></td>
      </tr>
      <tr>
        <td className="link-text">#GR-1089</td>
        <td>Anomaly</td>
        <td><span className="score-bar" style={{width: '60%', backgroundColor: '#eab308'}}></span></td>
      </tr>
    </tbody>
  </table>
);

const RiskAndFakeInsightsCard = () => {
  const [activeTab, setActiveTab] = useState('locations');

  return (
    <div className="table-card">
      <div className="tabs-header">
        <h3>Risk Insights</h3>
        <div className="tab-pill-group">
          <button
            className={activeTab === 'locations' ? 'active' : ''}
            onClick={() => setActiveTab('locations')}
          >
            Locations
          </button>
          <button
            className={activeTab === 'grievances' ? 'active' : ''}
            onClick={() => setActiveTab('grievances')}
          >
            Flagged
          </button>
        </div>
      </div>
      <div className="table-container">
        {activeTab === 'locations' ? <RiskLocationsTable /> : <FlaggedGrievancesTable />}
      </div>

    </div>
  );
};

export default RiskAndFakeInsightsCard;
