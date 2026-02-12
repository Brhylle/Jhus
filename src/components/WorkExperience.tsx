import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface WorkItem {
    title: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}

const workData: WorkItem[] = [
    {
        title: 'Senior Full Stack Developer',
        company: 'Tech Company Inc.',
        location: 'City, Country',
        period: 'Jan 2022 - Present',
        achievements: [
            'Led development of microservices architecture serving 1M+ users',
            'Reduced API response time by 40% through optimization',
            'Mentored team of 5 junior developers',
            'Implemented CI/CD pipeline reducing deployment time by 60%'
        ]
    },
    {
        title: 'Full Stack Developer',
        company: 'Startup XYZ',
        location: 'City, Country',
        period: 'Jun 2020 - Dec 2021',
        achievements: [
            'Built responsive web applications using React and Node.js',
            'Collaborated with design team to implement pixel-perfect UIs',
            'Integrated third-party APIs and payment systems',
            'Participated in agile development processes'
        ]
    },
    {
        title: 'Software Engineering Intern',
        company: 'Big Tech Corp',
        location: 'City, Country',
        period: 'Summer 2019',
        achievements: [
            'Developed internal tools using Python and Django',
            'Automated testing processes saving 10+ hours per week',
            'Contributed to open-source projects'
        ]
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
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function WorkExperience() {
    return (
        <section id="work" className="section-container bg-grey-50">
            <div className="relative">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Work Experience
                </motion.h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="space-y-6"
            >
                {workData.map((item, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div>
                                        <CardTitle>{item.title}</CardTitle>
                                        <p className="text-lg text-grey-700 mt-2">{item.company}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0 text-grey-600">
                                        <p className="text-sm">{item.location}</p>
                                        <p className="text-sm font-medium">{item.period}</p>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-2">
                                    {item.achievements.map((achievement, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-3 text-grey-600"
                                        >
                                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-grey-900 rounded-full mt-2"></span>
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
