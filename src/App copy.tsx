import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";

const Home = () => (
  <section className="text-center py-12 px-4">
    <h2 className="text-3xl font-bold mb-4">
      Welcome to the International Conference 2025
    </h2>
    <p className="max-w-xl mx-auto mb-6">
      Join us for a premier gathering of researchers, academics, and industry
      professionals to discuss the latest in science and technology.
    </p>
    <Button className="bg-blue-700 text-white">Register Now</Button>
  </section>
);

const About = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">About the Conference</h2>
    <p>
      The International Conference 2025 brings together leading minds in
      research, academia, and industry to share breakthroughs, collaborate, and
      inspire innovation. Topics cover AI, energy, sustainability, and more.
    </p>
  </section>
);

const Speakers = () => (
  <section className="py-12 px-4 max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold text-center mb-8">
      Keynote Speakers
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {["Dr. Jane Doe", "Prof. John Smith", "Dr. Alex Lee"].map(
        (name, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <img
                src={`/speaker-${index + 1}.jpg`}
                alt={name}
                className="mx-auto rounded-full w-32 h-32 mb-4"
              />
              <h4 className="text-xl font-bold">{name}</h4>
              <p className="text-sm text-gray-600">
                Leading expert in AI and Robotics
              </p>
            </CardContent>
          </Card>
        )
      )}
    </div>
  </section>
);

const Schedule = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Conference Schedule</h2>
    <ul className="space-y-4">
      <li>
        <strong>Day 1:</strong> Keynotes, Panel Discussions
      </li>
      <li>
        <strong>Day 2:</strong> Workshops, Paper Presentations
      </li>
      <li>
        <strong>Day 3:</strong> Industry Tours, Closing Remarks
      </li>
    </ul>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-900 text-white text-center py-6 mt-12">
    <p>
      &copy; {new Date().getFullYear()} International Conference 2025. All
      rights reserved.
    </p>
  </footer>
);

const Navbar = () => (
  <nav className="bg-white shadow py-4 mb-6">
    <div className="container mx-auto flex justify-between px-4">
      <Link to="/" className="text-xl font-bold text-blue-800">
        IC 2025
      </Link>
      <div className="space-x-4">
        <Link to="/about" className="text-gray-700 hover:text-blue-700">
          About
        </Link>
        <Link to="/speakers" className="text-gray-700 hover:text-blue-700">
          Speakers
        </Link>
        <Link to="/schedule" className="text-gray-700 hover:text-blue-700">
          Schedule
        </Link>
      </div>
    </div>
  </nav>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
