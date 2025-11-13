import { AppLayout } from '@/components/app-layout';
import Shuffle from '@/components/shuffle';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Profile() {
    return (
        <AppLayout>
            <div className="grid grid-cols-1 items-center justify-center gap-5 p-10 pt-32 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                    <Card className="h-80 w-80 bg-accent"></Card>
                </div>

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
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
                <Shuffle
                    text="History"
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

            <div className="mt-5 space-y-2 px-10 text-lg text-muted-foreground">
                <p>
                    Pada mulanya UKMFT-ITC adalah sebuah kelompok mahasiswa yang
                    berkumpul untuk mempelajari mengenai komputer sehingga
                    kelompok itu menyebut dirinya dengan “Kelompok Pengguna
                    Komputer (KPK)”. Mereka sering berkumpul untuk bersama-sama
                    belajar tentang komputer. Karena mereka merasa perlu adanya
                    status yang jelas mengenai kedudukan perkumpulan tersebut di
                    dalam kampus, terutama dalam menampung bakat minat mahasiswa
                    fakultas teknik tentang teknologi informasi, akhirnya
                    mahasiswa yang tergabung dalam KPK tadi sepakat membentuk
                    sebuah wadah resmi yang kemudian berkibar dengan nama
                    “Information Technology Center (ITC)” yang lahir tepat
                    tanggal 05 Oktober 2002. Hingga saat ini jumlah mahasiswa
                    yang tergabung dalam ITC sudah mencapai kurang lebih 565
                    orang.
                </p>

                <p>
                    Tidak terasa sudah 8 tahun lebih ITC berjalan, banyak warna
                    yang telah diberikan untuk kampus tercinta ini, terutama di
                    lingkungan teknik sendiri dalam mewadahi bakat minat
                    mahasiswa. Anggotanya pun telah banyak bertebaran di
                    lingkungan teknik maupun kampus dan telah banyak memberikan
                    kontribusi terhadap pengembangan wacana mahasiswa terhadap
                    keilmuan, banyak pula diantara anggota ITC yang menjabat
                    suatu struktur organisasi berada dalam jabatan yang
                    strategis , hal ini bisa dilihat didalam struktur organisasi
                    BEM, DPM / DPMF, HMJ, UKM / UKMF, maupun KABINET. Tidak
                    cukup sampai disitu, bahkan ada beberapa anggota ITC yang
                    sekarang dipercaya menjadi asisten oleh para dosen dan
                    administrator laboratorium Komputer.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 items-center gap-4 px-5 lg:grid-cols-2">
                <Separator className="hidden rounded-2xl py-1 lg:block" />

                <Shuffle
                    text="Objective"
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

            <div className="mt-5 space-y-2 px-10 text-lg text-muted-foreground">
                <p>
                    Sebagaimana telah dibahas sebelumnya, UKMFT-ITC berdiri
                    dengan tujuan untuk menampung bakat minat mahasiswa fakultas
                    teknik mengenai teknologi informasi, terutama sekali dalam
                    bidang hardware maupun software komputer, sehingga nantinya
                    mahasiswa yang merasa masih kurang mengerti tentang dunia
                    komputer, kami tampung dan kami fasilitasi untuk lebih
                    memahami dunia software dan hardware komputer, sehingga
                    nantinya tercetak mahasiswa yang tidak “canggung” lagi
                    terhadap teknologi.
                </p>
            </div>
        </AppLayout>
    );
}
