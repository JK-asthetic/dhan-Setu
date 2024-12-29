import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import History from "./pages/History";
import Funds from "./pages/Funds";
import Portfolio from "./pages/portfolio/portfolio";
import MutualFunds from "./pages/portfolio/MutualFunds";
import AddMutualFund from "./components/AddMutualFund";

// import AuthLayout from "./components/AuthLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Sidebar */}
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/history" element={<History />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mutualfunds" element={<MutualFunds />} />
          <Route path="/addmutualfunds" element={<AddMutualFund />} />
        </Route>

        {/* Routes without Sidebar */}
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
