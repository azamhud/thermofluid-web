import React from "react";
import "./ContactPage.scss";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="intro">
          For any inquiries regarding the conference, registration, or
          submissions, feel free to reach out to us:
        </p>

        <div className="contact-info">
          <div className="contact-box">
            <h3>Email</h3>
            <p>
              <a href="mailto:thermofluid@ugm.ac.id">thermofluid@ugm.ac.id</a>
            </p>
          </div>

          <div className="contact-box">
            <h3>WhatsApp</h3>
            <p>Mr. Ridhar Rahman: +62 82227754871</p>
            <p>Ms. Dewi Mar’atus: +62 81359250309</p>
          </div>

          <div className="contact-box">
            <h3>Website</h3>
            <p>
              <a
                href="http://thermofluid.ugm.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thermofluid.ugm.ac.id
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h3>Address</h3>
            <p>
              Department of Mechanical & Industrial Engineering, Faculty of
              Engineering, Universitas Gadjah Mada, Jl. Grafika No.2, Yogyakarta
              55281, Indonesia.
            </p>
          </div>
          <div className="contact-box">
            <h3>Social Media</h3>
            <div className="social-media">
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/thermofluidugm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/28468621/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCDSdlGNHqlLyn1gH1mrxTQA/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://twitter.com/thermofluidugm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
