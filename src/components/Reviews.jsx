import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = () => {
    const reviews = [
        { name: 'Sameer K.', text: 'Best Shawarma in town! The chicken is so tender and the tahini is authentic.', rating: 5 },
        { name: 'Arjun R.', text: 'Their Alfaham is cooked to perfection. A true golden experience for meat lovers.', rating: 5 },
        { name: 'Nisha S.', text: 'The secret spices really make a difference. Best non-veg spot in Mysuru.', rating: 5 },
    ];

    return (
        <section id="reviews" className="section-padding bg-secondary/20" style={{ padding: '100px 0', backgroundColor: 'rgba(10, 10, 10, 0.2)' }}>
            <div className="container" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="subtitle">Client Love</span>
                    <h2 className="text-5xl" style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', serif" }}>
                        Golden <span className="gold-gradient">Experiences.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {reviews.map((rev, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ y: -10 }}
                            className="p-10 glass-morphism rounded-3xl border border-white/5 bg-white/5 relative overflow-hidden"
                            style={{ padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: 'rgba(255, 255, 255, 0.02)', position: 'relative' }}
                        >
                            <Quote className="absolute -top-4 -left-4 w-20 h-20 text-primary/10" style={{ position: 'absolute', top: '-1rem', left: '-1rem', opacity: 0.1, color: '#FFB800' }} />
                            <div className="flex gap-1 mb-6" style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                                {[...Array(rev.rating)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-primary text-primary" style={{ fill: '#FFB800', color: '#FFB800' }} />
                                ))}
                            </div>
                            <p className="text-lg mb-8 italic text-text-muted" style={{ fontSize: '1.125rem', marginBottom: '2rem', fontStyle: 'italic', color: '#a3a3a3' }}>"{rev.text}"</p>
                            <h4 className="font-bold text-white text-lg" style={{ fontWeight: 'bold' }}>- {rev.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
