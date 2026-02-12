import { useState } from 'react';
import ButterflyDecor from './ButterflyDecor';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Jane Smith',
        role: 'CTO',
        company: 'Tech Innovations Inc.',
        content: 'An exceptional developer with a keen eye for detail. Their work consistently exceeds expectations and they bring creative solutions to complex problems.'
    },
    {
        name: 'John Doe',
        role: 'Product Manager',
        company: 'Startup XYZ',
        content: 'A pleasure to work with. Not only technically proficient but also an excellent communicator who bridges the gap between technical and non-technical stakeholders.'
    },
    {
        name: 'Sarah Johnson',
        role: 'Senior Developer',
        company: 'Big Tech Corp',
        content: 'One of the most talented developers I\'ve had the privilege to mentor. Their passion for learning and commitment to quality is truly inspiring.'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section id="testimonials" className="section-container bg-grey-900 text-pure-white">
            <div className="relative">
                <ButterflyDecor
                    className="absolute -top-8 -right-4 text-grey-700 opacity-30"
                    size="md"
                    animated={false}
                />
                <h2 className="section-title !text-pure-white">Testimonials</h2>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="relative bg-grey-800 rounded-2xl p-8 md:p-12 border border-grey-700">
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-grey-600 opacity-50">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Testimonial content */}
                    <div className="relative z-10 pt-8">
                        <p className="text-lg md:text-xl text-grey-100 mb-8 leading-relaxed">
                            "{current.content}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-grey-700 rounded-full flex items-center justify-center text-pure-white font-display font-bold text-lg">
                                {current.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-display font-semibold text-pure-white">{current.name}</p>
                                <p className="text-sm text-grey-400">{current.role} at {current.company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-grey-700">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 hover:bg-grey-700 rounded-full transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-pure-white w-8' : 'bg-grey-600'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-2 hover:bg-grey-700 rounded-full transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
