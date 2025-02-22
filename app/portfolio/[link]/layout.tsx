import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { link: string } }): Promise<Metadata> {
    try {
        // Fetch the project metadata from the JSON file
        const filePath = path.join(process.cwd(), "public/projects", `${params.link}.json`);

        // If the file doesn't exist, return 404
        if (!fs.existsSync(filePath)) {
            return notFound();
        }

        const fileContents = fs.readFileSync(filePath, "utf-8");
        const project = JSON.parse(fileContents);
        const keywords = Array.isArray(project.keywords)
            ? project.keywords.join(", ")
            : "SkyTech Developers, web development, software solutions, IT projects, case studies, portfolio";

        return {
            title: `SkyTech Developers Portfolio | ${project.title}`,
            description: project.excerpt || `Explore details about ${project.title} by SkyTech Developers.`,
            keywords: keywords,

            openGraph: {
                title: project.title,
                description: project.excerpt || "Discover the latest projects developed by SkyTech Developers.",
                url: `https://skytech-developers.vercel.app/projects/${params.link}`,
                siteName: "SkyTech Developers",
                images: project.image
                    ? [{ url: project.image, width: 1200, height: 630, alt: project.title }]
                    : [{ url: "/images/logo.png", width: 1200, height: 630, alt: "SkyTech Developers Logo" }],
                locale: "en_US",
                type: "article",
                publishedTime: project.date,
            },

            twitter: {
                card: "summary_large_image",
                title: project.title,
                description: project.excerpt || "Explore the latest projects by SkyTech Developers.",
                images: project.image ? [project.image] : ["/images/logo.png"],
            },
        };
    } catch (error) {
        console.error("❌ Error generating metadata:", error);
        return notFound();
    }
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return <div className="container mx-auto px-4 py-6">{children}</div>;
}
