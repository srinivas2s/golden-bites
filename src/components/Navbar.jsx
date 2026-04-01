import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'}`}>
            <div className="container flex items-center justify-between mx-auto" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <a href="#home" className="text-3xl font-bold gold-gradient flex items-center gap-6" style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <img src={logoImg} alt="Golden Bites Logo" className="w-24 h-24 object-contain logo-img" style={{ width: '6rem', height: '6rem', objectFit: 'contain' }} />
                    <span className="hidden sm:block">GOLDEN BITES</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        className="px-6 py-2 bg-primary text-secondary font-bold rounded-full hover:bg-white transition-all duration-300"
                        style={{
                            backgroundColor: '#FFB800',
                            color: '#000',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '9999px',
                            fontWeight: 'bold'
                        }}
                    >
                        Visit Us
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none' }}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-morphism p-8 flex flex-col items-center gap-6" style={{
                    padding: '2rem',
                    flexDirection: 'column',
                    alignItems: 'center',
                    display: 'flex'
                }}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
