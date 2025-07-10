import React from "react";
import "../Stylesheets/ExperienceCard.css";

function ExperienceCard({ company, position, duration, location, description, technologies, isLeft }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: isLeft ? 'flex-start' : 'flex-end',
      width: '100%',
      position: 'relative',
      zIndex: 1
    }}>
      <div 
        className="experience-card"
        style={{
          width: '100%',
          maxWidth: '500px',
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--backdrop-blur)',
          borderRadius: 'var(--radius-xl)',
          padding: '30px',
          boxShadow: 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)',
          border: '1px solid var(--glass-border)',
          transition: 'var(--transition-normal)',
          position: 'relative',
          marginLeft: isLeft ? '0' : 'auto',
          marginRight: isLeft ? 'auto' : '0'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 30px 60px var(--shadow-dark), inset 0 1px 0 var(--glass-border)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)';
        }}>
        {/* Timeline dot */}
        {/* <div style={{
          position: 'absolute',
          top: '30px',
          [isLeft ? 'right' : 'left']: '-160px',
          width: '20px',
          height: '20px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--gradient-accent)',
          border: '3px solid var(--text-primary)',
          zIndex: 2
        }}></div> */}
        
        {/* Company header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-glass-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            border: '2px solid var(--border-secondary)',
            flexShrink: 0
          }}>
            💼
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--text-primary)',
              margin: '0 0 5px 0'
            }}>
              {company}
            </h3>
            <div style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: 'var(--text-accent)',
              fontWeight: 'var(--font-semibold)',
              marginBottom: '8px'
            }}>
              {position}
            </div>
            <div style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap'
            }}>
              <span style={{
                padding: '4px 12px',
                background: 'var(--gradient-glass-accent)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-primary)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>
                📅 {duration}
              </span>
              <span style={{
                padding: '4px 12px',
                background: 'var(--gradient-glass-success)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-success)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>
                📍 {location}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          lineHeight: '1.6',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-lg)'
        }}>
          {description}
        </p>

        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-xs)'
        }}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              style={{
                padding: '6px 12px',
                background: 'var(--gradient-glass-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-secondary)',
                fontSize: '0.8rem',
                color: 'var(--text-primary)',
                fontWeight: 'var(--font-medium)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard; 