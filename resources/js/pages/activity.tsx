import { AppLayout } from '@/components/app-layout';
import Shuffle from '@/components/shuffle';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ImageIcon } from 'lucide-react';

export default function Activity() {
    return (
        <AppLayout>
            <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
                <Shuffle
                    text="Our Activity"
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

            <div className="grid grid-cols-1 gap-5 p-10 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <Card
                        key={index}
                        className="flex h-96 items-center justify-center bg-accent"
                    >
                        <ImageIcon className="h-16 w-16" />
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}
