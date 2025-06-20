import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { HashLink } from "react-router-hash-link";
import title from "../assets/title.png";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenRegis, setDropdownOpenRegis] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRegisRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRegisRef.current &&
        !dropdownRegisRef.current.contains(event.target as Node)
      ) {
        setDropdownOpenRegis(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <HashLink smooth to="/#hero" className="logo">
          <img src={title} alt="title" />
        </HashLink>
        <nav className="nav">
          <div
            className="dropdown"
            ref={dropdownRef}
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
          >
            <button className="nav-link dropdown-toggle">Home ▾</button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <HashLink smooth to="/#about" className="dropdown-item">
                  About
                </HashLink>
                <HashLink smooth to="/#paper" className="dropdown-item">
                  Paper
                </HashLink>
                <HashLink smooth to="/#committee" className="dropdown-item">
                  Committee
                </HashLink>
                <HashLink smooth to="/#additional" className="dropdown-item">
                  Additional Information
                </HashLink>
              </div>
            )}
          </div>
          {/* <div
            className="dropdown"
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
          >
            <button className="nav-link dropdown-toggle">Registration ▾</button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <HashLink smooth to="/#about" className="dropdown-item">
                  About
                </HashLink>
                <HashLink smooth to="/#paper" className="dropdown-item">
                  Paper
                </HashLink>
                <HashLink smooth to="/#committee" className="dropdown-item">
                  Committee
                </HashLink>
                <HashLink smooth to="/#additional" className="dropdown-item">
                  Additional Information
                </HashLink>
              </div>
            )}
          </div> */}
          <div className="dropdown" ref={dropdownRegisRef}>
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setDropdownOpenRegis((prev) => !prev)}
            >
              Registration ▾
            </button>
            {dropdownOpenRegis && (
              <div className="dropdown-menu">
                <HashLink smooth to="/register-page" className="dropdown-item">
                  Register
                </HashLink>
                <HashLink smooth to="/tutorial-page" className="dropdown-item">
                  Tutorial
                </HashLink>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">
              <HashLink smooth to="/past-event" className="hashlink">
                Past Event
              </HashLink>
            </button>
          </div>
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">
              <HashLink smooth to="/contact" className="hashlink">
                Contact
              </HashLink>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
