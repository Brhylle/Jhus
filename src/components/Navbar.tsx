import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ButterflyDecor from './ButterflyDecor';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#work' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-pure-white/95 backdrop-blur-md shadow-md border-b border-grey-200'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollToSection('#')}
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ButterflyDecor size="sm" className="text-grey-900" animated={false} />
                        <span className="font-display font-bold text-xl text-grey-900 group-hover:text-grey-700 transition-colors">
                            J.C. Dela Cruz
                        </span>
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Button
                                    variant="ghost"
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-grey-700 hover:text-grey-900"
                                >
                                    {item.name}
                                </Button>
                            </motion.div>
                        ))}

                        {/* Download Resume Button - appears when scrolled */}
                        <AnimatePresence>
                            {scrolled && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Button
                                        asChild
                                        className="ml-2 bg-grey-800 hover:bg-grey-900"
                                    >
                                        <a href="https://docs.google.com/document/d/1Uhw-9Ar5TIwWmo9_NweqXcQptueHQCJRr6vNZF0eHDY/export?format=pdf">
                                            Download Resume
                                        </a>
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            onClick={() => scrollToSection(item.href)}
                                            className="w-full justify-start text-grey-700 hover:text-grey-900"
                                        >
                                            {item.name}
                                        </Button>
                                    </motion.div>
                                ))}

                                {/* Download Resume Button - Mobile */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.05 }}
                                >
                                    <Button
                                        asChild
                                        className="w-full bg-grey-800 hover:bg-grey-900"
                                    >
                                        <a href="/resume.pdf" download>
                                            Download Resume
                                        </a>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
