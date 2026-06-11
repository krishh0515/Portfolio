import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: isScrolled ? 'rgba(11, 17, 32, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
          <Database size={24} color="var(--text-accent)" />
          Krishnaji<span className="text-gradient">.</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'none' }} className="mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
