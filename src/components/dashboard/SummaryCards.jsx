import React from 'react';
import { FileText, AlertCircle, Repeat, Zap, ShieldAlert } from 'lucide-react';
import './SummaryCards.css';

const SummaryCard = ({ title, value, subtext, icon: Icon, gradient, trend }) => {
  return (
    <div className="summary-card" style={{ background: gradient }}>
      <div className="card-content">
        <div className="text-section">
          <h3 className="card-title">{title}</h3>
          <p className="card-value">{value}</p>
          <p className="card-subtext">
            {subtext}
            {trend && <span className="trend-indicator"> ({trend})</span>}
          </p>
        </div>
        <div className="icon-section">
          <Icon size={48} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

const SummaryCards = () => {
  const metrics = [
    // ROW 1 (3 Cards)
    {
      title: "Total Grievances",
      value: "12,450",
      subtext: "+12% vs last month",
      icon: FileText,
      gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)", // Pink-Purple
      trend: "+12%"
    },
    {
      title: "Unresolved > 30 Days",
      value: "845",
      subtext: "Active grievances",
      icon: AlertCircle,
      gradient: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)", // Orange-Yellow
      trend: "-5%"
    },
    {
      title: "Repeat Grievances",
      value: "2,300",
      subtext: "Same citizen issue",
      icon: Repeat,
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", // Cyan-Blue
      trend: "+8%"
    },
    // ROW 2 (2 Cards)
    {
      title: "Escalations",
      value: "120",
      subtext: "Sent to higher authority",
      icon: Zap,
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", // Red
      trend: "+2%"
    },
    {
      title: "Suspected Fake",
      value: "45",
      subtext: "High-risk patterns",
      icon: ShieldAlert,
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Green (Emerald)
      trend: "-10%"
    },
  ];

  return (
    <div className="summary-container">
        <h1 className="section-title"></h1>
      <div className="summary-row row-1">
        {metrics.slice(0, 3).map((m, idx) => <SummaryCard key={idx} {...m} />)}
      </div>
      <div className="summary-row row-2">
        {metrics.slice(3, 5).map((m, idx) => <SummaryCard key={idx} {...m} />)}
      </div>
    </div>
  );
};

export default SummaryCards;
