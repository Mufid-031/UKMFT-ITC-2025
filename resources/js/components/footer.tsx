import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import React from 'react';

export const Footer = () => {
    return (
        <React.Fragment>
            <footer className="mt-10 grid grid-cols-1 gap-10 bg-primary-foreground p-20 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr]">
                <div className="space-y-5">
                    <div className="flex items-center gap-3">
                        <img
                            src="/path-to-your-logo.svg"
                            alt="Logo"
                            className="h-12 w-12"
                        />
                        <h1 className="text-accent-forground text-2xl font-bold uppercase">
                            UKMFT-
                            <span className="text-foreground">ITC</span>
                        </h1>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        UKMFT Information Technology Center adalah wadah
                        pengembangan kreativitas dan keahlian mahasiswa Fakultas
                        Teknik dalam bidang teknologi informasi.
                    </p>
                </div>

                <div className="space-y-5">
                    <h3 className="text-accent-forground text-lg font-semibold underline">
                        Divisi
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Pengkaderan</li>
                        <li>PSDM</li>
                        <li>Humas</li>
                        <li>P&K</li>
                        <li>LITBANG</li>
                        <li>Infokom</li>
                    </ul>
                </div>

                <div className="space-y-5">
                    <h3 className="text-accent-forground text-lg font-semibold underline">
                        Ikuti Kami
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="hover:text-accent-forground flex items-center gap-3 text-muted-foreground transition-colors"
                            >
                                <TwitterIcon fill='white' /> Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com"
                                target="_blank"
                                className="hover:text-accent-forground flex items-center gap-3 text-muted-foreground transition-colors"
                            >
                                <GithubIcon fill='white' /> GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="hover:text-accent-forground flex items-center gap-3 text-muted-foreground transition-colors"
                            >
                                <LinkedinIcon fill='white' /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:info@ukmft-itc.ac.id"
                                className="hover:text-accent-forground flex items-center gap-3 text-muted-foreground transition-colors"
                            >
                                Email Kami
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

            <div className="border-t border-muted-foreground/20 bg-primary-foreground py-5 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} <b>Mufid</b> - UKM-FT ITC
            </div>
        </React.Fragment>
    );
};
