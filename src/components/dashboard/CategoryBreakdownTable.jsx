import React from 'react';
import './DashboardTables.css'; // We will create this CSS file next

const CategoryBreakdownTable = () => {
  const data = [
    { category: 'Water Supply', total: 1200, unresolved: 300, slaBreached: 45 },
    { category: 'Sanitation', total: 950, unresolved: 120, slaBreached: 12 },
    { category: 'Street Lights', total: 800, unresolved: 85, slaBreached: 5 },
    { category: 'Road Repairs', total: 600, unresolved: 210, slaBreached: 80 },
    { category: 'Public Health', total: 450, unresolved: 40, slaBreached: 2 },
  ];

  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Top Categories Breakdown</h3>
      </div>
      <div className="table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Category</th>
              <th className="text-right">Total</th>
              <th className="text-right">Unresolved</th>
              <th className="text-right">SLA Breached</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="font-medium">{row.category}</td>
                <td className="text-right">{row.total}</td>
                <td className="text-right text-red-600 font-bold">{row.unresolved}</td>
                <td className="text-right text-orange-600">{row.slaBreached}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryBreakdownTable;
