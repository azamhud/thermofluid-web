import React from "react";
import Header from "./Header";
import "./ConferencePage.scss";

const ConferencePage: React.FC = () => {
  return (
    <>
      <main className="conference">
        <section className="hero">
          <div className="container">
            <h1>International Conference on Thermofluids</h1>
            <p>July 15–17, 2025 · Yogyakarta, Indonesia</p>
            <a href="#register" className="btn-primary">
              Register Now
            </a>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h2>About the Conference</h2>
            <p>
              The International Conference on Thermofluids brings together
              leading researchers, engineers, and students to exchange knowledge
              and ideas in the field of thermal and fluid sciences.
            </p>
          </div>
        </section>

        <section className="speakers">
          <div className="container">
            <h2>Keynote Speakers</h2>
            <ul className="speaker-list">
              <li>
                <h3>Prof. Dr. John Smith</h3>
                <p>MIT – Fluid Dynamics & Heat Transfer</p>
              </li>
              <li>
                <h3>Dr. Lisa Tanaka</h3>
                <p>Kyoto University – Sustainable Energy Systems</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="schedule">
          <div className="container">
            <h2>Schedule</h2>
            <ul>
              <li>🗓️ July 15: Keynote Talks, Panel Discussion</li>
              <li>🗓️ July 16: Technical Sessions, Poster Presentations</li>
              <li>🗓️ July 17: Workshops, Closing Ceremony</li>
            </ul>
          </div>
        </section>

        <section className="register" id="register">
          <div className="container">
            <h2>Register Now</h2>
            <p>Secure your spot at the conference today!</p>
            <a href="/register" className="btn-primary">
              Go to Registration
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © 2025 International Conference on Thermofluids · Universitas Gadjah
            Mada
          </p>
        </div>
      </footer>
    </>
  );
};

export default ConferencePage;
