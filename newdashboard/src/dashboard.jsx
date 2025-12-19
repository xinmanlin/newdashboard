import React from "react";

// Sample business data
const businessMetrics = [
  { label: "Total Sales", value: "$124,580", icon: "💰" },
  { label: "Active Clients", value: "1,247", icon: "👥" },
  { label: "Revenue", value: "$89,420", icon: "📈" },
  { label: "Orders", value: "3,891", icon: "🛒" },
  { label: "Growth Rate", value: "+12.5%", icon: "📊" },
  { label: "Conversion", value: "3.2%", icon: "🎯" },
  { label: "Avg Order", value: "$32.05", icon: "💵" },
  { label: "Retention", value: "87%", icon: "🔄" },
];

const mainStats = [
  { label: "Total Sales", value: "$124,580" },
  { label: "Active Clients", value: "1,247" },
  { label: "Revenue", value: "$89,420" },
  { label: "Orders", value: "3,891" },
];

export function Dashboard() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Betty Dashboard</h1>
        <p>Creating a React dashboard with sample data.</p>
      </header>

      <section className="stats">
        {mainStats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </section>

      <section className="grid">
        {businessMetrics.map((metric, idx) => (
          <div key={idx} className="grid-item">
            <span className="grid-label">
              <span className="metric-icon">{metric.icon}</span> {metric.label}
            </span>
            <span className="grid-value">{metric.value}</span>
          </div>
        ))}
      </section>
    </div>
  );
}



