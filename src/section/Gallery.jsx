import React from 'react';
import './Gallery.css';
import { reliquia } from '../data/reliquia';

export default function Gallery() {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-title">Lo que dicen nuestros huéspedes</h2>
            <div className="testimonial-container">
                {reliquia.map((items) => (
                    <div key={items.id} className="testimonial-card">
                        <img src={items.url} 
                        alt={items.name} className="testimonial-photo" />
                        <h3 className="testimonial-name">{items.name}</h3>
                        <p className="reliquias-comment">{items.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

