import React from "react";

const PersonalInfo = () => {
  return (
    <div className="container">
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Telephone</label>
            <input
              type="tel"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="male" />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="female" />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
