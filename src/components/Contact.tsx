import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const contactMethods = [
    {
        name: 'Email',
        href: 'mailto:jhustienecaseyemperador@gmail.com',
        value: 'jhustienecaseyemperador@gmail.com',
        icon: Mail,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/yourprofile',
        value: 'linkedin.com/in/yourprofile',
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        href: 'https://github.com/yourusername',
        value: 'github.com/yourusername',
        icon: Github,
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@Natsukashii023',
        value: '@Natsukashii023',
        icon: Youtube,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Contact() {
    return (
        <section id="contact" className="section-container bg-pure-white">
            <div className="relative">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg text-grey-600 text-center mb-12"
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid md:grid-cols-2 gap-6 mb-12"
                >
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                            <motion.a
                                key={method.name}
                                href={method.href}
                                target={method.name !== 'Email' ? '_blank' : undefined}
                                rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="text-center h-full">
                                    <CardHeader>
                                        <motion.div
                                            whileHover={{ rotate: 5 }}
                                            className="w-12 h-12 bg-grey-900 rounded-full flex items-center justify-center mx-auto mb-4"
                                        >
                                            <Icon className="w-6 h-6 text-pure-white" />
                                        </motion.div>
                                        <CardTitle className="text-lg">{method.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-grey-600 text-sm">{method.value}</p>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center pt-8 border-t border-grey-200"
                >
                    <p className="text-grey-500 text-sm">
                        © {new Date().getFullYear()} Jhustiene Casey Dela Cruz. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
