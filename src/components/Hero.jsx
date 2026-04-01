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
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 184, 0, 0.08) 0%, transparent 60%), #050505',
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
                    Taste the Flame,<br/>
                    <span className="gold-gradient" style={{
                        background: 'linear-gradient(45deg, #FFB800, #FDF5E6, #FFB800)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto'
                    }}>Savor the Gold.</span>
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
                    Mysuru's ultimate destination for authentic fire-grilled delicacies and our world-famous signature Shawarma.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center" style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center'
                }}>
                    <a 
                        href="#menu" 
                        className="px-6 py-3 md:px-10 md:py-4 border border-primary text-primary font-bold rounded-full hover:bg-glass hover:text-white transition-all duration-300"
                        style={{
                            border: '1px solid #FFB800',
                            color: '#FFB800',
                            borderRadius: '9999px',
                            fontWeight: 'bold'
                        }}
                    >
                        Explore Menu
                    </a>
                    <a 
                        href="#about" 
                        className="px-6 py-3 md:px-10 md:py-4 border border-primary text-primary font-bold rounded-full hover:bg-glass hover:text-white transition-all duration-300"
                        style={{
                            border: '1px solid #FFB800',
                            color: '#FFB800',
                            borderRadius: '9999px',
                            fontWeight: 'bold'
                        }}
                    >
                        Our Story
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;
