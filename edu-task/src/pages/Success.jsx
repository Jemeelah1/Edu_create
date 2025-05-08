import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };

  return (
    <div className="container my-5 px-3 px-md-5" style={{ maxWidth: "800px" }}>
      <div className="card shadow-lg border-0 rounded-4 text-center p-5">
        <div className="card-body">
          <h2 className="text-success fw-bold mb-3">
            Submission Successful 🎉
          </h2>
          <p className="fs-5 mb-4 text-muted">
            Thank you for completing the process. Your information has been
            successfully submitted.
          </p>
          <button className="btn btn-success" onClick={handleGoHome}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
