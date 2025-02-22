import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

interface BlogBlock {
  type: "paragraph" | "heading" | "image" | "list" | "link";
  text?: string;
  url?: string;
  items?: string[];
}

interface Blog {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: BlogBlock[];
}

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
    const blog: Blog = JSON.parse(fileContents);

    return (
      <article className="max-w-5xl mx-auto md:py-16 sm:px-6">
        {/* Blog Title */}
        <h1 className="mx-auto text-3xl md:text-5xl text-center font-bold text-gray-900 dark:text-white">
          {blog.title}
        </h1>

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
          className="my-6 rounded-lg shadow-lg mx-auto"
        />

        {/* Blog Content */}
        <div className="prose lg:prose-lg dark:prose-dark mt-8">
          {blog.content.map((block, index) => {
            if (block.type === "paragraph")
              return <p key={index} className="text-lg">{block.text}</p>;

            if (block.type === "heading")
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-800 dark:text-white mt-8">
                  {block.text}
                </h2>
              );

            if (block.type === "image" && block.url)
              return (
                <Image
                  key={index}
                  src={block.url}
                  alt="Blog Image"
                  width={700}
                  height={350}
                  className="my-6 rounded-lg shadow-md mx-auto"
                />
              );

            if (block.type === "list" && block.items)
              return (
                <ul key={index} className="list-disc list-inside text-lg mt-4">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );

            if (block.type === "link" && block.url && block.text)
              return (
                <p key={index} className="text-lg mt-4">
                  <Link href={block.url} className="text-blue-600 dark:text-blue-400 underline">
                    {block.text}
                  </Link>
                </p>
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
