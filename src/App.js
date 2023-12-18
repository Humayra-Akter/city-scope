import { Route, Routes } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Home/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import FreeFeatures from "./components/Features/FreeFeatures";
import LocalMarket from "./components/Features/LocalMarket";
import EducationalInstitution from "./components/Features/EducationalInstitution";
import BuyerSpecialEducationalInstitution from "./components/Features/BuyerSpecialEducationalInstitution";
import SellerDashboard from "./components/SellerDashboard/SellerDashboard";
import AddInstitution from "./components/SellerDashboard/AddInstitution";
import JobAnnounce from "./components/SellerDashboard/JobAnnounce";
import AllJobs from "./components/Shared/AllJobs";
import ApplyForJob from "./components/Features/ApplyForJob";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-purple-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/freeFeatures" element={<FreeFeatures />} />
        <Route path="/allJobs" element={<AllJobs />} />
        <Route path="/localMarket" element={<LocalMarket />} />
        <Route path="/applyForJob/:jobId" element={<ApplyForJob />} />
        <Route path="/sellerDashboard" element={<SellerDashboard />} />
        {/* seller dashboard  */}
        <Route path="/sellerDashboard" element={<SellerDashboard />}>
          <Route index element={<AddInstitution />}></Route>
          <Route path="jobAnnounce" element={<JobAnnounce />}></Route>
        </Route>
        <Route
          path="/educationalInstitutions"
          element={<EducationalInstitution />}
        />
        <Route
          path="/buyerSpecialEducationalInstitutions"
          element={<BuyerSpecialEducationalInstitution />}
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
