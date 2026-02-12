import ButterflyDecor from './ButterflyDecor';

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

export default function Leadership() {
    return (
        <section id="leadership" className="section-container bg-pure-white">
            <div className="relative">
                <ButterflyDecor
                    className="absolute -top-8 -right-4 text-grey-200 opacity-50"
                    size="md"
                    animated={false}
                />
                <h2 className="section-title">Leadership Experience</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {leadershipData.map((item, index) => (
                    <div
                        key={index}
                        className="card animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-display font-semibold text-pure-black mb-1">
                                {item.title}
                            </h3>
                            <p className="text-grey-700 font-medium">{item.organization}</p>
                            <p className="text-sm text-grey-500 mt-1">{item.period}</p>
                        </div>

                        <p className="text-grey-600 mb-3">{item.description}</p>

                        {item.impact && (
                            <div className="pt-3 border-t border-grey-200">
                                <p className="text-sm text-grey-700">
                                    <span className="font-semibold">Impact:</span> {item.impact}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
