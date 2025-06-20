// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./pages/Header";
import ConferencePage from "./pages/ConferencePage";

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
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
