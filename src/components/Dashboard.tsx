import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface SurveyResponse {
  phone: string;
  timestamp: string;
  answers: { [key: string]: { option: string; priority?: string } };
}

// ✅ Mapping of question codes → full questions
const questionMap: { [key: string]: string } = {
  q1: "How satisfied are you with government services?",
  q2: "How do you rate the quality of infrastructure in your area?",
  q3: "Which sector do you think should be prioritized for Telangana's growth?",
  q4: "How satisfied are you with agricultural support programs?",
  q5: "Which area in agriculture needs the most improvement?",
  q6: "Do you think education reforms are meeting expectations?",
  q7: "Which educational initiative is most important to you?",
  q8: "How do you rate current healthcare services?",
  q9: "What should be the top healthcare priority?",
};

const Dashboard: React.FC = () => {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [selectedResponse, setSelectedResponse] =
    useState<SurveyResponse | null>(null);

  // Simulate API call (replace with actual backend later)
  useEffect(() => {
    setTimeout(() => {
      setResponses([
        {
          phone: "9876543210",
          timestamp: "2025-08-22 10:30 AM",
          answers: {
            q1: { option: "Satisfied", priority: "2" },
            q3: { option: "IT & emerging technologies", priority: "1" },
            q5: { option: "Crop insurance & risk coverage", priority: "3" },
            q7: {
              option: "Vocational training & skill development",
              priority: "2",
            },
            q9: { option: "Preventive healthcare & awareness", priority: "1" },
          },
        },
        {
          phone: "9123456789",
          timestamp: "2025-08-22 11:15 AM",
          answers: {
            q1: { option: "Very Satisfied", priority: "1" },
            q3: { option: "Startups & entrepreneurship", priority: "2" },
            q5: { option: "Irrigation & water management", priority: "1" },
            q7: {
              option: "Digital classrooms & online learning",
              priority: "3",
            },
            q9: {
              option: "Affordable treatment in government hospitals",
              priority: "2",
            },
          },
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div
      className="container py-5 mt-20"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header Banner */}
      <div className="bg-primary text-white p-4 rounded mb-4 shadow text-center">
        <h2>Survey Dashboard: Telangana Rising 2047</h2>
        <p className="fs-5 mb-0">
          Total Responses: <strong>{responses.length}</strong>
        </p>
      </div>

      {/* Responses Table */}
      <div className="card shadow-sm">
        <div className="card-header bg-light fw-bold">Survey Submissions</div>
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-primary">
              <tr>
                <th>Phone Number</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((res, idx) => (
                <tr
                  key={idx}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedResponse(res)}
                >
                  <td>{res.phone}</td>
                  <td>{res.timestamp}</td>
                </tr>
              ))}
              {responses.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center p-3">
                    Loading responses...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Full Survey */}
      {selectedResponse && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content shadow-lg border-0 rounded-3">
              {/* Header */}
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Survey Response</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedResponse(null)}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body bg-light">
                <p className="mb-2">
                  <strong>📞 Phone:</strong> {selectedResponse.phone}
                </p>
                <p className="mb-3">
                  <strong>🕒 Submitted At:</strong> {selectedResponse.timestamp}
                </p>
                <hr />
                {Object.entries(selectedResponse.answers).map(
                  ([q, ans], idx) => (
                    <div
                      key={idx}
                      className="mb-3 p-3 bg-white rounded shadow-sm"
                    >
                      <h6 className="fw-bold text-primary">
                        {q.toUpperCase()} :{" "}
                        {questionMap[q] || "Unknown Question"}
                      </h6>
                      <p className="mb-1">
                        Answer: <strong>{ans.option}</strong>
                      </p>
                      {ans.priority && (
                        <p className="text-muted small">
                          Priority: {ans.priority}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedResponse(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          {/* Backdrop (lighter instead of full dark) */}
          <div
            className="modal-backdrop show"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            onClick={() => setSelectedResponse(null)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
