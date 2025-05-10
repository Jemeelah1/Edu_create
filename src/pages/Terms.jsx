import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      setError("You must accept the terms and conditions to continue.");
      return;
    }
    setError("");
    navigate("/success");
  };

  const handleBack = () => {
    navigate("/verification");
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-3 text-center">Terms and Conditions</h2>
      <p className="text-muted fw-semibold mb-4 text-center">
        Please read the following terms carefully before submitting your
        information
      </p>

      {/* Centered and spaced content */}
      <div className="mx-auto px-3 px-md-5" style={{ maxWidth: "800px" }}>
        <ol className="mb-4 fs-6">
          {" "}
          {/* Increased font size */}
          <li className="mb-4">
            <strong>Accuracy of Information</strong>
            <p className="mb-0">
              You confirm that all information provided in this form is true,
              complete and accurate to the best of your knowledge.
            </p>
          </li>
          <li className="mb-4">
            <strong>Use of Information</strong>
            <p className="mb-0">
              The details you submit will be used solely for the purpose stated
              and in accordance with our{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
          </li>
          <li className="mb-4">
            <strong>Consent</strong>
            <p className="mb-0">
              By submitting this form, you consent to us storing and processing
              your information as described above.
            </p>
          </li>
        </ol>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="acceptTerms"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            Please accept{" "}
            <a href="/terms-and-conditions" target="_blank">
              terms and conditions
            </a>
            ?
          </label>
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBack}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Finish!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
