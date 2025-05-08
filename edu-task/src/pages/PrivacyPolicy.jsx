import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/terms");
  };

  return (
    <div className="container my-5 px-3 px-md-5" style={{ maxWidth: "900px" }}>
      <div className="card shadow-lg rounded-4 border">
        <div className="card-body">
          <h2 className="fw-bold mb-3 text-center">Privacy Policy</h2>
          <p className="text-muted mb-4 text-center">
            Your privacy is important to us. Here’s how we handle your data.
          </p>

          <ol className="fs-5">
            <li className="mb-4">
              <strong>Information Collection</strong>
              <p className="mb-0">
                We collect only the information necessary to fulfill the purpose
                of this form and improve our services.
              </p>
            </li>
            <li className="mb-4">
              <strong>Use of Information</strong>
              <p className="mb-0">
                Your data will be used for service delivery and will not be sold
                or shared without your consent.
              </p>
            </li>
            <li className="mb-4">
              <strong>Data Security</strong>
              <p className="mb-0">
                We implement industry-standard security measures to protect your
                information from unauthorized access.
              </p>
            </li>
            <li className="mb-4">
              <strong>Your Rights</strong>
              <p className="mb-0">
                You have the right to access, update, or delete your information
                at any time by contacting us.
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

export default PrivacyPolicy;
