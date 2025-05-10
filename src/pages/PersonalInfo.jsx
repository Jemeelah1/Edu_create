import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const loadFormData = () => {
    const savedFormData = JSON.parse(localStorage.getItem("personalInfo"));
    return (
      savedFormData || {
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        age: "",
        gender: "",
      }
    );
  };

  const [formData, setFormData] = useState(loadFormData());
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      localStorage.removeItem("personalInfo");
    };
  }, []);

  // Update localStorage
  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        gender: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.telephone)
      newErrors.telephone = "Your Phone number is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Please select a gender";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/address");
    }
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-gray-500">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label text-gray-500">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-gray-500">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label text-gray-500">Your Telephone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.telephone && (
              <small className="text-danger">{errors.telephone}</small>
            )}
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-6">
            <label className="form-label text-gray-500">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-control border-0 border-bottom rounded-0"
            />
            {errors.age && <small className="text-danger">{errors.age}</small>}
          </div>

          <div className="col-md-6">
            <div className="form-check mt-5 form-check-inline text-gray-500">
              <input
                className="form-check-input"
                type="checkbox"
                id="male"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            {errors.gender && (
              <div className="text-danger">
                <small>{errors.gender}</small>
              </div>
            )}
          </div>
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary mt-4">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
