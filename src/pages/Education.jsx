import React, { useRef, useEffect } from 'react';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiR,
  SiDart,
  SiHtml5,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiJsonwebtokens,
  SiNpm,
  SiNodemon,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiTool,
} from 'react-icons/fi';

/* ══════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════ */

/** Used by the existing TimelineItem (unchanged) */
function useBauhausRotation(ref) {
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

/** Used by the new premium SkillGroup */
function useMouseGlow(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);
}

/* ══════════════════════════════════════════════════════════
   EXISTING COMPONENTS — IDENTICAL TO YOUR ORIGINAL
══════════════════════════════════════════════════════════ */

const TimelineItem = ({ role, company, companyColor = '#155DFC', timeline, description, isLast }) => {
  const cardRef = useRef(null);
  useBauhausRotation(cardRef);

  return (
    <div className="flex gap-5 group">
      <div className="flex flex-col items-center">
        <div
          className="timeline-dot mt-1.5 transition-all duration-300 group-hover:scale-125"
          style={{
            backgroundColor: companyColor,
            boxShadow: `0 0 0 3px ${companyColor}20`,
          }}
        />
        {!isLast && (
          <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'var(--border-color)' }} />
        )}
      </div>

      <div className="pb-12 flex-1">
        <div
          ref={cardRef}
          className="timeline-bauhaus-card p-6 rounded-xl"
          style={{ '--bauhaus-accent-stop': `${companyColor}90` }}
        >
          <div
            className="absolute top-0 left-6 right-6 h-px rounded-full"
            style={{
              background: `linear-gradient(90deg, ${companyColor} 0%, transparent 100%)`,
              opacity: 0.65,
            }}
          />
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <div
                className="text-xs font-semibold mb-1"
                style={{
                  color: companyColor,
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {company}
              </div>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-color)',
                  letterSpacing: '-0.02em',
                }}
              >
                {role}
              </h3>
            </div>
            <span
              className="text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${companyColor}18, transparent)`,
                color: companyColor,
                border: `1px solid ${companyColor}40`,
                fontFamily: 'var(--font-body)',
              }}
            >
              {timeline}
            </span>
          </div>
          <div
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ children }) => (
  <h2
    className="text-xs font-semibold mb-8"
    style={{
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    }}
  >
    {children}
  </h2>
);

/* ══════════════════════════════════════════════════════════
   PREMIUM SKILLS SECTION — NEW PRESENTATION LAYER ONLY
   (data structure and React Icons are preserved exactly)
══════════════════════════════════════════════════════════ */

const DotGrid = ({ color }) => (
  <div
    aria-hidden="true"
    className="absolute top-4 right-4 pointer-events-none"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 4px)',
      gap: '5px',
      opacity: 0.25,
    }}
  >
    {Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: color }}
      />
    ))}
  </div>
);

const CategoryIconBox = ({ icon, color }) => (
  <div
    className="flex items-center justify-center rounded-xl flex-shrink-0"
    style={{
      width: 44,
      height: 44,
      background: `linear-gradient(135deg, ${color}28 0%, ${color}0d 100%)`,
      border: `1px solid ${color}30`,
      color: color,
      fontSize: 20,
    }}
  >
    {icon}
  </div>
);

