
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Search() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Tournaments", path: "/Chalenges" },
    { name: "Premium", path: "/Premium" },
    { name: "Discover", path: "/Games" },
    { name: "Reviews", path: "/Review" },
  ];

  return (
    <section className={`search ${scrolled ? "active" : ""}`}>
      <div className="container c_flex">
        <div className="logo">
          <Link to="/">
            <img
              src="/images/ADD/logo.jpg"
              alt="Unique Gamer"
            />
          </Link>
        </div>

        <div className="title-box">
          <Link to="/">
            <h1>UNIQUE GAMER</h1>
          </Link>
          <span>PLAY. COMPETE. CONQUER.</span>
        </div>

        <nav className={`navlink ${mobileMenu ? "menu-open" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path ? "nav-active" : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/Profil" className="profile-link" aria-label="Profile">
            <i className="fa fa-user"></i>
          </Link>

          <button
            className="toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
          >
            <i className={mobileMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>
    </section>
  );
}
