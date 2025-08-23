import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  const [summaryData, setSummaryData] = useState<any>(null);
  const COLORS = ["#0d6efd", "#6610f2", "#198754", "#dc3545", "#ffc107"];

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      setSummaryData({
        totalResponses: 1245,
        sectionSummary: {
          topPriority: "Transparency & Accountability",
          lastSubmission: new Date().toISOString(),
          data: [
            { section: "Governance", responses: 320 },
            { section: "Economy", responses: 250 },
            { section: "Agriculture", responses: 200 },
            { section: "Education", responses: 180 },
            { section: "Healthcare", responses: 295 },
          ],
        },
        questionBreakdown: {
          "Q1: Digital Services": [
            { option: "Very Satisfied", count: 400 },
            { option: "Satisfied", count: 300 },
            { option: "Neutral", count: 250 },
            { option: "Dissatisfied", count: 180 },
            { option: "Highly Dissatisfied", count: 115 },
          ],
          "Q3: Growth Focus": [
            { option: "Agriculture", count: 200 },
            { option: "Manufacturing", count: 220 },
            { option: "IT", count: 300 },
            { option: "Tourism", count: 150 },
            { option: "Startups", count: 180 },
          ],
        },
      });
    }, 1500);
  }, []);

  if (!summaryData) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p>Loading Dashboard...</p>
      </div>
    );
  }

  const { totalResponses, sectionSummary, questionBreakdown } = summaryData;

  return (
    <div
      className="container py-5 mt-20"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="bg-primary text-white p-4 rounded mb-4 shadow">
        <h2 className="text-center">Survey Dashboard: Telangana Rising 2047</h2>
        <p className="text-center mb-0 fs-5">
          Total Responses: <strong>{totalResponses}</strong>
        </p>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h5>Total Responses</h5>
            <h2 className="text-primary">{totalResponses}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h5>Top Priority</h5>
            <p className="text-success fw-bold">{sectionSummary.topPriority}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h5>Last Submission</h5>
            <p>{new Date(sectionSummary.lastSubmission).toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Section-wise Bar Chart */}
      <div className="card p-4 mb-4 shadow">
        <h4 className="text-primary mb-3">Section-wise Responses</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sectionSummary.data}>
            <XAxis dataKey="section" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="responses" fill="#0d6efd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Question-wise Pie Charts */}
      <div className="row">
        {Object.keys(questionBreakdown).map((qKey, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card p-3 shadow">
              <h6 className="text-primary">{qKey}</h6>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={questionBreakdown[qKey]}
                    dataKey="count"
                    nameKey="option"
                    outerRadius={80}
                    fill="#0d6efd"
                    label
                  >
                    {questionBreakdown[qKey].map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
