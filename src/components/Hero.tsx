import ButterflyDecor from './ButterflyDecor';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-grey-50 to-pure-white">
            {/* Floating butterflies decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <ButterflyDecor
                    className="absolute top-20 left-[10%] text-grey-400 opacity-30"
                    size="lg"
                />
                <ButterflyDecor
                    className="absolute top-40 right-[15%] text-grey-300 opacity-20 animate-float-delayed"
                    size="md"
                />
                <ButterflyDecor
                    className="absolute bottom-32 left-[20%] text-grey-400 opacity-25"
                    size="sm"
                />
                <ButterflyDecor
                    className="absolute top-1/2 right-[25%] text-grey-300 opacity-15 animate-float-delayed"
                    size="md"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
                <div className="mb-8 flex justify-center">
                    <ButterflyDecor size="lg" className="text-grey-800" />
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-gradient">
                    Your Name
                </h1>

                <p className="text-xl md:text-2xl text-grey-600 font-light mb-4">
                    Full Stack Developer & Designer
                </p>

                <p className="text-base md:text-lg text-grey-500 max-w-2xl mx-auto mb-12">
                    Crafting elegant digital experiences with modern technologies.
                    Transforming ideas into beautiful, functional solutions.
                </p>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-grey-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}
