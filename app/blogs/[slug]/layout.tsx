import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    // Construct file path
    const filePath = path.join(process.cwd(), "public/blogs", `${params.slug}.json`);

    try {
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            console.error(`Blog not found: ${params.slug}`);
            return {};
        }

        // Read and parse the blog JSON file
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const blog = JSON.parse(fileContents);

        // Ensure keywords are properly formatted
        const keywords = Array.isArray(blog.keywords) ? blog.keywords.join(", ") : "SkyTech Developers, web development, programming, tech blog, software solutions";

        return {
            title: `SkyTech Developers | ${blog.title}`,
            description: blog.excerpt || "Read insightful blog posts on web development, programming, and tech trends at SkyTech Developers.",
            keywords: keywords,
            openGraph: {
                title: blog.title,
                description: blog.excerpt || "Explore the latest articles from SkyTech Developers.",
                url: `https://skytech-developers.vercel.app/blogs/${params.slug}`,
                siteName: "SkyTech Developers",
                images: blog.image ? [{ url: `https://skytech-developers.vercel.app/${blog.image}`, width: 1200, height: 630, alt: blog.title }] : [],
                type: "article",
                publishedTime: blog.date || new Date().toISOString(),
                locale: "en_US",
            },
            twitter: {
                card: "summary_large_image",
                title: blog.title,
                description: blog.excerpt || "Explore the latest articles from SkyTech Developers.",
                images: blog.image ? [`https://skytech-developers.vercel.app/${blog.image}`] : ["https://skytech-developers.vercel.app/images/logo.png"],
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {};
    }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
