import React from "react";
import "../Stylesheets/Projects.css";
import ProjectCard from "./ProjectCard";
import SkyBackground from "../images/sky-7232494.jpg";

function Projects() {
    return (
        <div id="projects" style={{
            minHeight: '100vh',
            background: `var(--bg-primary), url(${SkyBackground})`,
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
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(124, 58, 237, 0.7), rgba(245, 158, 11, 0.6))',
                pointerEvents: 'none'
            }}></div>
            
            {/* Floating particles */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
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
                        position: 'relative',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}>
                        Featured Projects
                        
                        {/* Animated underline */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '0',
                            height: '3px',
                            background: 'var(--gradient-accent)',
                            animation: 'shimmer 2s infinite'
                        }}></div>
                    </h2>
                    
                    <div style={{
                        width: 'clamp(100px, 20vw, 140px)',
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
                        Explore my portfolio of innovative projects that showcase creativity, technical expertise, and problem-solving skills
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 35vw, 350px), 1fr))',
                    gap: 'clamp(20px, 4vw, 30px)',
                    padding: '0 clamp(10px, 2vw, 20px)'
                }}>
                    <ProjectCard
                        title="Sereniva"
                        description="Sereniva helps you build daily habits, reflect on mood and productivity, and receive personalized insights powered by AI. Track progress, understand patterns, and grow with small consistent steps. Frontend: React, Tailwind, Ant Design UI. Backend: Node/Express, MongoDB. AI via provider-agnostic summarization with configurable models."
                        technologies={["React.js", "Tailwind CSS", "Ant Design UI", "Node.js", "Express.js", "MongoDB", "AI/ML"]}
                        liveLink="https://mhia.vercel.app/"
                        featured={true}
                    />
                    <ProjectCard
                        title="Nexus Artisan-Client Platform"
                        description="A comprehensive platform bridging skilled artisans with clients, featuring secure payment processing, real-time messaging, and project management tools. Built with modern web technologies for optimal user experience."
                        technologies={["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Stripe API"]}
                        featured={true}
                    />

                    <ProjectCard
                        title="Shopify Quiz Editor App"
                        description="An embedded Shopify app that enables merchants to create interactive quizzes for product recommendations. Features drag-and-drop quiz builder, analytics dashboard, and seamless Shopify integration."
                        technologies={["React.js", "Shopify API", "Polaris", "GraphQL", "Node.js", "MongoDB"]}
                        featured={true}
                    />

                    <ProjectCard
                        title="R-CNN Performance Evaluation"
                        description="Research project comparing performance metrics of different R-CNN architectures for object detection tasks. Implemented multiple models and conducted comprehensive analysis on various datasets."
                        technologies={["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib", "Jupyter"]}
                        featured={false}
                    />

                    <ProjectCard
                        title="Book Review Application"
                        description="A full-stack web application for book enthusiasts to discover, review, and discuss books. Features user authentication, book search, review system, and personalized recommendations."
                        technologies={["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "Material-UI"]}
                        githubLink="https://github.com/akshay-mathad/book-review-app.git"
                        liveLink="https://book-review-app-rho.vercel.app/"
                        featured={false}
                    />

                </div>
            </div>
        </div>
    );
}

export default Projects;
