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

/* ─────────────────────────────────────────────
   Mouse XY tracking hook for glow effect
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   3×5 dot-grid decoration — top-right of card
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Category icon box — top-left of card
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Individual skill tile
───────────────────────────────────────────── */
const SkillTile = ({ skill, accentColor }) => (
  <div
    className="skill-tile-premium group/tile relative flex flex-col items-center justify-center gap-2 rounded-xl"
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.055)',
      padding: '13px 5px 11px',
      cursor: 'default',
      userSelect: 'none',
      transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
      '--brand-color': skill.color || accentColor,
    }}
  >
    {/* Hover tint from brand color */}
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-xl opacity-0 group-hover/tile:opacity-100 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--brand-color) 20%, transparent) 0%, transparent 75%)`,
        transition: 'opacity 0.2s ease',
      }}
    />
    {/* Icon */}
    <div
      className="skill-icon-wrapper relative z-10 flex items-center justify-center"
      style={{
        fontSize: 26,
        lineHeight: 1,
        color: 'rgba(255,255,255,0.85)',
        transition: 'color 0.2s ease, transform 0.2s ease'
      }}
    >
      {skill.icon}
    </div>
    {/* Name */}
    <span
      className="skill-name-wrapper relative z-10 text-center leading-tight"
      style={{
        fontSize: '0.64rem',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.52)',
        letterSpacing: '0.015em',
        fontFamily: 'var(--font-body, system-ui)',
        transition: 'color 0.2s ease'
      }}
    >
      {skill.name}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   SkillGroup — one bento card
   cols controls the inner grid column count
───────────────────────────────────────────── */
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

      {/* Dot grid */}
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
   Skills data — same structure as original
   skillGroups, categoryIcon added per entry
───────────────────────────────────────────── */
const skillGroups = [
  {
    category: 'Languages',
    color: '#F59E0B',
    categoryIcon: <FiCode />,
    skills: [
      { icon: <SiC />, name: 'C', color: '#A8B9CC' },
      { icon: <SiCplusplus />, name: 'C++', color: '#00599C' },
      { icon: <FaJava />, name: 'Java', color: '#ED8B00' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <SiPython />, name: 'Python', color: '#3776AB' },
      { icon: <SiR />, name: 'R', color: '#276DC3' },
      { icon: <SiDart />, name: 'Dart', color: '#0175C2' },
    ],
  },
  {
    category: 'Frontend',
    color: '#3B82F6',
    categoryIcon: <FiMonitor />,
    skills: [
      { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
      { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
      { icon: <SiReact />, name: 'React', color: '#61DAFB' },
      { icon: <SiAngular />, name: 'Angular', color: '#DD0031' },
      { icon: <SiAngular />, name: 'AngularJS', color: '#E23237' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
      { icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    ],
  },
  {
    category: 'Backend',
    color: '#22C55E',
    categoryIcon: <FiServer />,
    skills: [
      { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
      { icon: <SiExpress />, name: 'Express.js', color: '#ffffff' },
      { icon: <SiSpringboot />, name: 'Spring', color: '#6DB33F' },
      { icon: <SiJsonwebtokens />, name: 'JWT', color: '#FB015B' },
      { icon: <SiNpm />, name: 'NPM', color: '#CB3837' },
      { icon: <SiNodemon />, name: 'Nodemon', color: '#76D04B' },
    ],
  },
  {
    category: 'Databases',
    color: '#A855F7',
    categoryIcon: <FiDatabase />,
    skills: [
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
      { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
      { icon: <SiSqlite />, name: 'SQLite', color: '#003B57' },
    ],
  },
  {
    category: 'AI / ML',
    color: '#EC4899',
    categoryIcon: <FiCpu />,
    skills: [
      { icon: <SiScikitlearn />, name: 'Scikit-Learn', color: '#F7931E' },
      { icon: <SiPandas />, name: 'Pandas', color: '#150458' },
      { icon: <SiNumpy />, name: 'NumPy', color: '#4DABCF' },
      { icon: <SiPlotly />, name: 'Plotly', color: '#3F4F75' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    color: '#06B6D4',
    categoryIcon: <FiCloud />,
    skills: [
      { icon: <SiDocker />, name: 'Docker', color: '#2496ED' },
      { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5' },
      { icon: <SiJenkins />, name: 'Jenkins', color: '#D24939' },
      { icon: <SiGooglecloud />, name: 'Google Cloud', color: '#4285F4' },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#F97316',
    categoryIcon: <FiTool />,
    skills: [
      { icon: <SiGit />, name: 'Git', color: '#F05032' },
      { icon: <SiGithub />, name: 'GitHub', color: '#ffffff' },
      { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
      { icon: <IoLogoTableau />, name: 'Tableau', color: '#E97627' },
    ],
  },
];

/* ─────────────────────────────────────────────
   SkillsSection — the full bento grid
   
   TOP ROW    [Languages] [Frontend] [Backend]
   BOTTOM ROW [Databases] [AI/ML] [DevOps] [Tools]
───────────────────────────────────────────── */
const SkillsSection = () => {
  const [languages, frontend, backend, databases, aiml, devops, tools] = skillGroups;

  return (
    <div className="w-full">
      <style>{`
        .premium-skill-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.09);
        }
        .skill-tile-premium:hover {
          background: color-mix(in srgb, var(--brand-color) 8%, rgba(255,255,255,0.025)) !important;
          border-color: var(--brand-color) !important;
          box-shadow: 0 6px 20px color-mix(in srgb, var(--brand-color) 20%, transparent);
          transform: translateY(-2px);
        }
        .skill-tile-premium:hover .skill-icon-wrapper {
          color: var(--brand-color) !important;
          transform: scale(1.12);
        }
        .skill-tile-premium:hover .skill-name-wrapper {
          color: rgba(255,255,255,0.95) !important;
        }
        @media (max-width: 900px) {
          .skills-top-row  { grid-template-columns: 1fr 1fr !important; }
          .skills-bottom-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .skills-top-row  { grid-template-columns: 1fr !important; }
          .skills-bottom-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* TOP ROW — 3 equal columns */}
      <div
        className="skills-top-row grid gap-4 mb-4"
        style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
      >
        <SkillGroup {...languages} cols={3} />
        <SkillGroup {...frontend} cols={3} />
        <SkillGroup {...backend} cols={3} />
      </div>

      {/* BOTTOM ROW — 4 fractional columns matching reference proportions */}
      <div
        className="skills-bottom-row grid gap-4"
        style={{ gridTemplateColumns: '0.85fr 1fr 1.3fr 1fr' }}
      >
        <SkillGroup {...databases} cols={3} />
        <SkillGroup {...aiml} cols={2} />
        <SkillGroup {...devops} cols={2} />
        <SkillGroup {...tools} cols={2} />
      </div>
    </div>
  );
};

export default SkillsSection;