const SkillTile = ({ skill, accentColor }) => (
  <div
    className="skill-tile-premium group/tile relative flex flex-col items-center justify-center gap-2 rounded-xl"
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.055)',
      padding: '13px 5px 11px',
      cursor: 'default',
      userSelect: 'none',
      transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease',
    }}
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-xl opacity-0 group-hover/tile:opacity-100 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${accentColor}20 0%, transparent 75%)`,
        transition: 'opacity 0.2s ease',
      }}
    />
    <div
      className="relative z-10 flex items-center justify-center"
      style={{ fontSize: 26, lineHeight: 1, color: 'rgba(255,255,255,0.85)' }}
    >
      {skill.icon}
    </div>
    <span
      className="relative z-10 text-center leading-tight"
      style={{
        fontSize: '0.64rem',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.52)',
        letterSpacing: '0.015em',
        fontFamily: 'var(--font-body, system-ui)',
      }}
    >
      {skill.name}
    </span>
  </div>
);

const SkillGroup = ({ category, color, categoryIcon, skills, cols = 3 }) => {
  const cardRef = useRef(null);
  useMouseGlow(cardRef);

  return (
    <div
      ref={cardRef}
      className="premium-skill-card group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(16, 16, 20, 0.97)',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '20px',
        transition: 'transform 0.25s cubic-bezier(.22,1,.36,1), box-shadow 0.25s ease',
      }}
    >
      {/* Mouse-tracking surface glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.035) 0%, transparent 70%)',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Bottom glowing border line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, ${color}60 30%, ${color}cc 50%, ${color}60 70%, transparent 100%)`,
        }}
      />

      {/* Ambient bottom glow blob */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: -18,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '68%',
          height: 36,
          borderRadius: '50%',
          background: color,
          opacity: 0.18,
          filter: 'blur(18px)',
        }}
      />

      <DotGrid color={color} />

      {/* Card header */}
      <div className="relative z-10 flex items-center gap-3 mb-5">
        <CategoryIconBox icon={categoryIcon} color={color} />
        <div>
          <h3
            className="font-bold uppercase"
            style={{
              fontSize: '0.75rem',
              color: color,
              letterSpacing: '0.13em',
              fontFamily: 'var(--font-body, system-ui)',
              lineHeight: 1,
            }}
          >
            {category}
          </h3>
          <div
            style={{
              marginTop: 6,
              height: 2,
              width: 26,
              borderRadius: 2,
              background: color,
              opacity: 0.65,
            }}
          />
        </div>
      </div>

      {/* Skills grid */}
      <div
        className="relative z-10 flex-1"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 8,
        }}
      >
        {skills.map((skill) => (
          <SkillTile key={skill.name} skill={skill} accentColor={color} />
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   skillGroups — your original data, untouched
───────────────────────────────────────────── */
const skillGroups = [
  {
    category: 'Languages',
    color: '#F59E0B',
    categoryIcon: <FiCode />,
    skills: [
      { icon: <SiC />, name: 'C' },
      { icon: <SiCplusplus />, name: 'C++' },
      { icon: <FaJava />, name: 'Java' },
      { icon: <SiJavascript />, name: 'JavaScript' },
      { icon: <SiPython />, name: 'Python' },
      { icon: <SiR />, name: 'R' },
      { icon: <SiDart />, name: 'Dart' },
    ],
  },
  {
    category: 'Frontend',
    color: '#3B82F6',
    categoryIcon: <FiMonitor />,
    skills: [
      { icon: <SiHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <SiReact />, name: 'React' },
      { icon: <SiAngular />, name: 'Angular' },
      { icon: <SiAngular />, name: 'AngularJS' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <SiBootstrap />, name: 'Bootstrap' },
    ],
  },
  {
    category: 'Backend',
    color: '#22C55E',
    categoryIcon: <FiServer />,
    skills: [
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express.js' },
      { icon: <SiSpringboot />, name: 'Spring' },
      { icon: <SiJsonwebtokens />, name: 'JWT' },
      { icon: <SiNpm />, name: 'NPM' },
      { icon: <SiNodemon />, name: 'Nodemon' },
    ],
  },
  {
    category: 'Databases',
    color: '#A855F7',
    categoryIcon: <FiDatabase />,
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <SiSqlite />, name: 'SQLite' },
    ],
  },
  {
    category: 'AI / ML',
    color: '#EC4899',
    categoryIcon: <FiCpu />,
    skills: [
      { icon: <SiScikitlearn />, name: 'Scikit-Learn' },
      { icon: <SiPandas />, name: 'Pandas' },
      { icon: <SiNumpy />, name: 'NumPy' },
      { icon: <SiPlotly />, name: 'Plotly' },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#F97316',
    categoryIcon: <FiTool />,
    skills: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <SiPostman />, name: 'Postman' },
      { icon: <IoLogoTableau />, name: 'Tableau' },
    ],
  },
];

