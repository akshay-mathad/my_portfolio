import React from "react";
import "../Stylesheets/Experience.css";
import ExperienceCard from "./ExperienceCard";
import DeveloperBackground from "../images/developer-8764524_1920.jpg";

function Experience() {
  return (
    <div id="experience" style={{
      minHeight: '100vh',
      background: `var(--bg-primary), url(${DeveloperBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '100px 20px 80px',
      fontFamily: "'Inter', 'Arial', sans-serif",
      position: 'relative'
    }}>
      {/* Enhanced overlay with gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 64, 175, 0.8), rgba(16, 185, 129, 0.6))',
        pointerEvents: 'none'
      }}></div>
      
      {/* Floating particles
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div> */}
      
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
            position: 'relative',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}>
            Professional Experience
            
            {/* Animated accent */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-20px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'var(--gradient-success)',
              animation: 'pulse 2s infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px'
            }}>
              💼
            </div>
          </h2>
          
          <div style={{
            width: 'clamp(120px, 25vw, 150px)',
            height: '4px',
            background: 'var(--gradient-rainbow)',
            margin: '0 auto',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 0 20px var(--shadow-accent)',
            animation: 'glow 3s ease-in-out infinite'
          }}></div>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-tertiary)',
            marginTop: '20px',
            maxWidth: '600px',
            margin: '20px auto 0',
            lineHeight: 1.6
          }}>
            Journey through my professional growth and key contributions in the tech industry
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(40px, 6vw, 60px)',
          position: 'relative'
        }}>
          {/* Enhanced Timeline line - properly positioned */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '6px',
            background: 'var(--gradient-accent)',
            transform: 'translateX(-50%)',
            zIndex: 0,
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 0 20px var(--shadow-accent)',
            animation: 'pulse 3s ease-in-out infinite'
          }}></div>

          <ExperienceCard 
            company="Latracal Solutions"
            position="Full-Stack Developer Intern"
            duration="March 2025 - June 2025"
            location="Bangalore, Karnataka"
            description="Developed 8 interactive gamified popups using Phaser.js and p5.js frameworks. Implemented brand customization features and integrated OpenAI API for enhanced user experience. Created dynamic, engaging educational content for web applications."
            technologies={["Phaser.js", "p5.js", "OpenAI API", "JavaScript", "HTML5", "CSS3"]}
            isLeft={true}
          />

          <ExperienceCard 
            company="Doc-Q"
            position="Web Development Intern"
            duration="August 2024 - January 2025"
            location="Remote"
            description="Developed comprehensive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built responsive user interfaces, implemented RESTful APIs, and managed database operations. Collaborated with cross-functional teams to deliver scalable solutions."
            technologies={["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "RESTful APIs"]}
            isLeft={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
