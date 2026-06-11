import React from 'react';
import { Target, Lightbulb, Activity } from 'lucide-react';

const About = () => {
  const floatingSkills = ['Designing', 'Coding', 'Problem Solving', 'SQL', 'Python', 'Java'];
  
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'justify' }}>
              A motivated and intellectually curious Artificial Intelligence and Data Science undergraduate with a strong foundation in backend development and user-centric design methodologies. Experienced in developing intelligent applications through API integration and structured data workflows, complemented by data-driven logic and analytical problem-solving capabilities.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'justify' }}>
              Demonstrates a keen interest in cybersecurity and secure system engineering, with a proactive approach toward identifying potential vulnerabilities and strengthening system resilience. Capable of integrating advanced AI concepts with intuitive UI/UX principles to design scalable, reliable, and secure digital solutions.
            </p>
            
            <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginTop: '2rem' }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <Target size={24} color="var(--text-accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>System Resilience</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Proactive approach toward identifying vulnerabilities and strengthening systems.</p>
              </div>
              <div className="card" style={{ padding: '1.25rem' }}>
                <Lightbulb size={24} color="var(--text-accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Human-Centric AI</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Integrating advanced AI concepts with intuitive UI/UX principles.</p>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ 
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              borderRadius: '24px',
              background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Profile Photo */}
              <img 
                src="/profile.jpg" 
                alt="Krishnaji S" 
                style={{ 
                  width: '90%', 
                  height: '90%', 
                  objectFit: 'cover',
                  borderRadius: '20px',
                  zIndex: 2,
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
                }} 
              />

              {/* Popping/Floating Skill Tags */}
              <div className="skills-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {floatingSkills.map((skill, index) => {
                  const angle = (index / floatingSkills.length) * Math.PI * 2;
                  const radius = 160;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div 
                      key={index}
                      className="floating-skill"
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-accent)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 3,
                        animation: `float ${3 + index}s ease-in-out infinite`
                      }}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) scale(1); }
          50% { transform: translate(-50%, -50%) translateY(-10px) scale(1.05); }
        }
        .floating-skill {
          white-space: nowrap;
        }
      `}} />
    </section>
  );
};

export default About;
