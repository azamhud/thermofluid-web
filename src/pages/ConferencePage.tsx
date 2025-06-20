import React from "react";
import Header from "./Header";
import "./ConferencePage.scss";
import poster from "../assets/poster.png";
import komite1 from "../assets/komite1.png";
import komite2 from "../assets/komite2.png";
import { HashLink } from "react-router-hash-link";

const ConferencePage: React.FC = () => {
  return (
    <>
      <main className="conference">
        <section id="hero" className="hero">
          <div className="container">
            <h1>
              The 14th International Conference and Short Course on Thermofluids
              2025
            </h1>
            <p>COMING SOON</p>
            <h2>Thermal, Energy, And Fluid Research</h2>
            <h3>
              The Conference will be held in a hybrid mode, combining an
              in-person event with online components. Nevertheless, it does not
              detract from the event’s value, purpose, and quality.
            </h3>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About the Conference</h2>
            <p>
              The International Conference on Thermofluids brings together
              leading researchers, engineers, and students to exchange knowledge
              and ideas in the field of thermal and fluid sciences.
            </p>
          </div>
        </section>

        <section id="paper" className="paper">
          <div className="container">
            <h2>Call For Paper</h2>
            <img src={poster} alt="Poster" />
            <div className="paragraph">
              <p>Dear Colleagues,</p>
              <p>
                The Department of Mechanical Engineering and Industrial
                Engineering of Universitas Gadjah Mada supported by AUN/SEED-NET
                proudly presents The 15th Regional Conference on Energy
                Engineering (RCEneE 2022) and the 13th International Conference
                on Thermofluids 2022. This conference seeks to unite
                researchers, scientists, academia, policymakers, and
                professionals to exchange information and identify research
                needs in thermofluids engineering. In this annual conference, we
                strive to enhance the scope to a broader community of
                researchers allowing a higher quality and visibility of
                publications. The conference would also contribute to the
                continuous development of the research and technology in
                thermofluids engineering for recent and future energy and
                environmental sustainability.
              </p>
              <p>
                All accepted and presented papers will be published in American
                Institute of Physics (AIP) Conference Proceedings indexed by
                Scopus. environmental sustainability.
              </p>
              <p>
                The conference will be held in-person and also in virtual hybrid
                mode. The in-person event will be held in Amaranta Hotel,
                Prambanan, Yogyakarta, Indonesia. environmental sustainability.
              </p>
              <p>
                All registration and submission have to be made through EDAS
                Conference Management System at https://edas.info/N29581 (those
                who do not have an EDAS account will need to create one).
                environmental sustainability.
              </p>
              <p>
                A Reference Guide and Full Paper Template can be downloaded at:
              </p>
              <p>
                https://docs.google.com/document/d/1HNVpFhNf4fMKa1c55fgT_Y6JM412xU99/edit
                environmental sustainability.
              </p>
              <p>
                Should you have any inquiries, please contact us at:
                environmental sustainability.
              </p>
              <p>Email : thermofluid@ugm.ac.id environmental sustainability.</p>
              <p>
                Website : http://thermofluid.ugm.ac.id/ environmental
                sustainability.
              </p>
              <p>
                WhatsApp : +62 82227754871 (Mr. Ridhar Rahman); +62 81359250309
                (Ms. Dewi Mar’atus) environmental sustainability.
              </p>
              <p>
                We would like to thank you for your kindness to forward this
                call for paper to your colleagues/students. environmental
                sustainability.
              </p>
              <p>
                Looking forward to meeting you in Thermofluid 2022.
                environmental sustainability.
              </p>
              <p>
                Best Regards, Robertus Dhimas Dhewangga Putra S.T., M.Eng.,
                Ph.D. environmental sustainability.
              </p>
              <p>Chair of Organizing Committee environmental sustainability.</p>
              <p>
                The 15th Regional Conference on Energy Engineering (RCEneE 2022)
                and the 13th International Conference on Thermofluids 2022
                environmental sustainability.
              </p>
              <p>
                #thermofluids #thermofluidxiii #rcenee #conferences #engineering
                #science #technology #education #researcher
                #seminarinternasional #internationalseminar #seminar2022
                #mechanicalengineering #mechanicaleducation #tech
                #engineeringpost #engineeringstudent
              </p>
            </div>
          </div>
        </section>

        <section className="committee" id="committee">
          <div className="container">
            <h2 className="center-text">Committee</h2>
            <div className="image">
              <img src={komite1} alt="komite1" />
              <img src={komite2} alt="komite2" />
            </div>
          </div>
        </section>

        <section className="register" id="additional">
          <div className="container">
            <h2>Register Now</h2>
            <p>Secure your spot at the conference today!</p>
            <HashLink smooth to="/register-page" className="btn-primary">
              Go to Registration
            </HashLink>
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
