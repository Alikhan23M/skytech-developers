export const metadata = {
    title: "SkyTech Developers | Portfolio",
    description: "Discover the projects and case studies by SkyTech Developers, showcasing expertise in web development, cybersecurity, and digital solutions.",
    keywords: "SkyTech Developers, portfolio, web development projects, software solutions, cybersecurity projects, IT consulting, case studies, best web agency in Pakistan",
    author: "SkyTech Developers",
    openGraph: {
        title: "SkyTech Developers | Portfolio",
        description: "Explore our portfolio of web development, cybersecurity, and digital solutions projects, showcasing our expertise and innovative solutions.",
        url: "https://skytech-developers.vercel.app/portfolio",
        siteName: "SkyTech Developers",
        images: [
            {
                url: "/images/logo.png",
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
        title: "SkyTech Developers | Portfolio",
        description: "Explore our portfolio of web development, cybersecurity, and digital solutions projects, showcasing our expertise and innovative solutions.",
        images: ["/images/logo.png"],
    },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
