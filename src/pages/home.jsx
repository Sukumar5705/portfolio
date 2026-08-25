import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RotatingText from '../components/text.jsx';
import profileImg from '../assets/image.png';
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Trophy,
  Mail,
  Cloud,
  BarChart3,
  Code,
  BarChart,
  FolderGit2,
  Award,
} from 'lucide-react';

/* ── Bauhaus mouse-tracking hook ── */
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

/* ── Reusable Bauhaus Card ── */
const BauhausCard = ({ children, className = '', style = {}, accentColor, hoverLift = true }) => {
  const ref = useRef(null);
  useBauhausRotation(ref);
  return (
    <div
      ref={ref}
      className={`bauhaus-card ${className}`}
      style={{
        '--bauhaus-accent-stop': accentColor ? `${accentColor}80` : undefined,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (hoverLift) e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = `var(--shadow-md), 0 0 20px ${accentColor ? accentColor + '30' : 'var(--bauhaus-glow-color)'}`;
      }}
      onMouseLeave={(e) => {
        if (hoverLift) e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {children}
    </div>
  );
};

/* ── Tech stack icons ── */
const techStackIcons = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', alt: 'C' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', alt: 'Bootstrap' },
];

const heroOrbitIcons = [
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    alt: 'Python',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    alt: 'MongoDB',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    alt: 'MySQL',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Git',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'Docker',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    alt: 'Java',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    alt: 'C++',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'HTML5',
  },
];

const stats = [
  {
    value: '8.6',
    label: 'CGPA',
    color: '#3B82F6',
    icon: BarChart,
  },
  {
    value: '4+',
    label: 'Projects',
    color: '#10B981',
    icon: FolderGit2,
  },
  {
    value: '3+',
    label: 'Certs',
    color: '#F59E0B',
    icon: Award,
  },
];

const certifications = [
  { org: 'Oracle', name: 'OCI 2025 AI Foundations Associate', date: 'Sep 2025', icon: Cloud, color: '#F80000' },
  { org: 'Deloitte / Forage', name: 'Data Analytics Job Simulation', date: 'Aug 2025', icon: BarChart3, color: '#86BC25' },
  { org: 'Cisco Netacad', name: 'JavaScript & Python Essentials', date: 'May 2025', icon: Code, color: '#1BA0D7' },
];

