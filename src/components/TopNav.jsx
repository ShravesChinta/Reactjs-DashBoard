import { useState } from "react";
import APIManagement from "./APIs/APIManagement";

function TopNav() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      console.error("Please select both start and end dates");
      return;
    }

    // Pass the formatted dates to APIManagement component or your API call function
  };

  return (
    <>
      <nav className="navbar border">
        <div className="container-fluid d-flex justify-content-between">
          <span className="navbar-brand mb-0 h1">
            CloudOps Azure Cost DashBoard
          </span>
          <div className="d-flex align-items-center">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control me-2"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control me-2"
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </nav>
      {startDate && endDate && (
        <APIManagement startdate={startDate} enddate={endDate} />
      )}
    </>
  );
}

export default TopNav;
