'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedNumberProps {
    end: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    delay?: number;
    className?: string;
}

export default function AnimatedNumber({
    end,
    prefix = '',
    suffix = '',
    duration = 2.5,
    delay = 0,
    className = ''
}: AnimatedNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3,
        margin: "-100px 0px -100px 0px"
    });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isInView) {
            setShouldAnimate(true);
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            className={className}
        >
            {shouldAnimate ? (
                <CountUp
                    start={0}
                    end={end}
                    duration={duration}
                    delay={delay}
                    separator=","
                    decimal="."
                    prefix={prefix}
                    suffix={suffix}
                    useEasing={true}
                    easingFn={(t, b, c, d) => {
                        // Función de easing personalizada para un efecto más suave
                        return c * (1 - Math.pow(1 - t / d, 3)) + b;
                    }}
                />
            ) : (
                <span style={{ visibility: 'hidden' }}>{prefix}{end}{suffix}</span>
            )}
        </div>
    );
} 