import ButterflyDecor from './ButterflyDecor';

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
}

const educationData: EducationItem[] = [
    {
        degree: 'Master of Science in Computer Science',
        institution: 'University Name',
        location: 'City, Country',
        period: '2020 - 2022',
        description: 'Specialized in Machine Learning and Distributed Systems. GPA: 3.9/4.0'
    },
    {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'University Name',
        location: 'City, Country',
        period: '2016 - 2020',
        description: 'Graduated with Honors. Focus on Web Development and Database Systems.'
    }
];

export default function Education() {
    return (
        <section id="education" className="section-container bg-pure-white">
            <div className="relative">
                <ButterflyDecor
                    className="absolute -top-8 -right-4 text-grey-200 opacity-50"
                    size="md"
                    animated={false}
                />
                <h2 className="section-title">Education</h2>
            </div>

            <div className="space-y-8">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className="card group animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-grey-900 rounded-full flex items-center justify-center text-pure-white font-display font-bold">
                                {item.period.split(' - ')[0].slice(-2)}
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-display font-semibold text-pure-black mb-2 group-hover:text-grey-700 transition-colors">
                                    {item.degree}
                                </h3>
                                <p className="text-lg text-grey-700 mb-1">{item.institution}</p>
                                <p className="text-sm text-grey-500 mb-3">
                                    {item.location} • {item.period}
                                </p>
                                {item.description && (
                                    <p className="text-grey-600">{item.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
