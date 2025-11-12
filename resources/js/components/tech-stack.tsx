'use client';

import React, { forwardRef, useRef } from 'react';

import { AnimatedBeam } from '@/components/animated-beam';
import { cn } from '@/lib/utils';

import { CiGlobe } from 'react-icons/ci';
import { FaFigma, FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = 'Circle';

export function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        <Icons.figma />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.laravel />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref}>
                        <Icons.react />
                    </Circle>
                    <Circle ref={div4Ref} className="size-16">
                        <Icons.web />
                    </Circle>
                    <Circle ref={div6Ref}>
                        <Icons.tailwind />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div3Ref}>
                        <Icons.node />
                    </Circle>
                    <Circle ref={div7Ref}>
                        <Icons.mongodb />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    );
}

const Icons = {
    react: () => <FaReact className="text-xl text-accent" />,
    figma: () => <FaFigma className="text-xl text-accent" />,
    laravel: () => <FaLaravel className="text-xl text-accent" />,
    tailwind: () => <RiTailwindCssFill className="text-xl text-accent" />,
    mongodb: () => <SiMongodb className="text-xl text-accent" />,
    node: () => <FaNodeJs className="text-xl text-accent" />,
    web: () => <CiGlobe className="text-xl text-accent" />,
};
