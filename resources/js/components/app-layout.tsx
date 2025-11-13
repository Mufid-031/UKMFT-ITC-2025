import { Footer } from './footer';
import StaggeredMenu from './staggered-menu';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Activity', ariaLabel: 'View our activity', link: '/activity' },
    { label: 'Structure', ariaLabel: 'View our structure', link: '/structure' },
    { label: 'Profile', ariaLabel: 'View our profile', link: '/profile' },
    {
        label: 'Developers',
        ariaLabel: 'View our developer',
        link: '/developer',
    },
];

const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
];

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen overflow-x-hidden bg-[#1a1a1a]">
            <StaggeredMenu
                isFixed
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl="/path-to-your-logo.svg"
                accentColor="#5227FF"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />

            <main className="pointer-events-auto flex min-h-screen w-full flex-col">
                {children}
            </main>

            <Footer />
        </div>
    );
};
