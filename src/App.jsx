import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Componenet/Sidebar";
import Navbar from "./Componenet/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary Router components
import Home from "./Page/Home";
import Marks from "./Page/Marks";
import Footer from "./Componenet/Footer";
import Grade from "./Page/Grade";
import Report from "./Page/Report";
import About from "./Page/About";

function App() {
  // State for sidebar visibility in mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container d-flex">
        {/* Sidebar */}
        <div
          className={`-container ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} />

          {/* Define Routes for pages */}
          <div className="page-content ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marks" element={<Marks />} />
              <Route path="/Grade" element={<Grade />} />
              <Route path="/report" element={<Report />} />
              <Route path="/about" element={<About />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
