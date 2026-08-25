import React, { useRef, useEffect, useState } from 'react';
import Folder from '../components/Folder.jsx';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

/* ── Bauhaus mouse-tracking hook (shared, extracted once) ── */
export function useBauhausRotation(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.setProperty('--rotation', Math.atan2(-x, y) + 'rad');
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);
}

/* ── Project Card ── */
const Project = ({
  title,
  description,
  color = '#5227FF',
  papers = [],
  status = 'Live',
  github,
  live,
  note,
}) => {
  const cardRef = useRef(null);
  useBauhausRotation(cardRef);

  const [highlight, ...rest] = title.split('–');
  const restTitle = rest.join('–').trim();

  const isLive = status.toLowerCase() === 'live';
  const dotColor = isLive ? '#00C853' : '#D50000';

  return (
    <div
      ref={cardRef}
      className="project-bauhaus-card mb-10 p-6 rounded-2xl flex flex-col md:flex-row items-start justify-between"
      style={{ '--bauhaus-accent-stop': `${color}80` }}
    >
      {/* Accent top line */}
      <div
        className="absolute top-0 left-8 right-8 h-px rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
          opacity: 0.55,
        }}
      />

      {/* LEFT */}
      <div className="w-full md:w-2/3 md:pr-6">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span style={{ color, fontWeight: 'bold' }} className="mr-1">
            {highlight.trim()} –
          </span>
          <span style={{ color: 'var(--text-color)' }}>{restTitle}</span>
        </h2>

        <p className="mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          {description}
        </p>

        {note && (
          <p className="mb-4 text-sm italic" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
            {note}
          </p>
        )}

        {/* CTA buttons — now use semantic CSS classes */}
        <div className="flex flex-wrap gap-3 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
              className="btn-accent"
              style={{ '--btn-accent': color }}
            >
              <FaGithub size={13} />
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live project"
              className="btn-accent-filled"
              style={{ '--btn-accent': color }}
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* RIGHT — Status Badge + Folder */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mt-6 md:mt-0">
        {/* Status badge — semantic class */}
        <div className="status-badge mb-4" style={{ '--badge-color': dotColor }}>
          <span className="status-badge-dot" />
          {status}
        </div>

        <Folder color={color} items={papers} size={1} />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
  papers: PropTypes.array,
  status: PropTypes.string,
  github: PropTypes.string,
  live: PropTypes.string,
  note: PropTypes.string,
};

/* ── Page ── */
const ProjectPage = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-12"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <div className="w-full max-w-5xl">
      <span className="section-label">Portfolio</span>
      <h1
        className="text-4xl font-extrabold mb-3 tracking-tight"
        style={{ color: 'var(--text-color)', fontFamily: 'var(--font-display)' }}
      >
        My Projects
      </h1>
      <p className="text-base mb-12 max-w-xl" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
        A collection of real-world systems built with clean architecture and purpose.
      </p>
    </div>

  <div className="max-w-5xl w-full">
    <Project
    title="GitHub Profile Analyzer API – Developer Insights Engine"
    description="Developer Intelligence Platform that analyzes GitHub profiles and repositories to generate career scores, developer types, skill insights, portfolio gaps, recruiter recommendations, top projects, resume evidence, and AI-powered career roadmaps using React, Node.js, Express, MySQL, and the GitHub REST API."
    github="https://github.com/Sukumar5705/github-profile-analyzer"
    live="https://github-profile-analyzer-liart.vercel.app/"
    status="Live"
    color="#00ACC1"
    papers={[
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-10 h-10" alt="MySQL" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-10 h-10" alt="GitHub API" />,
    ]}
  />
    <Project
  title="EstateX – Premium Real Estate CRM"
  description="A premium full-stack MERN real estate management platform featuring JWT authentication, role-based admin dashboard, advanced property search and filtering, inquiry management, analytics dashboards with Recharts, and a luxury editorial UI. Built with React, Node.js, Express, MongoDB, Docker, and Nginx using a scalable RESTful architecture."
  github="https://github.com/Sukumar5705/estatex"
  status="Live"
  color="#C9A84C"
      live ="https://luxora-crm.vercel.app/"
  papers={[
    <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"className="w-10 h-10" alt="React"/>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"className="w-10 h-10"alt="Node.js"/>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB"/>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker"/>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"  className="w-10 h-10" alt="Nginx"/>,
  ]}
