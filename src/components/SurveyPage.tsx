import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SurveyPage: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate random captcha
  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  useEffect(() => {
    drawCaptcha();
  }, [captcha]);

  // Draw captcha on canvas
  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f8f9fa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "bold 28px Arial";
        ctx.fillStyle = "#0d6efd"; // Blue text
        ctx.fillText(captcha, 20, 35);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      setModalMessage("Captcha does not match! Please try again.");
      setIsError(true);
      setShowModal(true);
      return;
    }

    setModalMessage("Thank you for your response!");
    setIsError(false);
    setShowModal(true);
    console.log("Survey Data:", formData);
  };

  // All questions in sections
  const questions = [
    {
      section: "Governance & Public Services",
      items: [
        {
          name: "q1",
          text: "How satisfied are you with the government’s digital services (MeeSeva, online portals, mobile apps)?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Highly Dissatisfied",
          ],
        },
        {
          name: "q2",
          text: "What should be the top priority for governance by 2047?",
          options: [
            "Transparency & accountability",
            "Fast digital services",
            "Corruption-free administration",
            "People participation in decision-making",
          ],
        },
      ],
    },
    {
      section: "Economy & Employment",
      items: [
        {
          name: "q3",
          text: "Which sector should Telangana focus on most for economic growth by 2047?",
          options: [
            "Agriculture & allied activities",
            "Manufacturing & industries",
            "IT & emerging technologies",
            "Tourism & cultural heritage",
            "Startups & entrepreneurship",
          ],
        },
        {
          name: "q4",
          text: "What is the biggest challenge for youth employment today?",
          options: [
            "Lack of job opportunities",
            "Skill gap / training mismatch",
            "Limited access to startups & capital",
            "Competition in private sector",
            "Reservation & policy constraints",
          ],
        },
      ],
    },
    {
      section: "Agriculture & Rural Development",
      items: [
        {
          name: "q5",
          text: "What support do farmers need most by 2047?",
          options: [
            "Assured Minimum Support Price (MSP)",
            "Irrigation & water management",
            "Access to modern technology & mechanization",
            "Crop insurance & risk coverage",
            "Access to markets & fair pricing",
          ],
        },
        {
          name: "q6",
          text: "Do you think solar-powered pumps and renewable energy should replace traditional electricity for agriculture?",
          options: [
            "Strongly Agree",
            "Agree",
            "Neutral",
            "Disagree",
            "Strongly Disagree",
          ],
        },
      ],
    },
    {
      section: "Education & Skills",
      items: [
        {
          name: "q7",
          text: "What should Telangana focus on in education by 2047?",
          options: [
            "Digital classrooms & online learning",
            "Research & innovation centers",
            "Vocational training & skill development",
            "Inclusive education for all (rural, poor, differently-abled)",
          ],
        },
        {
          name: "q8",
          text: "How do you rate the current quality of government schools/colleges?",
          options: ["Excellent", "Good", "Average", "Poor", "Very Poor"],
        },
      ],
    },
    {
      section: "Healthcare",
      items: [
        {
          name: "q9",
          text: "What is the biggest health priority for the state?",
          options: [
            "Affordable treatment in government hospitals",
            "Expansion of medical colleges & doctors",
            "Telemedicine & digital health services",
            "Preventive healthcare & awareness",
            "Emergency medical infrastructure",
          ],
        },
        {
          name: "q10",
          text: "How satisfied are you with “Basti Dawakhanas” (Urban Primary Health Centres)?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Not aware",
          ],
        },
      ],
    },
    {
      section: "Women & Child Development",
      items: [
        {
          name: "q11",
          text: "What should be the focus for women empowerment by 2047?",
          options: [
            "Education & skill development",
            "Financial inclusion & entrepreneurship",
            "Safety & legal support",
            "Equal employment opportunities",
            "Political participation",
          ],
        },
        {
          name: "q12",
          text: "How safe do you feel women are in Telangana today?",
          options: ["Very Safe", "Safe", "Neutral", "Unsafe", "Very Unsafe"],
        },
      ],
    },
    {
      section: "Youth, Sports & Culture",
      items: [
        {
          name: "q13",
          text: "What should Telangana promote more for youth development?",
          options: [
            "Sports infrastructure & training",
            "Cultural exchange & arts",
            "Skill-based entrepreneurship programs",
            "Career counseling & mentoring",
          ],
        },
        {
          name: "q14",
          text: "Should Telangana invest in hosting national/international sports events by 2047?",
          options: [
            "Strongly Agree",
            "Agree",
            "Neutral",
            "Disagree",
            "Strongly Disagree",
          ],
        },
      ],
    },
    {
      section: "Infrastructure & Urban Development",
      items: [
        {
          name: "q15",
          text: "Which area should Telangana prioritize most in infrastructure?",
          options: [
            "Roads & highways",
            "Metro & public transport",
            "Smart cities & housing",
            "Water supply & sanitation",
            "Digital infrastructure (5G, fiber optic)",
          ],
        },
        {
          name: "q16",
          text: "How satisfied are you with Hyderabad as a global city?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Highly Dissatisfied",
          ],
        },
      ],
    },
    {
      section: "Environment & Sustainability",
      items: [
        {
          name: "q17",
          text: "What is the most important environmental priority for 2047?",
          options: [
            "Afforestation & green cover (Haritha Haram)",
            "Clean water & lakes protection",
            "Waste management & recycling",
            "Renewable energy adoption",
            "Climate change adaptation",
          ],
        },
        {
          name: "q18",
          text: "Are you willing to adopt eco-friendly lifestyle changes (solar, electric vehicles, waste segregation)?",
          options: [
            "Yes, Already Doing",
            "Yes, Willing to Do",
            "Neutral",
            "No, Difficult for Me",
            "Not Interested",
          ],
        },
      ],
    },
    {
      section: "Social Welfare & Inclusive Growth",
      items: [
        {
          name: "q19",
          text: "Which group should receive more focused support by 2047?",
          options: [
            "Farmers & rural poor",
            "Scheduled Castes & Scheduled Tribes",
            "Women & children",
            "Senior citizens & disabled",
            "Urban poor & migrants",
          ],
        },
        {
          name: "q20",
          text: "How effective are current welfare schemes (Rythu Bandhu, Aasara pensions, KCR Kits)?",
          options: [
            "Very Effective",
            "Effective",
            "Neutral",
            "Less Effective",
            "Not Effective",
          ],
        },
      ],
    },
  ];

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary display-6">
          Public Survey: Telangana Rising 2047
        </h2>
        <form onSubmit={handleSubmit}>
          {questions.map((section, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="mb-3 text-primary">
                {idx + 1}. {section.section}
              </h4>
              {section.items.map((q, i) => (
                <div key={i} className="mb-3 p-3 bg-white rounded shadow-sm">
                  <label className="fw-bold">{q.text}</label>
                  {q.options.map((opt) => (
                    <div key={opt} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={q.name}
                        value={opt}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">{opt}</label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

          {/* Captcha */}
          <div className="mb-4 p-3 bg-white rounded shadow-sm">
            <label className="fw-bold mb-2 d-block">Captcha:</label>
            <canvas
              ref={canvasRef}
              width="150"
              height="50"
              className="border rounded"
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-link text-primary mt-2"
              onClick={() => setCaptcha(generateCaptcha())}
            >
              Refresh Captcha
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
            style={{ borderRadius: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div
                className={`modal-header ${
                  isError ? "bg-danger text-white" : "bg-primary text-white"
                }`}
              >
                <h5 className="modal-title">{isError ? "Error" : "Success"}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={() => setShowModal(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SurveyPage;
