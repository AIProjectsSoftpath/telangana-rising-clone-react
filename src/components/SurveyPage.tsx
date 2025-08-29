import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import captchaImage from "/captcha.png"; // Adjust the path as necessary
import resetIcon from "/reset_icon.png"; // Adjust the path as necessary
const SurveyPage: React.FC = () => {
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [formData, setFormData] = useState({
    phone: "",
    answers: [] as {
      question_id: string;
      answers: { text: string; priority: number }[];
    }[],
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaInput !== captcha) {
      setModalMessage("Captcha does not match! Please try again.");
      setIsError(true);
      setShowModal(true);
      return;
    }

    try {
      // Construct payload
      const payload = {
        mobile_no: formData.phone,
        answers: formData.answers.map((q: any) => ({
          question_id: q.question_id,
          answers: q.answers.map((a: any, index: number) => ({
            text: a.text,
            priority: a.priority ?? index + 1, // ensure priority
          })),
        })),
      };

      console.log("📤 Sending Payload:", payload);

      const response = await fetch(
        "https://softpathtechnologies.com/vmsdemo/api/v1/answerdata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();

      console.log("✅ API Response:", result);
      setFormData({
        phone: "",
        answers: [],
      });
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      setModalMessage("Thank you for your response!");
      setIsError(false);
      setShowModal(true);
    } catch (error) {
      console.error("❌ Error submitting survey:", error);
      setModalMessage("Something went wrong. Please try again later.");
      setIsError(true);
      setShowModal(true);
    }
  };

  // Get all used priorities for current question
  const getUsedPriorities = (questionName: string) => {
    return Object.keys(formData)
      .filter((key) => key.startsWith(`${questionName}_priority_`))
      .map((key) => formData[key]);
  };

  // ✅ All Questions (20 as per your requirement)
  // ✅ All Questions (flattened, no sections)
  // ✅ Flattened Questions (only your selected ones)
  const questions = [
    {
      name: "q1",
      text: "What should be the top priority for governance by 2047?",
      options: [
        "Transparency & accountability",
        "Fast digital services",
        "Corruption-free administration",
        "People participation in decision-making",
      ],
    },
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
  ];

  return (
    <div
      className="container py-5 mt-5" // ✅ Added mt-5 for top margin
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary display-4 fw-bold">
          Public Survey: Telangana Rising 2047
        </h2>

        <form onSubmit={handleSubmit}>
          {questions.map((q, idx) => (
            <div key={idx} className="mb-3 p-3 bg-white rounded shadow-sm">
              <label className="fw-bold">
                {idx + 1}. {q.text}
              </label>

              {q.options.map((opt, optIndex) => {
                const questionName = q.name;
                const priorities = [1, 2, 3];
                const usedPriorities = getUsedPriorities(questionName);
                const optionLetter = String.fromCharCode(65 + optIndex);

                return (
                  <div
                    key={opt}
                    className="d-flex align-items-center justify-content-between py-2 border-bottom" // ✅ Added separator
                  >
                    {/* Answer text */}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold me-2">{optionLetter}.</span>
                      <label className="form-check-label">{opt}</label>
                    </div>

                    {/* Priority Dropdown (moved closer) */}
                    <select
                      className="form-select form-select-sm w-auto ms-1" // reduced margin
                      name={`${questionName}_priority_${optIndex}`}
                      value={
                        formData[`${questionName}_priority_${optIndex}`] || ""
                      }
                      onChange={handleChange}
                    >
                      <option value="">Priority</option>
                      {priorities
                        .filter((p) => !usedPriorities.includes(p.toString()))
                        .map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      {formData[`${questionName}_priority_${optIndex}`] && (
                        <option
                          value={
                            formData[`${questionName}_priority_${optIndex}`]
                          }
                          disabled
                        >
                          {formData[`${questionName}_priority_${optIndex}`]}
                        </option>
                      )}
                    </select>
                  </div>
                );
              })}

              {/* ✅ Reset Button aligned under dropdowns */}
              <div className="text-end mt-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light border-0 p-0"
                  title="Reset Priorities"
                  onClick={() => {
                    const updatedFormData = { ...formData };
                    q.options.forEach((_, optIndex) => {
                      delete updatedFormData[`${q.name}_priority_${optIndex}`];
                    });
                    setFormData(updatedFormData);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={resetIcon} // ✅ use your public folder image
                    alt="Reset"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                </button>
              </div>
            </div>
          ))}

          {/* Captcha */}
          <div
            className="mb-4 p-3 bg-white rounded shadow-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label className="fw-bold mb-2 d-block">Captcha:</label>

            {/* Captcha Canvas */}
            <div className="mb-3">
              <canvas
                ref={canvasRef}
                width="150"
                height="50"
                className="border rounded shadow-sm"
              />
            </div>

            {/* Input Field and Refresh Button */}
            <div className="d-flex align-items-center gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
                style={{
                  maxWidth: "200px", // Limit width of the input field
                }}
              />

              {/* Refresh Button */}
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                title="Refresh Captcha"
                className="btn btn-light border-0 p-0"
                style={{
                  padding: "0", // Ensure no padding around button
                  cursor: "pointer",
                }}
              >
                <img
                  src={captchaImage}
                  alt="Refresh Captcha"
                  style={{
                    width: "40px", // Resetting to your original size (40px)
                    height: "40px", // Resetting to your original size (40px)
                    objectFit: "contain",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{
                borderRadius: "10px",
                width: "50%", // Half width
                maxWidth: "300px", // Optional: prevent too large on big screens
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", transition: "none" }} // ✅ No fade
        >
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

          {/* Backdrop */}
          <div
            className="modal-backdrop show"
            style={{ backgroundColor: "rgba(0,0,0,0.3)", transition: "none" }} // ✅ No fade
            onClick={() => setShowModal(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SurveyPage;
