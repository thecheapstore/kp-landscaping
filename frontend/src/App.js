import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Buffalo from "./pages/Buffalo";
import Rochester from "./pages/Rochester";
import Albany from "./pages/Albany";
import DynamicPage from "./pages/DynamicPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* City Landing Pages */}
          <Route path="/buffalo" element={<Buffalo />} />
          <Route path="/rochester" element={<Rochester />} />
          <Route path="/albany" element={<Albany />} />
          
          {/* Dynamic Routes for City Services and Micro-locations */}
          <Route path="/:city/:page" element={<DynamicPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
