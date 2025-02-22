export const metadata = {
    title: "Contact SkyTech Developers | Get in Touch",
    description: "Have a project in mind? Contact SkyTech Developers for top-notch web development, cybersecurity, and software solutions. Let's build something amazing together!",
    keywords: "Contact SkyTech Developers, web development agency, software solutions, IT consulting, cybersecurity services, hire developers, tech support, business website consultation",
    author: "SkyTech Developers",
    openGraph: {
        title: "Contact SkyTech Developers | Get in Touch",
        description: "Have a project in mind? Contact SkyTech Developers for top-notch web development, cybersecurity, and software solutions. Let's build something amazing together!",
        url: "https://skytech-developers.vercel.app/contact",
        siteName: "SkyTech Developers",
        images: [
            {
                url: "https://skytech-developers.vercel.app/images/logo.png",
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
        title: "Contact SkyTech Developers | Get in Touch",
        description: "Have a project in mind? Contact SkyTech Developers for top-notch web development, cybersecurity, and software solutions. Let's build something amazing together!",
        images: ["https://skytech-developers.vercel.app/images/logo.png"],
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
