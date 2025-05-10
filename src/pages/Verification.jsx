import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaThumbtack } from "react-icons/fa";

const Verification = () => {
  const navigate = useNavigate();

  const [frontId, setFrontId] = useState(null);
  const [backId, setBackId] = useState(null);

  const loadFormData = () => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    return (
      savedFormData || {
        frontId: null,
        backId: null,
      }
    );
  };

  const [formData, setFormData] = useState(loadFormData());
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleFileChange = (setter, id) => (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setter(file);
      setFormData((prev) => ({
        ...prev,
        [id]: file,
      }));
    } else {
      alert("File is too large. Max size is 5MB.");
      e.target.value = null;
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.frontId)
      newErrors.frontId = "Please upload both the front and back of your ID.";
    if (!formData.backId)
      newErrors.backId = "Please upload both the front and back of your ID.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/terms");
    }
  };

  return (
    <div className="container my-5 px-3 px-md-5" style={{ maxWidth: "900px" }}>
      <form onSubmit={handleSubmit}>
        <p className="fw-semibold text-muted mb-4">
          Please upload the front and back of your ID for verification purposes.
        </p>

        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="nin" className="form-label fw-semibold text-muted">
              NIN
            </label>
            <hr className="text-secondary my-1" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bvn" className="form-label fw-semibold text-muted">
              BVN
            </label>
            <hr className="text-secondary my-1 py-2" />
          </div>
        </div>

        {/* Upload Front of ID */}
        <div className="mb-4">
          <label htmlFor="frontId" className="form-label fw-semibold">
            Upload Front of ID (JPG, PNG, PDF - Max 5MB)
          </label>
          <div
            className="border border-2 rounded-3 p-3 text-center"
            style={{ cursor: "pointer", borderStyle: "dashed" }}
            onClick={() => document.getElementById("frontId").click()}
          >
            {!frontId ? (
              <span className="text-primary">[Choose File]</span>
            ) : (
              <small className="text-success mt-1 d-block">
                ✅ {frontId.name} ({(frontId.size / 1024 / 1024).toFixed(2)} MB)
              </small>
            )}
          </div>
          <input
            type="file"
            id="frontId"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleFileChange(setFrontId, "frontId")}
            style={{ display: "none" }}
          />
          <div className="form-text fst-italic d-flex align-items-center gap-1 mt-1">
            <FaThumbtack color="red" /> Make sure the uploaded image is clear
            and all text are readable
          </div>
          {errors.frontId && (
            <small className="text-danger">{errors.frontId}</small>
          )}
        </div>

        {/* Upload Back of ID */}
        <div className="mb-4">
          <label htmlFor="backId" className="form-label fw-semibold">
            Upload Back of ID (JPG, PNG, PDF - Max 5MB)
          </label>
          <div
            className="border border-2 rounded-3 p-3 text-center"
            style={{ cursor: "pointer", borderStyle: "dashed" }}
            onClick={() => document.getElementById("backId").click()}
          >
            {!backId ? (
              <span className="text-primary">[Choose File]</span>
            ) : (
              <small className="text-success mt-1 d-block">
                ✅ {backId.name} ({(backId.size / 1024 / 1024).toFixed(2)} MB)
              </small>
            )}
          </div>
          <input
            type="file"
            id="backId"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleFileChange(setBackId, "backId")}
            style={{ display: "none" }}
          />
          <div className="form-text fst-italic d-flex align-items-center gap-1 mt-1">
            <FaThumbtack color="red" /> Make sure the uploaded image is clear
            and all text are readable
          </div>
          {errors.backId && (
            <small className="text-danger">{errors.backId}</small>
          )}
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-secondary mt-4"
            onClick={() => navigate("/address")}
          >
            Previous
          </button>
          <button type="submit" className="btn btn-primary mt-4">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