const profileItems = [
  { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE @ MGIT (2023–2027)', color: '#155DFC' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', color: '#10B981' },
  { icon: Briefcase, label: 'Interests', value: 'Backend • AI • Full Stack', color: '#F59E0B' },
  { icon: Trophy, label: 'Highlight', value: 'Team Lead — HackSavvy-25', color: '#8B5CF6' },
  { icon: Mail, label: 'Email', value: 'erugadindlasukumar5@gmail.com', color: '#0A66C2' },
];

/* ── Page ── */
const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const profileCardRef = useRef(null);
  useBauhausRotation(profileCardRef);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-20">

        {/* ── Hero ── */}
        <div className={`flex flex-col-reverse lg:flex-row items-center lg:items-center gap-8 lg:gap-10 ${fadeClass}`}>

          {/* LEFT — Text */}
          <div className="flex-1 min-w-0">
            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-10"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--accent) 8%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <span className="glow-dot rounded-full" style={{ width: '7px', height: '7px', backgroundColor: 'var(--accent)', flexShrink: 0 }} />
              Open to internships &amp; collaborations
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              hi, I'm{' '}
              <span style={{ color: 'var(--accent)' }}>Sukumar</span>
            </h1>

            <div className="mt-4 mb-6">
              <RotatingText
                texts={['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'AI']}
                mainClassName="inline-flex px-4 py-2 rounded-lg text-white text-2xl sm:text-3xl font-bold items-center justify-center rotating-text"
                style={{ backgroundColor: 'var(--accent)' }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
            </div>

            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              I build scalable, user-centric applications combining full-stack engineering with machine learning.
              Currently a Computer Science undergraduate at{' '}
              <span style={{ color: 'var(--text-color)', fontWeight: 500 }}>MGIT, Hyderabad</span>, focused on
              solving real-world problems through clean, efficient systems.
            </p>

            {/* CTA Buttons — semantic CSS classes */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
              <a href="#projects" className="btn-ghost">
                View projects →
              </a>
            </div>
          </div>

          {/* RIGHT — Developer Orbit */}
          <div className="developer-orbit">

            {/* Static orbit paths */}
            <div className="tech-orbit orbit-main" />
            <div className="tech-orbit orbit-secondary" />

            {/* Rotating icon system */}
            <div className="orbit-rotation">

              {heroOrbitIcons.map((tech, index) => {
                const angle = (360 / heroOrbitIcons.length) * index;

                return (
                  <div
                    key={tech.alt}
                    className="orbit-item"
                    style={{
                      '--orbit-angle': `${angle}deg`,
                    }}
                  >
                    <div className="tech-icon">
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Developer illustration */}
            <div className="developer-illustration">
              <img
                src={profileImg}
                alt="Developer illustration"
              />
            </div>

          </div>
        </div>

        {/* ── Stats Row ── */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 ${fadeClass}`}
          style={{ transitionDelay: '300ms' }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <BauhausCard
                key={i}
                accentColor={stat.color}
                className="p-5 rounded-2xl"
              >
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${stat.color} 12%, var(--bg-card))`,
                      border: `1px solid color-mix(in srgb, ${stat.color} 25%, transparent)`,
                    }}
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                      style={{ color: stat.color }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: stat.color,
                      }}
                    >
                      {stat.value}
                    </div>

                    <div
                      className="text-xs mt-1"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>

                </div>
              </BauhausCard>
            );
          })}
        </div>

        {/* ── Tech Stack Scroll ── */}
        <section className={`mt-20 ${fadeClass}`} style={{ transitionDelay: '400ms' }}>
          <span className="section-label">Tech Stack</span>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-color)' }}>
            Tools &amp; Technologies
          </h2>
          <div className="relative overflow-hidden w-full">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 z-10 w-12 pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--bg-color), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-12 pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--bg-color), transparent)' }} />

            <div className="flex gap-4 animate-infinite-scroll">
              {[...techStackIcons, ...techStackIcons].map((tech, index) => (
                <div
                  key={index}
                  className="bauhaus-card flex flex-col items-center justify-center p-4 rounded-xl min-w-[76px] transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={tech.src} alt={tech.alt}
                    className="w-10 h-10"
                    style={{ filter: 'grayscale(0.15)' }}
                  />
                  <span className="text-xs mt-2 text-center" style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-body)' }}>
                    {tech.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className={`mt-24 ${fadeClass}`} style={{ transitionDelay: '500ms' }}>
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>About</h1>
            <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start">

              {/* Prose */}
              <div className="max-w-2xl">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-color)' }}
                >
                  Building at the intersection of engineering, intelligence, and impact.
                </h2>
                <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  I'm <strong style={{ color: 'var(--text-color)' }}>Sukumar Erugadindla</strong>, a Computer Science
                  undergraduate at <strong style={{ color: 'var(--text-color)' }}>MGIT, Hyderabad</strong> (CGPA: 8.6/10).
                  I specialise in developing full-stack applications and AI-powered apps that are scalable and user-focused.
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  From leading teams in national-level hackathons to publishing research in journals, I bring ownership,
                  adaptability, and a strong engineering mindset to every project.
                </p>
                <div className="mb-6">
                  <p className="text-base mb-3" style={{ color: 'var(--text-muted)' }}>Particularly interested in:</p>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <li>• Full-Stack System Design</li>
                    <li>• AI powered Applications</li>
                    <li>• Scalable Backend Architecture</li>
                  </ul>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                  Connect on{' '}
                  <a href="https://linkedin.com/in/sukumar-erugadindla" target="_blank" rel="noopener noreferrer"
                    className="hover:underline font-medium" style={{ color: '#0A66C2' }}>LinkedIn</a>{' '}
                  or check out my work on{' '}
                  <a href="https://github.com/Sukumar5705" target="_blank" rel="noopener noreferrer"
                    className="hover:underline font-medium" style={{ color: 'var(--accent)' }}>GitHub</a>.
                </p>
              </div>

              {/* Profile Snapshot Card */}
              <div
                ref={profileCardRef}
                className="bauhaus-card p-5 sticky top-24 h-fit max-w-sm rounded-2xl"
              >
                <div
                  className="absolute top-0 left-5 right-5 h-px rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--accent) 0%, #6c63ff 100%)', opacity: 0.7 }}
                />
                <h3 className="text-sm font-semibold mb-5" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-color)' }}>
                  Profile Snapshot
                </h3>
                {profileItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)`,
                          border: `1px solid ${item.color}35`,
                        }}
                      >
                        <Icon size={16} style={{ color: item.color }} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-medium block"
                          style={{ color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                          {item.label}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-color)' }}>{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className={`mt-20 ${fadeClass}`} style={{ transitionDelay: '600ms' }}>
          <span className="section-label">Credentials</span>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-color)' }}>
            Certifications
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <BauhausCard key={i} accentColor={cert.color} className="p-5 rounded-xl">
                  <div
                    className="absolute top-0 left-4 right-4 h-px rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cert.color} 0%, transparent 100%)`, opacity: 0.55 }}
                  />
                  <div
                    className="p-3 rounded-xl w-fit mb-3"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}35` }}
                  >
                    <Icon size={20} style={{ color: cert.color }} />
                  </div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: cert.color, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  >
                    {cert.org}
                  </div>
                  <div className="text-sm font-medium mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-color)' }}>
                    {cert.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-body)' }}>
                    {cert.date}
                  </div>
                </BauhausCard>
              );
            })}
          </div>
        </section>

      </main>

      {/* ── Profile art keyframes ── */}
      <style>{`
        @keyframes glowPulse { 0%,100%{opacity:1} 50%{opacity:.5} }
        .glow-dot { animation: glowPulse 2s ease-in-out infinite; }

