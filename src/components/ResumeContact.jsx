import React from 'react';
import { Mail, Users, Code, FileText } from 'lucide-react';

const ResumeContact = () => {
  return (
    <section id="contact" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          
          {/* Resume / CTA Section */}
          <div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's Connect</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                <FileText className="text-gradient" size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>My Details Resume</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>Get a comprehensive look at my experience and skills.</p>
                <a href="/resume.pdf" target="_blank" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="mailto:skrishnaji5@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px' }}>
                  <Mail className="text-gradient" size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Personal Email</div>
                  <div>skrishnaji5@gmail.com</div>
                </div>
              </a>

              <a href="mailto:814723243026@trp.srmtrichy.edu.in" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px' }}>
                  <Mail className="text-gradient" size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>College Email</div>
                  <div>814723243026@trp.srmtrichy.edu.in</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/krishnaji-s-663a9b1aa" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px' }}>
                  <Users className="text-gradient" size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>LinkedIn</div>
                  <div>linkedin.com/in/krishnaji-s</div>
                </div>
              </a>

              <a href="https://github.com/krishh0515" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '8px' }}>
                  <Code className="text-gradient" size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>GitHub</div>
                  <div>github.com/krishh0515</div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeContact;
