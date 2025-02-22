import { notFound } from "next/navigation";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default async function ProjectPage({ params }: { params: { link: string } }) {
  try {
    //  Get the project file path
    const filePath = path.join(process.cwd(), "public/projects", `${params.link}.json`);

    //  If the file doesn't exist, return 404
    if (!fs.existsSync(filePath)) {
      return notFound();
    }

    //  Read and parse the JSON project file
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const project = JSON.parse(fileContents);

    return (
      <article className="max-w-5xl mx-auto md:py-16 sm:px-6">
        {/* Project Title */}
        <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 dark:text-white">{project.title}</h1>

        {/* Project Metadata */}
        <p className="text-md text-gray-500 dark:text-gray-400 mt-2 text-center">
          Category: <span className="text-blue-600 dark:text-blue-400">{project.category}</span> | {project.date}
        </p>

        {/* Project Main Image */}
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={500}
          className="my-6 rounded-lg shadow-lg mx-auto"
        />

        {/* Project Content */}
        <div className="prose lg:prose-lg dark:prose-dark mt-8">
          {project.content.map((block: any, index: number) => {
            if (block.type === "paragraph") return <p key={index} className="text-lg">{block.text}</p>;

            if (block.type === "heading")
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-800 dark:text-white mt-8">
                  {block.text}
                </h2>
              );

            if (block.type === "image")
              return (
                <Image
                  key={index}
                  src={block.url}
                  alt="Project Image"
                  width={700}
                  height={350}
                  className="my-6 rounded-lg shadow-md mx-auto"
                />
              );

            if (block.type === "list")
              return (
                <ul key={index} className="list-disc list-inside mt-4 text-lg text-gray-900 dark:text-gray-100">
                  {block.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );

            return null;
          })}
        </div>
      </article>
    );
  } catch (error) {
    console.error(" Error fetching project:", error);
    return notFound();
  }
}
