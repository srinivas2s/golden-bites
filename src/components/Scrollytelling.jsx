import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scrollytelling = () => {
    const scrollyRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (!scrollyRef.current) return;
        const panels = gsap.utils.toArray('.scrolly-panel');
        if (panels.length === 0) return;
        
        // Define the horizontal scroll animation
        const mainTl = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: scrollyRef.current,
                pin: true,
                scrub: 1,
                start: 'top top',
                // Adjust scroll length based on number of panels
                end: () => `+=${scrollyRef.current.offsetWidth * (panels.length - 1)}`,
                invalidateOnRefresh: true,
            }
        });

        // Child animations synchronized with the main horizontal scroll
        panels.forEach((panel) => {
            const content = panel.querySelector('.panel-content');
            if (content) {
                gsap.fromTo(content, 
                    { y: 50, opacity: 0, scale: 0.9 }, 
                    { 
                        y: 0, 
                        opacity: 1, 
                        scale: 1,
                        duration: 1, 
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: mainTl,
                            start: 'left center',
                            toggleActions: 'play none none reverse',
                        }
                    }
                );
            }
        });

        return () => {
            mainTl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const values = [
        { title: 'Fresh Ingredients', desc: 'Sourced daily from local organic farms.' },
        { title: 'Expert Roasting', desc: 'Crafted in small batches for peak flavor.' },
        { title: 'Cozy Ambience', desc: 'Designed for comfort and conversation.' },
        { title: 'Perfect Moments', desc: 'Where every visit feels special.' },
    ];

    return (
        <section ref={scrollyRef} id="pillars" className="overflow-hidden bg-bg" style={{
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#050505',
            position: 'relative'
        }}>
            <div className="flex h-full" style={{
                display: 'flex',
                height: '100%',
                width: `${values.length * 100}%`
            }}>
                {values.map((v, i) => (
                    <div 
                        key={i} 
                        className="scrolly-panel w-screen h-full flex items-center justify-center border-r border-border/10"
                        style={{
                            width: '100vw',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRight: '1px solid rgba(255, 184, 0, 0.05)',
                            padding: '0 10vw'
                        }}
                    >
                        <div className="panel-content text-center max-w-4xl" style={{ textAlign: 'center', maxWidth: '56rem' }}>
                            <div className="text-8xl mb-12" style={{ fontSize: '7rem', marginBottom: '3rem' }}>{v.icon}</div>
                            <h2 className="text-7xl md:text-9xl mb-10" style={{ fontSize: 'max(4rem, 8vw)', marginBottom: '2.5rem' }}>
                                <span className="gold-gradient">{v.title}</span>
                            </h2>
                            <p className="text-2xl text-text-muted" style={{ fontSize: '1.5rem', color: '#a3a3a3' }}>{v.desc}</p>
                            <div className="mt-12 w-24 h-1 bg-primary mx-auto rounded-full" style={{
                                width: '6rem',
                                height: '0.25rem',
                                backgroundColor: '#FFB800',
                                margin: '3rem auto 0 auto',
                                borderRadius: '9999px'
                            }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Scrollytelling;
