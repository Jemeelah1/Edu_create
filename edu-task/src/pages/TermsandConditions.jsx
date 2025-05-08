import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/terms");
  };

  return (
    <div className="container my-5 px-3 px-md-5" style={{ maxWidth: "900px" }}>
      <div className="card shadow-lg rounded-4 border">
        <div className="card-body">
          <h2 className="fw-bold mb-3 text-center">Terms and Conditions</h2>
          <p className="text-muted mb-4 text-center">
            Please review these terms before using our services.
          </p>

          <ol className="fs-5">
            <li className="mb-4">
              <strong>Acceptance of Terms</strong>
              <p className="mb-0">
                By accessing and submitting this form, you agree to comply with
                these terms and any future updates.
              </p>
            </li>
            <li className="mb-4">
              <strong>Eligibility</strong>
              <p className="mb-0">
                You confirm that you are legally eligible to provide the
                information and use this service.
              </p>
            </li>
            <li className="mb-4">
              <strong>Limitation of Liability</strong>
              <p className="mb-0">
                We are not liable for any indirect, incidental, or consequential
                damages arising from the use of your information.
              </p>
            </li>
            <li className="mb-4">
              <strong>Amendments</strong>
              <p className="mb-0">
                We may revise these terms from time to time. Continued use
                constitutes acceptance of any changes.
              </p>
            </li>
          </ol>

          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
