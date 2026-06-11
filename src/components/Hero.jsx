import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, BarChart2, TrendingUp, Palette } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', background: 'var(--accent-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>

      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div className="animate-fade-in" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem', animationDelay: '0.1s' }}>
              <span className="badge">Designer</span>
              <span className="badge">Data Analyst</span>
            </div>
            <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', animationDelay: '0.2s' }}>
              Hi, I'm <span className="text-secondary">Krishnaji</span> <br />
              <span className="text-gradient">Transforming raw data</span> into meaningful insights.
            </h1>
            <p className="animate-fade-in" style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', animationDelay: '0.3s', maxWidth: '600px' }}>
              Specializing in Python, SQL, and interactive dashboards to solve complex problems and drive business growth through data-driven decisions.
            </p>
            
            <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animationDelay: '0.4s' }}>
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" className="btn btn-secondary">
                Download Resume <Download size={18} />
              </a>
            </div>

            <div className="animate-fade-in grid grid-cols-3" style={{ marginTop: '4rem', gap: '1rem', animationDelay: '0.5s' }}>
              {[
                { icon: <BarChart2 className="text-gradient" />, title: 'Analysis', desc: 'Python & SQL' },
                { icon: <Palette className="text-gradient" />, title: 'Creative Thinking', desc: 'Designer' },
                { icon: <TrendingUp className="text-gradient" />, title: 'Strategy', desc: 'Actionable Insights' }
              ].map((stat, i) => (
                <div key={i} className="card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{stat.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap" style={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            transform: `translate(${scrollY * 0.2}px, -${scrollY * 0.2}px)`, /* Scroll effect: move up and right */
            transition: 'transform 0.1s ease-out',
            zIndex: 10
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '0.8',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)',
              border: '1px solid var(--border-color)',
            }}>
              <img 
                src="/profile.jpg" 
                alt="Krishnaji S" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'contrast(1.1) brightness(1.05)'
                }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(11, 17, 32, 0.4) 0%, transparent 40%)'
              }}></div>

            </div>
            
            {/* Floating accent for the photo */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'var(--text-accent)',
              opacity: 0.1,
              borderRadius: '20px',
              zIndex: -1,
              transform: 'rotate(15deg)'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
