import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
    const categories = ['All', 'Coffee', 'Tea', 'Snacks', 'Desserts', 'Specials'];
    const [activeCategory, setActiveCategory] = useState('All');

    const menuItems = [
        { id: 1, name: 'Golden Latte', price: '$5.50', category: 'Coffee', desc: 'Turmeric infused with oat milk.' },
        { id: 2, name: 'Artisan Croissant', price: '$4.25', category: 'Snacks', desc: 'Flaky layers of pure butter.' },
        { id: 3, name: 'Matcha Bliss', price: '$6.00', category: 'Tea', desc: 'Premium grade Japanese matcha.' },
        { id: 4, name: 'Gold Leaf Brownie', price: '$7.50', category: 'Desserts', desc: 'Dark chocolate with edible gold.' },
        { id: 5, name: 'Flat White', price: '$4.50', category: 'Coffee', desc: 'Smooth velvety microfoam.' },
        { id: 6, name: 'Golden Chai', price: '$5.00', category: 'Tea', desc: 'House spiced black tea.' },
    ];

    const filteredItems = activeCategory === 'All' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="section-padding bg-secondary/30" style={{
            padding: '100px 0',
            backgroundColor: 'rgba(10, 10, 10, 0.3)',
        }}>
            <div className="container" style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="subtitle">Signature Menu</span>
                    <h2 className="text-5xl" style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', serif" }}>
                        Golden <span className="gold-gradient">Selections.</span>
                    </h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-20" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium ${
                                activeCategory === cat 
                                ? 'bg-primary border-primary text-secondary' 
                                : 'border-border text-text-muted hover:border-primary hover:text-primary'
                            }`}
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '9999px',
                                border: '1px solid ' + (activeCategory === cat ? '#FFB800' : 'rgba(255, 184, 0, 0.15)'),
                                backgroundColor: activeCategory === cat ? '#FFB800' : 'transparent',
                                color: activeCategory === cat ? '#000' : '#a3a3a3',
                                fontWeight: '500'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative glass-morphism p-8 rounded-2xl border border-transparent hover:border-primary/30 transition-all duration-500 overflow-hidden"
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1rem',
                                    border: '1px solid rgba(255, 184, 0, 0.05)',
                                    background: 'rgba(20, 20, 20, 0.7)',
                                    position: 'relative'
                                }}
                            >
                                <div className="flex justify-between items-start mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 className="text-2xl" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                                    <span className="text-primary font-bold text-xl" style={{ color: '#FFB800', fontWeight: 'bold', fontSize: '1.25rem' }}>{item.price}</span>
                                </div>
                                <p className="text-text-muted mb-6" style={{ color: '#a3a3a3', marginBottom: '1.5rem' }}>{item.desc}</p>
                                <button className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all" style={{
                                    fontSize: '0.75rem',
                                    color: '#FFB800',
                                    letterSpacing: '0.1rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Add To Order <span className="text-xl">→</span>
                                </button>
                                
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" style={{
                                    position: 'absolute',
                                    bottom: '-1rem',
                                    right: '-1rem',
                                    width: '6rem',
                                    height: '6rem',
                                    backgroundColor: 'rgba(255, 184, 0, 0.05)',
                                    borderRadius: '50%',
                                    filter: 'blur(2rem)'
                                }} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
