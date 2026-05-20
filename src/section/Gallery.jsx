import React from 'react';
import { reliquia } from '../data/reliquia';

export default function Gallery() {
    return (
        <section className="testimonial-section bg-[url('https://images6.alphacoders.com/499/thumb-1920-499121.jpg')] bg-cover bg-center py-[60px] px-5 text-center text-white">
            <h2 className="testimonial-title text-2xl mb-10 text-[#fcf9f9]">LA REJILLA DE RELIQUIAS</h2>
            <h2 className="testimonial-subtitle text-[1.2rem] mb-5 text-[#fcfafa] tracking-[2px]">Descubre nuestra colección de reliquias</h2>
            <div className="testimonial-container max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {reliquia.map((items) => (
                    <div key={items.id} className="testimonial-card p-5 rounded-xl shadow-md transition duration-300 p-5 rounded-xl shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                        <img src={items.url} 
                        alt={items.name} className="testimonial-photo " />
                        <h3 className="testimonial-name">{items.name}</h3>
                        <p className="reliquias-comment">{items.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

