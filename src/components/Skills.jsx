import React from 'react';
import { Code2, PieChart, Database, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const technicalCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="text-gradient" size={24} />,
      skills: ['Python', 'Java', 'SQL', 'HTML']
    },
    {
      title: 'Designing',
      icon: <PieChart className="text-gradient" size={24} />,
      skills: ['Figma', 'Adobe XD']
    }
  ];

  const currentlyLearning = ['Data Analysis', 'Gen AI'];
  const nonTechnicalSkills = ['Leadership', 'Entrepreneurship', 'Creative Thinking', 'Problem Solving'];

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-3">
          {technicalCategories.map((category, idx) => (
            <div key={idx} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '8px' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem' }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Currently Learning */}
          <div className="card" style={{ border: '1px dashed var(--text-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <BookOpen className="text-gradient" size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>Currently Learning</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {currentlyLearning.map((skill, idx) => (
                <span key={idx} className="badge" style={{ background: 'transparent' }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Non-Technical Skills</h2>
          <div className="grid grid-cols-4">
            {nonTechnicalSkills.map((skill, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-accent)', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
