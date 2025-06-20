import React from "react";
import "./TutorialPage.scss";
import { HashLink } from "react-router-hash-link";

const TutorialPage: React.FC = () => {
  return (
    <div className="tutorial-page">
      <div className="container">
        <h1>EDAS Registration & Submission Tutorial</h1>

        <section>
          <h2>1. Create an EDAS Account</h2>
          <p>
            Go to{" "}
            <a
              href="https://edas.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://edas.info
            </a>{" "}
            and click “Create a new account”. Fill in your details and confirm
            via email.
          </p>
        </section>

        <section>
          <h2>2. Find the Conference</h2>
          <p>
            After logging in, search for{" "}
            <strong>RCEneE 2022 / Thermofluids 2022</strong> or use the direct
            link:
            <br />
            <a
              href="https://edas.info/N29581"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://edas.info/N29581
            </a>
          </p>
        </section>

        <section>
          <h2>3. Submit Your Paper</h2>
          <p>
            Click “Submit Paper” and follow the steps. You’ll be asked to enter
            the title, abstract, and upload your PDF file.
          </p>
        </section>

        <section>
          <h2>4. Check Paper Status</h2>
          <p>
            You can view your paper status and reviewer comments under “My
            Papers”.
          </p>
        </section>

        <section>
          <h2>5. Template</h2>
          <p>
            Please use the official template:
            <br />
            <a
              href="https://docs.google.com/document/d/1HNVpFhNf4fMKa1c55fgT_Y6JM412xU99/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Template
            </a>
          </p>
        </section>

        <div className="back-link">
          <HashLink smooth to="/#register">
            ← Back to Main Page
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
