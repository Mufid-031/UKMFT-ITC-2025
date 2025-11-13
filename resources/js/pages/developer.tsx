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
            {/* === Hero Section === */}
            <div className="relative pt-24 pb-32">
                {[1, 2, 3].map((_, index) => (
                    <ScrollVelocity
                        key={index}
                        texts={['PROJECT LEAD', 'FULL STACK DEVELOPER']}
                        velocity={50}
                        className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl ${
                            index === 1 ? '' : 'text-stroke-white'
                        }`}
                    />
                ))}

                {/* Custom text stroke style */}
                <style>
                    {`
                        .text-stroke-white {
                            -webkit-text-stroke: 1px white;
                            -webkit-text-fill-color: transparent;
                        }
                    `}
                </style>

                {/* Center Image */}
                <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-accent shadow-lg sm:h-64 sm:w-64 md:h-80 md:w-80">
                    <img
                        src="/mufid-2.jpg"
                        alt="Mufid"
                        className="h-full w-full object-cover object-top grayscale"
                    />
                </div>
            </div>

            {/* === About Projects Section === */}
            <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
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

            <div className="mt-8 grid grid-cols-1 gap-6 px-5 lg:grid-cols-2">
                <div className="text-sm leading-relaxed sm:text-base">
                    <ScrambledText
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=".:"
                        className='text-2xl'
                    >
                        Website ini saya buat untuk UKMFT-ITC, komunitas IT di
                        Fakultas Teknik yang berfokus pada pengembangan
                        teknologi dan kolaborasi antaranggota. Tujuannya
                        sederhana — menciptakan ruang digital yang modern,
                        informatif, dan interaktif untuk menampung semangat
                        inovasi dari para anggota ITC.
                    </ScrambledText>
                </div>

                <div className="flex items-center justify-center">
                    <TechStack />
                </div>
            </div>

            {/* === Our Developers Section === */}
            <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
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

            {/* === Developer Cards === */}
            <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1, 2, 3, 4].map((_, index) => (
                    <Card
                        key={index}
                        className="flex h-60 items-center justify-center bg-primary-foreground transition-transform duration-300 hover:scale-105 sm:h-72"
                    >
                        <Contact2Icon className="h-16 w-16 text-primary sm:h-20 sm:w-20" />
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}
