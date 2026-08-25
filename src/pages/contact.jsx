import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, CheckCircle, XCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';



const EMAILJS_SERVICE_ID  = "service_c2oc757";   
const EMAILJS_TEMPLATE_ID = "template_occok9x";  
const EMAILJS_PUBLIC_KEY  = "K6JrwI3h5Fh4eRf8k";   

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert("⚠️ EmailJS credentials are missing! Fill in SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY in Contact.jsx");
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.8rem 1.05rem",
    borderRadius: "10px",
    border: "2px solid rgba(255,255,255,0.18)",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    fontSize: "0.92rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
  };

  const cardStyle = {
    border: "2px solid rgba(255,255,255,0.06)",
    borderRadius: "16px",
    backgroundColor: "var(--bg-color)",
    boxShadow: "var(--shadow-sm)",
  };

  const contactItems = [
    {
      icon: <Mail size={17} />,
      label: "Email",
      value: "erugadindlasukumar5@gmail.com",
      href: "mailto:erugadindlasukumar5@gmail.com",
    },
    {
      icon: <Github size={17} />,
      label: "GitHub",
      value: "github.com/Sukumar5705",
      href: "https://github.com/Sukumar5705",
    },
    {
      icon: <Linkedin size={17} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sukumar-erugadindla",
      href: "https://linkedin.com/in/sukumar-erugadindla",
    },
    {
      icon: <MapPin size={17} />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
    },
  ];

  return (
    <div
      className="min-h-screen py-14 px-6"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight" style={{ color: "var(--text-color)" }}>
          Get in Touch
        </h1>
        <p className="text-base mb-12 max-w-xl" style={{ color: "var(--text-muted)" }}>
          Whether it's a project, collaboration, or just a chat — I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* ── Left: Contact Details Card ── */}
          <div className="md:col-span-2 overflow-hidden" style={cardStyle}>
            <div className="px-5 py-3" style={{ borderBottom: "2px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>
                Contact Details
              </span>
            </div>

            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: i < contactItems.length - 1 ? "1.5px solid var(--border-color)" : "none" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1.5px solid var(--border-color)", color: "var(--text-color)" }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm hover:underline block truncate"
                      style={{ color: "var(--text-color)", fontWeight: 500 }}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm block" style={{ color: "var(--text-color)", fontWeight: 500 }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Message Form Card ── */}
          <form onSubmit={handleSubmit} className="md:col-span-3 overflow-hidden" style={cardStyle}>
            <div className="px-7 py-3" style={{ borderBottom: "2px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text-faint)" }}>
                Send a Message
              </span>
            </div>

            <div className="p-7 flex flex-col gap-5">

              {/* ── Success Banner ── */}
              {status === 'success' && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(34,197,94,0.12)",
                    border: "1.5px solid rgba(34,197,94,0.4)",
                    animation: "fadeSlideIn 0.4s ease",
                  }}
                >
                  <CheckCircle size={20} color="#22c55e" />
                  <div>
                    <p style={{ color: "#22c55e", fontWeight: 600, fontSize: "0.92rem" }}>Message sent successfully!</p>
                    <p style={{ color: "#86efac", fontSize: "0.78rem" }}>I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {/* ── Error Banner ── */}
              {status === 'error' && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(239,68,68,0.12)",
                    border: "1.5px solid rgba(239,68,68,0.4)",
                    animation: "fadeSlideIn 0.4s ease",
                  }}
                >
                  <XCircle size={20} color="#ef4444" />
                  <div>
                    <p style={{ color: "#ef4444", fontWeight: 600, fontSize: "0.92rem" }}>Failed to send message.</p>
                    <p style={{ color: "#fca5a5", fontSize: "0.78rem" }}>Please check your EmailJS credentials or try again.</p>
                  </div>
                </div>
              )}

              {/* Name */}
              <div>
                <label style={labelStyle} htmlFor="name">Name</label>
                <input
                  id="name" type="text" name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle} required
                  onFocus={e => { e.target.style.borderColor = "#155DFC"; e.target.style.boxShadow = "0 0 0 3px rgba(21,93,252,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle} htmlFor="email">Email</label>
                <input
                  id="email" type="email" name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle} required
                  onFocus={e => { e.target.style.borderColor = "#155DFC"; e.target.style.boxShadow = "0 0 0 3px rgba(21,93,252,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle} htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="5"
                  placeholder="Tell me about your project or say hi..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }} required
                  onFocus={e => { e.target.style.borderColor = "#155DFC"; e.target.style.boxShadow = "0 0 0 3px rgba(21,93,252,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: status === 'success' ? "#22c55e" : "var(--button-bg)",
                  color: "var(--button-text)",
                  fontSize: "0.92rem",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.8 : 1,
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={e => { if (!submitting) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = submitting ? "0.8" : "1"; }}
              >
                {submitting ? (
                  <>
                    <Loader size={16} style={{ animation: "spin 1s linear infinite" }} />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>

            </div>
          </form>

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Contact;