import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButterflyDecor from './ButterflyDecor';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

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

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

export default function Testimonials() {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        const newPage = (page + newDirection + testimonials.length) % testimonials.length;
        setPage([newPage, newDirection]);
    };

    const current = testimonials[page];

    return (
        <section id="testimonials" className="section-container bg-grey-900 text-pure-white">
            <div className="relative">
                <ButterflyDecor
                    className="absolute -top-8 -right-4 text-grey-700 opacity-30"
                    size="md"
                    animated={false}
                />
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title !text-pure-white"
                >
                    Testimonials
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto">
                <Card className="bg-grey-800 border-grey-700 text-pure-white overflow-hidden">
                    <CardContent className="p-8 md:p-12">
                        {/* Quote icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-6 text-grey-600 opacity-50"
                        >
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </motion.div>

                        {/* Testimonial content with animation */}
                        <div className="relative h-64 md:h-48">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={page}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: 'spring', stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 },
                                    }}
                                    className="absolute w-full"
                                >
                                    <p className="text-lg md:text-xl text-grey-100 mb-8 leading-relaxed">
                                        "{current.content}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 bg-grey-700 rounded-full flex items-center justify-center text-pure-white font-display font-bold text-lg"
                                        >
                                            {current.name.split(' ').map(n => n[0]).join('')}
                                        </motion.div>
                                        <div>
                                            <p className="font-display font-semibold text-pure-white">{current.name}</p>
                                            <p className="text-sm text-grey-400">{current.role} at {current.company}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-grey-700">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => paginate(-1)}
                                className="text-pure-white hover:bg-grey-700"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setPage([index, index > page ? 1 : -1])}
                                        className={`h-2 rounded-full transition-all ${index === page ? 'bg-pure-white w-8' : 'bg-grey-600 w-2'
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => paginate(1)}
                                className="text-pure-white hover:bg-grey-700"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
