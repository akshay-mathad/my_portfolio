import React from "react";
import "../Stylesheets/Skills.css";
import CLogo from "../logos/c-logo.svg"; // C logo
import JavaLogo from "../logos/java-logo.svg"; // Java logo
import PHPLogo from "../logos/php-seeklogo.svg"; // PHP logo (EPS, may need conversion)
import JSSLogo from "../logos/javascript-seeklogo.svg"; // JavaScript logo (if available)
import ReactLogo from "../logos/react-seeklogo.svg"; // React logo
import ExpressLogo from "../logos/express-seeklogo.svg"; // Express logo
import NodeLogo from "../logos/node-js-seeklogo.svg"; // Node.js logo
import DeveloperBackground from "../images/developer-8764523_1920.jpg"; // Developer background

import VSCodeLogo from "../logos/visual-studio-code-seeklogo.svg"; // VS Code logo
import GitHubLogo from "../logos/github-seeklogo.svg"; // GitHub logo
import PostmanLogo from "../logos/postman-seeklogo.svg"; // Postman logo
import MySQLLogo from "../logos/mysql-seeklogo.svg"; // MySQL logo
import MongoDBLogo from "../logos/mongodb-seeklogo.svg"; // MongoDB logo

function Skills() {
  const skillsData = [
    // Programming Languages
    {
      id: 1,
      name: "JavaScript",
      logo: JSSLogo,
      proficiency: 90,
      category: "Language"
    },
    {
      id: 2,
      name: "Python",
      logo: null,
      proficiency: 75,
      category: "Language"
    },
    {
      id: 3,
      name: "Java",
      logo: JavaLogo,
      proficiency: 80,
      category: "Language"
    },
    {
      id: 4,
      name: "C",
      logo: CLogo,
      proficiency: 75,
      category: "Language"
    },
    {
      id: 5,
      name: "PHP",
      logo: PHPLogo,
      proficiency: 70,
      category: "Language"
    },
    // Libraries/Frameworks
    {
      id: 6,
      name: "React.js",
      logo: ReactLogo,
      proficiency: 88,
      category: "Framework"
    },
    {
      id: 7,
      name: "Express.js",
      logo: ExpressLogo,
      proficiency: 85,
      category: "Framework"
    },
    {
      id: 8,
      name: "Node.js",
      logo: NodeLogo,
      proficiency: 85,
      category: "Runtime"
    },
    {
      id: 9,
      name: "Phaser.js",
      logo: null,
      proficiency: 80,
      category: "Framework"
    },
    {
      id: 11,
      name: "Tailwind CSS",
      logo: null,
      proficiency: 70,
      category: "Framework"
    },
    // Tools/Platforms
    {
      id: 12,
      name: "VS Code",
      logo: VSCodeLogo,
      proficiency: 95,
      category: "Tool"
    },
    {
      id: 13,
      name: "GitHub",
      logo: GitHubLogo,
      proficiency: 85,
      category: "Tool"
    },
    {
      id: 14,
      name: "Postman",
      logo: PostmanLogo,
      proficiency: 80,
      category: "Tool"
    },
    {
      id: 15,
      name: "Cursor.sh",
      logo: null,
      proficiency: 85,
      category: "Tool"
    },
    // Databases
    {
      id: 16,
      name: "MySQL",
      logo: MySQLLogo,
      proficiency: 85,
      category: "Database"
    },
    {
      id: 17,
      name: "MongoDB",
      logo: MongoDBLogo,
      proficiency: 85,
      category: "Database"
    },
    {
      id: 18,
      name: "PostgreSQL",
      logo: null,
      proficiency: 75,
      category: "Database"
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Language": return "🔤";
      case "Framework": return "⚛️";
      case "Runtime": return "⚡";
      case "Tool": return "🛠️";
      case "Database": return "🗄️";
      default: return "💻";
    }
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case "Language": return "var(--gradient-primary)";
      case "Framework": return "var(--gradient-accent)";
      case "Runtime": return "var(--gradient-success)";
      case "Tool": return "var(--gradient-purple)";
      case "Database": return "var(--gradient-glass-success)";
      default: return "var(--gradient-primary)";
    }
  };
  
  return (
    <div id="skills" style={{
      minHeight: '100vh',
      background: `var(--bg-primary), url(${DeveloperBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '100px 20px 80px',
      fontFamily: "'Inter', 'Arial', sans-serif",
      position: 'relative'
    }}>
      {/* Enhanced overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 64, 175, 0.7), rgba(124, 58, 237, 0.6))',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
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
            background: 'linear-gradient(135deg, #ffffff, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(135deg, var(--text-primary), var(--text-neon))',
            margin: '0 0 20px 0',
            letterSpacing: 'clamp(1px, 0.5vw, 3px)',
            textTransform: 'uppercase',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}>
            Technical Skills
          </h2>
          <div style={{
            width: 'clamp(80px, 15vw, 120px)',
            height: '4px',
            background: 'var(--gradient-accent)',
            margin: '0 auto',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 0 20px var(--shadow-accent)'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(280px, 30vw, 320px), 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
          padding: '0 clamp(10px, 2vw, 20px)'
        }}>
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="skill-card"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--backdrop-blur)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(20px, 3vw, 30px)',
                boxShadow: 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)',
                border: '1px solid var(--glass-border)',
                transition: 'var(--transition-bounce)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px var(--shadow-dark), inset 0 1px 0 var(--glass-border), 0 0 30px var(--shadow-neon)';
                e.currentTarget.style.borderColor = 'var(--border-neon)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                padding: '4px 8px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.7rem',
                fontWeight: 'var(--font-bold)',
                background: getCategoryGradient(skill.category),
                color: 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span>{getCategoryIcon(skill.category)}</span>
                {skill.category}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-lg)',
                marginBottom: 'var(--space-lg)'
              }}>
                <div style={{
                  width: 'clamp(50px, 8vw, 60px)',
                  height: 'clamp(50px, 8vw, 60px)',
                  background: 'var(--gradient-glass-primary)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid var(--border-secondary)',
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {skill.logo ? (
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      style={{
                        width: 'clamp(30px, 5vw, 40px)',
                        height: 'clamp(30px, 5vw, 40px)',
                        objectFit: 'contain',
                        filter: 'brightness(1.2) drop-shadow(0 0 5px rgba(0, 212, 255, 0.3))'
                      }}
                    />
                  ) : (
                    <div style={{
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                      color: 'var(--text-neon)'
                    }}>
                      {getCategoryIcon(skill.category)}
                    </div>
                  )}
                  
                  {/* Animated background */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'conic-gradient(from 0deg, transparent, var(--primary-neon), transparent)',
                    animation: 'float 3s ease-in-out infinite',
                    opacity: 0.1
                  }}></div>
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--text-primary)',
                    margin: '0 0 5px 0'
                  }}>
                    {skill.name}
                  </h3>
                  <div style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                    color: 'var(--text-tertiary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    Proficiency: {skill.proficiency}%
                  </div>
                </div>
              </div>

              {/* Enhanced Progress Bar */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: 'var(--radius-md)',
                height: 'clamp(10px, 2vw, 12px)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                position: 'relative',
                marginBottom: '10px'
              }}>
                <div style={{
                  height: '100%',
                  background: getCategoryGradient(skill.category),
                  width: `${skill.proficiency}%`,
                  borderRadius: 'var(--radius-md)',
                  transition: 'width 1.5s ease-in-out',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    animation: 'shimmer 2s infinite'
                  }}></div>
                </div>
              </div>

              {/* Skill Level Badge */}
              <div style={{
                textAlign: 'center',
                padding: '8px 16px',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
                fontWeight: 'var(--font-bold)',
                background: skill.proficiency >= 90 
                  ? 'var(--gradient-success)'
                  : skill.proficiency >= 80 
                  ? 'var(--gradient-accent)'
                  : 'var(--gradient-primary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}>
                {skill.proficiency >= 90 ? '🏆 Expert' : skill.proficiency >= 80 ? '🥇 Advanced' : '🎯 Intermediate'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

