// In the 'blogs' layout or a server component (e.g., `app/blogs/layout.tsx`)

export const metadata = {
    title: "SkyTech Developers | Blogs",
    description: "Explore insightful blogs by SkyTech Developers covering web development, cybersecurity, software engineering, and IT solutions.",
    keywords: "SkyTech Developers blogs, web development blogs, IT solutions insights, cybersecurity tips, software engineering articles, tech trends, digital transformation, programming tutorials, web agency in Pakistan",
    author: "SkyTech Developers",
    openGraph: {
        title: "SkyTech Developers | Tech & Web Development Blogs",
        description: "Explore insightful blogs by SkyTech Developers covering web development, cybersecurity, software engineering, and IT solutions.",
        url: "https://skytech-developers.vercel.app/blogs",
        siteName: "SkyTech Developers",
        images: [
            {
                url: "https://skytech-developers.vercel.app/images/logo.png", // Using the blog.png from the public directory
                width: 1200,
                height: 630,
                alt: "SkyTech Developers Blogs",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SkyTech Developers | Tech & Web Development Blogs",
        description: "Explore insightful blogs by SkyTech Developers covering web development, cybersecurity, software engineering, and IT solutions.",
        images: ["https://skytech-developers.vercel.app/images/logo.png"], // Twitter preview image
    },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
