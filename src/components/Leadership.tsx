import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface LeadershipItem {
    title: string;
    organization: string;
    period: string;
    description: string;
    impact?: string;
}

const leadershipData: LeadershipItem[] = [
    {
        title: 'Community Leader',
        organization: 'The Metamorphs',
        period: 'December 2024 - Present',
        description: 'Lead and mentor a community of 40+ members, delivering weekly lessons on trading fundamentals, risk management, market analysis, and trading psychology.',
        impact: 'Designed structured learning sessions that clarify complex topics, such as position sizing and leverage, while helping members develop disciplined trading practices, building practical skills, confidence in decision-making, and consistently gaining actionable insights.'
    },
    // add leadershipData here...
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export default function Leadership() {
    return (
        <section id="leadership" className="section-container bg-pure-white">
            <div className="relative">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Leadership Experience
                </motion.h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid md:grid-cols-2 gap-6"
            >
                {leadershipData.map((item, index) => (
                    <motion.div key={index} variants={cardVariants} whileHover={{ y: -5 }}>
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                <CardDescription className="text-grey-700 font-medium">
                                    {item.organization}
                                </CardDescription>
                                <p className="text-sm text-grey-500 mt-1">{item.period}</p>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className="text-grey-600">{item.description}</p>
                            </CardContent>

                            {item.impact && (
                                <CardFooter className="pt-3 border-t border-grey-200">
                                    <p className="text-sm text-grey-700">
                                        <span className="font-semibold">Impact:</span> {item.impact}
                                    </p>
                                </CardFooter>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
