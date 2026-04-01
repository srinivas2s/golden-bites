import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.fromTo(contentRef.current, 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1.2 }
        );

        tl.fromTo(imageRef.current, 
            { x: 100, opacity: 0, scale: 0.8 }, 
            { x: 0, opacity: 1, scale: 1, duration: 1.2 }, 
            "-=1"
        );
    }, []);

    return (
        <section id="about" ref={sectionRef} className="section-padding overflow-hidden" style={{
            padding: '100px 0',
            overflow: 'hidden'
        }}>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                <div ref={contentRef}>
                    <span className="subtitle">Our Story</span>
                    <h2 className="text-5xl mb-8" style={{ fontSize: '3.5rem', lineHeight: 1.2 }}>Crafting the <span className="gold-gradient">Golden Standard.</span></h2>
                    <p className="text-lg text-text-muted mb-6" style={{ fontSize: '1.2rem', color: '#a3a3a3', marginBottom: '1.5rem' }}>
                        At Golden Bites, we believe that great food is an art form. Founded in 2024, our cafe was born from a passion for authentic charcoal grilling and the pursuit of the perfect, juice-dripping Shawarma that Mysuru has been waiting for.
                    </p>
                    <p className="text-lg text-text-muted mb-10" style={{ fontSize: '1.2rem', color: '#a3a3a3', marginBottom: '2.5rem' }}>
                        Every piece of chicken is hand-selected and marinated in our secret heritage spices for 48 hours. From the smoky aroma of our Alfaham to the perfect wrap of our signature Shawarma, we bring you the golden standard of non-veg delicacies.
                    </p>
                    <div className="grid grid-cols-2 gap-8 border-t border-border pt-10" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '2rem',
                        borderTop: '1px solid rgba(255, 184, 0, 0.15)',
                        paddingTop: '2.5rem'
                    }}>
                        <div>
                            <h4 className="text-3xl text-primary font-bold mb-1" style={{ color: '#FFB800', fontSize: '1.875rem' }}>100%</h4>
                            <p className="text-sm uppercase tracking-widest text-text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.1rem' }}>Fire-Grilled</p>
                        </div>
                        <div>
                            <h4 className="text-3xl text-primary font-bold mb-1" style={{ color: '#FFB800', fontSize: '1.875rem' }}>Secret</h4>
                            <p className="text-sm uppercase tracking-widest text-text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.1rem' }}>Spice Heritage</p>
                        </div>
                    </div>
                </div>
                <div ref={imageRef} className="relative group" style={{ position: 'relative' }}>
                    <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-700" style={{
                        position: 'absolute',
                        top: '-1rem',
                        left: '-1rem',
                        right: '-1rem',
                        bottom: '-1rem',
                        border: '1px solid rgba(255, 184, 0, 0.1)',
                        zIndex: -1
                    }} />
                    <img 
                        src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80" 
                        alt="Shawarma Experience" 
                        className="w-full h-auto rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                        style={{
                            width: '100%',
                            borderRadius: '1rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
