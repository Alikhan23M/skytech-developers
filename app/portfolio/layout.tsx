// In the 'portfolio' layout or a server component (e.g., `app/portfolio/layout.tsx`)

export const metadata = {
    title: "SkyTech Developers | Portfolio",
    description: "Discover the projects and case studies by SkyTech Developers, showcasing expertise in web development, cybersecurity, and digital solutions.",
    keywords: "SkyTech Developers, skytech developers portfolio, web development projects, software solutions, cybersecurity projects, web agency portfolio, best web development agency in Pakistan",
    author: "SkyTech Developers",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
