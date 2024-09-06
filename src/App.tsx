import React from "react";
import { Company } from "./components/pages/company/index.ts";
import { Home } from "./components/pages/home/index.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Web } from "./components/pages/webPage/index.ts";
import AppDesignPage from "./components/pages/appDesignPage/AppDesignPage.tsx";
import GraphicDesignPage from "./components/pages/graphicDesignPage/GraphicDesignPage.tsx";
import Location from "./components/pages/location/Location.tsx";
import Contact from "./components/pages/contact/Contact.tsx";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-company" element={<Company />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-design" element={<Web />} />
          <Route path="/app-design" element={<AppDesignPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
