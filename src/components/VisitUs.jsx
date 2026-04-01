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

                <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    {/* Contact Info */}
                    <div className="p-12 glass-morphism rounded-3xl border border-primary/10 relative overflow-hidden h-full flex flex-col justify-center" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255, 184, 0, 0.1)', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div className="flex items-start gap-8" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                                <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center" style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '1rem' }}>
                                    <MapPin className="w-8 h-8 text-primary" style={{ color: '#FFB800' }} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-primary" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Our Location</h4>
                                    <p className="text-lg text-text-muted" style={{ fontSize: '1.125rem', color: '#a3a3a3' }}>123 Golden Street, Artisan District<br/>New York, NY 10001</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                                <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center" style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '1rem' }}>
                                    <Clock className="w-8 h-8 text-primary" style={{ color: '#FFB800' }} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-primary" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Opening Hours</h4>
                                    <p className="text-lg text-text-muted" style={{ fontSize: '1.125rem', color: '#a3a3a3' }}>Mon - Fri: 7am - 9pm<br/>Sat - Sun: 8am - 10pm</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                                <div className="p-5 bg-primary/10 rounded-2xl flex items-center justify-center" style={{ padding: '1.25rem', backgroundColor: 'rgba(255, 184, 0, 0.1)', borderRadius: '1rem' }}>
                                    <Phone className="w-8 h-8 text-primary" style={{ color: '#FFB800' }} />
                                </div>
                                <div className="w-full">
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-primary" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Get In Touch</h4>
                                    <p className="text-lg text-text-muted mb-6" style={{ fontSize: '1.125rem', color: '#a3a3a3' }}>+1 (234) 567-890</p>
                                    <button className="w-full py-4 bg-primary text-secondary font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl" style={{ width: '100%', padding: '1rem', backgroundColor: '#FFB800', color: '#000', borderRadius: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                                        <MessageSquare size={20} />
                                        Chat on WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Simulation / Image */}
                    <div className="h-[600px] rounded-3xl overflow-hidden relative border border-primary/20 group" style={{ height: '600px', borderRadius: '1.5rem', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255, 184, 0, 0.2)' }}>
                       <img 
                         src="https://images.unsplash.com/photo-1524813686514-a9538466e6b5?auto=format&fit=crop&q=80" 
                         alt="Map Background" 
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                       />
                       <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-primary/20 transition-all" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 184, 0, 0.1)', mixBlendMode: 'overlay' }} />
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <div className="relative">
                                <div className="absolute -inset-10 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ position: 'absolute', top: '-2.5rem', left: '-2.5rem', right: '-2.5rem', bottom: '-2.5rem', backgroundColor: 'rgba(255, 184, 0, 0.3)', borderRadius: '50%', filter: 'blur(1.5rem)' }} />
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,184,0,0.8)]" style={{ width: '4rem', height: '4rem', backgroundColor: '#FFB800', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 50px rgba(255, 184, 0, 0.8)' }}>
                                    <MapPin size={32} color="#000" />
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
