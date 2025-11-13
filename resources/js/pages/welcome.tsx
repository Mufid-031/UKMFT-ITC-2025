/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppLayout } from '@/components/app-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { ContactRound } from 'lucide-react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout>
            {/* Hero Section */}
            <div className="grid grid-cols-1 gap-10 px-6 pt-24 lg:grid-cols-2 lg:px-10">
                <div className="flex flex-col justify-center uppercase">
                    <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl xl:text-7xl">
                        UKM<span className="text-cyan-300">FT</span>
                    </h1>
                    <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl xl:text-7xl">
                        <span className="text-cyan-300">I</span>nformation
                    </h1>
                    <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:ml-10 md:text-5xl xl:text-7xl">
                        <span className="text-cyan-300">T</span>echnology
                    </h1>
                    <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:ml-20 md:text-5xl xl:text-7xl">
                        <span className="text-cyan-300">C</span>enter
                    </h1>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button className="rounded-full bg-cyan-300 px-6 py-4 text-base font-semibold text-accent-foreground transition-all duration-200 hover:scale-105 hover:bg-cyan-400">
                            Kenali Kami
                        </Button>
                        <Button className="rounded-full px-6 py-4 text-base font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-foreground">
                            Gabung Sekarang
                        </Button>
                    </div>
                </div>

                <div className="h-72 w-full rounded-2xl bg-accent lg:h-auto"></div>
            </div>

            {/* Bidang Minat */}
            <section className="mt-16 w-full px-6">
                <h1 className="text-center text-5xl font-extrabold text-accent uppercase sm:text-6xl md:text-7xl lg:text-8xl">
                    Bidang Minat
                </h1>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-20">
                    {[1, 2].map((_, index) => (
                        <Card
                            key={index}
                            className="h-48 bg-accent sm:h-60"
                        ></Card>
                    ))}
                </div>
            </section>

            {/* Portfolio */}
            <section className="my-16 w-full px-6">
                <h1 className="text-center text-5xl font-extrabold text-accent uppercase sm:text-6xl md:text-7xl lg:text-8xl">
                    Our Portfolio
                </h1>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <Card
                            key={index}
                            className="h-48 bg-accent sm:h-60"
                        ></Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button className="rounded-full px-6 py-4 text-base font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-foreground">
                        Lihat Lebih Banyak
                    </Button>
                </div>
            </section>

            {/* Statistik */}
            <section className="flex flex-wrap items-center justify-center gap-8 bg-primary-foreground px-6 py-10 text-center">
                {[
                    { label: 'Our Member', value: '340+' },
                    { label: 'Our Alumni', value: '450+' },
                    { label: 'Our Project', value: '50+' },
                ].map((item, i) => (
                    <div key={i} className="space-y-2">
                        <p className="text-2xl font-bold">{item.value}</p>
                        <h1 className="text-base font-medium">{item.label}</h1>
                    </div>
                ))}
            </section>

            {/* Our Stories */}
            <section className="my-16 w-full px-6">
                <h1 className="text-center text-5xl font-extrabold text-accent uppercase sm:text-6xl md:text-7xl lg:text-8xl">
                    Our Stories
                </h1>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card className="h-64 w-full bg-accent"></Card>
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <Card key={index} className="h-32 bg-accent"></Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Section */}
            <section className="my-16 w-full px-6">
                <h1 className="text-center text-5xl font-extrabold text-accent uppercase sm:text-6xl md:text-7xl lg:text-8xl">
                    Our
                </h1>

                <div className="mt-10 grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {[...Array(9)].map((_, index) => (
                        <Card
                            key={index}
                            className="flex h-40 w-40 items-center justify-center bg-accent sm:h-60 sm:w-60"
                        >
                            <ContactRound className="h-20 w-20 text-primary-foreground sm:h-32 sm:w-32" />
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button className="rounded-full px-6 py-4 text-base font-semibold transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-foreground">
                        Selengkapnya
                    </Button>
                </div>
            </section>
        </AppLayout>
    );
}
