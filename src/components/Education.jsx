import React from "react";
import "../Stylesheets/Education.css";
import SkyBackground from "../images/sky-7232494.jpg";

function Education() {
  return (
    <div id="education" style={{
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
        background: 'rgba(30, 58, 138, 0.8)',
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
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 'var(--font-bold)',
            background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 20px 0',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}>
            Educational Journey
          </h2>
          <div style={{
            width: '130px',
            height: '4px',
            background: 'var(--gradient-accent)',
            margin: '0 auto',
            borderRadius: 'var(--radius-sm)'
          }}></div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-xl)'
        }}>
          {/* Bachelor's Degree */}
          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--backdrop-blur)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            boxShadow: 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)',
            border: '1px solid var(--glass-border)',
            transition: 'var(--transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 30px 60px var(--shadow-dark), inset 0 1px 0 var(--glass-border)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)';
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-lg)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-glass-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                border: '3px solid var(--border-secondary)',
                flexShrink: 0
              }}>
                🎓
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--text-primary)',
                  margin: '0 0 8px 0'
                }}>
                  Bachelor of Engineering
                </h3>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-accent)',
                  fontWeight: 'var(--font-semibold)',
                  marginBottom: '10px'
                }}>
                  Computer Science Engineering
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '15px'
                }}>
                  SDMCET Dharwad
                </div>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '6px 14px',
                    background: 'var(--gradient-glass-accent)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-primary)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    📅 January 2021 - June 2025
                  </span>
                  <span style={{
                    padding: '6px 14px',
                    background: 'var(--gradient-glass-success)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-success)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    🏆 CGPA: 7.73/10
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PUC */}
          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--backdrop-blur)',
            borderRadius: 'var(--radius-xl)',
            padding: '35px',
            boxShadow: 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)',
            border: '1px solid var(--glass-border)',
            transition: 'var(--transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 30px 60px var(--shadow-dark), inset 0 1px 0 var(--glass-border)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)';
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-lg)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-glass-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                border: '3px solid var(--border-primary)',
                flexShrink: 0
              }}>
                📚
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--text-primary)',
                  margin: '0 0 8px 0'
                }}>
                  Pre-University Course (PUC)
                </h3>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-accent)',
                  fontWeight: 'var(--font-semibold)',
                  marginBottom: '8px'
                }}>
                  PCMB (Physics, Chemistry, Mathematics, Biology)
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '12px'
                }}>
                  Vidyaniketan PU Science College Hubli
                </div>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '5px 12px',
                    background: 'var(--gradient-glass-accent)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-primary)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    📅 June 2019 - July 2021
                  </span>
                  <span style={{
                    padding: '5px 12px',
                    background: 'var(--gradient-glass-success)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-success)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    🏆 91.8%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* High School */}
          <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--backdrop-blur)',
            borderRadius: 'var(--radius-xl)',
            padding: '35px',
            boxShadow: 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)',
            border: '1px solid var(--glass-border)',
            transition: 'var(--transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 30px 60px var(--shadow-dark), inset 0 1px 0 var(--glass-border)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--glass-shadow), inset 0 1px 0 var(--glass-border)';
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-lg)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-glass-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                border: '3px solid var(--border-success)',
                flexShrink: 0
              }}>
                🏫
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--text-primary)',
                  margin: '0 0 8px 0'
                }}>
                  High School (10th Grade)
                </h3>
                <div style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '12px'
                }}>
                  JSS SDMCS Dharwad
                </div>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '5px 12px',
                    background: 'var(--gradient-glass-success)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-success)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    📅 May 2014 - April 2019
                  </span>
                  <span style={{
                    padding: '5px 12px',
                    background: 'var(--gradient-glass-success)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-success)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    🏆 91.8%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education; 