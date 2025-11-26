import React from "react";
import "./FakeInsightCard.css";  // Import the CSS file!

const riskLocations = [
  {
    rank: 1,
    location: "Zone 4, Ward 12",
    riskLevel: "HIGH",
    pattern: "Active Bot",
    signals: "22 similar complaints in 2 hrs",
    score: "92%"
  },
  {
    rank: 2,
    location: "Zone 2, Ward 5",
    riskLevel: "MEDIUM",
    pattern: "Bulk Similar Text",
    signals: "18 similar texts",
    score: "78%"
  },
];

function RiskBadge({ level }) {
  let className = "risk-badge ";
  if (level === "HIGH") className += "high";
  else if (level === "MEDIUM") className += "medium";
  else className += "low";
  return <span className={className}>{level}</span>;
}

const FakeRiskLocationsTable = () => (
  <table className="risk-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Location</th>
        <th>Risk Level</th>
        <th>Pattern Type</th>
        <th>Signals</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {riskLocations.map(row => (
        <tr key={row.rank} className="risk-row">
          <td>{row.rank}</td>
          <td>{row.location}</td>
          <td><RiskBadge level={row.riskLevel} /></td>
          <td>{row.pattern}</td>
          <td>{row.signals}</td>
          <td className="score-cell">{row.score}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={6} className="table-footnote">
          These are AI-based early warnings. Officers must review before action.
        </td>
      </tr>
    </tfoot>
  </table>
);
export default FakeRiskLocationsTable;
