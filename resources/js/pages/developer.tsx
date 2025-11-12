import { AppLayout } from '@/components/app-layout';
import ScrambledText from '@/components/scrambled-text';
import ScrollVelocity from '@/components/scroll-velocity';
import Shuffle from '@/components/shuffle';
import { TechStack } from '@/components/tech-stack';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Contact2Icon } from 'lucide-react';

export default function Developer() {
    return (
        <AppLayout>
            <div className="relative pt-24">
                {[1, 2, 3].map((_, index) => (
                    <ScrollVelocity
                        key={index}
                        texts={['PROJECT LEAD', 'FULL STACK DEVELOPER']}
                        velocity={50}
                        className={`text-8xl font-bold ${index === 1 ? '' : 'text-stroke-white'}`}
                    />
                ))}

                <style>
                    {`
                        .text-stroke-white {
                            -webkit-text-stroke: 1px white;
                            -webkit-text-fill-color: transparent;
                        }
                    `}
                </style>

                <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-accent text-center grayscale-100">
                    <img
                        src="/mufid-2.jpg"
                        alt="Mufid"
                        className="object-fi h-full w-full"
                    />
                </div>
            </div>

            <div className="mt-40 grid grid-cols-1 items-center px-5 lg:grid-cols-2">
                <Shuffle
                    text="About Projects"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                />

                <Separator className="hidden rounded-2xl py-1 lg:block" />
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="space-x-2">
                    <ScrambledText
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=".:"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum fugit aspernatur adipisci non nulla
                        nemo maxime voluptatibus dolores maiores, enim
                        temporibus sint! Alias quod ea nobis officia expedita
                        delectus quam!
                    </ScrambledText>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <TechStack />
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 items-center px-5 lg:grid-cols-2">
                <Separator className="hidden rounded-2xl py-1 lg:block" />

                <Shuffle
                    text="Our Developers"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 p-10">
                {[1, 2, 3, 4].map((_, index) => (
                    <Card
                        key={index}
                        className="flex items-center justify-center bg-primary-foreground h-96"
                    >
                        <Contact2Icon className='w-20 h-20' />
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}
