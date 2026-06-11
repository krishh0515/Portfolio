import React from 'react';
import { Code, ExternalLink, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Network Intrusion Detection',
      description: 'A sophisticated security model developed using IBM Watson to identify and mitigate cyber threats. This project leverages machine learning to analyze network traffic patterns and flag potential anomalies in real-time.',
      tools: ['IBM Watson', 'Python', 'Machine Learning', 'Cybersecurity'],
      link: '#'
    },
    {
      title: 'ISL Translator (Bidirectional)',
      description: 'An AI-powered bridge for the deaf and hard-of-hearing community. This bidirectional system translates Indian Sign Language (ISL) gestures into text/speech and vice versa, facilitating seamless communication.',
      tools: ['React', 'Python', 'Computer Vision', 'Deep Learning'],
      link: '#'
    },
    {
      title: 'Design Works',
      description: 'A collection of UI/UX design projects focused on user-centric principles. Includes high-fidelity prototypes for a modern E-commerce website and an intuitive Food Delivery application, emphasizing accessibility and visual hierarchy.',
      tools: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping'],
      highlights: ['E-commerce Website', 'Food Delivery App'],
      link: '#'
    },
    {
      title: 'Chatbot using Amazon Lex',
      description: 'A conversational AI interface built with Amazon Lex to automate user interactions. Designed to handle complex queries with natural language understanding, providing a scalable solution for customer engagement.',
      tools: ['AWS Lex', 'Node.js', 'NLP', 'Cloud Services'],
      link: '#'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                   <a href={proj.link} style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {proj.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="badge">{tool}</span>
                ))}
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {proj.description}
              </p>

              {proj.highlights && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>Included Projects:</h4>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {proj.highlights.map((h, i) => (
                      <span key={i} className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>{h}</span>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{ marginTop: 'auto' }}>
                <a href={proj.link} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  View Details <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
