// In the 'about' layout or a server component (e.g., `app/about/layout.tsx`)

export const metadata = {
    title: "SkyTech Developers | About",
    description: "Learn about SkyTech Developers, a leading web development and IT solutions company specializing in cybersecurity, custom software, and digital transformation.",
    keywords: "SkyTech Developers, about SkyTech, software development agency, IT solutions, cybersecurity services, web development experts, custom software, digital transformation, enterprise solutions, web agency in Pakistan, tech company",
    author: "SkyTech Developers",
    openGraph: {
        title: "About SkyTech Developers - Leading IT Solutions & Web Development",
        description: "Discover the mission, values, and expertise of SkyTech Developers. We provide top-notch web development, cybersecurity, and IT solutions for businesses worldwide.",
        url: "https://skytech-developers.vercel.app/about",
        siteName: "SkyTech Developers",
        images: [
            {
                url: "/images/logo.png", // Since you want to use logo.png from public directory
                width: 1200,
                height: 630,
                alt: "SkyTech Developers Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About SkyTech Developers - Leading IT Solutions & Web Development",
        description: "Discover the mission, values, and expertise of SkyTech Developers. We provide top-notch web development, cybersecurity, and IT solutions for businesses worldwide.",
        images: ["/images/logo.png"], // Twitter also uses the logo
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
