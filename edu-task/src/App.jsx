// import { Routes, Route } from "react-router-dom";
// import TabBar from "./components/TabBar";
// import PersonalInfo from "./pages/PersonalInfo";
// import Address from "./pages/Address";
// import Verification from "./pages/Verification";
// import Terms from "./pages/Terms";

// function App() {
//   return (
//     <div className="container" style={{ marginTop: "8rem" }}>
//       <TabBar />
//       <Routes>
//         <Route path="/" element={<PersonalInfo />} />
//         <Route path="/address" element={<Address />} />
//         <Route path="/verification" element={<Verification />} />
//         <Route path="/terms" element={<Terms />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import TabBar from "./components/TabBar";
import PersonalInfo from "./pages/PersonalInfo";
import Address from "./pages/Address";
import Verification from "./pages/Verification";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      {/* Card with TabBar div */}
      <div className="position-relative">
        {/* TabBar */}
        <div
          className="position-absolute top-0 start-0 translate-middle-y"
          style={{ zIndex: 1 }}
        >
          <TabBar />
        </div>
        {/* Card content */}
        <div
          className="card border rounded-4 shadow-lg mt-4"
          style={{ marginTop: "8rem" }}
        >
          <div className="card-body">
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/address" element={<Address />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
