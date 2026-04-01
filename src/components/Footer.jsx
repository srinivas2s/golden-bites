import React from 'react';
import { Instagram, Twitter, Coffee } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black pt-32 pb-12 border-t border-border/10" style={{ backgroundColor: '#000', paddingTop: '8rem', paddingBottom: '3rem', borderTop: '1px solid rgba(255, 184, 0, 0.05)' }}>
            <div className="container" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <div className="grid md:grid-cols-4 gap-16 mb-20" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
                    
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="#home" className="text-3xl font-bold flex items-center gap-3 gold-gradient" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 'bold', fontSize: '1.875rem' }}>
                            <Coffee className="w-10 h-10 text-primary" color="#FFB800" />
                            <span>GOLDEN BITES</span>
                        </a>
                        <p className="text-text-muted mt-6 text-lg" style={{ color: '#a3a3a3', fontSize: '1.125rem' }}>
                            Elevating the cafe experience with golden moments and premium bites. 
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-8 text-xl uppercase tracking-widest border-b border-primary/20 pb-4 inline-block" style={{ fontWeight: 'bold', borderBottom: '1px solid rgba(255, 184, 0, 0.2)', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block' }}>Explore</h4>
                        <ul className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><a href="#home" className="text-text-muted hover:text-primary transition-colors">Our Coffee</a></li>
                            <li><a href="#menu" className="text-text-muted hover:text-primary transition-colors">Signature Menu</a></li>
                            <li><a href="#experience" className="text-text-muted hover:text-primary transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-white mb-8 text-xl uppercase tracking-widest border-b border-primary/20 pb-4 inline-block" style={{ fontWeight: 'bold', borderBottom: '1px solid rgba(255, 184, 0, 0.2)', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block' }}>Resources</h4>
                        <ul className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-white mb-8 text-xl uppercase tracking-widest border-b border-primary/20 pb-4 inline-block" style={{ fontWeight: 'bold', borderBottom: '1px solid rgba(255, 184, 0, 0.2)', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block' }}>Follow Us</h4>
                        <div className="flex gap-6 mt-4" style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                            <a href="#" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:text-secondary transition-all" style={{ padding: '1rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:text-secondary transition-all" style={{ padding: '1rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Coffee size={24} />
                            </a>
                            <a href="#" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:text-secondary transition-all" style={{ padding: '1rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border/10 flex flex-col items-center gap-6" style={{ borderTop: '1px solid rgba(255, 184, 0, 0.05)', paddingTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
                    <p className="text-text-muted text-sm" style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>
                        © 2026 Golden Bites. All Rights Reserved.
                    </p>
                    <div className="flex flex-col items-center gap-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <p className="text-text-muted text-sm" style={{ fontSize: '0.9rem', color: '#a3a3a3' }}>
                            Designed and developed by <a href="https://wa.me/918792151311" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold" style={{ color: '#FFB800', fontWeight: 'bold' }}>Srinivas</a>
                        </p>
                        <a href="mailto:srinivas2006srini.@gmail.com" className="text-text-muted text-xs hover:text-primary transition-colors" style={{ fontSize: '0.8rem', color: '#737373', transition: 'color 0.3s' }}>
                            srinivas2006srini.@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
