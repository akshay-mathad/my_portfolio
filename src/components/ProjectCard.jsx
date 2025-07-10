import React from "react";
import "../Stylesheets/ProjectCard.css";

function ProjectCard({ title, description, technologies, githubLink, liveLink, featured }) {
  return (
    <div className="project-card" style={{
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--backdrop-blur)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px',
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
    }}>
      {/* Featured badge */}
      {featured && (
        <div style={{
          position: 'absolute',
          top: 'var(--space-sm)',
          right: 'var(--space-sm)',
          padding: '4px 12px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--gradient-accent)',
          color: 'var(--text-primary)',
          fontSize: '0.7rem',
          fontWeight: 'var(--font-bold)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Featured
        </div>
      )}

      {/* Project icon */}
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--gradient-glass-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: 'var(--space-lg)',
        border: '2px solid var(--border-secondary)'
      }}>
        🚀
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: 'var(--font-bold)',
        color: 'var(--text-primary)',
        margin: '0 0 15px 0',
        lineHeight: '1.3'
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: 'var(--text-secondary)',
        marginBottom: 'var(--space-lg)',
        flex: 1
      }}>
        {description}
      </p>

      {/* Technologies */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-xs)',
        marginBottom: 'var(--space-lg)'
      }}>
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: '4px 10px',
              background: 'var(--gradient-glass-accent)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-primary)',
              fontSize: '0.75rem',
              color: 'var(--text-primary)',
              fontWeight: 'var(--font-medium)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: 'var(--space-sm)',
        alignItems: 'center'
      }}>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'var(--gradient-glass-primary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-secondary)',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 'var(--font-medium)',
            transition: 'var(--transition-normal)',
            flex: 1,
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gradient-primary)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--gradient-glass-primary)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>📱</span>
          GitHub
        </a>

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'var(--gradient-accent)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-primary)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 'var(--font-medium)',
              transition: 'var(--transition-normal)',
              flex: 1,
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gradient-success)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--gradient-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>🌐</span>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard; 