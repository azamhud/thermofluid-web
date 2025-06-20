// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Header from "./pages/Header";
import ConferencePage from "./pages/ConferencePage";
import RegisterPage from "./pages/RegisterPage";
import TutorialPage from "./pages/TutorialPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ConferencePage />
              </div>
            }
          />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/tutorial-page" element={<TutorialPage />} />
          <Route path="/past-event" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
