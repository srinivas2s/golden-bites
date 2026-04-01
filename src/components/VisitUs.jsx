import React from 'react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

const VisitUs = () => {
    return (
        <section id="contact" className="section-padding bg-bg overflow-hidden" style={{ padding: '100px 0', backgroundColor: '#050505', overflow: 'hidden' }}>
            <div className="container" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="subtitle">Visit Our Space</span>
                    <h2 className="text-5xl" style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', serif" }}>
                        Find the <span className="gold-gradient">Gold.</span>
                    </h2>
                </div>

                <div className="flex justify-center" style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* Contact Info */}
                    <div className="p-12 glass-morphism rounded-3xl border border-primary/10 relative overflow-hidden flex flex-col justify-center max-w-2xl w-full" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255, 184, 0, 0.1)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '42rem', width: '100%' }}>
                        <div className="space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div className="flex items-start gap-8" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                                <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center" style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '1rem' }}>
                                    <MapPin className="w-8 h-8 text-primary" style={{ color: '#FFB800' }} />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-primary" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Our Location</h4>
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=2955/3,+Gokulam+Main+Rd,+Gokulam+2nd+Stage,+Vani+Vilas+Mohalla,+Mysuru,+Karnataka+570002"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-text-muted hover:text-primary transition-colors"
                                        style={{ fontSize: '1.125rem', color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}
                                    >
                                        2955/3, Gokulam Main Rd, Gokulam 2nd Stage,<br/>Vani Vilas Mohalla, Mysuru, Karnataka 570002
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-8" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                                <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center" style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '1rem' }}>
                                    <Clock className="w-8 h-8 text-primary" style={{ color: '#FFB800' }} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-primary" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Opening Hours</h4>
                                    <p className="text-lg text-text-muted" style={{ fontSize: '1.125rem', color: '#a3a3a3' }}>Mon - Fri: 12pm - 11pm<br/>Sat - Sun: 12pm - 12am</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                                <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center" style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '1rem' }}>
                                    <Phone className="w-8 h-8 text-primary" style={{ color: '#FFB800' }} />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-primary" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Get In Touch</h4>
                                    <p className="text-lg text-text-muted mb-6" style={{ fontSize: '1.125rem', color: '#a3a3a3' }}>+91 87921 51311</p>
                                    <a 
                                        href="https://wa.me/918792151311"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-primary text-secondary font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl" 
                                        style={{ width: '100%', padding: '1rem', backgroundColor: '#FFB800', color: '#000', borderRadius: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textDecoration: 'none' }}
                                    >
                                        <MessageSquare size={20} />
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
