/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppLayout } from '@/components/app-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
            <div className="grid grid-cols-1 gap-5 p-10 pt-20 lg:grid-cols-2">
                <div className="min-h-screen w-full p-10 pt-20 uppercase">
                    <h1 className="text-4xl font-extrabold text-foreground lg:text-5xl xl:text-7xl">
                        UKM<span className="text-cyan-300">FT</span>
                    </h1>
                    <h1 className="text-4xl font-bold text-foreground lg:text-5xl xl:text-7xl">
                        <span className="text-cyan-300">I</span>nformation
                    </h1>
                    <h1 className="ml-20 text-4xl font-bold text-foreground lg:text-5xl xl:text-7xl">
                        <span className="text-cyan-300">T</span>echnology
                    </h1>
                    <h1 className="ml-40 text-4xl font-bold text-foreground lg:text-5xl xl:text-7xl">
                        <span className="text-cyan-300">C</span>enter
                    </h1>
                    <div className="mt-10 flex gap-4">
                        <Button className="cursor-pointer rounded-full bg-cyan-300 px-5 py-6 text-lg font-semibold text-accent-foreground transition-all duration-200 hover:scale-110 hover:bg-cyan-400">
                            Kenali Kami
                        </Button>
                        <Button className="cursor-pointer rounded-full px-5 py-6 text-lg font-semibold transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-foreground">
                            Gabung Sekarang
                        </Button>
                    </div>
                </div>
                <div className="min-h-screen w-full bg-accent"></div>
            </div>

            <div className="mt-5 min-h-screen w-full">
                <h1 className="text-center text-[12rem] font-extrabold text-accent uppercase">
                    Bidang minat
                </h1>

                <div className="grid grid-cols-1 gap-20 px-10 md:grid-cols-2">
                    {[1, 2].map((_, index) => (
                        <Card key={index} className="h-60 bg-accent"></Card>
                    ))}
                </div>
            </div>

            <div className="my-5 min-h-screen w-full">
                <h1 className="text-center text-[11rem] font-extrabold text-accent uppercase">
                    Our Portfolio
                </h1>

                <div className="grid grid-cols-1 gap-20 px-10 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <Card key={index} className="h-60 bg-accent"></Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button className="cursor-pointer rounded-full px-5 py-6 text-lg font-semibold transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-foreground">
                        Lihat Lebih Banyak
                    </Button>
                </div>
            </div>

            <div className="mt-5 flex h-40 w-full items-center justify-evenly gap-5 bg-primary-foreground py-10">
                <div className="space-y-2 text-center">
                    <p>340+</p>
                    <h1 className="">Our Member</h1>
                </div>
                <Separator orientation="vertical" className="bg-foreground" />
                <div className="space-y-2 text-center">
                    <p>450+</p>
                    <h1 className="">Our Alumni</h1>
                </div>
                <Separator orientation="vertical" className="bg-foreground" />
                <div className="space-y-2 text-center">
                    <p>50+</p>
                    <h1 className="">Our Project</h1>
                </div>
            </div>

            <div className="my-5 min-h-screen w-full">
                <h1 className="text-center text-[11rem] font-extrabold text-accent uppercase">
                    Our Stories
                </h1>

                <div className="grid grid-cols-1 gap-5 p-10 lg:grid-cols-2">
                    <Card className="w-full bg-accent"></Card>
                    <div className="grid min-h-screen w-full grid-cols-2 gap-5">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <Card
                                key={index}
                                className="w-full bg-accent"
                            ></Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="my-5 min-h-screen w-full">
                <h1 className="text-center text-[11rem] font-extrabold text-accent uppercase">
                    Our
                </h1>

                <div className="grid grid-cols-1 gap-20 px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                        <Card
                            key={index}
                            className="flex h-80 w-80 items-center justify-center bg-accent"
                        >
                            <ContactRound className="h-40 w-40 text-primary-foreground" />
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Button className="cursor-pointer rounded-full px-5 py-6 text-lg font-semibold transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-foreground">
                        Selengkapnya
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}
