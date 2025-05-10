import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../data/countries";
import Select from "react-select";

const Address = () => {
  const navigate = useNavigate();

  const loadFormData = () => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    return (
      savedFormData || {
        street1: "",
        street2: "",
        city: "",
        state: "",
        country: "",
        zip: "",
      }
    );
  };

  const [formData, setFormData] = useState(loadFormData());
  const [errors, setErrors] = useState({});

  // Update localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const countryOptions = countries.map((c) => ({
    label: c.name,
    value: c.name,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.street1) newErrors.street1 = "Street 1 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.zip) newErrors.zip = "Zip code is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/verification");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-gray-500">Street 1</label>
          <input
            type="text"
            name="street1"
            value={formData.street1}
            onChange={handleChange}
            className="form-control border-0 border-bottom rounded-0"
          />
          {errors.street1 && (
            <small className="text-danger">{errors.street1}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label text-gray-500">Street 2</label>
          <input
            type="text"
            name="street2"
            value={formData.street2}
            onChange={handleChange}
            className="form-control border-0 border-bottom rounded-0"
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-gray-500">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.city && (
              <small className="text-danger">{errors.city}</small>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label text-gray-500">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.state && (
              <small className="text-danger">{errors.state}</small>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-gray-500">
              Select your country
            </label>
            <Select
              options={countryOptions}
              onChange={(selected) =>
                setFormData((prev) => ({ ...prev, country: selected.value }))
              }
              value={countryOptions.find(
                (opt) => opt.value === formData.country
              )}
              styles={{
                menu: (provided) => ({
                  ...provided,
                  // display: "flex",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }),
              }}
            />
            {errors.country && (
              <small className="text-danger">{errors.country}</small>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label text-gray-500">Zip code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.zip && <small className="text-danger">{errors.zip}</small>}
          </div>
        </div>

        <div className="d-flex justify-content-between gap-3">
          <button
            type="button"
            className="btn btn-secondary mt-4"
            onClick={handleBack}
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

export default Address;
