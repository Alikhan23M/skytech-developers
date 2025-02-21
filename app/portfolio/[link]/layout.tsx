// In the 'projects/[link]' layout or a server component (e.g., `app/projects/[link]/layout.tsx`)

import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { link: string } }): Promise<Metadata> {
    try {
        //  Fetch the project metadata from the JSON file
        const filePath = path.join(process.cwd(), "public/projects", `${params.link}.json`);

        //  If the file doesn't exist, return 404
        if (!fs.existsSync(filePath)) {
            return notFound();
        }

        const fileContents = fs.readFileSync(filePath, "utf-8");
        const project = JSON.parse(fileContents);

        return {
            title: `SkyTech Developers Portfolio | ${project.title}`,
            description: project.excerpt || `Explore details about ${project.title} by SkyTech Developers.`,
            keywords: `${project.keywords || "SkyTech Developers, web development projects, software solutions, portfolio, tech innovations"}`,
            
            openGraph: {
                title: project.title,
                description: project.excerpt || "Discover the latest projects developed by SkyTech Developers.",
                images: [{ url: project.image, alt: project.title }],
                type: "website",
                siteName: "SkyTech Developers",
            },
        };
    } catch (error) {
        console.error("❌ Error generating metadata:", error);
        return notFound();
    }
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
