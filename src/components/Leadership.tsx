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
        title: 'President',
        organization: 'Computer Science Student Association',
        period: '2021 - 2022',
        description: 'Led organization of 200+ members, organized tech talks and hackathons',
        impact: 'Increased membership by 40% and secured $10K in sponsorships'
    },
    {
        title: 'Team Lead',
        organization: 'University Hackathon Committee',
        period: '2020 - 2021',
        description: 'Coordinated annual hackathon with 500+ participants from 20+ universities',
        impact: 'Successfully managed budget of $25K and 15 volunteers'
    },
    {
        title: 'Volunteer Instructor',
        organization: 'Code for Community',
        period: '2019 - 2020',
        description: 'Taught programming basics to underprivileged high school students',
        impact: 'Mentored 30+ students, 80% continued to pursue tech education'
    }
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
