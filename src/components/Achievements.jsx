import React, { useState } from 'react';
import { Award, CheckCircle, X, Maximize2 } from 'lucide-react';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const schoolAchievements = [
    {
      title: 'Office Automation (Bharathidasan University)',
      description: 'Certified by Bharathidasan University for completing the Office Automation course, demonstrating proficiency in digital productivity tools.',
      image: '/School level certificate/Bharathidasan University certificate in offie automation.jpg.jpeg'
    },
    {
      title: 'Programming Techniques (Bharathidasan University)',
      description: 'Certified by Bharathidasan University for completing the Programming Techniques course, building a strong foundation in structured programming.',
      image: '/School level certificate/Bharathidasan University certificate in programming techniques.jpg.jpeg'
    },
    {
      title: 'Good Conduct Prize — 11th Grade',
      description: 'Recognized with the Good Conduct Prize in 11th grade for exemplary discipline, integrity, and behavior throughout the academic year.',
      image: '/School level certificate/Good conduct prize in 11th grade _1.jpg.jpeg'
    },
    {
      title: 'Hindi Examination — Parichaya',
      description: 'Passed the Hindi Parichaya examination, demonstrating intermediate proficiency in Hindi language skills.',
      image: '/School level certificate/Hindi examination certificate (PARICHIYA).jpg.jpeg'
    },
    {
      title: 'Hindi Examination — Prathmik',
      description: 'Passed the Hindi Prathmik examination, demonstrating foundational proficiency in Hindi language comprehension and writing.',
      image: '/School level certificate/Hindi examination certificate (PRATHMIC).jpg.jpeg'
    }
  ];

  const awardsPhoto = '/School level certificate/Awards school_1.jpg.jpeg';

  const collegeAchievements = [
    {
      title: 'AI Internship (Top Engineers)',
      description: 'Completed an industry-level internship focused on Artificial Intelligence, gaining hands-on experience in AI model development and real-world applications.',
      image: '/college level certificates/Internship on AI(top engineers)_1.jpg.jpeg'
    },
    {
      title: 'JJ College Hackathon',
      description: 'Participated in the JJ College Hackathon, collaborating under pressure to develop innovative solutions within a competitive and time-bound environment.',
      image: '/college level certificates/JJ COLLEGE HACKATHON _1.jpg.jpeg'
    },
    {
      title: 'Kongunadu TechCluster Symposium',
      description: 'Represented at the Kongunadu TechCluster Symposium, engaging with cutting-edge technical presentations and competitive events across disciplines.',
      image: '/college level certificates/Kongunadu teckluster symposium _1.jpg.jpeg'
    },
    {
      title: 'Photography Challenge',
      description: 'Recognized in a college-level Photography Challenge, demonstrating creative vision, technical framing, and artistic expression through the lens.',
      image: '/college level certificates/Photography challenge _1.jpg.jpeg'
    },
    {
      title: 'TedX Event (Designing Lead)',
      description: 'Led the creative design team for a TedX event, responsible for conceptualizing and creating posters, invitations, banners, and certificates.',
      image: '/tedx-certificate.jpg'
    }
  ];

  const certifications = [
    { 
      title: 'AI Fundamentals', 
      issuer: 'IBM', 
      detail: 'Core concepts of Artificial Intelligence, including machine learning and neural networks.',
      file: '/certificates/Artificial Intelligence Fundamentals.png',
      thumbnail: '/certificates/Artificial Intelligence Fundamentals.png'
    },
    { 
      title: 'Data Fundamentals', 
      issuer: 'IBM', 
      detail: 'Foundational knowledge of data analysis and management.',
      file: '/certificates/Data Fundamentals.png',
      thumbnail: '/certificates/Data Fundamentals.png'
    },
    { 
      title: 'Data Science', 
      issuer: 'Professional Certificate', 
      detail: 'Advanced data science techniques and methodologies.',
      file: '/certificates/Data science certificate.png',
      thumbnail: '/certificates/Data science certificate.png'
    },
    { 
      title: 'Designing Stories in SAP Analytics', 
      issuer: 'SAP', 
      detail: 'Creative data visualization and storytelling using SAP Analytics Cloud.',
      file: '/certificates/Designing Stories in SAP Analytics.png',
      thumbnail: '/certificates/Designing Stories in SAP Analytics.png'
    },
    { 
      title: 'Edunet Internship', 
      issuer: 'Edunet Foundation', 
      detail: 'Training completion and internship certificate from Edunet.',
      file: '/certificates/Edunet Intern certificate.png',
      thumbnail: '/certificates/Edunet Intern certificate.png'
    },
    { 
      title: 'Exploring SAP Analytics Cloud', 
      issuer: 'SAP', 
      detail: 'Introduction to cloud-based analytics and business intelligence.',
      file: '/certificates/Exploring SAP Analytics Cloud -.png',
      thumbnail: '/certificates/Exploring SAP Analytics Cloud -.png'
    },
    { 
      title: 'Flutter Development', 
      issuer: 'Mobile Dev', 
      detail: 'Cross-platform mobile application development using Flutter and Dart.',
      file: '/certificates/Flutter.png',
      thumbnail: '/certificates/Flutter.png'
    },
    { 
      title: 'Getting Started with AI', 
      issuer: 'IBM', 
      detail: 'Introductory course on AI principles and real-world applications.',
      file: '/certificates/Getting Started with Artificial Intelligence.png',
      thumbnail: '/certificates/Getting Started with Artificial Intelligence.png'
    },
    { 
      title: 'Journey to Cloud', 
      issuer: 'IBM', 
      detail: 'Navigating cloud solutions and envisioning architectures.',
      file: '/certificates/Journey to Cloud Envisioning Your Solution.png',
      thumbnail: '/certificates/Journey to Cloud Envisioning Your Solution.png'
    },
    { 
      title: 'Cloud Computing Training', 
      issuer: 'Professional Training', 
      detail: 'Comprehensive training completion in cloud computing technologies.',
      file: '/certificates/Krishnaji S_Training completion(cloud computing).jpg',
      thumbnail: '/certificates/Krishnaji S_Training completion(cloud computing).jpg'
    },
    { 
      title: 'Advanced SAP Analytics Cloud', 
      issuer: 'SAP', 
      detail: 'Mastering advanced features and capabilities within the SAP Analytics environment.',
      file: '/certificates/Leveraging Advanced Features in SAP analytics Cloud .png',
      thumbnail: '/certificates/Leveraging Advanced Features in SAP analytics Cloud .png'
    },
    { 
      title: 'RAG - Retrieval Augmented Generation', 
      issuer: 'Generative AI Lab', 
      detail: 'Specialized certificate in RAG techniques for large language models.',
      file: '/certificates/rag.png',
      thumbnail: '/certificates/rag.png'
    }
  ];

  const PhotoCard = ({ title, description, image }) => (
    <div className="photocard" onClick={() => setSelectedImage(image)} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'var(--transition)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', background: '#000' }}>
        <img src={image} alt={title} className="card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="hover-overlay">
          <Maximize2 size={32} color="#fff" />
          <span style={{ color: '#fff', fontSize: '0.875rem', marginTop: '0.5rem' }}>View Full Image</span>
        </div>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--text-accent)' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{description}</p>
      </div>
    </div>
  );

  const ActivitySection = ({ emoji, title, description, points, images, onOpen, bgPhoto }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2.5rem',
      alignItems: 'start',
      marginBottom: '3rem',
      padding: '2rem',
      background: bgPhoto ? 'transparent' : 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Photo Overlay */}
      {bgPhoto && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${bgPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px) brightness(0.25)',
            transform: 'scale(1.05)',
            zIndex: 0
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.6) 100%)',
            zIndex: 1
          }} />
        </>
      )}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2.5rem',
      alignItems: 'start',
      marginBottom: '3rem',
      padding: '2rem',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      borderRadius: '24px'
    }}>
      {/* LEFT — Title & Description */}
      <div style={{ paddingTop: '0.5rem', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.75rem' }}>{emoji}</span>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{title}</h4>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {points.map((pt, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <CheckCircle size={15} color="var(--text-accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — Certificate Photocards */}
      <div style={{ display: 'grid', gridTemplateColumns: images.length === 1 ? '1fr' : 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', position: 'relative', zIndex: 2 }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="photocard"
            onClick={() => onOpen(img.src)}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'var(--transition)'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
              <img src={img.src} alt={img.label} className="card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="hover-overlay">
                <Maximize2 size={24} color="#fff" />
                <span style={{ color: '#fff', fontSize: '0.75rem', marginTop: '0.4rem' }}>View Full</span>
              </div>
            </div>
            <div style={{ padding: '0.75rem 1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontWeight: 600 }}>{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        {/* School Level */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="text-secondary">01.</span> School Level Excellence
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start' }}>
            {/* Certificate Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {schoolAchievements.map((item, idx) => (
                <PhotoCard key={idx} {...item} />
              ))}
            </div>

            {/* Awards Photo — Shields */}
            <div 
              onClick={() => setSelectedImage(awardsPhoto)}
              style={{
                position: 'sticky',
                top: '100px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--text-accent)',
                boxShadow: '0 0 30px var(--accent-glow)',
                cursor: 'pointer',
                background: 'var(--bg-card)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img 
                  src={awardsPhoto} 
                  alt="School Awards" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(11,17,32,0.8) 0%, transparent 50%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Award size={18} color="var(--text-accent)" />
                    <span style={{ color: 'var(--text-accent)', fontWeight: 700, fontSize: '0.875rem' }}>Awards & Shields</span>
                  </div>
                  <p style={{ color: '#fff', fontSize: '0.8rem', opacity: 0.8 }}>Click to view full image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extracurricular Excellence */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="text-secondary">02.</span> Extracurricular Excellence
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2.5rem', marginLeft: '2.5rem' }}>
            Service, discipline, and leadership beyond the classroom.
          </p>

          {/* Scouts & Guides */}
          <ActivitySection
            emoji="🪢"
            title="Scouts & Guides"
            description="Built leadership, teamwork, and outdoor skills through the Scout & Guide movement — earning the Rajya Purasakar Award and representing the school at regional Jambore camps."
            points={[
              'Earned the prestigious Rajya Purasakar Award — one of the highest Scout honours.',
              'Participated in the Jambore Camp, collaborating with Scouts from across the region.',
              'Developed skills in first aid, navigation, camp setup, and crisis management.',
              'Strengthened values of duty, integrity, and environmental responsibility.',
            ]}
            images={[
              { src: '/Scouts & Guides/Jambore (Scouts and guides)_1.jpg.jpeg', label: 'Jambore Camp Certificate' },
              { src: '/Scouts & Guides/RAJYA PURASAKAR AWARD_1.jpg.jpeg', label: 'Rajya Purasakar Award' },
            ]}
            onOpen={setSelectedImage}
          />

          {/* NCC */}
          <ActivitySection
            emoji="🪖"
            title="NCC (National Cadet Corps)"
            description="Trained under the National Cadet Corps, developing military discipline, physical fitness, and national pride. Participated in parades, shooting camps, and ceremonial events that reinforced leadership and teamwork under structured command."
            points={[
              'Achieved the NCC \'A\' Certificate, demonstrating proficiency in cadet training.',
              'Represented the unit at the Independence Day Ceremonial Parade.',
              'Attended the CATC cum Shooting Launch Camp at Anna University.',
              'Built physical endurance, punctuality, and command responsibility.',
            ]}
            images={[
              { src: "/NCC/NCC 'A' certificate _1.jpg.jpeg", label: "NCC 'A' Certificate" },
              { src: '/NCC/Independence day Ceremonial parade (NCC).jpg.jpeg', label: 'Independence Day Ceremonial Parade' },
              { src: '/NCC/CATC cum Shooting Launch Camp at Anna university _1.jpg.jpeg', label: 'CATC cum Shooting Camp — Anna University' },
            ]}
            bgPhoto="/NCC/ncc group photo_1.jpg.jpeg"
            onOpen={setSelectedImage}
          />
        </div>

        {/* College Level */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="text-secondary">03.</span> College Level Achievements
          </h3>
          <div className="grid grid-cols-3">
            {collegeAchievements.map((item, idx) => (
              <PhotoCard key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* Certifications Gallery */}
        <div>
          <h2 className="section-title">Certifications Gallery</h2>
          <div className="gallery-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-gallery-item" onClick={() => setSelectedImage(cert.file)}>
                <img src={cert.thumbnail} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="cert-overlay">
                  <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.5rem' }}>{cert.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '1rem', fontStyle: 'italic' }}>{cert.detail}</p>
                  <div style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#fff', opacity: 0.7 }}>Click to Preview Fully</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image/PDF Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            {selectedImage.endsWith('.pdf') ? (
              <iframe 
                src={selectedImage + '#toolbar=0'} 
                title="Certificate PDF Preview"
                style={{ width: '80vw', height: '80vh', border: 'none', borderRadius: '8px' }}
              />
            ) : (
              <img src={selectedImage} alt="Certificate Full View" className="modal-img" />
            )}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .photocard:hover {
          transform: translateY(-10px);
          border-color: var(--text-accent);
          box-shadow: 0 20px 40px -10px var(--accent-glow);
        }
        .photocard:hover .card-img {
          transform: scale(1.1);
          filter: brightness(0.4);
        }
        .card-img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
        }
        .hover-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .photocard:hover .hover-overlay {
          opacity: 1;
        }
        
        .photocard-placeholder {
          background: rgba(255,255,255,0.02);
          border: 1px dashed var(--border-color);
          borderRadius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          color: var(--text-secondary);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .cert-gallery-item {
          position: relative;
          border-radius: 16px;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          cursor: pointer;
        }
        .cert-gallery-item:hover .cert-img {
          transform: scale(1.1);
        }
        .cert-gallery-item:hover .cert-overlay {
          opacity: 1;
        }
        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .cert-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11, 17, 32, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 2rem;
          textAlign: center;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(8px);
          padding: 2rem;
        }
        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
          animation: zoomIn 0.3s ease-out;
        }
        .modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .modal-close:hover {
          transform: scale(1.2);
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </section>
  );
};

export default Achievements;
