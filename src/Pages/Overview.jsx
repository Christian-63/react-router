import React from "react";
import "./Overview.css";
import doctorImg from "../assets/doctor.jpg";

const stats = [
  { label: "Patients today", value: 24, sub: "12% since last week", extra: "5 video call" },
  { label: "Appointments", value: 18, sub: "5% since last week", extra: "3 available slots" },
  { label: "Patient satisfaction", value: "95%", sub: "Last 30 days" },
  { label: "Active cases", value: 7, sub: "3% since last week", extra: "2 urgent" },
];

const chartData = [
  { day: "Sun", value: 80 },
  { day: "Mon", value: 65 },
  { day: "Tue", value: 100 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 30 },
];

const appointments = [
  { name: "Anna Svensson", note: "Follow-up", location: "Coppell, Virginia", date: "6/4/2026", status: "Confirmed" },
  { name: "Erik Johansson", note: "Skin issues", location: "Lansing, Illinois", date: "7/4/2026", status: "Confirmed" },
  { name: "Maria Lindqvist", note: "Prescription", location: "Kent, Utah", date: "8/4/2026", status: "Waiting" },
  { name: "Lars Andersson", note: "Cough", location: "Lansing, Illinois", date: "9/4/2026", status: "Pending" },
];

const activity = [
  { name: "Emma Berg", note: "New appointment created", time: "5 min ago" },
  { name: "Oscar Wilde", note: "Message sent", time: "12 min ago" },
  { name: "Klara Nystrom", note: "Prescription renewed", time: "27 min ago" },
  { name: "Johan Enstrom", note: "Record updated", time: "1 hr ago" },
  { name: "Lina Dahl", note: "Video call ended", time: "2 hr ago" },
];

function Overview() {
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="overview">
      {/* Stat cards */}
      <div className="stats-row">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <p className="stat-label">{stat.label}</p>
            <h2 className="stat-value">{stat.value}</h2>
            <div className="stat-footer">
              {stat.sub && <span className="stat-sub">{stat.sub}</span>}
              {stat.extra && <span className="stat-extra">{stat.extra}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="overview-grid">
        {/* Left column */}
        <div className="overview-left">
          <div className="panel">
            <div className="panel-header">
              <h3>Patients per day</h3>
              <button className="more-btn">⋯</button>
            </div>
            <div className="chart">
              {chartData.map((d) => (
                <div className="chart-bar-wrap" key={d.day}>
                  <div
                    className="chart-bar"
                    style={{ height: `${(d.value / maxValue) * 100}%` }}
                  />
                  <span className="chart-label">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Today's appointments</h3>
            </div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Patients</th>
                  <th>Location</th>
                  <th>Date/Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.name}>
                    <td>
                      <div className="patient-cell">
                       <img src={doctorImg} alt="profile" className="avatar-circle" />
                        <div>
                          <p className="patient-name">{appt.name}</p>
                          <p className="patient-note">{appt.note}</p>
                        </div>
                      </div>
                    </td>
                    <td>{appt.location}</td>
                    <td>{appt.date}</td>
                    <td>
                      <span className={`status-badge status-${appt.status.toLowerCase()}`}>
                        {appt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="overview-right">
          <div className="panel">
            <h3>Quick actions</h3>
            <div className="quick-actions">
              <button className="action-btn primary">Start video call</button>
              <button className="action-btn">New appointment</button>
              <button className="action-btn">Write prescription</button>
              <button className="action-btn">New record</button>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Recent activity</h3>
              <button className="more-btn">⋯</button>
            </div>
            <ul className="activity-list">
              {activity.map((item) => (
                <li key={item.name} className="activity-item">
                  <img src={doctorImg} alt="profile" className="avatar-circle" />
                  <div className="activity-text">
                    <p className="activity-name">{item.name}</p>
                    <p className="activity-note">{item.note}</p>
                  </div>
                  <span className="activity-time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;