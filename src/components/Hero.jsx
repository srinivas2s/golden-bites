import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.fromTo(titleRef.current, 
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
        );

        tl.fromTo(textRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1 }, 
            "-=1"
        );

        // Parallax effect on scroll
        gsap.to('.hero-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <section 
            id="home" 
            ref={heroRef}
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden" 
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            {/* Background Image Container */}
            <div 
                className="hero-bg absolute top-0 left-0 w-full h-[120%] z-0" 
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: 0,
                    width: '100%',
                    height: '120%',
                    zIndex: -1,
                    background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url("/src/assets/hero_cafe_warm_interior.png") center/cover no-repeat',
                }}
            />

            <div className="container relative z-10 text-center" style={{ textAlign: 'center' }}>
                <span className="subtitle" style={{
                    color: '#FFB800',
                    fontSize: '1rem',
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1rem'
                }}>ESTD. 2024</span>
                <h1 
                    ref={titleRef}
                    className="text-7xl md:text-9xl font-bold mb-6" 
                    style={{
                        fontSize: 'max(4rem, 8vw)',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}
                >
                    Where Every Bite<br/>
                    <span className="gold-gradient" style={{
                        background: 'linear-gradient(45deg, #FFB800, #FDF5E6, #FFB800)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto'
                    }}>Feels Golden.</span>
                </h1>
                <p 
                    ref={textRef}
                    className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10" 
                    style={{
                        fontSize: '1.25rem',
                        maxWidth: '800px',
                        margin: '0 auto 2.5rem auto',
                        color: '#a3a3a3'
                    }}
                >
                    Experience the art of artisanal coffee and handcrafted bites in an atmosphere crafted for moments that matter.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center" style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center'
                }}>
                    <a 
                        href="#menu" 
                        className="px-10 py-4 bg-primary text-secondary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
                        style={{
                            backgroundColor: '#FFB800',
                            color: '#000',
                            padding: '1rem 2.5rem',
                            borderRadius: '9999px',
                            fontWeight: 'bold'
                        }}
                    >
                        Explore Menu
                    </a>
                    <a 
                        href="#about" 
                        className="px-10 py-4 border border-primary text-primary font-bold rounded-full hover:bg-glass hover:text-white transition-all duration-300"
                        style={{
                            border: '1px solid #FFB800',
                            color: '#FFB800',
                            padding: '1rem 2.5rem',
                            borderRadius: '9999px',
                            fontWeight: 'bold'
                        }}
                    >
                        Our Story
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-60" 
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" style={{
                    width: '1px',
                    height: '5rem',
                    background: 'linear-gradient(to bottom, #FFB800, transparent)'
                }} />
                <span className="text-[10px] uppercase tracking-widest" style={{ fontSize: '0.625rem', letterSpacing: '0.2rem' }}>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
