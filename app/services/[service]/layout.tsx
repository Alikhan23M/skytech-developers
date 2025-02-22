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
        
        // ✅ Ensure keywords are properly formatted
        const keywords = Array.isArray(service.keywords) 
            ? service.keywords.join(", ") 
            : "SkyTech Developers, web development, programming, tech solutions, software solutions";

        return {
            title: `SkyTech Developers | ${service.title}`,
            description: service.description || `Explore our expert ${service.title} services.`,
            keywords: keywords,
            
            openGraph: {
                title: service.title,
                description: service.description || "Explore the best services provided by SkyTech Developers.",
                url: `https://skytech-developers.vercel.app/services/${params.service}`,
                images: [{ 
                    url: service.image || "/images/logo.png", // ✅ Use `logo.png` as the default
                    alt: service.title 
                }],
                type: "website",
                siteName: "SkyTech Developers",
            },

            twitter: {
                card: "summary_large_image",
                title: service.title,
                description: service.description || "SkyTech Developers offers high-quality services.",
                images: [service.image || "/images/logo.png"], // ✅ Use default logo if no image is provided
            },
        };
    } catch (error) {
        console.error("❌ Error generating metadata:", error);
        return notFound();
    }
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
