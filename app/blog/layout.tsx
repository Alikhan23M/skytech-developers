// In the 'blogs' layout or a server component (e.g., `app/blogs/layout.tsx`)

export const metadata = {
    title: "SkyTech Developers | Blogs",
    description: "Explore insightful blogs written by SkyTech Developers team",
    keywords: "SkyTech Developers, skytech developers, skytech, skytech developers blogs, web development, web agency, web development agency in pakistan, development agency",
    author: "SkyTech Developers",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
