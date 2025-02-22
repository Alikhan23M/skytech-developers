import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Function to load service data
async function getService(serviceSlug: string) {
  try {
    const filePath = path.join(process.cwd(), "public/services", `${serviceSlug}.json`);
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    return null;
  }
}

// Dynamic Service Page Component
export default async function ServicePage({ params }: { params: { service: string } }) {
  const service = await getService(params.service);

  if (!service) {
    return notFound();
  }

  return (
    <section className="py-20 px-8 sm:px-14 md:px-20">
      {/* Service Title and Description */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold">{service.title}</h1>
        <p className="text-xl text-muted-foreground mt-4">{service.description}</p>
        <div className="relative w-full aspect-video mt-8">
          <Image src={service.image} alt={service.title} fill className="object-cover rounded-lg mx-auto" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="mt-4 list-disc list-inside text-lg text-muted-foreground">
          {service.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold">Technologies We Use</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.technologies.map((tech: string, index: number) => (
            <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="mt-4 list-disc list-inside text-lg text-muted-foreground">
          {service.why_choose_us.map((reason: string, index: number) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-12 text-center bg-gray-100 dark:bg-gray-800 py-8 px-4 md:px-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-primary">{service.cta}</h2>
        <Button asChild className="mt-6">
          <a href="/contact">Get Started</a>
        </Button>
      </div>

      {/* Back to Services */}
      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <a href="/services">Back to Services</a>
        </Button>
      </div>
    </section>
  );
}
