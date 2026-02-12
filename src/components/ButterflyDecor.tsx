interface ButterflyDecorProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    animated?: boolean;
}

export default function ButterflyDecor({
    className = '',
    size = 'md',
    animated = true
}: ButterflyDecorProps) {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-16 h-16',
        lg: 'w-24 h-24'
    };

    return (
        <svg
            className={`${sizeClasses[size]} ${animated ? 'animate-float' : ''} ${className}`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Monarch butterfly silhouette */}
            <g className="opacity-80">
                {/* Left upper wing */}
                <path
                    d="M50 50 Q30 30, 20 35 Q10 40, 15 50 Q20 60, 30 55 Q40 50, 50 50Z"
                    fill="currentColor"
                    className="text-grey-900"
                />
                {/* Right upper wing */}
                <path
                    d="M50 50 Q70 30, 80 35 Q90 40, 85 50 Q80 60, 70 55 Q60 50, 50 50Z"
                    fill="currentColor"
                    className="text-grey-900"
                />
                {/* Left lower wing */}
                <path
                    d="M50 50 Q35 55, 25 65 Q20 75, 28 80 Q36 85, 42 75 Q48 65, 50 50Z"
                    fill="currentColor"
                    className="text-grey-700"
                />
                {/* Right lower wing */}
                <path
                    d="M50 50 Q65 55, 75 65 Q80 75, 72 80 Q64 85, 58 75 Q52 65, 50 50Z"
                    fill="currentColor"
                    className="text-grey-700"
                />
                {/* Body */}
                <ellipse cx="50" cy="50" rx="2" ry="8" fill="currentColor" className="text-pure-black" />
                {/* Antennae */}
                <path
                    d="M50 42 Q48 38, 46 35"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-pure-black"
                />
                <path
                    d="M50 42 Q52 38, 54 35"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-pure-black"
                />
            </g>
        </svg>
    );
}
