import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const radius = 48;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="absolute inset-0 -m-1">
            <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
            >
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="2"
                    fill="none"
                />
                {/* Progress circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#5163FF"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - progress / 100)}
                    style={{
                        transition: 'stroke-dashoffset 0.3s ease',
                    }}
                />
            </svg>
        </div>
    );
};

export default ProgressBar;
