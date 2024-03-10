import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container-fluid navbar-dark bg-dark border sidebar">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100">
        <div className="border-bottom" style={{ width: "100%", height: "10%" }}>
          <Link
            to="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Menu</span>
          </Link>
        </div>
        <ul
          className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item nav-sidebar-item">
            <Link to="/monthly-summary" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-decoration-none nav-link">
                Monthly Summary
              </span>
            </Link>
          </li>

          <li className="nav-item nav-sidebar-item">
            <Link to="/service-family" className="nav-link align-middle px-0">
              <i className="fs-4 bi-speedometer"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-decoration-none nav-link">
                Service Family
              </span>
            </Link>
          </li>
          <li className="nav-item nav-sidebar-item">
            <Link to="/subscription" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-table"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-decoration-none nav-link">
                Subscription
              </span>
            </Link>
          </li>
          <li className="nav-item nav-sidebar-item">
            <Link to="/yearly-summary" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-bootstrap"></i>{" "}
              <span className="ms-1 d-none d-sm-inline text-decoration-none nav-link">
                Yearly Summary
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
