// In the 'blogs/[slug]' layout or a server component (e.g., `app/blogs/[slug]/layout.tsx`)

import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        // Fetch the blog metadata from the JSON file
        const filePath = path.join(process.cwd(), "public/blogs", `${params.slug}.json`);

        //  If the file doesn't exist, return 404
        if (!fs.existsSync(filePath)) {
            return notFound();
        }

        const fileContents = fs.readFileSync(filePath, "utf-8");
        const blog = JSON.parse(fileContents);

        return {
            title: `SkyTech Developers | ${blog.title}`,
            description: blog.excerpt || "Read insightful blog posts on web development, programming, and tech trends at SkyTech Developers.",
            keywords: `${blog.keywords || "SkyTech Developers, web development, programming, tech blog, software solutions"}`,
            openGraph: {
                title: blog.title,
                description: blog.excerpt || "Explore the latest articles from SkyTech Developers.",
                images: [{ url: blog.image, alt: blog.title }],
                type: "article",
                publishedTime: blog.date,
                siteName: "SkyTech Developers",
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return notFound();
    }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