/* ─────────────────────────────────────────────
   SkillsSection bento grid wrapper
───────────────────────────────────────────── */
const SkillsSection = () => {
  const [languages, frontend, backend, databases, aiml, tools] = skillGroups;

  return (
    <div className="w-full">
      <style>{`
        .premium-skill-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.09);
        }
        .skill-tile-premium:hover {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.11) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .skills-top-row    { grid-template-columns: 1fr 1fr !important; }
          .skills-bottom-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          .skills-top-row    { grid-template-columns: 1fr 1fr !important; }
          .skills-bottom-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* TOP ROW — Languages · Frontend · Backend */}
      <div
        className="skills-top-row grid gap-4 mb-4"
        style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
      >
        <SkillGroup {...languages} cols={3} />
        <SkillGroup {...frontend} cols={3} />
        <SkillGroup {...backend} cols={3} />
      </div>

      {/* BOTTOM ROW — Databases · AI/ML · DevOps & Cloud · Tools */}
      <div
        className="skills-bottom-row grid gap-4"
        style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
      >
        <SkillGroup {...databases} cols={3} />
        <SkillGroup {...aiml} cols={3} />

        <SkillGroup {...tools} cols={3} />
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   PAGE — Education.jsx
   Education & Achievements are 100% identical to your
   original. Only the Skills block is swapped out.
══════════════════════════════════════════════════════════ */
const Education = () => {
  return (
    <section
      className="min-h-screen py-14 px-6"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <span className="section-label">Background</span>
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
        >
          Education, Skills &amp; Achievements
        </h1>
        <p
          className="text-base mb-14 max-w-xl"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          A snapshot of my academic journey, technical expertise, research contributions,
          certifications, and notable achievements.
        </p>

        {/* ── Education ── UNCHANGED ── */}
        <div className="mt-4">
          <SectionHeading>Education</SectionHeading>

          <TimelineItem
            company="Mahatma Gandhi Institute of Technology, Hyderabad"
            companyColor="#155DFC"
            role="B.Tech in Computer Science & Engineering"
            timeline="2023 – 2027"
            isLast={false}
            description={
              <div>
                <p className="mb-3">
                  Currently pursuing a Bachelor's degree with a strong academic record{' '}
                  <strong style={{ color: 'var(--text-color)' }}>8.6 / 10</strong>, focused on
                  core computer science fundamentals and software engineering.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'].map((c) => (
                    <span key={c} className="skill-tag">{c}</span>
                  ))}
                </div>
              </div>
            }
          />

          <TimelineItem
            company="Narayana Junior College — Board of Intermediate Education, Telangana"
            companyColor="#10B981"
            role="Board of Intermediate Education (MPC)"
            timeline="2021 – 2023"
            isLast={true}
            description={
              <p>
                Graduated with distinction{' '}
                <strong style={{ color: 'var(--text-color)' }}>98.1%</strong> with specialisation
                in Mathematics, Physics, and Chemistry.
              </p>
            }
          />
        </div>

        {/* ── Skills ── ONLY THIS BLOCK IS CHANGED ── */}
        <div className="mb-4">
          <section id="skills" className="mt-12">
            <SectionHeading>Skills</SectionHeading>
            <SkillsSection />
          </section>
        </div>

        {/* ── Achievements ── UNCHANGED ── */}
        <div className="mb-4">
          <SectionHeading>Achievements</SectionHeading>

          <TimelineItem
            company="HackSavvy-25 — National Level Hackathon"
            companyColor="#F59E0B"
            role="Team Leader"
            timeline="Mar 2025"
            isLast={false}
            description={
              <div>
                <p className="mb-3">
                  Led a cross-functional team of 4 engineers to design and deliver a complete
                  software solution under strict time constraints in a national-level competitive
                  environment.
                </p>
                <ul className="list-none space-y-2">
                  {[
                    'Spearheaded end-to-end product development, from ideation to final deployment',
                    'Architected system design and coordinated implementation across frontend, backend, and ML components',
                    'Enabled efficient team execution through structured task allocation and agile collaboration',
                    'Presented and defended the solution before a panel of technical experts',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: '#F59E0B', marginTop: '2px', flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />


        </div>

      </div>
    </section>
  );
};

export default Education;
