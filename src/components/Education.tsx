import { motion } from 'framer-motion';
import ButterflyDecor from './ButterflyDecor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
}

const educationData: EducationItem[] = [
    {
        degree: 'Bachelor of Science in Accountancy',
        institution: 'Pamantasan ng Lungsod ng Pasig',
        location: 'Pasig City, Philippines',
        period: '2023 - Present',
        description: 'Relevant Coursework: '
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function Education() {
    return (
        <section id="education" className="section-container bg-pure-white">
            <div className="relative">
                <ButterflyDecor
                    className="absolute -top-8 -right-4 text-grey-200 opacity-50"
                    size="md"
                    animated={false}
                />
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Education
                </motion.h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="space-y-8"
            >
                {educationData.map((item, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Card className="group">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="flex-shrink-0 w-12 h-12 bg-grey-900 rounded-full flex items-center justify-center text-pure-white font-display font-bold"
                                    >
                                        {item.period.split(' - ')[0].slice(-2)}
                                    </motion.div>

                                    <div className="flex-grow">
                                        <CardTitle className="group-hover:text-grey-700 transition-colors">
                                            {item.degree}
                                        </CardTitle>
                                        <CardDescription className="text-lg text-grey-700 mt-2">
                                            {item.institution}
                                        </CardDescription>
                                        <p className="text-sm text-grey-500 mt-1">
                                            {item.location} • {item.period}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            {item.description && (
                                <CardContent>
                                    <p className="text-grey-600">{item.description}</p>
                                </CardContent>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
