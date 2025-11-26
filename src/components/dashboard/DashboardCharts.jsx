import React, { useState, useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';

// --- 1. Trend Chart Data ---
const monthData = [
  { name: 'Jan', total: 4000, resolved: 2400, pending: 1600 },
  { name: 'Feb', total: 3000, resolved: 1398, pending: 1602 },
  { name: 'Mar', total: 2000, resolved: 1800, pending: 200 },
  { name: 'Apr', total: 2780, resolved: 1908, pending: 872 },
  { name: 'May', total: 1890, resolved: 800, pending: 1090 },
  { name: 'Jun', total: 2390, resolved: 1800, pending: 590 },
];

const weekData = [
  { name: 'Wk 1', total: 1200, resolved: 800, pending: 400 },
  { name: 'Wk 2', total: 1500, resolved: 900, pending: 600 },
  { name: 'Wk 3', total: 1100, resolved: 950, pending: 150 },
  { name: 'Wk 4', total: 1800, resolved: 1200, pending: 600 },
];

const dayData = [
  { name: 'Mon', total: 250, resolved: 200, pending: 50 },
  { name: 'Tue', total: 300, resolved: 150, pending: 150 },
  { name: 'Wed', total: 280, resolved: 220, pending: 60 },
  { name: 'Thu', total: 400, resolved: 300, pending: 100 },
  { name: 'Fri', total: 350, resolved: 250, pending: 100 },
  { name: 'Sat', total: 200, resolved: 180, pending: 20 },
  { name: 'Sun', total: 150, resolved: 140, pending: 10 },
];

// --- 2. Hotspot Chart Data ---
const hotspotData = [
  { name: 'Mandal A', unresolved: 400, total: 1200 },
  { name: 'Mandal B', unresolved: 300, total: 900 },
  { name: 'Mandal C', unresolved: 250, total: 850 },
  { name: 'Mandal D', unresolved: 200, total: 600 },
];

// --- COMPONENTS ---

export const TrendChart = ({ filters }) => {
  const [timeFrame, setTimeFrame] = useState('Month');

  // Determine which data to show based on state
  const chartData = useMemo(() => {
    switch (timeFrame) {
      case 'Day': return dayData;
      case 'Week': return weekData;
      case 'Month': return monthData;
      default: return monthData;
    }
  }, [timeFrame]);

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Grievance Trends {filters?.district && filters.district !== 'All Districts' ? `(${filters.district})` : ''}</h3>
        <div className="chart-controls">
          {['Day', 'Week', 'Month'].map((tf) => (
            <button
              key={tf}
              className={`control-pill ${timeFrame === tf ? 'active' : ''}`}
              onClick={() => setTimeFrame(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="name"
              tick={{fontSize: 12, fill: '#64748b'}}
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              tick={{fontSize: 12, fill: '#64748b'}}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              name="Total Registered"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{r: 4}}
              activeDot={{r: 6}}
            />
            <Line
              type="monotone"
              dataKey="resolved"
              name="Resolved"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="pending"
              name="Pending"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const HotspotChart = ({ filters }) => {
  const [metric, setMetric] = useState('unresolved');

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Top Mandals {filters?.district && filters.district !== 'All Districts' ? `(${filters.district})` : ''}</h3>
        <div className="chart-toggle">
          <button
            className={metric === 'unresolved' ? 'active' : ''}
            onClick={() => setMetric('unresolved')}
          >
            Unresolved
          </button>
          <button
            className={metric === 'total' ? 'active' : ''}
            onClick={() => setMetric('total')}
          >
            All
          </button>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={hotspotData} layout="vertical" barCategoryGap={20}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={80}
              tick={{fontSize: 12, fill: '#64748b'}}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
            <Bar
              dataKey={metric}
              fill={metric === 'unresolved' ? '#ef4444' : '#3b82f6'}
              radius={[0, 4, 4, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
