// Header.jsx
import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../public/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("banner");

  // Sahifadagi bo‘limlarga scroll qilish
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Link bosilganda ishlaydigan funksiya
  const handleLinkClick = (id) => {
    setActiveSection(id);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  // 🔁 Scroll paytida avtomatik active bo‘limni aniqlash
  useEffect(() => {
    const sectionIds = [
      "banner",
      "service",
      "business",
      "about",
      "news",
      "tanlov",
      "question",
      "footer",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <div className="header_conatiner">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => handleLinkClick("banner")}
        />
        <div className="nav-links">
          <p
            className={`link ${activeSection === "banner" ? "active" : ""}`}
            onClick={() => handleLinkClick("banner")}
          >
            Asosiy
          </p>
          <p
            className={`link ${activeSection === "service" ? "active" : ""}`}
            onClick={() => handleLinkClick("service")}
          >
            Xizmatlar
          </p>
          <p
            className={`link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            Jamoa
          </p>
          <p
            className={`link ${activeSection === "news" ? "active" : ""}`}
            onClick={() => handleLinkClick("news")}
          >
            Yangiliklar
          </p>
          <p
            className={`link ${activeSection === "tanlov" ? "active" : ""}`}
            onClick={() => handleLinkClick("tanlov")}
          >
            Tanlov
          </p>
          <p
            className={`link ${activeSection === "footer" ? "active" : ""}`}
            onClick={() => handleLinkClick("footer")}
          >
            Aloqa
          </p>

          <button
            className="register-button"
            onClick={() => navigate("/registration")}
          >
            Ro'yhatdan o'tish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
