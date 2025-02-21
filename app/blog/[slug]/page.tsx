import { notFound } from "next/navigation";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    // ✅ Get the blog file path
    const filePath = path.join(process.cwd(), "public/blogs", `${params.slug}.json`);

    // ✅ If the file doesn't exist, return 404
    if (!fs.existsSync(filePath)) {
      return notFound();
    }

    // ✅ Read and parse the JSON blog file
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const blog = JSON.parse(fileContents);

    return (
      <article className="max-w-4xl mx-auto py-16 px-6 lg:px-0">
        {/* Blog Title */}
        <h1 className="text-5xl text-center font-bold text-gray-900 dark:text-white">{blog.title}</h1>

        {/* Blog Metadata */}
        <p className="text-md text-gray-500 dark:text-gray-400 mt-2 text-center">
          By <span className="font-semibold">{blog.author}</span> | {blog.date} |{" "}
          <span className="text-blue-600 dark:text-blue-400">{blog.category}</span>
        </p>

        {/* Blog Main Image */}
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={500}
          className="my-6 rounded-lg shadow-lg"
        />

        {/* Blog Content */}
        <div className="prose lg:prose-lg dark:prose-dark mt-8">
          {blog.content.map((block: any, index: number) => {
            if (block.type === "paragraph") return <p key={index} className="text-lg">{block.text}</p>;

            if (block.type === "heading") return (
              <h2 key={index} className="text-2xl font-bold text-gray-800 dark:text-white mt-8">
                {block.text}
              </h2>
            );

            if (block.type === "image")
              return (
                <Image
                  key={index}
                  src={block.url}
                  alt="Blog Image"
                  width={800}
                  height={400}
                  className="my-6 rounded-lg shadow-md"
                />
              );

            return null;
          })}
        </div>
      </article>
    );
  } catch (error) {
    console.error("❌ Error fetching blog post:", error);
    return notFound();
  }
}
