import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
    try {
        // ✅ Load the service metadata from the JSON file
        const filePath = path.join(process.cwd(), "public/services", `${params.service}.json`);

        // ✅ If the file doesn't exist, return 404
        if (!fs.existsSync(filePath)) {
            return notFound();
        }

        const fileContents = fs.readFileSync(filePath, "utf-8");
        const service = JSON.parse(fileContents);

        return {
            title: `SkyTech Developers Services | ${service.title}`,
            description: service.description || `Discover our expert services in ${service.title}.`,
            keywords: `${service.keywords || "SkyTech Developers, web development, software solutions, IT services, technology"}`,
           
            openGraph: {
                title: service.title,
                description: service.description || "Explore the best services provided by SkyTech Developers.",
                images: [{ url: service.image, alt: service.title }],
                type: "website",
                siteName: "SkyTech Developers",
            },
        };
    } catch (error) {
        console.error("❌ Error generating metadata:", error);
        return notFound();
    }
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
