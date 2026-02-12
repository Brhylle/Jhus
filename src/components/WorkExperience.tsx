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
        title: 'Financial Market Trader & Instructor',
        company: 'Self-Employed',
        location: 'Pasig, Philippines',
        period: '2023 - 2026',
        achievements: [
            'Taught a 2-month long mentorship program to educate 50+ students on trading the crypto and forex markets, achieving a 100% satisfaction rate with an average rating of 5 stars.',
            'Invited as a guest speaker on two occasions to conduct structured learning sessions in two independent communities with 5,000+ and 1,000+ members, earning an average 5-star rating and 100% participant satisfaction based on post-session feedback.',
        ]
    },
    {
        title: 'Business Permit Ledger Officer - Senior Associate',
        company: 'Department of Labor and Employment',
        location: 'Pasig, Philippines',
        period: 'January 2026',
        achievements: [
            'Conducted initial analysis of financial statements and supporting documents to assist in business permit evaluation for 50+ applicants.',
            'Conducted basic tax compliance assessments for SME applicants, identifying deficiencies, coordinating clarifications, and supporting timely permit processing.',
        ]
    },
    {
        title: 'Accounting Department Assistant',
        company: 'Public Employment Service Office',
        location: 'Pasig, Philippines',
        period: '2024',
        achievements: [
            'Conducted house-to-house surveys to collect demographic and community data, ensuring accuracy and completeness during field interviews.',
            'Assisted in organizing and validating collected responses for submission to the LGU, supporting data-driven community planning initiatives.',
        ]
    },
    {
        title: 'Business Permit Ledger Officer - Junior Associate',
        company: 'Department of Labor and Employment',
        location: 'Pasig, Philippines',
        period: 'July 2025',
        achievements: [
            'Conducted initial analysis of financial statements and supporting documents to assist in business permit evaluation for 50+ applicants.',
            'Conducted basic tax compliance assessments for SME applicants, identifying deficiencies, coordinating clarifications, and supporting timely permit processing.',
        ]
    },
    {
        title: 'Community Survey Assistant',
        company: 'Public Employment Service Office',
        location: 'Pasig, Philippines',
        period: '2024',
        achievements: [
            'Conducted house-to-house surveys to collect demographic and community data, ensuring accuracy and completeness during field interviews.',
            'Assisted in organizing and validating collected responses for submission to the LGU, supporting data-driven community planning initiatives.',
        ]
    },
    // add workData here...
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
