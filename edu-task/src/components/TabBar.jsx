import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

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
              `nav-link ${
                isActive
                  ? "text-black fw-bold shadow-lg border border-gray rounded"
                  : "text-secondary"
              }`
            }
          >
            Step {idx + 1} <br /> {tab.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
  //   return (
  //     <ul className="nav nav-tabs mb-4 border border-white rounded-4">
  //       {tabs.map((tab, idx) => (
  //         <li className="nav-item" key={idx}>
  //           <NavLink
  //             to={tab.path}
  //             end
  //             className={({ isActive }) =>
  //               `nav-link ${
  //                 isActive
  //                   ? "text-black fw-bold shadow-md border border-gray rounded"
  //                   : "text-secondary"
  //               }`
  //             }
  //           >
  //             Step {idx + 1} <br /> {tab.label}
  //           </NavLink>
  //         </li>
  //       ))}
  //     </ul>
  //   );
};

// const TabBar = () => {
//   return (
//     <ul
//       className="nav nav-tabs mb-0 border border-white rounded-top shadow-sm"
//       style={{
//         width: "fit-content",
//         backgroundColor: "white",
//         zIndex: 2, // Ensure it stays above the card
//       }}
//     >
//       {tabs.map((tab, idx) => (
//         <li className="nav-item" key={idx}>
//           <NavLink
//             to={tab.path}
//             end
//             className={({ isActive }) =>
//               `nav-link ${
//                 isActive
//                   ? "text-black fw-bold shadow-lg border border-gray rounded"
//                   : "text-secondary"
//               }`
//             }
//           >
//             Step {idx + 1} <br /> {tab.label}
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default TabBar;
