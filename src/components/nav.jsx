import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FolderGit2,
  BriefcaseBusiness,
  Github,
  FileText,
  Menu,
  X,
  Mail,
  Code
} from "lucide-react";
import DarkMode from "./darkMode";

const App = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { to: "#home", label: "Home", icon: <Home size={15} /> },
    { to: "#projects", label: "Projects", icon: <FolderGit2 size={15} /> },
    { to: "#education", label: "Education", icon: <BriefcaseBusiness size={15} /> },
    { to: "#skills", label: "Skills", icon: <Code size={15} /> },
    { to: "#contact", label: "Contact", icon: <Mail size={15} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = navLinks.find(l => l.to === `#${id}`);
            if (link) setActiveLink(link.label);
          }
        });
      },
      { rootMargin: "-100px 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="max-w-6xl mx-auto sticky top-0 z-50 flex justify-center px-4 pt-5 pb-2">
      <nav
        ref={menuRef}
        className="relative flex items-center justify-between px-5 py-2.5 rounded-full w-full max-w-5xl transition-all duration-300"
        style={{
          /* Deep dark glass — stands out against any page background */
          background: scrolled
            ? "linear-gradient(135deg, #0f1117ee 0%, #1a1d2aee 100%)"
            : "linear-gradient(135deg, #0f1117f2 0%, #1a1d2af2 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset"
            : "0 4px 20px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.06) inset",
        }}
      >
        {/* ── Logo / Name ── */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
          style={{ textDecoration: "none" }}
        >
          {/* Gradient icon badge */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #155DFC 0%, #6c63ff 100%)",
              boxShadow: "0 0 12px rgba(21,93,252,0.5)",
              fontFamily: "var(--font-display)",
            }}
          >
            S
          </div>
          <span
            className="text-sm font-semibold hidden sm:block"
            style={{
              fontFamily: "var(--font-display)",
              color: "#f0f0f0",
              letterSpacing: "-0.01em",
            }}
          >
            Sukumar
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, icon }) => {
            const isActive = activeLink === label;
            return (
              <a
                key={to}
                href={to}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(21,93,252,0.35) 0%, rgba(108,99,255,0.3) 100%)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(21,93,252,0.5)"
                    : "1px solid transparent",
                  boxShadow: isActive ? "0 0 10px rgba(21,93,252,0.25)" : "none",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {icon}
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        {/* ── Right Side Actions ── */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/Sukumar5705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.55)" }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <Github size={17} />
          </a>

          {/* Resume button — gradient pill */}
          <a
            href="/SUKUMARS_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #155DFC 0%, #6c63ff 100%)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              border: "none",
              boxShadow: "0 0 14px rgba(21,93,252,0.4)",
              textDecoration: "none",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <DarkMode />

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden p-2 rounded-full transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            style={{
              color: "rgba(255,255,255,0.7)",
              backgroundColor: menuOpen ? "rgba(255,255,255,0.1)" : "transparent",
              border: "none",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* ── Mobile Dropdown ── */}
        {menuOpen && (
          <div
            className="absolute top-14 left-0 right-0 rounded-2xl p-3 flex flex-col gap-1 md:hidden"
            style={{
              background: "linear-gradient(135deg, #0f1117f8 0%, #1a1d2af8 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            }}
          >
            {navLinks.map(({ to, label, icon }) => {
              const isActive = activeLink === label;
              return (
                <a
                  key={to}
                  href={to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(21,93,252,0.3) 0%, rgba(108,99,255,0.25) 100%)"
                      : "transparent",
                    border: isActive ? "1px solid rgba(21,93,252,0.4)" : "1px solid transparent",
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                  {label}
                </a>
              );
            })}

            <div
              className="my-1"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            />

            <a

              href="/SUKUMARS_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              <FileText size={15} />
              View Resume
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default App;