/* ─────────────────────────────
   Developer Orbit
───────────────────────────── */

.developer-orbit {
  width: 500px;
  height: 500px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
}

.developer-orbit:hover .orbit-rotation {
  animation-play-state: paused;
}

/* Orbit paths */

.tech-orbit {
  position: absolute;
  top: 50%;
  left: 50%;

  border: 1px solid rgba(59, 130, 246, 0.22);
  border-radius: 50%;

  transform: translate(-50%, -50%);

  pointer-events: none;
}

.orbit-main {
  width: 380px;
  height: 380px;
}

.orbit-secondary {
  width: 450px;
  height: 310px;

  transform:
    translate(-50%, -50%)
    rotate(-18deg);

  border-color: rgba(99, 102, 241, 0.16);
}

/* ─────────────────────────────
   Rotating orbit
───────────────────────────── */

.orbit-rotation {
  position: absolute;

  inset: 0;

  transform-origin: center;

  animation: orbitRotate 28s linear infinite;

  z-index: 4;
}

/*
  Each orbit item starts at center,
  rotates to its angle and moves out
  to the orbit radius.
*/

.orbit-item {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 0;
  height: 0;

  transform:
    translate(-50%, -50%)
    rotate(var(--orbit-angle))
    translateX(215px);
}

/* Counter rotation keeps logos upright */

.orbit-item .tech-icon {
  transform: rotate(calc(var(--orbit-angle) * -1));
}

/* ─────────────────────────────
   Tech icon
───────────────────────────── */

.tech-icon {
  width: 48px;
  height: 48px;

  margin-left: -24px;
  margin-top: -24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(18, 23, 34, 0.96);

  border: 1px solid rgba(59, 130, 246, 0.30);

  box-shadow:
    0 5px 18px rgba(0, 0, 0, 0.28);

  backdrop-filter: blur(8px);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.tech-icon img {
  width: 25px;
  height: 25px;

  object-fit: contain;

  display: block;
}

.tech-icon:hover {
  border-color: var(--accent);

  background:
    rgba(59, 130, 246, 0.12);
}

/* ─────────────────────────────
   Developer illustration
───────────────────────────── */

.developer-illustration {
  position: relative;

  z-index: 8;

  width: 500px;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.developer-illustration img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  display: block;

  filter:
    drop-shadow(
      0 18px 28px
      rgba(0, 0, 0, 0.38)
    );
}

/* ─────────────────────────────
   Orbit animation
───────────────────────────── */

@keyframes orbitRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .developer-orbit {
    width: 420px;
    height: 420px;
  }

  .orbit-main {
    width: 330px;
    height: 330px;
  }

  .orbit-secondary {
    width: 390px;
    height: 270px;
  }

  .orbit-item {
    transform:
      translate(-50%, -50%)
      rotate(var(--orbit-angle))
      translateX(180px);
  }

  .developer-illustration {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .developer-orbit {
    width: 350px;
    height: 350px;
  }

  .orbit-main {
    width: 280px;
    height: 280px;
  }

  .orbit-secondary {
    width: 320px;
    height: 220px;
  }

  .orbit-item {
    transform:
      translate(-50%, -50%)
      rotate(var(--orbit-angle))
      translateX(145px);
  }

  .tech-icon {
    width: 40px;
    height: 40px;
  }

  .tech-icon img {
    width: 21px;
    height: 21px;
  }

  .developer-illustration {
    width: 215px;
    height: 215px;
  }
}
      `}</style>
    </div>
  );
};

export default Home;
