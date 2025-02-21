// In the 'about' layout or a server component (e.g., `app/about/layout.tsx`)

export const metadata = {
    title: "SkyTech Developers | About",
    description: "Learn about SkyTech Developers, a top web development and IT solutions company specializing in cybersecurity, custom software, and digital transformation.",
    keywords: "About SkyTech Developers, best web development company, IT solutions provider, software development agency, cybersecurity experts, web agency in Pakistan, digital transformation services, software engineers",
    author: "SkyTech Developers",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
