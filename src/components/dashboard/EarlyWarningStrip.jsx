import React, { useState } from 'react';
import { TrendingUp, CloudRain, AlertTriangle, ShieldAlert, Zap, X, ArrowRight } from 'lucide-react';
import './EarlyWarningStrip.css';

// --- Sub-Component: The Center Modal ---
const EarlyWarningModal = ({ warning, onClose }) => {
  if (!warning) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="center-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{warning.title}</h3>
          <button onClick={onClose} className="close-btn"><X size={24} /></button>
        </div>

        <div className="modal-body">
          <div className={`risk-badge-large ${warning.severity}`}>
            {warning.severity.toUpperCase()} RISK
          </div>

          <p className="modal-desc">{warning.prediction}</p>

          <div className="modal-section">
            <h4>Impact Analysis</h4>
            <p>AI analysis detected patterns matching historical risk indicators for {warning.title}.</p>
          </div>

          <div className="modal-section">
            <h4>Recommended Actions</h4>
            <ul className="action-list">
              <li>Deploy field officers to affected zones.</li>
              <li>Send automated SMS alerts to citizens.</li>
              <li>Review resource allocation for next 7 days.</li>
            </ul>
          </div>

          {/* The "View Locations" action is now the primary content here */}
          <div className="modal-action-area">
             <button className="primary-modal-btn" onClick={() => alert("Navigating to detailed map view...")}>
               See Detailed Locations
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Card Component ---
const EarlyWarningCard = ({ title, prediction, severity, icon: Icon, cta, onClick }) => {
  return (
    <div className={`warning-card ${severity}`} onClick={onClick}>
      <div className="card-top">
        <div className="icon-wrapper">
          <Icon size={20} />
        </div>
        <span className={`risk-badge ${severity}`}>{severity} Risk</span>
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <p>{prediction}</p>
      </div>
      <div className="card-footer">
        <span className="cta-text">{cta}</span>
        <ArrowRight size={14} className="arrow-icon" />
      </div>
    </div>
  );
};

// --- Main Component ---
const EarlyWarningStrip = () => {
  const [selectedWarning, setSelectedWarning] = useState(null);

  // --- UPDATED WARNINGS ORDER ---
  // 1. SLA Breach Risk
  // 2. Fake / Coordinated Risk
  // 3. Seasonal Disease Risk
  // 4. Flood / Rain Impact
  // 5. Citizen Safety Hotspots

  const warnings = [
    {
      title: "SLA Breach Risk",
      prediction: "42 grievances likely to cross SLA next 7 days.",
      severity: "medium",
      icon: TrendingUp,
      cta: "View high-risk cases"
    },
    {
      title: "Fake / Coordinated Risk",
      prediction: "Unusual spike in similar grievances from 2 mandals.",
      severity: "low",
      icon: ShieldAlert,
      cta: "View suspicious patterns"
    },
    {
      title: "Seasonal Disease Risk",
      prediction: "High vector-borne disease risk in 3 mandals.",
      severity: "high",
      icon: CloudRain,
      cta: "View impacted mandals"
    },
    {
      title: "Flood / Rain Impact",
      prediction: "5 low-lying mandals likely to face flood issues.",
      severity: "high",
      icon: CloudRain,
      cta: "View locations"
    },
    {
      title: "Citizen Safety Hotspots",
      prediction: "Rising safety complaints in 2 urban wards.",
      severity: "medium",
      icon: Zap,
      cta: "View wards"
    },
  ];

  return (
    <div className="warning-section">
      <div className="section-header-strip">
        <h3>Predictions & Early Warnings <span className="header-sub">(Next 30 Days)</span></h3>
      </div>

      <div className="warning-grid-container">
        {/* Row 1: First 3 cards */}
        <div className="warning-row row-1">
          {warnings.slice(0, 3).map((w, i) => (
            <EarlyWarningCard key={i} {...w} onClick={() => setSelectedWarning(w)} />
          ))}
        </div>

        {/* Row 2: Next 2 cards (Centered) */}
        <div className="warning-row row-2">
          {warnings.slice(3, 5).map((w, i) => (
            <EarlyWarningCard key={i + 3} {...w} onClick={() => setSelectedWarning(w)} />
          ))}
        </div>
      </div>

      {/* Center Modal */}
      {selectedWarning && (
        <EarlyWarningModal
          warning={selectedWarning}
          onClose={() => setSelectedWarning(null)}
        />
      )}
    </div>
  );
};

export default EarlyWarningStrip;
