import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ButterflyDecor from './ButterflyDecor';
import { Button } from './ui/button';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const butterflyVariants = {
    float: {
        y: [-10, 10, -10],
        x: [-5, 5, -5],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export default function Hero() {
    const scrollToNext = () => {
        const nextSection = document.querySelector('#education');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-grey-50 to-pure-white pt-20">
            {/* Floating butterflies decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    variants={butterflyVariants}
                    animate="float"
                    className="absolute top-20 left-[10%]"
                >
                    <ButterflyDecor className="text-grey-400 opacity-30" size="lg" animated={false} />
                </motion.div>
                <motion.div
                    variants={butterflyVariants}
                    animate="float"
                    transition={{ delay: 1 }}
                    className="absolute top-40 right-[15%]"
                >
                    <ButterflyDecor className="text-grey-300 opacity-20" size="md" animated={false} />
                </motion.div>
                <motion.div
                    variants={butterflyVariants}
                    animate="float"
                    transition={{ delay: 2 }}
                    className="absolute bottom-32 left-[20%]"
                >
                    <ButterflyDecor className="text-grey-400 opacity-25" size="sm" animated={false} />
                </motion.div>
                <motion.div
                    variants={butterflyVariants}
                    animate="float"
                    transition={{ delay: 0.5 }}
                    className="absolute top-1/2 right-[25%]"
                >
                    <ButterflyDecor className="text-grey-300 opacity-15" size="md" animated={false} />
                </motion.div>
            </div>

            {/* Main content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
            >
                <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                    <ButterflyDecor size="lg" className="text-grey-800" animated={false} />
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-gradient"
                >
                    Jhustiene Casey P. Dela Cruz
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-grey-600 font-light mb-4"
                >
                    Price Action Trader
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-grey-500 max-w-2xl mx-auto mb-12"
                >
                    Context is King.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        onClick={scrollToNext}
                        className="font-display"
                    >
                        Explore My Work
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="font-display border-grey-300 hover:bg-grey-100"
                    >
                        <a href="https://docs.google.com/document/d/1Uhw-9Ar5TIwWmo9_NweqXcQptueHQCJRr6vNZF0eHDY/export?format=pdf" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5 },
                        y: { repeat: Infinity, duration: 2 },
                    }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <svg
                        className="w-6 h-6 text-grey-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
