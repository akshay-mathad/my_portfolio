import React from "react";
import "../Stylesheets/Footer.css";

function Footer() {
  const resumeFile = "/Documents/Akshay.Mathad.Resume.pdf";

  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 64, 175, 0.9), rgba(124, 58, 237, 0.85))',
      backdropFilter: 'var(--backdrop-blur)',
      borderTop: '2px solid var(--border-neon)',
      padding: 'clamp(40px, 6vw, 60px) 20px 30px',
      fontFamily: "'Inter', 'Arial', sans-serif",
      position: 'relative',
      // boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.3), 0 0 40px var(--shadow-neon)'
    }}>
      {/* Enhanced overlay for better contrast */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.8))',
        pointerEvents: 'none'
      }}></div>

      {/* Animated background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 280px), 1fr))',
          gap: 'clamp(30px, 5vw, 50px)',
          marginBottom: 'clamp(30px, 5vw, 50px)'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
              fontWeight: 'var(--font-bold)',
              color: '#ffffff', // Fallback color
              marginBottom: 'var(--space-md)',
              background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(135deg, var(--text-primary), var(--text-neon))',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                background: 'var(--gradient-success)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></span>
              Akshay Mathad
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-lg)',
              fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)'
            }}>
              Passionate Computer Science Engineering student specializing in full-stack development 
              and modern web technologies. Always eager to learn and contribute to innovative projects.
            </p>
            <div style={{
              display: 'flex',
              gap: 'clamp(10px, 2vw, 15px)',
              flexWrap: 'wrap'
            }}>
              <a
                href="mailto:mathadakshay1726@gmail.com"
                style={{
                  padding: 'clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 16px)',
                  background: 'var(--gradient-glass-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-secondary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.85rem)',
                  fontWeight: 'var(--font-medium)',
                  transition: 'var(--transition-bounce)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-primary)';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px var(--shadow-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-glass-primary)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                📧 Email
              </a>
              <a
                href="tel:+917892637724"
                style={{
                  padding: 'clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 16px)',
                  background: 'var(--gradient-glass-accent)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-primary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.85rem)',
                  fontWeight: 'var(--font-medium)',
                  transition: 'var(--transition-bounce)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-accent)';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px var(--shadow-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-glass-accent)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                📱 Call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.3rem)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🔗 Quick Links
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(8px, 1.5vw, 12px)'
            }}>
              {[
                { name: "About", link: "#about", icon: "👋" },
                { name: "Experience", link: "#experience", icon: "💼" },
                { name: "Skills", link: "#skills", icon: "🛠️" },
                { name: "Projects", link: "#projects", icon: "🚀" },
                { name: "Certifications", link: "#certifications", icon: "🏆" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.85rem, 1.3vw, 0.9rem)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'var(--transition-bounce)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'transparent',
                    border: '1px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'var(--gradient-glass-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-neon)';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Resume */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.3rem)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🌐 Connect & Download
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(12px, 2vw, 16px)'
            }}>
              <a
                href="https://www.linkedin.com/in/akshay-mathad-b9476a257/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: 'clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)',
                  background: 'var(--gradient-glass-primary)',
                  borderRadius: 'var(--radius-lg)',
                  // border: '1px solid var(--border-secondary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.85rem, 1.3vw, 0.9rem)',
                  fontWeight: 'var(--font-medium)',
                  transition: 'var(--transition-bounce)',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  // e.currentTarget.style.background = 'var(--gradient-primary)';
                  // e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 30px var(--shadow-primary)';
                }}
                onMouseLeave={(e) => {
                  // e.currentTarget.style.background = 'var(--gradient-glass-primary)';
                  // e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                💼 LinkedIn Profile
              </a>
              
              <a
                href={resumeFile}
                download="Akshay_Mathad_Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: 'clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)',
                  background: 'var(--gradient-glass-accent)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-primary)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.85rem, 1.3vw, 0.9rem)',
                  fontWeight: 'var(--font-medium)',
                  transition: 'var(--transition-bounce)',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  // e.currentTarget.style.background = 'var(--gradient-accent)';
                  // e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  // e.currentTarget.style.boxShadow = '0 15px 30px var(--shadow-accent)';
                }}
                onMouseLeave={(e) => {
                  // e.currentTarget.style.background = 'var(--gradient-glass-accent)';
                  // e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  // e.currentTarget.style.boxShadow = 'none';
                }}
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: 'clamp(20px, 3vw, 25px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{
            color: 'var(--text-tertiary)',
            fontSize: 'clamp(0.8rem, 1.2vw, 0.85rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              background: 'var(--gradient-success)',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            © 2024 Akshay Mathad. All rights reserved.
          </div>
          <div style={{
            color: 'var(--text-tertiary)',
            fontSize: 'clamp(0.8rem, 1.2vw, 0.85rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            Made with ❤️ and React.js
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
