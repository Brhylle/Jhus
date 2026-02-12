import ButterflyDecor from './ButterflyDecor';

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

export default function WorkExperience() {
    return (
        <section id="work" className="section-container bg-grey-50">
            <div className="relative">
                <ButterflyDecor
                    className="absolute -top-8 -left-4 text-grey-200 opacity-50"
                    size="md"
                    animated={false}
                />
                <h2 className="section-title">Work Experience</h2>
            </div>

            <div className="space-y-6">
                {workData.map((item, index) => (
                    <div
                        key={index}
                        className="card animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-display font-semibold text-pure-black mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-grey-700">{item.company}</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-grey-600">
                                <p className="text-sm">{item.location}</p>
                                <p className="text-sm font-medium">{item.period}</p>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-grey-600">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-grey-900 rounded-full mt-2"></span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
