import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
    const categories = ['All', 'Shawarma', 'Grill', 'Burgers', 'Sides', 'Beverages'];
    const [activeCategory, setActiveCategory] = useState('All');

    const menuItems = [
        { id: 1, name: 'Classic Chicken Shawarma', price: '₹120', category: 'Shawarma', desc: 'Slow-roasted chicken, garlic tahini, and fresh pickles.' },
        { id: 2, name: 'Special Plate Shawarma', price: '₹180', category: 'Shawarma', desc: 'Open shawarma served with extra meat, salad, and khubz.' },
        { id: 3, name: 'Alfaham Chicken (Full)', price: '₹480', category: 'Grill', desc: 'Traditional charcoal-grilled chicken with Arabian spices.' },
        { id: 4, name: 'Pepper BBQ Grill', price: '₹260', category: 'Grill', desc: 'Sizzling grill infused with crushed black pepper and honey.' },
        { id: 5, name: 'Mexican Spicy Shawarma', price: '₹140', category: 'Shawarma', desc: 'Spicy twist with jalapeños and chipotle sauce.' },
        { id: 6, name: 'Zinger Burst Burger', price: '₹150', category: 'Burgers', desc: 'Crispy chicken fillet with secret golden sauce.' },
        { id: 7, name: 'Golden Special Platter', price: '₹850', category: 'Grill', desc: 'A massive selection of all our best grills and shawarmas.' },
        { id: 8, name: 'Peri Peri Fries', price: '₹90', category: 'Sides', desc: 'Crispy fries tossed in spicy peri-peri seasoning.' },
        { id: 9, name: 'Cold Coffee with Ice Cream', price: '₹110', category: 'Beverages', desc: 'Creamy blend of premium coffee and vanilla.' },
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
