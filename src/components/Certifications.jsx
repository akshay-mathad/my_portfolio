import React from "react";
import "../Stylesheets/Certifications.css";
import SkyBackground from "../images/sky-7232494.jpg";

function Certifications() {
  const certificationsData = [
    {
      id: 1,
      title: "Postman API Expert",
      issuer: "Postman",
      date: "2024",
      description: "Advanced API testing and development certification covering RESTful services, automation, and best practices.",
      category: "API Development",
      icon: "🚀",
      certificate: "https://badgr.com/public/assertions/_mgbCdJCRyyU2yDH6sqOsQ"
    },
    {
      id: 2,
      title: "MongoDB Node.js Developer",
      issuer: "MongoDB University",
      date: "2024",
      description: "Comprehensive certification in MongoDB database management and Node.js integration for full-stack development.",
      category: "Database",
      icon: "🍃",
      certificate: "https://drive.google.com/file/d/1J8cp9V-SLb8YzetXysfwF5tqv-AoSIzV/view?usp=drive_link"
    },
    {
      id: 3,
      title: "ReactJS Workshop Certificate",
      issuer: "Industry Workshop",
      date: "2024",
      description: "Hands-on workshop certification covering modern React.js development, hooks, state management, and best practices.",
      category: "Frontend",
      icon: "⚛️",
      certificate: "https://drive.google.com/file/d/1RIVcII10U4YDuIrReahygZKGGQHpkGFc/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2023",
      description: "National Programme on Technology Enhanced Learning certification in cloud computing concepts and implementations.",
      category: "Cloud Technology",
      icon: "☁️",
      certificate: "https://drive.google.com/file/d/1qbScR9kj2paT11Untq8j8-cgNPewyxp7/view?usp=drive_link"
    },
    {
      id: 5,
      title: "DRDO Project Accomplishment",
      issuer: "Defence Research and Development Organisation",
      date: "2023",
      description: "Recognition for successful completion and contribution to Defence Research and Development Organisation project.",
      category: "Research",
      icon: "🛡️",
      certificate: "https://drive.google.com/file/d/160n79GEFKUOC2Sc9hq6NQpZbNlQYpb7X/view?usp=drive_link"
    }
  ];

  return (
    <div id="certifications" style={{
      minHeight: '100vh',
      background: `var(--bg-primary), url(${SkyBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '100px 20px 80px',
      fontFamily: "'Inter', 'Arial', sans-serif",
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(168, 85, 247, 0.7), rgba(245, 158, 11, 0.6))',
        pointerEvents: 'none'
      }}></div>
      
      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 35% 65%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 65% 35%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(60px, 8vw, 80px)'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'var(--font-bold)',
            color: '#ffffff', // Fallback color
            background: 'linear-gradient(135deg, #ffffff, #ff6b35)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(135deg, var(--text-primary), var(--text-accent))',
            margin: '0 0 20px 0',
            letterSpacing: 'clamp(1px, 0.5vw, 3px)',
            textTransform: 'uppercase',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}>
            Certifications & Achievements
          </h2>
          <div style={{
            width: 'clamp(150px, 30vw, 200px)',
            height: '4px',
            background: 'var(--gradient-rainbow)',
            margin: '0 auto',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 0 20px var(--shadow-accent)',
            animation: 'glow 3s ease-in-out infinite'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 'var(--space-xl)',
          padding: '0 20px'
        }}>
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--backdrop-blur)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)',
                border: '1px solid var(--glass-border)',
                transition: 'var(--transition-normal)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 35px 70px var(--shadow-dark), inset 0 1px 0 var(--glass-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)';
              }}
            >
              {/* Category badge */}
              <div style={{
                position: 'absolute',
                top: 'var(--space-md)',
                right: 'var(--space-md)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-glass-accent)',
                border: '1px solid var(--border-primary)',
                color: 'var(--text-primary)',
                fontSize: '0.7rem',
                fontWeight: 'var(--font-bold)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {cert.category}
              </div>

              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--gradient-glass-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  border: '3px solid var(--border-secondary)',
                  flexShrink: 0
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--text-primary)',
                    margin: '0 0 8px 0',
                    lineHeight: '1.3'
                  }}>
                    {cert.title}
                  </h3>
                  <div style={{
                    fontSize: '1rem',
                    color: 'var(--text-accent)',
                    fontWeight: 'var(--font-semibold)',
                    marginBottom: '5px'
                  }}>
                    {cert.issuer}
                  </div>
                  <div style={{
                    padding: '3px 10px',
                    background: 'var(--gradient-glass-success)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-success)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)',
                    display: 'inline-block'
                  }}>
                    📅 {cert.date}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-md)',
                flex: 1
              }}>
                {cert.description}
              </p>

              {/* Certificate badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-sm)',
                background: 'var(--gradient-glass-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-secondary)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: 'var(--font-semibold)',
                marginTop: 'auto'
              }}>
                <a href={cert.certificate} target="_blank" rel="noopener noreferrer">
                  🏆 Verified Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications; 