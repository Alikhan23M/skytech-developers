// In the 'services' layout or a server component (e.g., `app/services/layout.tsx`)

export const metadata = {
    title: "SkyTech Developers | Services",
    description: "Explore our top-notch web development, cybersecurity, and software solutions. SkyTech Developers delivers cutting-edge IT services tailored to your needs.",
    keywords: "SkyTech Developers services, web development, software solutions, IT services, cybersecurity, digital transformation, best web agency, tech solutions",
    
    openGraph: {
        title: "SkyTech Developers | Services",
        description: "Discover our wide range of IT solutions, including web development, cybersecurity, and software services.",
        url: "https://skytech-developers.vercel.app/services",
        siteName: "SkyTech Developers",
        images: [
            {
                url: "https://skytech-developers.vercel.app/images/logo.png",
                width: 1200,
                height: 630,
                alt: "SkyTech Developers Logo",
            }
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "SkyTech Developers | Services",
        description: "Get the best web development, cybersecurity, and IT solutions from SkyTech Developers.",
        images: ["https://skytech-developers.vercel.app/images/logo.png"],
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