/>

  {/* 1. AI Code Reviewer - Live */}
  <Project
    title="AI Code Reviewer – Automated Code Quality Platform"
    description="A full-stack code review platform using React and Node.js with Express, integrating Google Generative AI to deliver automated feedback. Improved code quality by 30% and reduced review time by 25%."
    github="https://github.com/Sukumar5705/code-review"
    live="https://code-review-eta-five.vercel.app"
    status="Live"
    color="#00C853"
    papers={[
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
    ]}
  />

  {/* 2. Employee Management System - Live */}
  <Project
    title="Employee Management System – Role-Based Tracker"
    description="A full-stack MERN application with Role-Based Access Control across 4 user roles — Admin, HR, Manager, and Employee — supporting task assignment, real-time tracking, and performance analytics for 50+ users. Secured with JWT and bcrypt."
    github="https://github.com/Sukumar5705/employee-management-system"
    live="https://employee-management-system-fkrh.vercel.app"
    status="Live"
    color="#FF6D00"
    papers={[
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />,
    ]}
  />
{/* Lumen Camera Website - Live */}
<Project
  title="Lumen Camera Website – Premium Camera Storefront"
  description="A modern and responsive camera e-commerce frontend built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features product browsing, advanced filtering, brand discovery, blog pages, responsive navigation, and polished UI animations for a premium shopping experience."
  github="https://github.com/Sukumar5705/lumen-camera-shop"
  live="https://lumen-camera-shop.vercel.app/"
  status="Live"
  color="#3B82F6"
  papers={[
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-10 h-10" alt="TypeScript" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-10 h-10" alt="Tailwind CSS" />,
    <img src="https://vitejs.dev/logo.svg" className="w-10 h-10" alt="Vite" />,
  ]}
/>
  {/* 3. GitHub Profile Analyzer API - Live */}
  

  {/* 4. AI Agentic News Aggregator */}
  {showAll && (
    <>
      <Project
        title="AI Agentic News Aggregator – LLM-Powered News Intelligence"
        description="An AI-powered news aggregation platform that collects updates from AI-focused sources including RSS feeds, YouTube content, and web articles. Built with Python, PostgreSQL, SQLAlchemy, and OpenRouter LLMs to automatically extract, clean, summarize, and store content. Generates daily AI news digests and delivers personalized email reports through Gmail SMTP while preventing duplicate article processing."
        github="https://github.com/Sukumar5705/ai-agentic-news-aggregator"
        status="Live"
        color="#8B5CF6"
        papers={[
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-10 h-10" alt="PostgreSQL" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" className="w-10 h-10" alt="SQLAlchemy" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" />,
        ]}
      />

      {/* 5. HyperCare */}
      <Project
        title="HyperCare – BP Monitoring & Lifestyle Advisor"
        description="An intelligent blood pressure monitoring system using Python and ML models (Random Forest, Gradient Boosting) to analyse 500+ patient records, achieving 85% accuracy in hypertension risk prediction. Features Gemini AI integration for personalised micro-goal generation, DASH diet recommendations, and a what-if scenario simulator."
        github="https://github.com/Sukumar5705/bp-predictor"
        status="Live"
        color="#155DFC"
        papers={[
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-plain-wordmark.svg" className="w-10 h-10" alt="Streamlit" />,
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" className="w-10 h-10" alt="Scikit-learn" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="w-10 h-10" alt="Flask" />,
        ]}
      />

      {/* 6. Crypto Market Monitoring */}
      <Project
        title="Crypto Market Monitoring – Automated n8n Workflow"
        description="An event-driven automation workflow built using n8n, CoinGecko APIs, and Telegram Bot API. Continuously monitors cryptocurrency market conditions, processes top market movers, tracks Bitcoin price fluctuations, and automatically sends Telegram alerts when significant market events occur. Designed with fault-tolerant API handling and scheduled execution."
        github="https://github.com/Sukumar5705"
        status="Live"
        color="#F59E0B"
        papers={[
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
          <img src="https://n8n.io/favicon.ico" className="w-10 h-10" alt="n8n" />,
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/coingecko.svg" className="w-10 h-10" alt="CoinGecko" />,
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" className="w-10 h-10" alt="Telegram" />,
        ]}
      />

      {/* 7. Hospital Appointment Booking */}
      <Project
        title="Hospital Appointment Booking – Microservices Platform"
        description="A scalable hospital appointment booking system built with microservices architecture, Node.js, Express, and MongoDB. CI/CD via Jenkins and Docker Compose — achieving 100% uptime, 60% faster deployments."
        github="https://github.com/Sukumar5705/hospital-management"
        status="Live"
        color="#6C63FF"
        papers={[
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="w-10 h-10" alt="Jenkins" />,
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />,
        ]}
      />
    </>
  )}

  <div className="flex justify-center mt-6 mb-8">
    <button
      onClick={() => setShowAll(!showAll)}
      className="btn-ghost"
    >
      {showAll ? "View Less" : "View All Projects"}
    </button>
  </div>
</div>
  </div>
  );
};

export default ProjectPage;
