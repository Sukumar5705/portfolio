import React from 'react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { Mail } from 'lucide-react';
import VisitorCountInline from './visit';
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className="mt-16"
      style={{
        backgroundColor: 'var(--bg-color)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: Name */}
        <div>
          <h4
            className="text-sm font-bold"
            style={{ fontFamily: "var(--font-display)", color: 'var(--text-color)' }}
          >
            Sukumar Erugadindla
          </h4>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--text-muted)', fontFamily: "var(--font-body)" }}
          >
            Software Engineer · Hyderabad, India
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sukumar5705"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)' }}
            className="transition-all duration-200 hover:opacity-60"
            aria-label="GitHub"
          >
            <SiGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/sukumar-erugadindla"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0A66C2' }}
            className="hover:opacity-70 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>
        <a
          href="https://leetcode.com/u/iDW8cT0ciL/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFA116' }}   
          className="hover:opacity-70 transition-opacity duration-200"
          aria-label="Leetcode"
        >
          <SiLeetcode size={17} />
        </a>
          <a
            href="mailto:erugadindlasukumar5@gmail.com"
            style={{ color: 'var(--text-muted)' }}
            className="hover:opacity-70 transition-opacity duration-200"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      
      <div
        className="text-center py-3 text-xs border-t"
        style={{ color: 'var(--text-faint)', borderColor: 'var(--border-color)', fontFamily: "var(--font-body)" }}
      >
        © {new Date().getFullYear()} Sukumar Erugadindla 
      </div>

      <VisitorCountInline />
    </footer>
  );
};

export default Footer;
