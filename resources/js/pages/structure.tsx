import { AppLayout } from '@/components/app-layout';
import Shuffle from '@/components/shuffle';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Contact2Icon } from 'lucide-react';
import React from 'react';

const divisions = [
    'Main',
    'Litbang',
    'Pengkaderan',
    'PSDM',
    'Humas',
    'P&K',
    'Infokom',
];

export default function Structure() {
    return (
        <AppLayout>
            <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
                <Shuffle
                    text="Structure 2025"
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

            <div className="space-y-3 p-10">
                <Card className="h-screen w-full bg-accent"></Card>
            </div>

            {divisions.map((division, index) => (
                <React.Fragment>
                    <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
                        <Shuffle
                            text={`${division} Structure`}
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
                            className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}
                        />

                        <Separator
                            className={`hidden rounded-2xl py-1 lg:block ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <Card
                                key={index}
                                className="flex h-60 items-center justify-center bg-primary-foreground transition-transform duration-300 hover:scale-105 sm:h-72"
                            >
                                <Contact2Icon className="h-16 w-16 text-primary sm:h-20 sm:w-20" />
                            </Card>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </AppLayout>
    );
}
