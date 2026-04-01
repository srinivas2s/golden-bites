import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Experience = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const items = gsap.utils.toArray('.gallery-item');
        
        items.forEach((item, i) => {
            gsap.fromTo(item, 
                { y: 100, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
    }, []);

    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80', size: 'h-80' },
        { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80', size: 'h-[450px] md:-mt-20' },
        { src: 'https://images.unsplash.com/photo-1559925393-8be0ec41b501?auto=format&fit=crop&q=80', size: 'h-96' },
        { src: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80', size: 'h-80 md:-mt-10' },
    ];

    return (
        <section id="experience" ref={galleryRef} className="section-padding bg-black" style={{ padding: '100px 0', backgroundColor: '#000' }}>
            <div className="container" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="subtitle">The Golden Vibes</span>
                    <h2 className="text-5xl" style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', serif" }}>
                        Unforgettable <span className="gold-gradient">Moments.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gap: '1.5rem',
                }}>
                    {galleryImages.map((img, i) => (
                        <div 
                            key={i} 
                            className={`gallery-item relative overflow-hidden rounded-2xl group ${img.size}`}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '1rem',
                                height: img.size.includes('80') ? '320px' : img.size.includes('450') ? '450px' : '384px'
                            }}
                        >
                            <img 
                                src={img.src} 
                                alt={`Cafe Experience ${i+1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ width: '100%', height: '100%', objectCover: 'cover' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8" style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                opacity: 0,
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '2rem'
                            }}>
                                <p className="text-white font-bold tracking-widest uppercase text-xs" style={{ color: '#fff', fontWeight: 'bold' }}>View Moment</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
