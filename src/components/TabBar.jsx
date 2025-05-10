import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Personal Info", path: "/" },
  { label: "Address", path: "/address" },
  { label: "Verification", path: "/verification" },
  { label: "Terms & Conditions", path: "/terms" },
];

const TabBar = () => {
  return (
    <ul
      className="nav nav-tabs mb-0 border border-white rounded-top shadow-sm"
      style={{ width: "fit-content" }}
    >
      {tabs.map((tab, idx) => (
        <li className="nav-item" key={idx}>
          <NavLink
            to={tab.path}
            end
            className={({ isActive }) =>
              `nav-link text-start px-3 ${
                isActive
                  ? "text-black fw-bold shadow-lg border border-gray rounded"
                  : "text-secondary"
              }`
            }
          >
            <div>
              Step {idx + 1}
              <br />
              <small className="text-muted">{tab.label}</small>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TabBar;
