import React from "react";
import "../Stylesheets/About.css";
import ProfilePhoto from "../images/developer-8764524_1920.jpg";
import SkyBackground from "../images/sky-7232494.jpg";

function About() {
  return (
    <div
      id="about"
      className="about-section"
      style={{
        minHeight: "100vh",
        background: `var(--bg-primary), url(${SkyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "100px 20px 80px",
        fontFamily: "'Inter', 'Arial', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Enhanced floating particles effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="about-container"
        style={{
          maxWidth: "1400px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 300px 1fr",
          gap: "clamp(20px, 3vw, 40px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Profile Image Section - LEFT */}
        {
          <div
            className="about-image-section"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "var(--backdrop-blur)",
              WebkitBackdropFilter: "var(--backdrop-blur)",
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "var(--glass-shadow), inset 0 1px 0 var(--glass-border)",
              border: "1px solid var(--glass-border)",
              height: "clamp(350px, 40vw, 450px)",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              display: window.innerWidth > 768 ? "flex" : "none",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-xl)",
                background: `url(${ProfilePhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "4px solid var(--text-accent)",
                boxShadow: "0 20px 40px var(--shadow-accent)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Enhanced overlay with gradient */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(59, 130, 246, 0.2) 100%)",
                  borderRadius: "var(--radius-xl)",
                }}
              ></div>

              {/* Animated corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "clamp(40px, 6vw, 60px)",
                  height: "clamp(40px, 6vw, 60px)",
                  borderRadius: "var(--radius-full)",
                  background: "var(--gradient-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(16px, 3vw, 24px)",
                  boxShadow: "0 10px 20px var(--shadow-accent)",
                  animation: "pulse 2s infinite",
                }}
              >
                ⚡
              </div>
            </div>
          </div>
        }

        {/* Stats Section - MIDDLE */}
        <div
          className="about-stats-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(15px, 3vw, 25px)",
            height: "clamp(350px, 40vw, 450px)",
          }}
        >
          <div
            style={{
              background: "var(--gradient-glass-primary)",
              backdropFilter: "var(--backdrop-blur-light)",
              padding: "clamp(16px, 3vw, 20px)",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              border: "1px solid var(--border-secondary)",
              width: "100%",
              transition: "var(--transition-bounce)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px var(--shadow-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: "var(--font-bold)",
                color: "var(--text-primary)",
              }}
            >
              8+
            </div>
            <div
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                color: "var(--text-tertiary)",
                fontWeight: "var(--font-medium)",
              }}
            >
              Months Experience
            </div>
          </div>

          <div
            style={{
              background: "var(--gradient-glass-accent)",
              backdropFilter: "var(--backdrop-blur-light)",
              padding: "clamp(16px, 3vw, 20px)",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              border: "1px solid var(--border-primary)",
              width: "100%",
              transition: "var(--transition-bounce)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px var(--shadow-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: "var(--font-bold)",
                color: "var(--text-primary)",
              }}
            >
              15+
            </div>
            <div
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                color: "var(--text-tertiary)",
                fontWeight: "var(--font-medium)",
              }}
            >
              Technologies
            </div>
          </div>

          <div
            style={{
              background: "var(--gradient-glass-success)",
              backdropFilter: "var(--backdrop-blur-light)",
              padding: "clamp(16px, 3vw, 20px)",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              border: "1px solid var(--border-success)",
              width: "100%",
              transition: "var(--transition-bounce)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px var(--shadow-success)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: "var(--font-bold)",
                color: "var(--text-primary)",
              }}
            >
              5+
            </div>
            <div
              style={{
                fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                color: "var(--text-tertiary)",
                fontWeight: "var(--font-medium)",
              }}
            >
              Projects
            </div>
          </div>
        </div>

        {/* Introduction Section - RIGHT */}
        <div
          className="about-content-section"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "var(--backdrop-blur)",
            WebkitBackdropFilter: "var(--backdrop-blur)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(30px, 4vw, 30px)",
            boxShadow: "var(--glass-shadow), inset 0 1px 0 var(--glass-border)",
            border: "1px solid var(--glass-border)",
            color: "var(--text-primary)",
            height: "clamp(350px, 40vw, 450px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "var(--font-bold)",
              color: "#ffffff", // Fallback color
              background: "linear-gradient(135deg, #ffffff, #ff6b35)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(135deg, var(--text-primary), var(--text-accent))",
              marginBottom: "10px",
              lineHeight: "1.2",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Akshay Mathad
          </div>

          <div
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "var(--text-accent)",
              marginBottom: "clamp(20px, 3vw, 30px)",
              fontWeight: "var(--font-semibold)",
            }}
          >
            Full Stack Developer
          </div>

          <div
            style={{
              fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
              lineHeight: "1.7",
              color: "var(--text-secondary)",
              marginBottom: "clamp(30px, 4vw, 40px)",
            }}
          >
            Hey there! I'm a Computer Science Engineering graduate diving
            headfirst into the world of Full Stack Development. With 8+ months
            of experience under my belt, I'm all about tackling exciting
            projects and turning ideas into reality. Think of me as a coding
            enthusiast who's always up for a challenge and constantly leveling
            up my skills!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
