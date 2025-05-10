import { Routes, Route, useLocation } from "react-router-dom";
import TabBar from "./components/TabBar";
import PersonalInfo from "./pages/PersonalInfo";
import Address from "./pages/Address";
import Verification from "./pages/Verification";
import Terms from "./pages/Terms";
import TermsAndConditions from "./pages/TermsandConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Success from "./pages/Success";

function App() {
  const location = useLocation();

  const showLayout = ["/", "/address", "/verification", "/terms"].includes(
    location.pathname
  );

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      {showLayout ? (
        <>
          {/* TabBar */}
          <div className="d-flex justify-content-start">
            <TabBar />
          </div>

          {/* Card Content */}
          <div className="card border rounded-4 shadow-lg">
            <div className="card-body">
              <Routes>
                <Route path="/" element={<PersonalInfo />} />
                <Route path="/address" element={<Address />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
