import React from "react";
import '../Stylesheets/Header.css';

function Header() {
    const elements = [
        { name: "HOME", link: "#about" },
        { name: "EXPERIENCE", link: "#experience" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CERTIFICATIONS", link: "#certifications" },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            height: '70px',
            background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 64, 175, 0.9))`,
            backdropFilter: 'var(--backdrop-blur)',
            WebkitBackdropFilter: 'var(--backdrop-blur)',
            borderBottom: '2px solid var(--border-neon)',
            zIndex: '1000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: "'Inter', 'Arial', sans-serif",
            boxShadow: '0 4px 30px var(--shadow-primary), 0 0 20px var(--shadow-neon)'
        }}>
            <nav style={{
                display: 'flex',
                gap: 'clamp(8px, 2vw, 24px)',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '0 20px'
            }}>
                {elements.map((element, index) => (
                    <a
                        key={index}
                        href={element.link}
                        className="nav-link"
                        style={{
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                            fontWeight: 'var(--font-semibold)',
                            padding: 'clamp(6px, 1vw, 8px) clamp(10px, 2vw, 16px)',
                            borderRadius: 'var(--radius-xl)',
                            background: 'var(--gradient-glass-accent)',
                            border: '1px solid var(--border-primary)',
                            transition: 'var(--transition-bounce)',
                            letterSpacing: '0.5px',
                            display: 'inline-block',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--gradient-accent)';
                            e.target.style.color = 'var(--text-primary)';
                            e.target.style.transform = 'translateY(-3px) scale(1.05)';
                            e.target.style.boxShadow = '0 10px 30px var(--shadow-accent), 0 0 20px var(--shadow-neon)';
                            e.target.style.borderColor = 'var(--border-neon)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'var(--gradient-glass-accent)';
                            e.target.style.color = 'var(--text-secondary)';
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = 'none';
                            e.target.style.borderColor = 'var(--border-primary)';
                        }}
                    >
                        {element.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;
